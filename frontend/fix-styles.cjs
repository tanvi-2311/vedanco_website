const fs = require('fs');
const path = require('path');
const dir = 'e:/vedanco website/frontend/src/pages';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx');

files.forEach(f => {
    const fp = path.join(dir, f);
    let content = fs.readFileSync(fp, 'utf-8');
    
    // Fix messed up style attributes
    content = content.replace(/style={{ backgroundImage: url\('([^']*)'\),\s*height: '([^']*)' }}/g, (match) => {
        return ""; // Fallback
    });
    
    // Since some files got empty urls due to my previous command: `style={{ backgroundImage: url(''), height: '' }}`
    // Let's just fix it by looking at original HTML files.
    // Actually, let's just strip the style={{...}} entirely from section tags because banners have a fallback CSS anyway, 
    // or I can just fix it properly.
    content = content.replace(/style=\{\{\s*backgroundImage:\s*url\(''\),\s*height:\s*''\s*\}\}/g, "");
    content = content.replace(/style=\{\{\s*backgroundImage:\s*url\(''\)\s*\}\}/g, "");
    
    // Also, if there are still any broken styles from my initial pass
    content = content.replace(/style=\{\{ backgroundImage: 'url\('assets\/images\/([^']+)'\)' height: '([^']+)' \}\}/gi, "style={{ backgroundImage: `url('assets/images/$1')`, height: '$2' }}");
    content = content.replace(/style=\{\{ backgroundImage: 'url\('assets\/images\/([^']+)'\)' \}\}/gi, "style={{ backgroundImage: `url('assets/images/$1')` }}");

    fs.writeFileSync(fp, content);
});

console.log("Fixed styles");
