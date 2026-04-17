const fs = require('fs');
const path = require('path');

const projectDir = 'e:/vedanco website/frontend/src';
const pagesDir = path.join(projectDir, 'pages');
const componentsDir = path.join(projectDir, 'components');

const processFile = (fp) => {
    let content = fs.readFileSync(fp, 'utf-8');
    let hasChanged = false;

    // Remove double imports of Link if any
    if ((content.match(/import { Link } from 'react-router-dom'/g) || []).length > 1) {
        content = content.replace(/import { Link } from 'react-router-dom';\n/g, '');
        content = "import { Link } from 'react-router-dom';\n" + content;
    }

    // Replace opening tags
    content = content.replace(/<a\s+([^>]*?)href="([^"]+)"([^>]*?)>/g, (match, p1, p2, p3) => {
        let to = p2.replace(/\.html$/, ''); 
        if (to === 'index' || to === '/') to = '/';
        
        // If it's a relative internal link
        if (!to.startsWith('http') && !to.startsWith('#') && !to.startsWith('mailto') && !to.startsWith('tel')) {
            if (!to.startsWith('/')) to = '/' + to;
            hasChanged = true;
            if (!content.includes("from 'react-router-dom'")) {
                 content = "import { Link } from 'react-router-dom';\n" + content;
            }
            return `<Link ${p1}to="${to}"${p3}>`;
        }
        return match;
    });

    // Replace matching closing tags ONLY if we found opening Link tags
    // This is hard with regex, so we'll just check if there are <Link tags now
    if (content.includes('<Link')) {
        // We look for </Link> that were previously </a>
        // A simple way is to replace all </a> with </Link> then fix external ones
        content = content.replace(/<\/a>/g, '</Link>');
        
        // Now find external Links that should be <a>
        content = content.replace(/<Link ([^>]*?)to="(http|#|mailto|tel)([^"]*?)"([^>]*?)>([\s\S]*?)<\/Link>/g, (match, p1, p2, p3, p4, p5) => {
            return `<a ${p1}href="${p2}${p3}"${p4}>${p5}</a>`;
        });
    }

    fs.writeFileSync(fp, content);
};

const dirs = [pagesDir, componentsDir];
dirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(f => {
            if (f.endsWith('.jsx')) processFile(path.join(dir, f));
        });
    }
});
console.log('Finished safer global navigation fix.');
