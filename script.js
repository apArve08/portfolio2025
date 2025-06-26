// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// version 2 - expanded 
function toggleTimelineExpansion(element) {
    element.classList.toggle('expanded');
    const btn = element.querySelector('.expand-btn');
    if (element.classList.contains('expanded')) {
        btn.textContent = 'Hide Details' ;
    } else {
        btn.textContent = 'View Details';
    } 
}

//project expanded 

function toggleProjectExpansion(element) {
    element.classList.toggle('expanded');
    const btn = element.querySelector('.project-expand-btn');
    if (element.classList.contains('expanded')) {
        btn.textContent = 'Show Less Details';
    } else{ 
        btn.textContent = 'Show More Details';
    }
    
}
/*
function toggleProjectExpansion(element) {
    // Ensure we only expand THIS card and collapse others
    document.querySelectorAll('.project-card').forEach(card => {
        if (card !== element) {
            card.classList.remove('expanded');
            const btn = card.querySelector('.project-expand-btn');
            if (btn) btn.textContent = 'Show More Details';
        }
    });

    // Toggle current card
    element.classList.toggle('expanded');
    const btn = element.querySelector('.project-expand-btn');
    if (btn) {
        btn.textContent = element.classList.contains('expanded') ? 'Show Less Details' : 'Show More Details';
    }
}
*/
// Form submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    event.target.reset();
}

// Resume download
function downloadResume() {
    //alert('Resume download would start here. Please add your actual resume file.');
    // To implement actual download, replace the alert with:
     const link = document.createElement('a');
     link.href = 'assets/resume.pdf'; // Path to your resume file
     link.download = 'ArveendResume.pdf';
     link.click();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and project cards for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.timeline-item, .project-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Close expanded items when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.timeline-item') && !e.target.closest('.project-card')) {
        // Close all expanded timeline items
        document.querySelectorAll('.timeline-item.expanded').forEach(item => {
        item.classList.remove('expanded');
        item.querySelector('.expand-btn').textContent = 'View Details';
        });

          // Close all expanded project cards
          document.querySelectorAll('.project-card.expanded').forEach(item => {
            item.classList.remove('expanded');
            item.querySelector('.project-expand-btn').textContent = 'Show More Details';
        });
    }
});






// Mobile navigation toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Optional: Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        // Uncomment the line below if you want the typing effect
        // typeWriter(subtitle, originalText, 50);
    }
});

// Optional: Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Uncomment the line below if you want the scroll progress bar
addScrollProgress();