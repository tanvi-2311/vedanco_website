import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import '../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const { data, error } = await supabase
            .from('contacts')
            .insert([
                { 
                    name: formData.name, 
                    email: formData.email, 
                    phone: formData.phone, 
                    subject: formData.subject, 
                    message: formData.message 
                }
            ]);

        if (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        } else {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
        }
    };
    return (
        <main className="contact-page">
            <section className="page-banner contact-hero" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/images/hero_office.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container banner-inner">
                    <div className="banner-content-bottom">
                        <h1 className="reveal">Contact Us</h1>
                        <p className="reveal subtitle">Connect with Vedanco Group for Global Partnerships</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span> &gt; </span> <span>Contact</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-over-banner">
                <section className="contact-info-section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-form-side reveal">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                                <form className="main-contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="name" 
                                            required 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="email id" 
                                                required 
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="tel" 
                                                placeholder="number" 
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select 
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        >
                                            <option>General Inquiry</option>
                                            <option>Business Partnership</option>
                                            <option>Logistics Support</option>
                                            <option>Career Opportunities</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea 
                                            rows="5" 
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn-profile" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                    
                                    {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                                    {status === 'error' && <p className="error-msg">Failed to send message. Please try again.</p>}
                                </form>
                            </div>

                            <div className="contact-details-side reveal">
                                <div className="detail-box">
                                    <div className="detail-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <h4>Corporate Headquarters</h4>
                                            <p>Gandhinagar, Infocity, Gandhinagar <br />Ahmedabad, Gujarat, India - 382007</p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <div>
                                            <h4>Call Us</h4>
                                            <p>+91 06353097642 </p>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <h4>Email Us</h4>
                                            <p>info@vedanco.com <br />support@vedanco.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-connect">
                                    <h4>Follow Our Growth</h4>
                                    <div className="social-icons">
                                        <a href="https://linkedin.com/company/vedanco" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://facebook.com/vedanco" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://instagram.com/vedanco" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
