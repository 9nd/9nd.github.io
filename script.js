// Main JavaScript file for profile website with rain-like shooting stars
document.addEventListener('DOMContentLoaded', function() {
    console.log('Profile website with rain-like shooting stars loaded!');
    
    // Initialize functions
    initProgressBars();
    initDynamicBackground();
    initRainShootingStars();
    initScrollAnimations();
});

// Progress bar animations
function initProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    // Animate progress bars after page load
    setTimeout(() => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 1500);
}

// Dynamic background effects
function initDynamicBackground() {
    const floatingDots = document.querySelector('.floating-dots');
    const floatingLines = document.querySelector('.floating-lines');
    
    // Create additional subtle floating elements
    createFloatingDot(floatingDots, 0);
    createFloatingLine(floatingLines, 0);
}

function createFloatingDot(container, index) {
    const dot = document.createElement('div');
    dot.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(96, 165, 250, 0.4);
        border-radius: 50%;
        left: ${40 + index * 20}%;
        top: ${40 + index * 10}%;
        animation: floatDots ${18 + index * 2}s linear infinite;
        animation-delay: ${-index * 4}s;
        box-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
    `;
    container.appendChild(dot);
}

function createFloatingLine(container, index) {
    const line = document.createElement('div');
    line.style.cssText = `
        position: absolute;
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.2), transparent);
        left: ${60 + index * 15}%;
        animation: floatLines ${14 + index * 2}s ease-in-out infinite;
        animation-delay: ${-index * 3}s;
    `;
    container.appendChild(line);
}

// Rain-like shooting stars animation
function initRainShootingStars() {
    const animatedBg = document.querySelector('.animated-bg');
    
    // Create shooting stars container
    const shootingStarsContainer = document.createElement('div');
    shootingStarsContainer.className = 'shooting-stars';
    animatedBg.appendChild(shootingStarsContainer);
    
    // Create initial shooting stars (10 stars for rain effect)
    for (let i = 0; i < 10; i++) {
        createRainStar(shootingStarsContainer, i);
    }
    
    // Continuously create new rain stars
    setInterval(() => {
        createRandomRainStar(shootingStarsContainer);
    }, 800); // Every 0.8 seconds for rain effect
    
    setInterval(() => {
        createRandomRainStar(shootingStarsContainer);
    }, 1200); // Every 1.2 seconds
    
    setInterval(() => {
        createRandomRainStar(shootingStarsContainer);
    }, 1600); // Every 1.6 seconds
}

function createRainStar(container, index) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Position stars across the top width
    const startLeft = (index * 10) + Math.random() * 8; // Spread across width
    
    star.style.cssText = `
        position: absolute;
        top: -50px;
        left: ${startLeft}%;
        width: 2px;
        height: 2px;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa, 0 0 24px #60a5fa;
        animation: rainFall 5s linear infinite;
        animation-delay: ${index * 0.5}s;
    `;
    
    container.appendChild(star);
}

function createRandomRainStar(container) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random starting position across full width
    const startLeft = Math.random() * 95 + 2; // Between 2% and 97%
    
    // Random size for variety
    const size = Math.random() * 1.5 + 1.5; // Between 1.5px and 3px
    
    star.style.cssText = `
        position: absolute;
        top: -50px;
        left: ${startLeft}%;
        width: ${size}px;
        height: ${size}px;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa, 0 0 24px #60a5fa;
        animation: rainFall 5s linear forwards;
    `;
    
    // Add tail with CSS
    const tail = document.createElement('div');
    tail.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        width: 1px;
        height: 0;
        background: linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.8), #ffffff);
        transform: translateX(-50%);
        animation: rainTail 5s linear forwards;
    `;
    
    star.appendChild(tail);
    container.appendChild(star);
    
    // Remove the star after animation completes
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 5000);
}

// Scroll animations (for mobile scroll)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill items for mobile scroll
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Subtle mouse interaction
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const rotateX = (mouseY - 0.5) * 5; // Very subtle rotation
        const rotateY = (mouseX - 0.5) * 5;
        
        profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});

// Social link interactions
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Profile section hover effect
const profileSection = document.querySelector('.profile-section');
if (profileSection) {
    profileSection.addEventListener('mouseenter', () => {
        profileSection.style.boxShadow = '0 25px 50px rgba(30, 64, 175, 0.4)';
    });
    
    profileSection.addEventListener('mouseleave', () => {
        profileSection.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.3)';
    });
}