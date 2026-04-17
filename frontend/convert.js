import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcPagesDir = path.resolve(__dirname, 'src', 'pages');
if (!fs.existsSync(srcPagesDir)) {
    fs.mkdirSync(srcPagesDir, { recursive: true });
}

const filesToConvert = [
    'aviation.html',
    'businesses.html',
    'energy.html',
    'import-export.html',
    'interior-design.html',
    'logistics.html',
    'manpower.html',
    'recycling.html',
    'software-solutions.html'
];

function camelCase(str) {
    return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

let appRoutes = '';
let appImports = `import Home from './pages/Home';\n`;

filesToConvert.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath)) return;
    
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Convert tags that need self-closing for JSX
    $('img, input, br, hr, area, base, col, embed, link, meta, param, source, track, wbr').each((i, el) => {
        el.name = el.name.toLowerCase(); // keep them lowercase
    });

    // We get banner and detail content
    const banner = $('section.page-banner');
    const detailContent = $('section.detail-content-section');
    const introSection = $('section.business-intro');
    const verticalsSection = $('section.verticals-expand-section');
    const investorsSection = $('section.investors-preview-full');
    
    let contentHtml = '';
    
    if (banner.length) contentHtml += $.html(banner) + '\n';
    if (detailContent.length) contentHtml += $.html(detailContent) + '\n';
    if (introSection.length) contentHtml += $.html(introSection) + '\n';
    if (verticalsSection.length) contentHtml += $.html(verticalsSection) + '\n';
    if (investorsSection.length) contentHtml += $.html(investorsSection) + '\n';

    // Get inline styles from head and body
    let styles = '';
    $('style').each((i, el) => {
        styles += $(el).html() + '\n';
    });
    
    // Ensure all attributes are converted to JSX standard
    contentHtml = contentHtml.replace(/class="/g, 'className="');
    contentHtml = contentHtml.replace(/for="/g, 'htmlFor="');
    contentHtml = contentHtml.replace(/style="([^"]*)"/g, (match, p1) => {
        // Basic style to object conversion can be complex, so we'll just handle basic strings or ignore for now,
        // Wait, the banner has: style="background-image: url('assets/images/hero.png');"
        // Let's replace manually for banners:
        let jsStyle = p1.replace(/([\w-]+)\s*:\s*([^;]+);?/g, (m, prop, val) => {
            const camelProp = prop.replace(/-([a-z])/g, (m, g1) => g1.toUpperCase());
            return `"${camelProp}": "${val.trim().replace(/"/g, '\\"')}"`;
        });
        return `style={{ ${jsStyle.replace(/"/g, "'").replace(/'([^']+)':/g, '$1:')} }}`; // rough conversion
    });

    // Make sure empty tags are self-closed properly in JSX string conversion
    contentHtml = contentHtml.replace(/<img([^>]*)>/g, (m, p1) => {
        if (!m.endsWith('/>')) return `<img${p1} />`;
        return m;
    });
    contentHtml = contentHtml.replace(/<br>/g, '<br />');
    contentHtml = contentHtml.replace(/<hr(.*?)>/g, '<hr$1 />');

    const componentName = camelCase(file.replace('.html', ''));
    
    let reactCode = `import React, { useEffect } from 'react';
import '../index.css';

const ${componentName} = () => {
    useEffect(() => {
        // Smooth scroll reveal logic
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, section').forEach(el => observer.observe(el));
    }, []);

    return (
        <main>
            ${contentHtml}
        </main>
    );
};

export default ${componentName};
`;

    // Write to src/pages
    fs.writeFileSync(path.join(srcPagesDir, `${componentName}.jsx`), reactCode);
    
    // Prepare styles for index.css if any
    if (styles.trim()) {
        fs.appendFileSync(path.join(__dirname, 'src', 'index.css'), `\n/* Styles for ${componentName} */\n${styles}\n`);
    }

    appImports += `import ${componentName} from './pages/${componentName}';\n`;
    appRoutes += `                <Route path="/${file.replace('.html', '')}" element={<${componentName} />} />\n`;
    
    console.log(`Converted ${file} to ${componentName}.jsx`);
});

const appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf-8');
let newAppJsx = appJsx.replace(/import Home from '\.\/pages\/Home';/, appImports);
newAppJsx = newAppJsx.replace(/<Route path="\/" element={<Home \/>} \/>/, `<Route path="/" element={<Home />} />\n${appRoutes}`);

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), newAppJsx);

console.log('Done mapping routes in App.jsx');
