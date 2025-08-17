// Smooth scroll, section fade-in, and interactive nav underline

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in sections on scroll
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('main section').forEach(section => {
    section.classList.add('pre-fade');
    observer.observe(section);
});

// Interactive nav underline
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('nav-underline');
    });
    link.addEventListener('mouseleave', function() {
        this.classList.remove('nav-underline');
    });
});

// Interactive project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('card-pop');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('card-pop');
    });
    // Tilt effect
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        card.style.transform = `rotateY(${x/18}deg) rotateX(${-y/18}deg) scale(1.035)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Contact form button effect
const contactBtn = document.querySelector('.contact-form button');
if (contactBtn) {
    contactBtn.addEventListener('mousedown', () => {
        contactBtn.style.transform = 'scale(0.96)';
    });
    contactBtn.addEventListener('mouseup', () => {
        contactBtn.style.transform = 'scale(1)';
    });
    contactBtn.addEventListener('mouseleave', () => {
        contactBtn.style.transform = 'scale(1)';
    });
}

// Animate profile photo on hover (pulse)
const profilePhoto = document.querySelector('.profile-photo');
if (profilePhoto) {
    profilePhoto.addEventListener('mouseenter', () => {
        profilePhoto.animate([
            { boxShadow: '0 0 0 4px var(--accent), 0 8px 32px rgba(10,132,255,0.10)' },
            { boxShadow: '0 0 0 10px var(--accent), 0 8px 32px rgba(10,132,255,0.18)' },
            { boxShadow: '0 0 0 4px var(--accent), 0 8px 32px rgba(10,132,255,0.10)' }
        ], { duration: 600, iterations: 1 });
    });
}

// Animate section headings on scroll
document.querySelectorAll('section h2').forEach(h2 => {
    h2.classList.add('pre-fade');
    observer.observe(h2);
});

// Animated underline for nav links
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.boxShadow = `0 4px 0 0 var(--accent) inset`;
        this.style.transition = 'box-shadow 0.22s cubic-bezier(.4,0,.2,1)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});
