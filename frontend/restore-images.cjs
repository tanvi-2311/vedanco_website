const fs = require('fs'); 
const map = { 
    'Aviation.jsx': 'airport.png', 
    'Energy.jsx': 'grid_solar.png', 
    'Logistics.jsx': 'pill_logistics.png', 
    'ImportExport.jsx': 'hero.png', 
    'Manpower.jsx': 'join1.png', 
    'InteriorDesign.jsx': 'grid_office.png', 
    'Recycling.jsx': 'sustainability.png', 
    'SoftwareSolutions.jsx': 'join2.png' 
}; 

for (const [f, img] of Object.entries(map)) { 
    const fp = 'e:/vedanco website/frontend/src/pages/' + f; 
    if (fs.existsSync(fp)) { 
        let c = fs.readFileSync(fp, 'utf-8'); 
        c = c.replace(/<section className="page-banner" >/, `<section className="page-banner" style={{ backgroundImage: "url('/assets/images/${img}')" }}>`); 
        fs.writeFileSync(fp, c); 
    } 
}
console.log("Restored all hero images.");
