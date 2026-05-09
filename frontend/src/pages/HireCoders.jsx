import React, { useState, useEffect } from 'react';
import './HireCoders.css'; // We will create this CSS file
import { supabase } from '../supabaseClient';

// Mock Data for Initial Render
const mockDevelopers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior React Developer',
    verified: true,
    hourlyPrice: 45,
    experience: 6,
    availability: 'Full Time',
    skills: ['ReactJS', 'NodeJS', 'UI/UX'],
    country: 'USA',
    language: 'English',
    description: 'Specialized in building scalable frontend architectures and high-performance React applications.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Full Stack Engineer',
    verified: true,
    hourlyPrice: 60,
    experience: 8,
    availability: 'Part Time',
    skills: ['ReactJS', 'NodeJS', 'Python', 'DevOps'],
    country: 'Canada',
    language: 'English',
    description: 'Expert in cloud infrastructure and building end-to-end web solutions with modern stacks.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    role: 'Mobile App Developer',
    verified: false,
    hourlyPrice: 35,
    experience: 4,
    availability: 'Full Time',
    skills: ['React Native', 'Flutter', 'Java'],
    country: 'India',
    language: 'English',
    description: 'Passionate mobile developer creating seamless cross-platform applications.',
    image: 'https://i.pravatar.cc/150?img=15'
  },
  {
    id: 4,
    name: 'Emma Williams',
    role: 'Backend Developer',
    verified: true,
    hourlyPrice: 50,
    experience: 5,
    availability: 'Full Time',
    skills: ['NodeJS', 'PHP', 'Laravel', 'Python'],
    country: 'UK',
    language: 'English',
    description: 'Focused on designing robust APIs and secure database architectures.',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'WordPress Expert',
    verified: false,
    hourlyPrice: 30,
    experience: 3,
    availability: 'Part Time',
    skills: ['WordPress', 'PHP', 'UI/UX'],
    country: 'Australia',
    language: 'English',
    description: 'Crafting beautiful and performant WordPress websites for modern businesses.',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 6,
    name: 'Maria Garcia',
    role: 'UI/UX Designer',
    verified: true,
    hourlyPrice: 55,
    experience: 7,
    availability: 'Full Time',
    skills: ['UI/UX', 'ReactJS'],
    country: 'Spain',
    language: 'Spanish',
    description: 'Creating user-centric designs and translating them into interactive digital experiences.',
    image: 'https://i.pravatar.cc/150?img=20'
  }
];

const allSkills = ['ReactJS', 'NodeJS', 'PHP', 'Laravel', 'WordPress', 'Python', 'Java', 'Flutter', 'React Native', 'UI/UX', 'DevOps'];

const maskName = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  return parts.map(part => {
    if (part.length <= 2) return part;
    return part[0] + '***' + part[part.length - 1];
  }).join(' ');
};

