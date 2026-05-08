import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ITAgency.css';

const ITAgency = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.it-agency-page .reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
    };

    return (
        <div className="it-agency-page">
            {/* Hero */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-bg-2"></div>
                <div className="container hero-content">
                    <div className="hero-tag">🚀 Top Rated Web Development Agency</div>
                    <h1>Building Digital <br /><span className="text-gradient">Experiences That Scale</span></h1>
                    <p>We craft high-performance web applications, enterprise software, and mobile apps that drive growth and transform businesses globally.</p>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Start Your Project <i className="fas fa-arrow-right"></i></a>
                        <a href="#portfolio" className="btn btn-outline">View Our Work</a>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <section className="clients">
                <div className="container">
                    <p>Trusted by innovative companies worldwide</p>
                    <div className="clients-track">
                        <span><i className="fab fa-google"></i> Google</span>
                        <span><i className="fab fa-aws"></i> AWS</span>
                        <span><i className="fab fa-microsoft"></i> Microsoft</span>
                        <span><i className="fab fa-stripe"></i> Stripe</span>
                        <span><i className="fas fa-building"></i> Tata</span>
                        <span><i className="fas fa-globe"></i> GlobalTech</span>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Our Premium Services</h2>
                        <p>Comprehensive technical solutions engineered for scale, performance, and security.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-code"></i></div>
                            <h3>Web Development</h3>
                            <p>Custom, scalable web applications built with modern frameworks like React, Next.js, and Node.js.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
                            <h3>Mobile Apps</h3>
                            <p>Native and cross-platform mobile applications that deliver flawless user experiences on iOS and Android.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-brain"></i></div>
                            <h3>AI & ML Solutions</h3>
                            <p>Intelligent automation, predictive analytics, and custom AI models to give your business an edge.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-link"></i></div>
                            <h3>Blockchain Dev</h3>
                            <p>Secure smart contracts, dApps, and enterprise blockchain solutions tailored to your industry.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-cloud"></i></div>
                            <h3>Cloud Architecture</h3>
                            <p>Scalable cloud infrastructure on AWS and Azure, ensuring high availability and robust security.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
                            <h3>UI/UX Design</h3>
                            <p>User-centric, pixel-perfect interfaces designed to maximize engagement and conversion rates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="tech">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Modern Tech Stack</h2>
                        <p>We leverage industry-leading technologies to build robust digital solutions.</p>
                    </div>
                    <div className="tech-grid reveal">
                        <div className="tech-item"><i className="fab fa-react"></i><p>React</p></div>
                        <div className="tech-item"><i className="fab fa-node-js"></i><p>Node.js</p></div>
                        <div className="tech-item"><i className="fab fa-python"></i><p>Python</p></div>
                        <div className="tech-item"><i className="fab fa-aws"></i><p>AWS</p></div>
                        <div className="tech-item"><i className="fab fa-docker"></i><p>Docker</p></div>
                        <div className="tech-item"><i className="fab fa-figma"></i><p>Figma</p></div>
                        <div className="tech-item"><i className="fab fa-vuejs"></i><p>Vue.js</p></div>
                        <div className="tech-item"><i className="fas fa-database"></i><p>MongoDB</p></div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Featured Projects</h2>
                        <p>Explore some of our recent digital transformations and engineering milestones.</p>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-card reveal">
                            <div className="portfolio-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="FinTech Dashboard" className="portfolio-img" />
                            </div>
                            <div className="portfolio-info">
                                <span className="portfolio-tag">SaaS / Analytics</span>
                                <h3>FinTech Pro Dashboard</h3>
                                <p>A comprehensive financial analytics dashboard built with React and D3.js handling millions of live data points.</p>
                            </div>
                        </div>
                        <div className="portfolio-card reveal">
                            <div className="portfolio-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800" alt="E-commerce App" className="portfolio-img" />
                            </div>
                            <div className="portfolio-info">
                                <span className="portfolio-tag">E-Commerce / Mobile App</span>
                                <h3>Luxe Fashion App</h3>
                                <p>A premium cross-platform mobile shopping experience built with React Native and an AI recommendation engine.</p>
                            </div>
                        </div>
                        <div className="portfolio-card reveal">
                            <div className="portfolio-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" alt="AI Platform" className="portfolio-img" />
                            </div>
                            <div className="portfolio-info">
                                <span className="portfolio-tag">AI / Machine Learning</span>
                                <h3>Nexus AI Copilot</h3>
                                <p>An enterprise AI writing assistant utilizing custom NLP models deployed on scalable AWS infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="process" id="process">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Our Development Process</h2>
                        <p>A battle-tested methodology ensuring on-time delivery and exceptional quality.</p>
                    </div>
                    <div className="process-steps reveal">
                        <div className="step">
                            <div className="step-icon">1</div>
                            <h4>Requirement</h4>
                            <p>Deep dive into your business goals.</p>
                        </div>
                        <div className="step">
                            <div className="step-icon">2</div>
                            <h4>Design</h4>
                            <p>Prototyping and UI/UX architecture.</p>
                        </div>
                        <div className="step">
                            <div className="step-icon">3</div>
                            <h4>Development</h4>
                            <p>Agile engineering and coding.</p>
                        </div>
                        <div className="step">
                            <div className="step-icon">4</div>
                            <h4>Testing</h4>
                            <p>Rigorous QA and performance tests.</p>
                        </div>
                        <div className="step">
                            <div className="step-icon">5</div>
                            <h4>Deployment</h4>
                            <p>Secure launch to production.</p>
                        </div>
                        <div className="step">
                            <div className="step-icon">6</div>
                            <h4>Support</h4>
                            <p>Ongoing maintenance & scaling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Why Us */}
            <section className="stats" id="about">
                <div className="container stats-container">
                    <div className="stats-content reveal">
                        <h2>Why Choose <br /><span className="text-gradient">NexusDev?</span></h2>
                        <p style={{ color: 'var(--text-muted)', margin: '20px 0', fontSize: '1.1rem' }}>We don't just write code; we build digital businesses. Our engineering teams integrate seamlessly with yours to deliver products that dominate markets.</p>
                        <ul style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--accent-purple)', marginRight: '10px' }}></i> Top 1% Engineering Talent</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--accent-purple)', marginRight: '10px' }}></i> Transparent Agile Processes</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--accent-purple)', marginRight: '10px' }}></i> Enterprise-Grade Security</li>
                            <li><i className="fas fa-check-circle" style={{ color: 'var(--accent-purple)', marginRight: '10px' }}></i> Dedicated Support Teams</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary">Partner With Us</a>
                    </div>
                    <div className="stats-grid reveal">
                        <div className="stat-card">
                            <h3>2.2K+</h3>
                            <p>Websites Built</p>
                        </div>
                        <div className="stat-card">
                            <h3>97%</h3>
                            <p>Success Rate</p>
                        </div>
                        <div className="stat-card">
                            <h3>150+</h3>
                            <p>Expert Devs</p>
                        </div>
                        <div className="stat-card">
                            <h3>10+</h3>
                            <p>Years Exp</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Client Success Stories</h2>
                        <p>Hear from the visionaries who partnered with us.</p>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testi-card reveal">
                            <i className="fas fa-quote-right testi-icon"></i>
                            <p className="testi-text">"NexusDev completely transformed our digital presence. Their React expertise helped us double our conversion rates in just 3 months."</p>
                            <div className="testi-author">
                                <div className="author-img">S</div>
                                <div className="author-info">
                                    <h4>Sarah Jenkins</h4>
                                    <p>CTO, TechGrowth Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testi-card reveal">
                            <i className="fas fa-quote-right testi-icon"></i>
                            <p className="testi-text">"The mobile app they delivered is flawless. They understood our complex requirements and executed them perfectly on time."</p>
                            <div className="testi-author">
                                <div className="author-img">M</div>
                                <div className="author-info">
                                    <h4>Michael Chang</h4>
                                    <p>Founder, FinApp</p>
                                </div>
                            </div>
                        </div>
                        <div className="testi-card reveal">
                            <i className="fas fa-quote-right testi-icon"></i>
                            <p className="testi-text">"Outstanding communication and top-tier code quality. Their AI team helped us automate processes we thought were impossible to automate."</p>
                            <div className="testi-author">
                                <div className="author-img">E</div>
                                <div className="author-info">
                                    <h4>Elena Rodriguez</h4>
                                    <p>VP Operations, GlobalLogistics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Let's Build Something Great</h2>
                        <p>Ready to start your project? Drop us a message and our technical experts will get back to you within 24 hours.</p>
                    </div>
                    <div className="contact-box reveal">
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="budget">Project Budget</label>
                                    <input type="text" id="budget" placeholder="$10k - $50k" />
                                </div>
                                <div className="form-group full">
                                    <label htmlFor="message">Project Details</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about your project requirements, timeline, and goals..." required></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i></button>
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
                /* Prevent global styles from breaking layout */
                nav.main-nav { display: none !important; }
                header { display: none !important; }
                footer.main-footer { display: none !important; }
            `}</style>
        </div>
    );
};

export default ITAgency;
