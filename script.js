// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add mobile menu functionality (if needed)
    const menuButton = document.querySelector('[aria-label="Menu"]');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-open');
        });
    }

    // Add counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (number) {
            let current = 0;
            const increment = number / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    element.textContent = text;
                    clearInterval(timer);
                } else {
                    const prefix = text.includes('+') ? '+' : '';
                    const suffix = text.includes('mil') ? 'mil' : 
                                  text.includes('Nota') ? '' : '';
                    element.textContent = prefix + Math.floor(current) + suffix;
                }
            }, 20);
        }
    };

    // Observe stat items for counter animation
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h3');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    animateCounter(statNumber);
                }
            }
        });
    }, { threshold: 0.5 });

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statObserver.observe(item);
    });
});

