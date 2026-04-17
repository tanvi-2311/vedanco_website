const fs = require('fs');
const path = require('path');

const pagesDir = 'e:/vedanco website/frontend/src/pages';
const files = [
    'Aviation.jsx', 'Energy.jsx', 'ImportExport.jsx', 
    'InteriorDesign.jsx', 'Logistics.jsx', 'Manpower.jsx', 
    'Recycling.jsx', 'SoftwareSolutions.jsx', 'Businesses.jsx'
];

files.forEach(f => {
    const fp = path.join(pagesDir, f);
    if (!fs.existsSync(fp)) return;
    
    let content = fs.readFileSync(fp, 'utf-8');
    
    // Check if already modified
    if (content.includes('content-over-banner')) return;
    
    // We want to insert <div className="content-over-banner"> after the page-banner section
    // and close it before </main>
    
    const bannerEndIndex = content.indexOf('</section>', content.indexOf('page-banner'));
    if (bannerEndIndex === -1) return;
    
    const insertAfterBanner = bannerEndIndex + 10; // move past </section>
    
    const mainEndIndex = content.lastIndexOf('</main>');
    if (mainEndIndex === -1) return;
    
    let newContent = content.substring(0, insertAfterBanner) + 
                     '\n            <div className="content-over-banner">\n' +
                     content.substring(insertAfterBanner, mainEndIndex) +
                     '            </div>\n' +
                     content.substring(mainEndIndex);
                     
    fs.writeFileSync(fp, newContent);
    console.log(`Applied Sticky Reveal to ${f}`);
});
