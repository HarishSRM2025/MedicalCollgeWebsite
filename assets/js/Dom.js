    const header=`<div class="nav-container">
    <div class="nav-wrapper">
      <div class="logo">
        <img src="./assets/images/Logo.webp" alt="SRM">
      </div>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="offcanvas-menu" id="offcanvasMenu">
      <div class="Offcanvas-logo logo">
        <img src="./assets/images/Logo.webp" alt="SRM">
      </div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li class="has-dropdown" data-dropdown="about">
            <a href="./aboutus.html">About Us <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="./aboutus.html#vision">Vision & Mission</a></li>
              <li><a href="./aboutus.html#leadership">Leadership</a></li>
              <li class="has-submenu" data-submenu="milestones">
                <a href="./aboutus.html#milestones">Milestones & Accreditations <span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="#">NAAC</a></li>
                  <li><a href="#">IQAC</a></li>
                  <li><a href="#">NABH Updates</a></li>
                  <li><a href="#">Environment & Social Initiatives</a></li>
                  <li><a href="#">Green Campus</a></li>
                  <li><a href="#">CSR & Sustainability</a></li>
                </ul>
              </li>
              <li><a href="./aboutus.html#compliance">Statutory Compliance</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="academics">
            <a href="./academics.html">Academics <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li class="has-submenu" data-submenu="courses">
                <a href="./course.html">Courses<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./course.html#ug-courses">Under Graduate</a></li>
                  <li><a href="./course.html#pg-courses">Post Graduate</a></li>
                </ul>
              </li>
              <li><a href="./programsandcourse.html">Programs & Course Outcomes</a></li>
              <li><a href="./pre-clinical.html">Pre Clinical</a></li>
              <li><a href="./para-clinical.html">Para Clinical</a></li>
              <li><a href="./library.html">Library</a></li>
              <li><a href="./academics.html#specialties">Medical Education Unit</a></li>
              <li><a href="./academics.html#examcell">Examination Cell</a></li>
            </ul>
          </li>
          <li class="has-dropdown" data-dropdown="hospital">
            <a href="./hospital.html">Hospital Services <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li class="has-submenu" data-submenu="courses">
                <a href="#">Departments<span class="arrow submenu-trigger">&#9654;</span></a>
                <ul class="sub-dropdown">
                  <li><a href="./boardspecialties.html">Medicine & Broad Specialties</a></li>
                  <li><a href="./surgeryspecialties.html">Surgery & Broad Specialties</a></li>
                  <li><a href="./MedicalSuperSpecialties.html">Medicine & Super Specialties</a></li>
                  <li><a href="./SurgerySuperSpecialties.html">Surgery & Super Specialties</a></li>
                </ul>
              </li>
              <li><a href="./doctors.html">Doctors</a></li>
              <li><a href="./bloodcamp.html">Blood Bank</a></li>
              <li><a href="./hospital.html#services">Supporting Services</a></li>
              <li><a href="./hospital.html#camps">Camps</a></li>
            </ul>
          </li>
          <li><a href="research.html">Research & Innovation</a></li>
          <li class="has-dropdown" data-dropdown="media">
            <a href="./media.html">Media & OutReach <span class="arrow dropdown-trigger">&#9654;</span></a>
            <ul class="dropdown">
              <li><a href="./media.html#news">News & Events</a></li>
              <li><a href="./media.html#social">Social Media Feed</a></li>
              <li><a href="./media.html#newsletter">Newsletter</a></li>
              <li><a href="./media.html#gallery">Gallery</a></li>
              <li><a href="./media.html#press">Press Releases</a></li>
              <li><a href="./videogallery.html">Video Gallery</a></li>
            </ul>
          </li>
          <li><a href="#" class="nmc-nav">NMC</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="overlay" id="overlay"></div>`;

    const floatBtn=`<button class="social-toggle-btn" id="socialToggle">
            <i class="fas fa-plus"></i>
        </button>
        <div class="social-links-container" id="socialLinks">
            <a href="https://www.facebook.com/yourpage" target="_blank" class="social-link facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" class="social-link instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/yourchannel" target="_blank" class="social-link youtube" title="YouTube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" class="social-link linkedin" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" class="social-link whatsapp" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>`;

    const footer = `<div class="footer-container">
            <div class="footer-about">
                 <div class="logo footer-logo">
                    <img src="./assets/images/Logo.webp" alt="SRM Logo">
                </div>
                <p>Trichy SRM Medical College is dedicated to providing excellence in medical education and healthcare services. We are committed to shaping the future of healthcare.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./aboutus.html">About Us</a></li>
                    <li><a href="./pre-clinical.html">Departments</a></li>
                    <li><a href="./research.html">Research</a></li>
                    <li><a href="./media.html">News & Events</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Contact Us</h4>
                <ul class="footer-links">
                    <li><i class="fas fa-map-marker-alt"></i> Trichy, Tamil Nadu</li>
                    <li><i class="fas fa-phone"></i> +91 431 2345678</li>
                    <li><i class="fas fa-envelope"></i> info@srmmedical.edu.in</li>
                    <li><i class="fas fa-clock"></i> Mon - Sat: 9AM - 6PM</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Newsletter</h4>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 1rem;">Subscribe to get latest updates and news</p>
                <div style="display: flex; gap: 0.5rem;">
                    <input type="email" placeholder="Your email" style="padding: 0.8rem; border-radius: 25px; border: none; flex: 1;">
                    <button class="btn-primary" style="padding: 0.8rem 1.5rem;">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Trichy SRM Medical College - Trichy. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>`;
    (function() {
        'use strict';
        
        // Check if device is touch-enabled - disable cursor on mobile
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.body.style.cursor = 'auto';
            return;
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCursor);
        } else {
            initCursor();
        }
        
        function initCursor() {
            // Create cursor elements
            const cursorDot = document.createElement('div');
            const cursorOutline = document.createElement('div');
            
            cursorDot.className = 'cursor-dot';
            cursorOutline.className = 'cursor-outline';
            
            document.body.appendChild(cursorDot);
            document.body.appendChild(cursorOutline);
            
            // Cursor position variables
            let mouseX = 0;
            let mouseY = 0;
            let outlineX = 0;
            let outlineY = 0;
            
            // Update cursor dot position instantly on mouse move
            document.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Dot follows cursor immediately
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            });
            
            // Smooth outline animation with delay
            function animateOutline() {
                // Easing factor - lower = smoother/slower follow (0.1 - 0.3 recommended)
                const ease = 0.15;
                
                // Calculate distance to mouse
                const distX = mouseX - outlineX;
                const distY = mouseY - outlineY;
                
                // Move outline towards mouse position
                outlineX += distX * ease;
                outlineY += distY * ease;
                
                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';
                
                requestAnimationFrame(animateOutline);
            }
            
            // Start animation loop
            animateOutline();
            
            // Add hover effect on interactive elements
            const interactiveSelectors = 
                'a, button, input, textarea, select, ' +
                '[role="button"], .clickable';
            
            function updateInteractiveElements() {
                const interactiveElements = document.querySelectorAll(interactiveSelectors);
                
                interactiveElements.forEach(element => {
                    // Remove old listeners to avoid duplicates
                    element.removeEventListener('mouseenter', handleMouseEnter);
                    element.removeEventListener('mouseleave', handleMouseLeave);
                    
                    // Add new listeners
                    element.addEventListener('mouseenter', handleMouseEnter);
                    element.addEventListener('mouseleave', handleMouseLeave);
                });
            }
            
            function handleMouseEnter() {
                cursorDot.classList.add('hover');
                cursorOutline.classList.add('hover');
            }
            
            function handleMouseLeave() {
                cursorDot.classList.remove('hover');
                cursorOutline.classList.remove('hover');
            }
            
            // Initialize interactive elements
            updateInteractiveElements();
            
            // Re-scan for new interactive elements periodically (useful for dynamic content)
            setInterval(updateInteractiveElements, 2000);
            
            // Add click effect
            document.addEventListener('mousedown', function() {
                cursorDot.classList.add('click');
                cursorOutline.classList.add('click');
            });
            
            document.addEventListener('mouseup', function() {
                cursorDot.classList.remove('click');
                cursorOutline.classList.remove('click');
            });
            
            // Hide custom cursor when leaving the window
            document.addEventListener('mouseleave', function() {
                cursorDot.style.opacity = '0';
                cursorOutline.style.opacity = '0';
            });
            
            document.addEventListener('mouseenter', function() {
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
            });
            
            // Initialize cursor as hidden
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
            
            // Show cursor after first movement
            let hasMovedOnce = false;
            document.addEventListener('mousemove', function() {
                if (!hasMovedOnce) {
                    cursorDot.style.opacity = '1';
                    cursorOutline.style.opacity = '1';
                    hasMovedOnce = true;
                }
            }, { once: true });
        }
    })();

    document.getElementById("header").innerHTML=header;
    document.getElementById("floatBtn").innerHTML=floatBtn;
    document.getElementById("footer").innerHTML=footer;

    document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    // Select all links inside offcanvas menu
    document.querySelectorAll("#offcanvasMenu a").forEach(link => {
        const linkHref = link.getAttribute("href");

        // Add active class if href matches current page
        if (linkHref === currentPage || (linkHref === "./" + currentPage)) {
            link.classList.add("active");

            // If the link is inside a dropdown, also open parent dropdowns
            let parent = link.closest(".dropdown, .sub-dropdown");
            while (parent) {
                const parentTrigger = parent.previousElementSibling;
                if (parentTrigger && parentTrigger.classList.contains("dropdown-trigger") || parentTrigger.classList.contains("submenu-trigger")) {
                    parent.style.display = "block";
                    parentTrigger.classList.add("open"); // optional class to style arrow
                }
                parent = parent.parentElement.closest(".dropdown, .sub-dropdown");
            }
        }
    });

    // Optional: toggle dropdown on click for mobile
    document.querySelectorAll(".dropdown-trigger, .submenu-trigger").forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                this.classList.toggle("open");
            }
        });
    });
});



        