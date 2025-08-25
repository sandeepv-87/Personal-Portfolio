// Skills tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillTabs = document.querySelectorAll('.skills-tab');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            skillTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get category to show
            const category = tab.getAttribute('data-category');
            
            // Hide all categories
            skillCategories.forEach(cat => cat.classList.remove('active'));
            
            // Show selected category
            document.getElementById(`${category}-skills`).classList.add('active');
        });
    });
    
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-left, .animate-right, .animate-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
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
        
        // Simple form validation
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const subject = this.querySelector('input[name="_subject"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // If using FormSubmit, the form will automatically submit
        // You can add additional processing here if needed
        
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
    
    // Project modal
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const project = button.getAttribute('data-project');
            const iframe = document.getElementById('projectFrame');
            
            // Set iframe source based on project
            if (project === 'fakePlate') {
                iframe.src = 'https://www.youtube.com/embed/YwhV2nXJqhQ';
            }
        });
        
        // Close modal when hidden
        projectModal.addEventListener('hidden.bs.modal', function() {
            const iframe = document.getElementById('projectFrame');
            iframe.src = '';
        });
    }
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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