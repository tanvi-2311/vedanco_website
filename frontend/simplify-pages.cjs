const fs = require('fs');
const path = require('path');

const pagesDir = 'e:/vedanco website/frontend/src/pages';

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const fp = path.join(pagesDir, f);
  let content = fs.readFileSync(fp, 'utf-8');
  
  // Remove className="reveal" or " reveal"
  content = content.replace(/\s?reveal/g, '');
  
  // also remove the useEffect logic entirely to simplify
  content = content.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/g, '');
  // remove useEffect from import
  content = content.replace(/import React, \{ useEffect \} from 'react';/, "import React from 'react';");
  content = content.replace(/import \{ Link \} from 'react-router-dom';\nimport React, \{ useEffect \} from 'react';/, "import { Link } from 'react-router-dom';\nimport React from 'react';");

  fs.writeFileSync(fp, content);
});
console.log('Simplified all pages: removed reveal animations.');
