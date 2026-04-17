const fs = require('fs');
const path = require('path');

const fixCommentsInDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fp = path.join(dir, f);
        const stat = fs.statSync(fp);
        if (stat.isDirectory()) {
            fixCommentsInDir(fp);
        } else if (f.endsWith('.jsx')) {
            let content = fs.readFileSync(fp, 'utf-8');
            // Replace HTML comments <!-- ... --> with JSX comments {/* ... */}
            const newContent = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
            if (content !== newContent) {
                fs.writeFileSync(fp, newContent);
                console.log(`Fixed comments in ${f}`);
            }
        }
    }
};

fixCommentsInDir(path.join(__dirname, 'src'));
console.log("Done fixing HTML comments.");