const HireCoders = () => {
  const [developers, setDevelopers] = useState(mockDevelopers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter States
  const [priceRange, setPriceRange] = useState(100);
  const [expRange, setExpRange] = useState('');
  const [availability, setAvailability] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Cart & Wishlist 
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setCompareList] = useState([]);

  // Hire Modal State
  const [selectedDevForHire, setSelectedDevForHire] = useState(null);
  const [hireDuration, setHireDuration] = useState('1 week');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Client Info States
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  // Filter Logic
  useEffect(() => {
    let filtered = mockDevelopers.filter(dev => {
      // Search Match
      const searchMatch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dev.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dev.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Skills Match
      const skillsMatch = selectedSkills.length === 0 || selectedSkills.every(skill => dev.skills.includes(skill));
      
      // Price Match
      const priceMatch = dev.hourlyPrice <= priceRange;

      // Experience Match
      let expMatch = true;
      if (expRange === '0-2') expMatch = dev.experience <= 2;
      else if (expRange === '3-5') expMatch = dev.experience >= 3 && dev.experience <= 5;
      else if (expRange === '5-10') expMatch = dev.experience >= 5 && dev.experience <= 10;
      else if (expRange === '10+') expMatch = dev.experience > 10;

      // Availability Match
      const availMatch = availability === '' || dev.availability === availability;

      // Verified Match
      const verifiedMatch = !verifiedOnly || dev.verified;

      return searchMatch && skillsMatch && priceMatch && expMatch && availMatch && verifiedMatch;
    });

    // Sorting Logic
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.hourlyPrice - b.hourlyPrice);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.hourlyPrice - a.hourlyPrice);
    } else if (sortBy === 'experience') {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    setDevelopers(filtered);
  }, [searchQuery, selectedSkills, priceRange, expRange, availability, verifiedOnly, sortBy]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id) => {
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(item => item !== id);
      if (prev.length < 3) return [...prev, id]; // Max 3 items to compare
      return prev;
    });
  };

  const handleHireClick = (dev) => {
    setSelectedDevForHire(dev);
    setHireDuration('1 week');
  };

  const submitHireRequest = async (e) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('hiring_inquiries')
        .insert([
          {
            client_name: clientName,
            client_email: clientEmail,
            client_phone: clientPhone,
            developer_name: selectedDevForHire.name,
            developer_role: selectedDevForHire.role,
            duration: hireDuration,
            details: projectDetails
          }
        ]);

      if (error) {
        throw error;
      }

      // Reset form fields
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setProjectDetails('');
      setSelectedDevForHire(null);
      
      // Show success notification
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
    } catch (err) {
      console.error("Error submitting hiring inquiry:", err);
      alert("Failed to submit inquiry: " + err.message);
    }
  };

  return (
    <div className="hire-coders-layout">
      {/* Search and Top Bar */}
      <div className="hc-topbar">
        <div className="hc-search-wrapper">
          <i className="fas fa-search hc-search-icon"></i>
          <input 
            type="text" 
            className="hc-search-input" 
            placeholder="Search by name, role, or technology..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="hc-top-actions">
          <select className="hc-sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Sort by Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="experience">Experience</option>
          </select>
          <button className="hc-action-btn">
            <i className="far fa-heart"></i> Wishlist ({wishlist.length})
          </button>
          <button className="hc-action-btn">
            <i className="fas fa-exchange-alt"></i> Compare ({compareList.length}/3)
          </button>
        </div>
      </div>

      <div className="hc-main-container">
        {/* Left Sidebar Filters */}
        <aside className="hc-sidebar">
          <div className="hc-filter-group">
            <h3>Verified Only</h3>
            <label className="hc-checkbox-label">
              <input 
                type="checkbox" 
                checked={verifiedOnly} 
                onChange={(e) => setVerifiedOnly(e.target.checked)} 
              />
              <span className="hc-checkmark"></span>
              Show Verified Only
            </label>
          </div>

          <div className="hc-filter-group">
            <h3>Availability</h3>
            <select className="hc-filter-select" value={availability} onChange={(e) => setAvailability(e.target.value)}>
              <option value="">Any</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>

          <div className="hc-filter-group">
            <h3>Experience</h3>
            <select className="hc-filter-select" value={expRange} onChange={(e) => setExpRange(e.target.value)}>
              <option value="">Any Experience</option>
              <option value="0-2">0 - 2 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5-10">5 - 10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
          </div>

          <div className="hc-filter-group">
            <h3>Max Hourly Price: ${priceRange}</h3>
            <input 
              type="range" 
              min="10" 
              max="150" 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)} 
              className="hc-range-slider"
            />
          </div>

          <div className="hc-filter-group">
            <h3>Technologies / Skills</h3>
            <div className="hc-skills-list">
              {allSkills.map(skill => (
                <label key={skill} className="hc-checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                  />
                  <span className="hc-checkmark"></span>
                  {skill}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Developer Grid */}
        <main className="hc-content">
          {developers.length === 0 ? (
            <div className="hc-no-results">
              <i className="far fa-frown"></i>
              <h2>No Developers Found</h2>
              <p>Try adjusting your filters to find more talent.</p>
              <button className="hc-clear-btn" onClick={() => {
                setSearchQuery('');
                setSelectedSkills([]);
                setPriceRange(100);
                setExpRange('');
                setAvailability('');
                setVerifiedOnly(false);
              }}>Clear All Filters</button>
            </div>
          ) : (
            <div className="hc-grid">
              {developers.map(dev => (
                <div key={dev.id} className="hc-card">
                  <div className="hc-card-header">
                    <div className="hc-avatar-placeholder"></div>
                    <div className="hc-card-title">
                      <h4>{maskName(dev.name)} {dev.verified && <i className="fas fa-check-circle hc-verified-badge" title="Verified Professional"></i>}</h4>
                      <p>{dev.role}</p>
                    </div>
                  </div>
                  
                  <div className="hc-card-stats">
                    <div className="hc-stat">
                      <span className="hc-stat-val">${dev.hourlyPrice}/hr</span>
                    </div>
                    <div className="hc-stat">
                      <span className="hc-stat-val">{dev.experience} Yrs</span>
                    </div>
                    <div className="hc-stat">
                      <span className="hc-stat-val">{dev.availability}</span>
                    </div>
                  </div>

                  <p className="hc-card-desc">{dev.description}</p>
                  
                  <div className="hc-card-skills">
                    {dev.skills.map(skill => (
                      <span key={skill} className="hc-skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="hc-card-actions-wrapper">
                    <div className="hc-icon-actions-row">
                      <button 
                        className={`hc-icon-btn ${wishlist.includes(dev.id) ? 'active' : ''}`}
                        onClick={() => toggleWishlist(dev.id)}
                        title="Add to Wishlist"
                      >
                        <i className={wishlist.includes(dev.id) ? "fas fa-heart" : "far fa-heart"}></i>
                      </button>
                      <label className="hc-compare-label">
                        <input 
                          type="checkbox" 
                          checked={compareList.includes(dev.id)}
                          onChange={() => toggleCompare(dev.id)}
                        />
                        Add to Compare
                      </label>
                    </div>
                    <button className="hc-cart-btn" onClick={() => handleHireClick(dev)}>
                      <i className="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Hire Modal */}
      {selectedDevForHire && (
        <div className="hc-modal-overlay">
          <div className="hc-modal">
            <div className="hc-modal-header">
              <h2>Hire {selectedDevForHire.name}</h2>
              <button className="hc-close-modal" onClick={() => setSelectedDevForHire(null)}>&times;</button>
            </div>
            <div className="hc-modal-body">
              <div className="hc-dev-summary">
                <img src={selectedDevForHire.image} alt="dev" />
                <div>
                  <h4>{selectedDevForHire.role}</h4>
                  <p>${selectedDevForHire.hourlyPrice} / hour</p>
                </div>
              </div>
              <form onSubmit={submitHireRequest} className="hc-hire-form">
                <div className="hc-form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="hc-form-group">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={clientEmail} 
                    onChange={(e) => setClientEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="hc-form-group">
                  <label>Your Phone (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={clientPhone} 
                    onChange={(e) => setClientPhone(e.target.value)} 
                  />
                </div>
                <div className="hc-form-group">
                  <label>Select Hiring Duration</label>
                  <select value={hireDuration} onChange={(e) => setHireDuration(e.target.value)} required>
                    <option value="1 week">1 Week (Trial)</option>
                    <option value="1 month">1 Month</option>
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
                    <option value="project">Entire Project (Fixed Bid)</option>
                  </select>
                </div>
                <div className="hc-form-group">
                  <label>Project Details / Inquiry</label>
                  <textarea 
                    placeholder="Describe your project requirements briefly..." 
                    rows="4" 
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="hc-form-actions">
                  <button type="button" className="hc-cancel-btn" onClick={() => setSelectedDevForHire(null)}>Cancel</button>
                  <button type="submit" className="hc-submit-btn">Send Hiring Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="hc-toast">
          <i className="fas fa-check-circle"></i> Inquiry sent successfully! The developer will contact you shortly.
        </div>
      )}

    </div>
  );
};

export default HireCoders;
