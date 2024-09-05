document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.scroll-section');

        document.addEventListener('scroll', function() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight / 1.2;

                if (sectionTop < triggerPoint) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        });
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#007bff';
            card.style.color = 'white';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = 'white';
            card.style.color = 'black';
        });
    });


})