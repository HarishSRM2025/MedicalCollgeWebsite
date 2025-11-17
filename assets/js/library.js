  // Complete Library Data in JSON Format
        const libraryData = {
            sections: [
                {
                    id: "history",
                    title: "Library History",
                    icon: "fa-history",
                    description: "A Legacy of Knowledge and Academic Excellence",
                    content: [
                        {
                            type: "text",
                            value: "The SRM Medical College Library was established in 2006, coinciding with the inception of the medical college. From its humble beginnings with a modest collection, the library has grown exponentially to become one of the premier medical libraries in the region."
                        },
                        {
                            type: "text",
                            value: "Over the years, the library has evolved from a traditional repository of books to a modern information hub, incorporating digital resources, electronic databases, and state-of-the-art technology to serve the academic community effectively."
                        },
                        {
                            type: "stats",
                            items: [
                                { icon: "fa-calendar-check", value: "2006", label: "Year Established" },
                                { icon: "fa-trophy", value: "18+", label: "Years of Service" }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Milestones in Our Journey"
                        },
                        {
                            type: "list",
                            items: [
                                "2006: Library inaugurated with 5,000 books",
                                "2010: Introduction of digital library services",
                                "2015: Automated library management system implemented",
                                "2018: Access to international e-journal databases",
                                "2020: Launch of remote access services during pandemic",
                                "2023: Expansion to include research commons and collaborative spaces"
                            ]
                        }
                    ]
                },
                {
                    id: "librarian",
                    title: "Librarian",
                    icon: "fa-user-tie",
                    description: "Leading Our Information Services",
                    content: [
                        {
                            type: "profile",
                            name: "Dr. Rajesh Kumar",
                            designation: "Chief Librarian & Information Officer",
                            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
                            bio: [
                                "Dr. Rajesh Kumar brings over 20 years of experience in medical library management and information science. He holds a Ph.D. in Library and Information Science from Delhi University and has been instrumental in transforming the SRM Medical College Library into a modern information center.",
                                "His expertise includes digital library management, research support services, and academic resource development. Under his leadership, the library has implemented cutting-edge technologies and expanded its digital collections significantly."
                            ],
                            contact: [
                                { icon: "fa-envelope", text: "librarian@srmmedical.edu.in" },
                                { icon: "fa-phone", text: "+91 431 2345678 (Ext: 234)" },
                                { icon: "fa-clock", text: "Office Hours: Monday - Friday, 9:00 AM - 5:00 PM" }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Library Staff"
                        },
                        {
                            type: "table",
                            headers: ["Name", "Designation", "Specialization", "Experience"],
                            rows: [
                                ["Mr. Suresh Babu", "Deputy Librarian", "Cataloging & Classification", "2+ Yrs"],
                                ["Ms. Priya Sharma", "Assistant Librarian", "Digital Resources", "4+ Yrs"],
                                ["Mr. Arun Prakash", "Library Assistant", "Circulation Services", "4+ Yrs"],
                                ["Ms. Lakshmi Devi", "Library Assistant", "Reference Services", "4+ Yrs"]
                            ]
                        }
                    ]
                },
                {
                    id: "collection",
                    title: "Library Collection",
                    icon: "fa-book",
                    description: "Comprehensive Resources for Medical Education",
                    content: [
                        {
                            type: "text",
                            value: "Our library houses an extensive collection of medical books, journals, and multimedia resources covering all aspects of medical science. The collection is carefully curated to support the curriculum and research needs of students, faculty, and researchers."
                        },
                        {
                            type: "stats",
                            items: [
                                { icon: "fa-globe", value: "5,000+", label: "E-Journals" },
                                { icon: "fa-video", value: "500+", label: "Multimedia Resources" }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Subject-wise Collection"
                        },
                        {
                            type: "table",
                            headers: ["Subject Area", "Number of Books", "Latest Editions", "Reference Books"],
                            rows: [
                                ["Anatomy", "1,200", "Yes", "150"],
                                ["Physiology", "950", "Yes", "120"],
                                ["Biochemistry", "800", "Yes", "100"],
                                ["Pathology", "1,100", "Yes", "140"],
                                ["Pharmacology", "900", "Yes", "110"],
                                ["Microbiology", "850", "Yes", "95"],
                                ["Medicine", "2,500", "Yes", "300"],
                                ["Surgery", "2,200", "Yes", "280"],
                                ["Pediatrics", "1,300", "Yes", "160"],
                                ["Obstetrics & Gynecology", "1,200", "Yes", "150"]
                            ]
                        }
                    ]
                },
                {
                    id: "rare-books",
                    title: "Rare Book",
                    icon: "fa-book-open",
                    description: "Preserving Medical Heritage & Historical Knowledge",
                    content: [
                        {
                            type: "text",
                            value: "Our rare book collection houses valuable historical medical texts, first editions, and manuscripts that chronicle the evolution of medical science. These precious resources are carefully preserved in a climate-controlled environment and are available for research purposes under special conditions."
                        },
                        {
                            type: "subtitle",
                            value: "Notable Collections"
                        },
                        {
                            type: "info-cards",
                            items: [
                                {
                                    icon: "fa-book-medical",
                                    title: "Historical Medical Texts",
                                    description: "Over 200 volumes dating back to the 18th and 19th centuries, including original works on anatomy, surgery, and traditional medicine."
                                },
                                {
                                    icon: "fa-scroll",
                                    title: "Manuscripts",
                                    description: "Handwritten medical manuscripts and notes from renowned physicians and researchers."
                                },
                                {
                                    icon: "fa-crown",
                                    title: "First Editions",
                                    description: "First editions of groundbreaking medical textbooks and journals that shaped modern medicine."
                                },
                                {
                                    icon: "fa-landmark",
                                    title: "Indian Medical Heritage",
                                    description: "Ancient Ayurvedic texts and traditional Indian medical literature in Sanskrit and regional languages."
                                }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Featured Rare Books"
                        },
                        {
                            type: "list",
                            items: [
                                "Gray's Anatomy (1858 First Edition)",
                                "Sushruta Samhita - Ancient Sanskrit Manuscript",
                                "William Harvey's 'De Motu Cordis' (1628)",
                                "Andreas Vesalius 'De Humani Corporis Fabrica' (1543 Reprint)",
                                "Charaka Samhita - Traditional Ayurvedic Text",
                                "Collection of Early Medical Journals (1800s)"
                            ]
                        }
                    ]
                },
                {
                    id: "e-resources",
                    title: "E-Resources",
                    icon: "fa-laptop",
                    description: "Digital Access to Global Medical Knowledge",
                    content: [
                        {
                            type: "text",
                            value: "The library provides access to a comprehensive range of electronic resources including e-journals, e-books, databases, and online learning platforms. These resources are accessible 24/7 from anywhere on campus and through remote access for authorized users."
                        },
                        {
                            type: "resources",
                            items: [
                                {
                                    icon: "fa-database",
                                    title: "PubMed/MEDLINE",
                                    description: "Access to over 30 million citations for biomedical literature from MEDLINE, life science journals, and online books."
                                },
                                {
                                    icon: "fa-microscope",
                                    title: "ScienceDirect",
                                    description: "Full-text access to over 2,500 peer-reviewed journals and 39,000 e-books in medical and health sciences."
                                },
                                {
                                    icon: "fa-flask",
                                    title: "Cochrane Library",
                                    description: "High-quality, independent evidence to inform healthcare decision-making with systematic reviews and clinical trials."
                                },
                                {
                                    icon: "fa-book-reader",
                                    title: "UpToDate",
                                    description: "Evidence-based clinical decision support resource with over 11,000 topics covering 25+ medical specialties."
                                },
                                {
                                    icon: "fa-graduation-cap",
                                    title: "Clinical Key",
                                    description: "Comprehensive clinical reference tool with full-text books, journals, practice guidelines, and drug information."
                                },
                                {
                                    icon: "fa-heartbeat",
                                    title: "JAMA Network",
                                    description: "Access to JAMA and 11 specialty journals providing cutting-edge medical research and clinical information."
                                }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Additional E-Resources"
                        },
                        {
                            type: "list",
                            items: [
                                "ProQuest Medical Library - Full-text medical journals and dissertations",
                                "EBSCO Health Databases - CINAHL, MEDLINE, and Health Source",
                                "SpringerLink - Medical and health sciences e-books and journals",
                                "BMJ Best Practice - Clinical decision support tool",
                                "DynaMed - Point-of-care clinical reference tool",
                                "AccessMedicine - Medical textbooks and multimedia resources"
                            ]
                        }
                    ]
                },
                {
                    id: "digital",
                    title: "Digital Library",
                    icon: "fa-cloud",
                    description: "Technology-Enabled Learning Environment",
                    content: [
                        {
                            type: "text",
                            value: "Our state-of-the-art digital library provides a modern learning environment equipped with advanced technology and digital resources. The facility supports independent study, research, and collaborative learning with cutting-edge infrastructure."
                        },
                        {
                            type: "subtitle",
                            value: "Digital Library Features"
                        },
                        {
                            type: "info-cards",
                            items: [
                                {
                                    icon: "fa-desktop",
                                    title: "Computer Workstations",
                                    description: "100+ high-speed computers with internet access and installed medical software for student use."
                                },
                                {
                                    icon: "fa-wifi",
                                    title: "High-Speed Wi-Fi",
                                    description: "Campus-wide wireless connectivity with bandwidth up to 1 Gbps for seamless online learning."
                                },
                                {
                                    icon: "fa-print",
                                    title: "Printing & Scanning",
                                    description: "Modern printing, scanning, and photocopying facilities with digital document management."
                                },
                                {
                                    icon: "fa-film",
                                    title: "Multimedia Room",
                                    description: "Dedicated space for viewing educational videos, documentaries, and medical procedures."
                                },
                                {
                                    icon: "fa-users",
                                    title: "Discussion Rooms",
                                    description: "8 group study rooms with audio-visual equipment for collaborative learning and presentations."
                                },
                                {
                                    icon: "fa-tablet-alt",
                                    title: "E-Book Readers",
                                    description: "Lending service for tablets and e-readers preloaded with medical textbooks and journals."
                                }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Digital Services"
                        },
                        {
                            type: "list",
                            items: [
                                "Online Catalog (OPAC) - Search and reserve books online",
                                "Mobile App - Access library services on the go",
                                "Remote Access - VPN access to e-resources from home",
                                "Email Alerts - New arrivals and due date notifications",
                                "Digital Bookmarking - Save and organize your research",
                                "Reference Management - Citation tools and bibliography software"
                            ]
                        },
                        {
                            type: "stats",
                            items: [
                                { icon: "fa-clock", value: "24/7", label: "Digital Access" },
                                { icon: "fa-laptop-code", value: "100+", label: "Workstations" },
                                { icon: "fa-book-reader", value: "5,000+", label: "E-Books Available" }
                            ]
                        }
                    ]
                },
                {
                    id: "activities",
                    title: "Library Activities",
                    icon: "fa-calendar-alt",
                    description: "Engaging Programs & Educational Events",
                    content: [
                        {
                            type: "text",
                            value: "The library organizes various educational and cultural activities throughout the year to promote reading habits, research skills, and information literacy among students and faculty."
                        },
                        {
                            type: "subtitle",
                            value: "Regular Programs"
                        },
                        {
                            type: "resources",
                            items: [
                                {
                                    icon: "fa-chalkboard-teacher",
                                    title: "Information Literacy Training",
                                    description: "Monthly workshops on effective literature search, database usage, and research methodology for students and researchers."
                                },
                                {
                                    icon: "fa-users",
                                    title: "Journal Clubs",
                                    description: "Weekly discussion sessions where students and faculty review recent medical literature and research publications."
                                },
                                {
                                    icon: "fa-award",
                                    title: "Book Exhibition",
                                    description: "Annual exhibition showcasing new arrivals, rare books, and special collections with publisher representatives."
                                },
                                {
                                    icon: "fa-pencil-alt",
                                    title: "Creative Writing Contest",
                                    description: "Yearly competition encouraging students to write medical case studies, articles, and creative pieces."
                                },
                                {
                                    icon: "fa-book-open",
                                    title: "Reading Challenges",
                                    description: "Semester-wise reading programs with recognition for students who complete reading goals."
                                },
                                {
                                    icon: "fa-graduation-cap",
                                    title: "Research Support Seminars",
                                    description: "Sessions on academic writing, plagiarism awareness, citation management, and publication ethics."
                                }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Special Events"
                        },
                        {
                            type: "list",
                            items: [
                                "National Library Week Celebrations (November)",
                                "World Book Day Activities (April 23)",
                                "Medical Literature Review Competitions",
                                "Guest Lectures by Medical Publishers and Authors",
                                "Open Access Week Awareness Programs",
                                "Library Orientation for New Students (Every Semester)"
                            ]
                        }
                    ]
                },
                {
                    id: "sections",
                    title: "Library Sections",
                    icon: "fa-sitemap",
                    description: "Organized Spaces for Diverse Needs",
                    content: [
                        {
                            type: "text",
                            value: "The library is organized into different sections to cater to various user needs and provide specialized services. Each section is designed to create an optimal environment for its intended purpose."
                        },
                        {
                            type: "resources",
                            items: [
                                {
                                    icon: "fa-book",
                                    title: "Circulation Section",
                                    description: "Handles book lending, returns, renewals, and member registration. Open during library hours with self-service kiosks available."
                                },
                                {
                                    icon: "fa-question-circle",
                                    title: "Reference Section",
                                    description: "Houses dictionaries, encyclopedias, handbooks, and reference materials. Reference books for in-library use only."
                                },
                                {
                                    icon: "fa-newspaper",
                                    title: "Periodicals Section",
                                    description: "Current issues of 250+ medical journals, magazines, and newspapers. Back issues archived and available on request."
                                },
                                {
                                    icon: "fa-chair",
                                    title: "Reading Hall",
                                    description: "Silent study area with 200+ seating capacity. Equipped with individual study desks and comfortable seating."
                                },
                                {
                                    icon: "fa-users",
                                    title: "Group Study Rooms",
                                    description: "8 rooms for collaborative learning, each accommodating 6-8 students. Advance booking required."
                                },
                                {
                                    icon: "fa-microscope",
                                    title: "Research Commons",
                                    description: "Dedicated space for research scholars with computers, printing facilities, and access to research databases."
                                }
                            ]
                        },
                        {
                            type: "subtitle",
                            value: "Library Timings & Rules"
                        },
                        {
                            type: "info-cards",
                            items: [
                                {
                                    icon: "fa-clock",
                                    title: "Working Hours",
                                    description: "Monday - Friday: 8:00 AM - 10:00 PM\nSaturday: 8:00 AM - 6:00 PM\nSunday: 9:00 AM - 5:00 PM\nExam Period: Extended hours till midnight"
                                },
                                {
                                    icon: "fa-id-card",
                                    title: "Membership",
                                    description: "All students and faculty receive automatic membership. Valid ID card must be presented for borrowing. Lost cards should be reported immediately."
                                },
                                {
                                    icon: "fa-book-reader",
                                    title: "Borrowing Limits",
                                    description: "Students: 3 books for 14 days\nFaculty: 10 books for 30 days\nResearch Scholars: 5 books for 21 days\nRenewal: One time if not reserved"
                                },
                                {
                                    icon: "fa-exclamation-triangle",
                                    title: "Important Rules",
                                    description: "Maintain silence in reading areas. Mobile phones on silent mode. Food and beverages not allowed. Handle books with care. Return books on time to avoid fines."
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        // Render Functions
        function renderSidebar() {
            const menu = document.getElementById('libSidebarMenu');
            menu.innerHTML = libraryData.sections.map((section, index) => `
                <li>
                    <a href="#${section.id}" 
                       onclick="showSection('${section.id}')" 
                       class="${index === 0 ? 'lib-active' : ''}">
                        <i class="fas ${section.icon}"></i> ${section.title}
                    </a>
                </li>
            `).join('');
        }

        function renderContent(item) {
            switch(item.type) {
                case 'text':
                    return `<p>${item.value}</p>`;
                
                case 'subtitle':
                    return `<h3>${item.value}</h3>`;
                
                case 'stats':
                    return `
                        <div class="lib-stats-grid">
                            ${item.items.map(stat => `
                                <div class="lib-stat-box">
                                    <i class="fas ${stat.icon}"></i>
                                    <h3>${stat.value}</h3>
                                    <p>${stat.label}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                
                case 'list':
                    return `
                        <ul class="lib-features-list">
                            ${item.items.map(listItem => `
                                <li><i class="fas fa-check-circle"></i> ${listItem}</li>
                            `).join('')}
                        </ul>
                    `;
                
                case 'info-cards':
                    return `
                        <div class="lib-info-grid">
                            ${item.items.map(card => `
                                <div class="lib-info-card">
                                    <h4><i class="fas ${card.icon}"></i> ${card.title}</h4>
                                    <p>${card.description.replace(/\n/g, '<br>')}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                
                case 'resources':
                    return `
                        <div class="lib-resources-grid">
                            ${item.items.map(resource => `
                                <div class="lib-resource-card">
                                    <div class="lib-resource-icon">
                                        <i class="fas ${resource.icon}"></i>
                                    </div>
                                    <h4>${resource.title}</h4>
                                    <p>${resource.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                
                case 'profile':
                    return `
                        <div class="lib-librarian-profile">
                            <div class="lib-librarian-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <div class="lib-librarian-info">
                                <h3>${item.name}</h3>
                                <p class="lib-designation">${item.designation}</p>
                                <div class="lib-contact-info">
                                    ${item.contact.map(c => `
                                        <p><i class="fas ${c.icon}"></i> ${c.text}</p>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                
                case 'table':
                    return `
                        <div class="lib-table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        ${item.headers.map(h => `<th>${h}</th>`).join('')}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${item.rows.map(row => `
                                        <tr>
                                            ${row.map((cell, index) => `<td data-label="${item.headers[index]}">${cell}</td>`).join('')}
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    `;
                
                default:
                    return '';
            }
        }

        function showSection(sectionId) {
            const section = libraryData.sections.find(s => s.id === sectionId);
            if (!section) return;

            const mainContent = document.getElementById('libMainContent');
            
            const contentHTML = `
                <div class="lib-library-section lib-active">
                    <div class="lib-section-header">
                        <div class="lib-section-header-content">
                            <h2>
                                <div class="lib-icon-large"><i class="fas ${section.icon}"></i></div>
                                ${section.title}
                            </h2>
                            <p>${section.description}</p>
                        </div>
                    </div>
                    <div class="lib-section-content">
                        ${section.content.map(item => renderContent(item)).join('')}
                    </div>
                </div>
            `;
            
            mainContent.innerHTML = contentHTML;
            
            // Update sidebar active state
            document.querySelectorAll('.lib-sidebar-nav a').forEach(link => {
                link.classList.remove('lib-active');
            });
            document.querySelector(`a[href="#${sectionId}"]`).classList.add('lib-active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderSidebar();
            
            // Check for hash in URL
            const hash = window.location.hash.slice(1);
            if (hash && libraryData.sections.find(s => s.id === hash)) {
                showSection(hash);
            } else {
                showSection(libraryData.sections[0].id);
            }
        });

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            if (hash && libraryData.sections.find(s => s.id === hash)) {
                showSection(hash);
            }
        });

        // Export library data for external use
        window.libraryData = libraryData;