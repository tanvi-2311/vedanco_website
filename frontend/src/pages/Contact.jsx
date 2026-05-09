import React, { useState } from 'react';
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let success = false;

            // Save to database via Express API
            try {
                const apiBase = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? `http://${window.location.hostname}:5005` : '');
                if (apiBase) {
                    const response = await fetch(`${apiBase}/api/contact`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });
                    if (response.ok) success = true;
                }
            } catch (apiErr) {
                console.warn("Express API failed, falling back to direct Supabase insert:", apiErr);
            }

            // Fallback: Direct insert into Supabase from frontend
            if (!success) {
                const { supabase } = await import('../supabaseClient');
                const { error } = await supabase
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
                    throw new Error("Direct Supabase insert failed: " + error.message);
                }
            }
        } catch (error) {
            console.error('Error saving inquiry:', error);
        } finally {
            setIsSubmitting(false);
        }

        const message = `New Inquiry from Website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919510774987?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="contact-page">
            <section className="page-banner contact-hero" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/images/corporate_meeting_real.png?v=1')",
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
                                            name="name"
                                            placeholder="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="email id"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
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
                                            name="message"
                                            rows="5"
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn-profile" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
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
                                            <p>+91 9510774987 </p>
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
                                        <a href="https://linkedin.com/company/vedanco" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="https://facebook.com/vedanco" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://instagram.com/vedanco" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
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
