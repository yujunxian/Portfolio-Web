// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show or hide project cards
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                markInvalid(name, 'Please enter your name');
                isValid = false;
            } else {
                markValid(name);
            }
            
            if (!email.value.trim()) {
                markInvalid(email, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                markInvalid(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                markValid(email);
            }
            
            if (!subject.value.trim()) {
                markInvalid(subject, 'Please enter a subject');
                isValid = false;
            } else {
                markValid(subject);
            }
            
            if (!message.value.trim()) {
                markInvalid(message, 'Please enter your message');
                isValid = false;
            } else {
                markValid(message);
            }
            
            // If form is valid, simulate submission
            if (isValid) {
                // In a real application, this would send an AJAX request to the backend
                // Simulate successful submission
                contactForm.innerHTML = '<div class="success-message"><h3>Message Sent!</h3><p>Thank you for contacting me. I will get back to you as soon as possible.</p></div>';
            }
        });
        
        // Email validation function
        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
        
        // Mark invalid input function
        function markInvalid(element, message) {
            element.classList.add('invalid');
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = message;
            
            // Remove existing error message if present
            const existingError = element.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            element.parentElement.appendChild(errorMessage);
        }
        
        // Mark valid input function
        function markValid(element) {
            element.classList.remove('invalid');
            const existingError = element.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }
        
        // Remove error state on input focus
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.remove('invalid');
                const existingError = this.parentElement.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
            });
        });
    }

    // Add scroll animations
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .interest-item');
    
    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    // Responsive navigation menu
    // Only add menu toggle if it doesn't already exist
    if (header && !document.querySelector('.menu-toggle')) {
        const nav = document.querySelector('nav');
        
        // Create menu button element
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        header.querySelector('.container').appendChild(menuToggle);
        
        // Add menu toggle event
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when navigation links are clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
    
    // Skills bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(skill => {
            const progressBar = skill.querySelector('.progress');
            const targetWidth = progressBar.style.width;
            
            // Reset width for animation
            progressBar.style.width = '0%';
            
            // Trigger animation
            setTimeout(() => {
                progressBar.style.width = targetWidth;
            }, 200);
        });
    };
    
    // If skill bars exist, add scroll listener
    if (skillBars.length > 0) {
        // Initial animation
        setTimeout(animateSkillBars, 500);
        
        // Animation on scroll
        const skillSection = document.querySelector('.skills-bars');
        if (skillSection) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateSkillBars();
                }
            }, {threshold: 0.5});
            
            observer.observe(skillSection);
        }
    }
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 