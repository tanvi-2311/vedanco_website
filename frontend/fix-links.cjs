const fs = require('fs');
const path = require('path');
const dir = 'e:/vedanco website/frontend/src/pages';
const componentsDir = 'e:/vedanco website/frontend/src/components';

// Fix pages
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
    const fp = path.join(dir, f);
    let content = fs.readFileSync(fp, 'utf-8');
    
    content = content.replace(/href="index\.html"/g, 'href="/"');
    content = content.replace(/href="businesses\.html"/g, 'href="/businesses"');
    content = content.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    
    fs.writeFileSync(fp, content);
});

// Fix components like Header
const compFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
compFiles.forEach(f => {
    const fp = path.join(componentsDir, f);
    let content = fs.readFileSync(fp, 'utf-8');
    
    content = content.replace(/href="index\.html"/g, 'href="/"');
    content = content.replace(/href="businesses\.html"/g, 'href="/businesses"');
    content = content.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    
    fs.writeFileSync(fp, content);
});

console.log('Fixed all .html links globally!');
