// تحريك رسالة الترحيب عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome-message');
    welcome.style.opacity = 0;
    setTimeout(() => {
        welcome.style.transition = 'opacity 1s, transform 1s';
        welcome.style.opacity = 1;
        welcome.style.transform = 'translateY(0)';
    }, 300);
});

// تأثير Fade-in للأقسام عند التمرير
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Smooth scroll للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
