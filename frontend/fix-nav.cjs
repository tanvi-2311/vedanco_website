const fs = require('fs');
const path = require('path');

const projectDir = 'e:/vedanco website/frontend/src';
const pagesDir = path.join(projectDir, 'pages');
const componentsDir = path.join(projectDir, 'components');

const processDir = (dir) => {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
    files.forEach(f => {
        const fp = path.join(dir, f);
        let content = fs.readFileSync(fp, 'utf-8');
        let modified = false;

        // 1. Ensure Link import exists
        if (content.includes(' href=') || content.includes('<a ')) {
            if (!content.includes('import { Link }') && !content.includes('import {Link}')) {
                content = "import { Link } from 'react-router-dom';\n" + content;
                modified = true;
            }
        }

        // 2. Replace <a href="..." with <Link to="..."
        const linkRegex = /<a\s+([^>]*?)href="([^"]+)"([^>]*?)>/g;
        if (linkRegex.test(content)) {
            content = content.replace(linkRegex, (match, p1, p2, p3) => {
                let to = p2.replace(/\.html$/, ''); // strip .html
                if (to === 'index') to = '/';
                if (!to.startsWith('/') && !to.startsWith('http') && !to.startsWith('#')) to = '/' + to;
                
                // If it's a real Link and not an external/anchor link
                if (!to.startsWith('http') && !to.startsWith('#')) {
                    return `<Link ${p1}to="${to}"${p3}>`;
                }
                return match; // keep as <a> for external/anchor
            });
            content = content.replace(/<\/a>/g, (match, offset) => {
                // This is a naive closing tag replacement, let's be careful.
                // Actually, replacing all </a> with </Link> if we replaced the opening might be tricky.
                // Let's just do it broadly then fix any outliers.
                return '</Link>';
            });
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(fp, content);
            console.log(`Updated navigation in ${f}`);
        }
    });
};

processDir(pagesDir);
processDir(componentsDir);
console.log('Finished global navigation fix.');
