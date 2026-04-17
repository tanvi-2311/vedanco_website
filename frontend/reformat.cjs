const fs = require('fs');
const path = require('path');
const dir = 'e:/vedanco website/frontend/src/pages';

const files = [
    { name: 'Aviation.jsx', img: 'airport.png' },
    { name: 'Energy.jsx', img: 'grid_solar.png' },
    { name: 'Logistics.jsx', img: 'pill_logistics.png' },
    { name: 'ImportExport.jsx', img: 'hero.png' },
    { name: 'Manpower.jsx', img: 'join1.png' },
    { name: 'InteriorDesign.jsx', img: 'grid_office.png' },
    { name: 'Recycling.jsx', img: 'sustainability.png' },
    { name: 'SoftwareSolutions.jsx', img: 'join2.png' }
];

const allImgs = files.map(f => f.img);

files.forEach((fobj, idx) => {
    const fp = path.join(dir, fobj.name);
    if (!fs.existsSync(fp)) return;
    
    let content = fs.readFileSync(fp, 'utf-8');
    
    // We already have the page-banner. We just replace detail-content-section
    // Let's use regex to extract h2, summary-p, and all highlight-items
    const titleMatch = content.match(/<h2[^>]*>(.*?)<\/h2>/);
    const summaryMatch = content.match(/<p className="summary-p"[^>]*>(.*?)<\/p>/);
    
    let items = [];
    
    // Extract highlight items
    const regex = /<div className="highlight-item">[\s\S]*?<h4[^>]*>(.*?)<\/h4>[\s\S]*?<p[^>]*>(.*?)<\/p>[\s\S]*?<\/div>/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        items.push({ title: match[1], desc: match[2] });
    }
    
    // Also extract detailed-description if any
    const descRegex = /<div className="detailed-description">[\s\S]*?<h3[^>]*>(.*?)<\/h3>[\s\S]*?<p[^>]*>(.*?)<\/p>[\s\S]*?<\/div>/;
    const descMatch = descRegex.exec(content);
    if (descMatch) {
         items.push({ title: descMatch[1], desc: descMatch[2] });
    }
    
    // Fallback if empty
    if (items.length === 0) {
        items.push({ title: "Operations", desc: "Comprehensive solutions tailored to market demands."});
    }
    
    let cardsHtml = '';
    items.forEach((item, i) => {
        // assign a deterministic mock image for the card
        let cardImg = allImgs[(idx + i + 1) % allImgs.length]; 
        cardsHtml += `
                <a href="#" className="v-card-link reveal">
                    <div className="v-card-main-simple">
                        <div className="v-img-box">
                            <img src="/assets/images/${cardImg}" alt="${item.title.replace(/<[^>]*>?/gm, '')}" />
                        </div>
                        <div className="v-info-box">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                            <span className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </a>`;
    });

    const newSection = `
    <section className="business-intro reveal">
        <div className="container">
            <div className="intro-content-left">
                <p className="intro-p">
                    ${summaryMatch ? summaryMatch[1] : 'Delivering excellence and sustainable growth.'}
                </p>
                <a href="#" className="read-more-btn">Read More</a>
            </div>
        </div>
    </section>

    <section className="verticals-expand-section">
        <div className="container">
            <h2 className="section-title-alt reveal">${titleMatch ? titleMatch[1] : 'Business Verticals'}</h2>
            <div className="verticals-link-grid">
                ${cardsHtml}
            </div>
        </div>
    </section>
`;

    // replace between </section> (end of banner) and </main>
    const newContent = content.replace(/(<\/section>\s*)<section className="detail-content-section"[\s\S]*?<\/section>/, `$1` + newSection);
    
    // ensure links in page-banner breadcrumb are Link tags? No, user wants visual finish.

    fs.writeFileSync(fp, newContent);
    console.log(`Reformatted ${fobj.name}`);
});
