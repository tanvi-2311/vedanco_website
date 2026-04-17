document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            header.style.padding = '15px 0';
        }
    });

    // Security Alert - Read Less/More Toggle
    const readLess = document.querySelector('.read-less');
    const securityUl = document.querySelector('.security-content ul');
    
    if (readLess) {
        readLess.addEventListener('click', (e) => {
            e.preventDefault();
            if (securityUl.style.display === 'none') {
                securityUl.style.display = 'block';
                readLess.textContent = 'Read Less';
            } else {
                securityUl.style.display = 'none';
                readLess.textContent = 'Read More';
            }
        });
    }

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Hero Business Slider Logic
    const slider = document.querySelector('.hero-slider');
    const pills = document.querySelectorAll('.slide-pill');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentIndex = 0;

    // Create dots
    pills.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    const heroSection = document.querySelector('.hero');

    function updateSlider() {
        const activePill = pills[currentIndex];
        const newBg = activePill.getAttribute('data-bg');
        
        // Update background
        heroSection.style.backgroundImage = `url('${newBg}')`;
        
        pills.forEach((pill, i) => {
            pill.classList.toggle('active', i === currentIndex);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Horizontal scroll effect
        const pillWidth = pills[0].offsetWidth + 15;
        slider.scrollTo({
            left: currentIndex * pillWidth,
            behavior: 'smooth'
        });
    }

    // Add click listeners to pills
    pills.forEach((pill, i) => {
        pill.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
    });

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % pills.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + pills.length) % pills.length;
        updateSlider();
    }

    // Business Grid Interactivity
    const bizTiles = document.querySelectorAll('.biz-tile');
    const featureImg = document.querySelector('.main-feature-img img');
    const subnavUl = document.querySelector('.feature-subnav');

    if (bizTiles && featureImg && subnavUl) {
        bizTiles.forEach(tile => {
            tile.addEventListener('click', () => {
                const newImg = tile.getAttribute('data-feature-img');
                const subnavData = tile.getAttribute('data-subnav').split(',');
                
                // 1. Update active state
                bizTiles.forEach(t => t.classList.remove('active-gradient'));
                tile.classList.add('active-gradient');
                
                // 2. Update image
                featureImg.style.opacity = '0';
                setTimeout(() => {
                    featureImg.src = newImg;
                    featureImg.style.opacity = '1';
                }, 300);
                
                // 3. Update subnav
                subnavUl.innerHTML = '';
                subnavData.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    if (index === 0) li.classList.add('active');
                    subnavUl.appendChild(li);
                });
            });
        });
    }

    // Mega Menu Navigation Interactivity
    const megaLinks = document.querySelectorAll('a[data-select-biz]');
    
    if (megaLinks) {
        megaLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetBiz = link.getAttribute('data-select-biz');
                
                // Find matching tile
                const targetTile = Array.from(bizTiles).find(tile => {
                    const label = tile.querySelector('.biz-info span') || tile.querySelector('.biz-label');
                    return label && label.textContent.trim() === targetBiz;
                });

                if (targetTile) {
                    // Trigger click on the tile
                    targetTile.click();
                }
            });
        });
    }

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});
