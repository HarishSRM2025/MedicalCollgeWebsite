// Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Hero Slider
        const heroSwiper = new Swiper('.hero-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });

        // Events Slider
        const eventsSwiper = new Swiper('.events-slider', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            spaceBetween: 30,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });


        const counters = document.querySelectorAll('.milestone-stat h3, .stat-box h3');
        const speed = 200;

        const animateCounter = (counter) => {
            const target = counter.innerText;
            const isPercentage = target.includes('%');
            const numericValue = parseInt(target.replace(/[^\d]/g, ''));
            let count = 0;
            
            const updateCount = () => {
                const increment = numericValue / speed;
                if (count < numericValue) {
                    count += increment;
                    if (isPercentage) {
                        counter.innerText = Math.ceil(count) + '%';
                    } else if (target.includes('+')) {
                        counter.innerText = Math.ceil(count).toLocaleString() + '+';
                    } else if (target.includes('B')) {
                        counter.innerText = Math.ceil(count) + 'B';
                    } else {
                        counter.innerText = Math.ceil(count).toLocaleString();
                    }
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });


        // Floating Social Media Toggle
        const socialToggle = document.getElementById('socialToggle');
        const socialLinksContainer = document.getElementById('socialLinks');

        socialToggle.addEventListener('click', () => {
            socialToggle.classList.toggle('active');
            socialLinksContainer.classList.toggle('active');
        });

        // Close social links when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.floating-social-btn')) {
                socialToggle.classList.remove('active');
                socialLinksContainer.classList.remove('active');
            }
        });