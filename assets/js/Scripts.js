        // Mobile Menu Toggle
        document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");

        // === Offcanvas toggle ===
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });

  


        // === Dropdown toggle for mobile ===
        function handleDropdowns() {
            document.querySelectorAll(".has-dropdown > a, .has-submenu > a").forEach(link => {
            link.removeEventListener("click", toggleDropdown); // prevent duplicate listeners
            link.addEventListener("click", toggleDropdown);
            });
        }

        function toggleDropdown(e) {
            if (window.innerWidth <= 992) {
            e.preventDefault();
            const parent = e.target.closest("li");

            // toggle this menu
            parent.classList.toggle("open");

            // close siblings
            const siblings = [...parent.parentElement.children].filter(li => li !== parent);
            siblings.forEach(sib => sib.classList.remove("open"));
            }
        }

        handleDropdowns();

        // Reset dropdowns when resizing to desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 992) {
            document.querySelectorAll(".has-dropdown, .has-submenu").forEach(item => {
                item.classList.remove("open");
            });
            navLinks.classList.remove("active");
            }
            handleDropdowns();
        });
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
        const speed = 30;

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

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items in the same accordion
                const accordion = this.closest('.accordion');
                accordion.querySelectorAll('.accordion-item').forEach(accItem => {
                    accItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Toggle current FAQ item (open if it wasn't active)
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
         // Initialize all swipers
        const swiperConfigs = [
            '.news-swiper',
            '.social-swiper',
            '.newsletter-swiper',
            '.gallery-swiper',
            '.press-swiper'
        ];

        swiperConfigs.forEach(selector => {
            new Swiper(selector, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: `${selector} .swiper-pagination`,
                    clickable: true,
                },
                navigation: {
                    nextEl: `${selector} .swiper-button-next`,
                    prevEl: `${selector} .swiper-button-prev`,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        });
     
    
    