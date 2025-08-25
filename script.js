document.addEventListener('DOMContentLoaded', function() {
    // Skills tabs functionality
    const skillTabs = document.querySelectorAll('.skills-tab');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-category');
            skillCategories.forEach(cat => cat.classList.remove('active'));
            document.getElementById(`${category}-skills`).classList.add('active');
        });
    });
    
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-left, .animate-right, .animate-up, .internship-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'var(--nav-gradient)';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'var(--nav-gradient)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Navbar hover effect
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#fff';
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'rgba(255, 255, 255, 0.9)';
            }
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const subject = this.querySelector('input[name="_subject"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Send form data using fetch (FormSubmit alternative)
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this)
        }).then(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }).catch(() => {
            alert('Something went wrong. Please try again later.');
        });
    });
    
    // Project modal
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const project = button.getAttribute('data-project');
            const iframe = document.getElementById('projectFrame');
            
            if (project === 'fakePlate') {
                iframe.src = 'https://www.youtube.com/embed/YwhV2nXJqhQ';
            }
        });
        
        projectModal.addEventListener('hidden.bs.modal', function() {
            const iframe = document.getElementById('projectFrame');
            iframe.src = '';
        });
    }
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
