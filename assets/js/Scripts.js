 (function() {
      'use strict';

      const menuToggle = document.getElementById('menuToggle');
      const offcanvasMenu = document.getElementById('offcanvasMenu');
      const overlay = document.getElementById('overlay');

      function isMobile() {
        return window.innerWidth <= 992;
      }

      // Toggle mobile menu
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        menuToggle.classList.toggle('active');
        offcanvasMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        document.body.style.overflow = offcanvasMenu.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu when clicking overlay
      overlay.addEventListener('click', function() {
        closeMenu();
      });

      function closeMenu() {
        menuToggle.classList.remove('active');
        offcanvasMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Close all dropdowns
        document.querySelectorAll('.has-dropdown, .has-submenu').forEach(function(item) {
          item.classList.remove('open');
        });
        document.querySelectorAll('.dropdown, .sub-dropdown').forEach(function(menu) {
          menu.classList.remove('show');
        });
      }

      // Handle all dropdown triggers - CLICK/TOUCH ONLY
      document.querySelectorAll('.dropdown-trigger').forEach(function(trigger) {
        // Prevent default link behavior on mobile
        trigger.addEventListener('click', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.closest('.has-dropdown');
            const dropdown = parent.querySelector('.dropdown');
            const isOpen = parent.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.has-dropdown').forEach(function(item) {
              if (item !== parent) {
                item.classList.remove('open');
                const otherDropdown = item.querySelector('.dropdown');
                if (otherDropdown) {
                  otherDropdown.classList.remove('show');
                }
                // Close all submenus inside
                item.querySelectorAll('.has-submenu').forEach(function(sub) {
                  sub.classList.remove('open');
                  const subDropdown = sub.querySelector('.sub-dropdown');
                  if (subDropdown) {
                    subDropdown.classList.remove('show');
                  }
                });
              }
            });
            
            // Toggle current dropdown
            if (isOpen) {
              parent.classList.remove('open');
              dropdown.classList.remove('show');
            } else {
              parent.classList.add('open');
              dropdown.classList.add('show');
            }
          }
        });

        // Also handle touch events
        trigger.addEventListener('touchend', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            this.click();
          }
        });
      });

      // Handle all submenu triggers - CLICK/TOUCH ONLY
      document.querySelectorAll('.submenu-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            
            const parent = this.closest('.has-submenu');
            const submenu = parent.querySelector('.sub-dropdown');
            const isOpen = parent.classList.contains('open');
            
            // Close other submenus in same dropdown
            const parentDropdown = parent.closest('.dropdown');
            if (parentDropdown) {
              parentDropdown.querySelectorAll('.has-submenu').forEach(function(item) {
                if (item !== parent) {
                  item.classList.remove('open');
                  const otherSubmenu = item.querySelector('.sub-dropdown');
                  if (otherSubmenu) {
                    otherSubmenu.classList.remove('show');
                  }
                }
              });
            }
            
            // Toggle current submenu
            if (isOpen) {
              parent.classList.remove('open');
              submenu.classList.remove('show');
            } else {
              parent.classList.add('open');
              submenu.classList.add('show');
            }
          }
        });

        // Also handle touch events
        trigger.addEventListener('touchend', function(e) {
          if (isMobile()) {
            e.preventDefault();
            e.stopPropagation();
            this.click();
          }
        });
      });

      // Handle window resize
      window.addEventListener('resize', function() {
        if (!isMobile()) {
          closeMenu();
        }
      });
    })();
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
     
     const doctorsData = [
            {
                id: 1,
                name: "Dr. Charles Scott",
                specialty: "Neurology",
                gender: "male",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 20,
                degree: "MBBS, DNB - Neurology",
                languages: ["English", "French"],
                location: "Hamarby, TX",
                videos: 252,
                votes: 1252,
                consultationFees: 600,
                nextAvailable: "next available at 10:00 AM - 15 Oct, Tue",
                rating: 4.5
            },
            {
                id: 2,
                name: "Dr. Robert Thomas",
                specialty: "Cardiology",
                gender: "male",
                image: "https://media.istockphoto.com/id/1730222050/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=612x612&w=0&k=20&c=KfZT1DzVMcGvHZZg4NnUhHwvOiI5xPYRe1AWvCwOqE4=",
                experience: 30,
                degree: "MBBS, MD - Cardiology",
                languages: ["English", "Spanish"],
                location: "Oakland, CA",
                videos: 270,
                votes: 1342,
                consultationFees: 450,
                nextAvailable: "next available at 11:00 AM - 10 Oct, Sat",
                rating: 4.2
            },
            {
                id: 3,
                name: "Dr. Margaret Koller",
                specialty: "Psychology",
                gender: "female",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 15,
                degree: "B.S, M.S - Psychology",
                languages: ["English", "Portuguese"],
                location: "Killeen, TX",
                videos: 268,
                votes: 1288,
                consultationFees: 700,
                nextAvailable: "next available at 10:30 AM - 20 Oct, Tue",
                rating: 4.5
            },
            {
                id: 4,
                name: "Dr. Cath Busick",
                specialty: "Pediatrics",
                gender: "female",
                image: "https://media.istockphoto.com/id/1730222050/photo/photo-of-doctor-lady-smile-looking-at-camera-wear-stethoscope-white-uniform-isolate-white.jpg?s=612x612&w=0&k=20&c=KfZT1DzVMcGvHZZg4NnUhHwvOiI5xPYRe1AWvCwOqE4=",
                experience: 12,
                degree: "MBBS, MD - Pediatrics",
                languages: ["English", "Arabic"],
                location: "Schenectady, NY",
                videos: 237,
                votes: 1237,
                consultationFees: 750,
                nextAvailable: "next available at 02:00 PM - 04 Nov, Mon",
                rating: 4.8
            },
            {
                id: 5,
                name: "Dr. Michael Brown",
                specialty: "Psychology",
                gender: "male",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 18,
                degree: "B.S, M.S - Psychology",
                languages: ["English", "German"],
                location: "Minneapolis, MN",
                videos: 228,
                votes: 1228,
                consultationFees: 400,
                nextAvailable: "next available at 04:00 PM - 20 Nov, Wed",
                rating: 4.4
            },
            {
                id: 6,
                name: "Dr. Nicholas Tallo",
                specialty: "Pediatrics",
                gender: "male",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 15,
                degree: "MBBS, MD - Pediatrics",
                languages: ["English", "Korean"],
                location: "Ogden, IA",
                videos: 200,
                votes: 1200,
                consultationFees: 400,
                nextAvailable: "next available at 11:00 AM - 14 Nov, Thu",
                rating: 4.4
            },
            {
                id: 7,
                name: "Dr. Tyrone Patrick",
                specialty: "Cardiology",
                gender: "male",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 22,
                degree: "MBBS, MD - Cardiology",
                languages: ["English", "Russian"],
                location: "Clark Fork, ID",
                videos: 232,
                votes: 1232,
                consultationFees: 400,
                nextAvailable: "next available at 06:00 PM - 28 Nov, Fri",
                rating: 4.4
            },
            {
                id: 8,
                name: "Dr. Priya Sharma",
                specialty: "Orthopedics",
                gender: "female",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 16,
                degree: "MBBS, MS - Orthopedics",
                languages: ["English", "Hindi", "Tamil"],
                location: "Chennai, TN",
                videos: 315,
                votes: 1425,
                consultationFees: 550,
                nextAvailable: "next available at 09:00 AM - 25 Oct, Fri",
                rating: 4.7
            },
            {
                id: 9,
                name: "Dr. Rajesh Kumar",
                specialty: "Dermatology",
                gender: "male",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 14,
                degree: "MBBS, MD - Dermatology",
                languages: ["English", "Telugu"],
                location: "Hyderabad, TG",
                videos: 198,
                votes: 1156,
                consultationFees: 500,
                nextAvailable: "next available at 03:00 PM - 18 Oct, Fri",
                rating: 4.3
            },
            {
                id: 10,
                name: "Dr. Anita Reddy",
                specialty: "Gynecology",
                gender: "female",
                image: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/b1/cc/5a/da/b7/v1_E10/E108FXH8.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=393&s=f76e968a92c0ed678594dff42fd011b513880bfe82f72f0598298fe1b7e3e065",
                experience: 19,
                degree: "MBBS, MD - Gynecology",
                languages: ["English", "Kannada"],
                location: "Bangalore, KA",
                videos: 289,
                votes: 1389,
                consultationFees: 650,
                nextAvailable: "next available at 11:30 AM - 22 Oct, Wed",
                rating: 4.6
            }
        ];

        let filteredDoctors = [...doctorsData];
        let currentPage = 1;
        const doctorsPerPage = 6;

        // Initialize
        function init() {
            populateFilters();
            displayDoctors(filteredDoctors);
            setupEventListeners();
        }

        // Populate filter options
        function populateFilters() {
            // Specialities
            const specialties = [...new Set(doctorsData.map(d => d.specialty))];
            const specialitiesFilter = document.getElementById('specialitiesFilter');
            specialties.forEach((specialty, index) => {
                const count = doctorsData.filter(d => d.specialty === specialty).length;
                specialitiesFilter.innerHTML += `
                    <div class="filter-option">
                        <input type="checkbox" id="spec${index}" value="${specialty}" onchange="applyFilters()">
                        <label for="spec${index}">
                            <span>${specialty}</span>
                            <span class="filter-count">${count}</span>
                        </label>
                    </div>
                `;
            });

            // Languages
            const languages = [...new Set(doctorsData.flatMap(d => d.languages))];
            const languagesFilter = document.getElementById('languagesFilter');
            languages.forEach((lang, index) => {
                languagesFilter.innerHTML += `
                    <div class="filter-option">
                        <input type="checkbox" id="lang${index}" value="${lang}" onchange="applyFilters()">
                        <label for="lang${index}">${lang}</label>
                    </div>
                `;
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            document.getElementById('searchInput').addEventListener('input', applyFilters);
            document.querySelectorAll('input[name="gender"]').forEach(radio => {
                radio.addEventListener('change', applyFilters);
            });
            document.querySelectorAll('#experienceFilter input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
        }

        // Apply all filters
        function applyFilters() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const selectedGender = document.querySelector('input[name="gender"]:checked').value;
            
            // Get selected specialties
            const selectedSpecialties = Array.from(document.querySelectorAll('#specialitiesFilter input:checked'))
                .map(cb => cb.value);
            
            // Get selected languages
            const selectedLanguages = Array.from(document.querySelectorAll('#languagesFilter input:checked'))
                .map(cb => cb.value);
            
            // Get selected experience levels
            const selectedExperience = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"]:checked'))
                .filter(cb => cb.id.startsWith('exp'))
                .map(cb => parseInt(cb.value));

            filteredDoctors = doctorsData.filter(doctor => {
                // Search filter
                const matchesSearch = doctor.name.toLowerCase().includes(searchTerm) ||
                                    doctor.specialty.toLowerCase().includes(searchTerm) ||
                                    doctor.location.toLowerCase().includes(searchTerm);
                
                // Gender filter
                const matchesGender = selectedGender === 'all' || doctor.gender === selectedGender;
                
                // Specialty filter
                const matchesSpecialty = selectedSpecialties.length === 0 || 
                                       selectedSpecialties.includes(doctor.specialty);
                
                // Language filter
                const matchesLanguage = selectedLanguages.length === 0 ||
                                      selectedLanguages.some(lang => doctor.languages.includes(lang));
                
                // Experience filter
                const matchesExperience = selectedExperience.length === 0 ||
                                        selectedExperience.some(exp => doctor.experience >= exp);

                return matchesSearch && matchesGender && matchesSpecialty && 
                       matchesLanguage && matchesExperience;
            });

            currentPage = 1; // Reset to first page
            displayDoctors(filteredDoctors);
        }

        // Search doctors
        function searchDoctors() {
            applyFilters();
        }

        // Sort doctors
        function sortDoctors() {
            const sortBy = document.getElementById('sortSelect').value;

            filteredDoctors.sort((a, b) => {
                switch(sortBy) {
                    case 'name':
                        return a.name.localeCompare(b.name);
                    case 'experience':
                        return b.experience - a.experience;
                    default:
                        return 0;
                }
            });

            displayDoctors(filteredDoctors);
        }

        // Toggle mobile filter
        function toggleMobileFilter() {
            // Not needed anymore - filters always visible on mobile
            return;
        }

        // Toggle filter sections (collapse/expand)
        function toggleFilterSection(header) {
            const filterOptions = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            if (filterOptions.classList.contains('collapsed')) {
                filterOptions.classList.remove('collapsed');
                header.classList.remove('collapsed');
            } else {
                filterOptions.classList.add('collapsed');
                header.classList.add('collapsed');
            }
        }

        // Change view (grid/list/map)
        function changeView(viewType) {
            const viewBtns = document.querySelectorAll('.view-btn');
            const doctorsGrid = document.getElementById('doctorsGrid');
            
            // Update button states
            viewBtns.forEach((btn, index) => {
                btn.classList.remove('active');
                if ((viewType === 'grid' && index === 0) ||
                    (viewType === 'list' && index === 1) ||
                    (viewType === 'map' && index === 2)) {
                    btn.classList.add('active');
                }
            });

            // Update grid layout (only on desktop)
            if (window.innerWidth > 768) {
                if (viewType === 'list') {
                    doctorsGrid.classList.add('list-view');
                } else if (viewType === 'grid') {
                    doctorsGrid.classList.remove('list-view');
                } 
            } else {
                // Always use grid view on mobile
                doctorsGrid.classList.remove('list-view');
            }
        }

        // Clear all filters
        function clearAllFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('genderAll').checked = true;
            document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            filteredDoctors = [...doctorsData];
            currentPage = 1;
            displayDoctors(filteredDoctors);
        }

        document.addEventListener("DOMContentLoaded",clearAllFilters)

        // Display doctors with pagination
        function displayDoctors(doctors) {
            const grid = document.getElementById('doctorsGrid');
            const noResults = document.getElementById('noResults');
            const resultsCount = document.getElementById('resultsCount');
            const paginationWrapper = document.getElementById('paginationWrapper');

            grid.innerHTML = '';

            if (doctors.length === 0) {
                grid.style.display = 'none';
                noResults.style.display = 'block';
                paginationWrapper.style.display = 'none';
                resultsCount.textContent = '0';
                return;
            }

            grid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = doctors.length;

            // Calculate pagination
            const totalPages = Math.ceil(doctors.length / doctorsPerPage);
            const startIndex = (currentPage - 1) * doctorsPerPage;
            const endIndex = startIndex + doctorsPerPage;
            const paginatedDoctors = doctors.slice(startIndex, endIndex);

            // Display doctors for current page
            paginatedDoctors.forEach(doctor => {
                const card = createDoctorCard(doctor);
                grid.appendChild(card);
            });

            // Show/hide pagination
            if (totalPages > 1) {
                paginationWrapper.style.display = 'flex';
                renderPagination(totalPages);
            } else {
                paginationWrapper.style.display = 'none';
            }
        }

        // Render pagination
        function renderPagination(totalPages) {
            const paginationNumbers = document.getElementById('paginationNumbers');
            const prevBtn = document.getElementById('prevPage');
            const nextBtn = document.getElementById('nextPage');

            paginationNumbers.innerHTML = '';

            // Previous button state
            prevBtn.disabled = currentPage === 1;

            // Next button state
            nextBtn.disabled = currentPage === totalPages;

            // Page numbers logic
            let pages = [];
            
            if (totalPages <= 7) {
                // Show all pages if 7 or less
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Show with dots
                if (currentPage <= 3) {
                    pages = [1, 2, 3, 4, '...', totalPages];
                } else if (currentPage >= totalPages - 2) {
                    pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
                } else {
                    pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                }
            }

            // Render page buttons
            pages.forEach(page => {
                if (page === '...') {
                    const dots = document.createElement('span');
                    dots.className = 'pagination-dots';
                    dots.textContent = '...';
                    paginationNumbers.appendChild(dots);
                } else {
                    const btn = document.createElement('button');
                    btn.className = 'pagination-btn';
                    btn.textContent = page;
                    if (page === currentPage) {
                        btn.classList.add('active');
                    }
                    btn.onclick = () => goToPage(page);
                    paginationNumbers.appendChild(btn);
                }
            });
        }

        // Change page
        function changePage(direction) {
            const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
            
            if (direction === 'prev' && currentPage > 1) {
                currentPage--;
            } else if (direction === 'next' && currentPage < totalPages) {
                currentPage++;
            }

            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Go to specific page
        function goToPage(page) {
            currentPage = page;
            displayDoctors(filteredDoctors);
            scrollToTop();
        }

        // Scroll to top smoothly
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Create doctor card
        function createDoctorCard(doctor) {
            const card = document.createElement('div');
            card.className = 'doctor-card';
            card.onclick = () => viewDoctorProfile(doctor.id);

            card.innerHTML = `
                <div class="doctor-image-wrapper">
                    <img src="${doctor.image}" alt="${doctor.name}">
                </div>
                <div class="doctor-info">
                    <span class="specialty-badge">${doctor.specialty}</span>
                    <h3 class="doctor-name">
                        ${doctor.name}
                        <i class="fas fa-check-circle verified-icon"></i>
                    </h3>
                    <p class="doctor-degree">${doctor.degree}</p>
                    
                    <div class="doctor-details">
                        <div class="detail-item">
                            <i class="fas fa-globe"></i>
                            <span>${doctor.languages.join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-play-circle"></i>
                            <span>${doctor.votes}% (${doctor.videos} / ${doctor.videos + 100} Votes)</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${doctor.location} <span class="link">Get Direction</span></span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-briefcase"></i>
                            <span>${doctor.experience} Years of Experience</span>
                        </div>
                    </div>

                    <div class="consultation-info">
                        <button class="view-profile-btn" onclick="event.stopPropagation(); viewDoctorProfile(${doctor.id})">
                            View Profile
                        </button>
                    </div>
                </div>
            `;

            return card;
        }

        // View doctor profile
        function viewDoctorProfile(doctorId) {
            const doctor = doctorsData.find(d => d.id === doctorId);
            alert(`Viewing profile of ${doctor.name}\n\nThis would navigate to the detailed doctor profile page.`);
        }

        // Initialize on load
        init();
    