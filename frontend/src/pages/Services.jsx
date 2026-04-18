import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Services = () => {
    const categories = [
        "All", "Trading", "Logistics", "Digital", "Sustainability", "Aviation", "Energy", "Infrastructure"
    ];

    const servicesData = [
        {
            id: 1,
            category: "Trading",
            title: "Import–Export",
            icon: "fa-ship",
            items: ["Coal Trading", "Gypsum Supply", "Scrap Materials", "Plastic Waste", "Textiles", "Agro Commodities"],
            path: "/import-export",
            desc: "Global trade operations spanning multi-industry commodities and raw materials."
        },
        {
            id: 2,
            category: "Logistics",
            title: "Logistics & Supply Chain",
            icon: "fa-truck",
            items: ["Transport Network", "Freight Forwarding", "Delivery & Distribution", "Supply Chain Management", "Real-Time Tracking"],
            path: "/logistics",
            desc: "Integrated logistics solutions optimizing the global flow of goods."
        },
        {
            id: 3,
            category: "Digital",
            title: "Software Solutions",
            icon: "fa-code",
            items: ["Custom Software Development", "CRM / ERP Systems", "Logistics Management System", "AI Automation Tools", "Web & Mobile Development"],
            path: "/software-solutions",
            desc: "Cutting-edge digital transformation and enterprise software engineering."
        },
        {
            id: 4,
            category: "Trading",
            title: "Manpower & Recruitment",
            icon: "fa-users",
            items: ["Skilled Hiring", "Unskilled Hiring", "Domestic & International Recruitment", "Outsourcing Services"],
            path: "/manpower",
            desc: "Strategic talent acquisition and HR outsourcing for global scale."
        },
        {
            id: 5,
            category: "Sustainability",
            title: "Recycling & Sustainability",
            icon: "fa-leaf",
            items: ["Plastic Waste Processing", "Granule Production", "Waste Management Solutions"],
            path: "/recycling",
            desc: "Commitment to circular economy and sustainable industrial practices."
        },
        {
            id: 6,
            category: "Aviation",
            title: "Aviation Services",
            icon: "fa-plane",
            items: ["Air Cargo Brokerage", "Charter Logistics", "Express Cargo Handling"],
            path: "/aviation",
            desc: "High-tier airport terminal management and specialized cargo services."
        },
        {
            id: 7,
            category: "Energy",
            title: "Energy & Carbon Credit",
            icon: "fa-bolt",
            items: ["Solar Projects", "Renewable Energy", "Carbon Credit Generation", "Carbon Trading"],
            path: "/energy",
            desc: "Empowering the future with clean energy and carbon reduction solutions."
        },
        {
            id: 8,
            category: "Infrastructure",
            title: "Warehouse & Infrastructure",
            icon: "fa-warehouse",
            items: ["Storage & Inventory", "Industrial Land Development", "Leasing & Asset Management"],
            path: "/logistics",
            desc: "Developing world-class industrial hubs and logistics infrastructure."
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredServices, setFilteredServices] = useState(servicesData);

    useEffect(() => {
        let filtered = servicesData.filter(s => 
            (activeFilter === 'All' || s.category === activeFilter) &&
            (s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
             s.items.some(i => i.toLowerCase().includes(searchTerm.toLowerCase())))
        );
        setFilteredServices(filtered);
    }, [searchTerm, activeFilter]);

    return (
        <main className="services-page">
            <section className="page-banner services-hero" style={{ 
                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/images/grid_office.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container banner-inner">
                    <div className="banner-content-bottom">
                        <h1 className="reveal">Our Services</h1>
                        <p className="reveal subtitle">Comprehensive Industry Solutions for a Global Economy</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span> &gt; </span> <span>Services</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-over-banner">
                <section className="filter-section reveal">
                    <div className="container">
                        <div className="filter-controls">
                            <div className="search-box">
                                <i className="fas fa-search"></i>
                                <input 
                                    type="text" 
                                    placeholder="Search for a service..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="category-filters">
                                {categories.map(cat => (
                                    <button 
                                        key={cat} 
                                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                        onClick={() => setActiveFilter(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-grid-section">
                    <div className="container">
                        <div className="services-list-grid reveal-stagger">
                            {filteredServices.length > 0 ? (
                                filteredServices.map(service => (
                                    <div key={service.id} className="service-main-card">
                                        <div className="service-card-header">
                                            <div className="service-icon">
                                                <i className={`fas ${service.icon}`}></i>
                                            </div>
                                            <span className="card-cat">{service.category}</span>
                                        </div>
                                        <div className="service-card-body">
                                            <h3>{service.title}</h3>
                                            <p>{service.desc}</p>
                                            <div className="sub-items">
                                                <ul>
                                                    {service.items.slice(0, 4).map((item, idx) => (
                                                        <li key={idx}><i className="fas fa-check"></i> {item}</li>
                                                    ))}
                                                    {service.items.length > 4 && <li>+ {service.items.length - 4} More Services</li>}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-card-footer">
                                            <Link to={service.path} className="btn-explore">View Details</Link>
                                            <a href="#" className="btn-quote">Get Quote</a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-results">
                                    <p>No services found matching your criteria.</p>
                                    <button onClick={() => {setSearchTerm(''); setActiveFilter('All');}} className="btn-clear">Clear Filters</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="cta-full reveal">
                    <div className="container">
                        <div className="cta-content">
                            <h3>Need a Tailored Industrial Solution?</h3>
                            <p>Our experts are ready to design a custom strategy for your business expansion.</p>
                            <Link to="/contact" className="btn-know-more">Connect With Us</Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Services;
