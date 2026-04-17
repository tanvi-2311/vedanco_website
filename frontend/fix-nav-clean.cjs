const fs = require('fs');
const path = require('path');

const projectDir = 'e:/vedanco website/frontend/src';
const pagesDir = path.join(projectDir, 'pages');
const componentsDir = path.join(projectDir, 'components');

const fixFile = (fp) => {
  let content = fs.readFileSync(fp, 'utf-8');
  
  // 1. First, strip all old Link imports to start clean
  content = content.replace(/import { Link } from 'react-router-dom';\n?/g, '');
  
  // 2. Fix the broken mixed tags like <a ...></Link> or <Link ...></a>
  // We'll use a two-step process: convert everything to a standard <a> first, then move to <Link>
  
  // Convert any </Link> back to </a>
  content = content.replace(/<\/Link>/g, '</a>');
  // Convert any <Link to= back to <a href=
  content = content.replace(/<Link\s+([^>]*?)to="([^"]+)"([^>]*?)>/g, '<a $1href="$2"$3>');
  
  // 3. Now we have standard HTML <a> tags. Let's convert INTRA-SITE links to Link components.
  // Intra-site links: don't start with http, #, mailto, tel
  const linkRegex = /<a\s+([^>]*?)href="([^"]+)"([^>]*?)>([\s\S]*?)<\/a>/g;
  let needsLinkImport = false;
  
  content = content.replace(linkRegex, (match, p1, p2, p3, p4) => {
    let to = p2.replace(/\.html$/, '');
    if (to === 'index') to = '/';
    
    if (!to.startsWith('http') && !to.startsWith('#') && !to.startsWith('mailto') && !to.startsWith('tel')) {
      if (!to.startsWith('/')) to = '/' + to;
      needsLinkImport = true;
      return `<Link ${p1}to="${to}"${p3}>${p4}</Link>`;
    }
    return match; // Keep as <a> for external/hashes
  });

  // 4. Add the import if needed, exactly once
  if (needsLinkImport) {
    if (!content.includes("from 'react-router-dom'")) {
      content = "import { Link } from 'react-router-dom';\n" + content;
    }
  }

  fs.writeFileSync(fp, content);
};

const dirs = [pagesDir, componentsDir];
dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(f => {
      if (f.endsWith('.jsx')) fixFile(path.join(dir, f));
    });
  }
});
console.log('Cleaned and fixed all JSX navigation components.');
