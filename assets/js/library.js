  // Complete Library Data in JSON Format
        const libraryData = {
            "sections": [
                {
                "id": "history",
                "title": "Library History",
                "icon": "fa-history",
                "description": "A Legacy of Knowledge and Academic Excellence",
                "content": [
                    {
                    "type": "text",
                    "value": "The Central Library is located in the first floor of the Anatomy block of this institution. It has a floor area of 3162.00 Sq.mts. The Library is well illuminated and fully air conditioned, providing a peaceful ambience free from noise."
                    },
                    {
                    "type": "text",
                    "value": "All library operational services have been automated using Windows-based technology with KOHA software integrated with RFID technology. The software includes modules for transactions, queries, administration, gate entry, reporting, and search."
                    },
                    {
                    "type": "stats",
                    "items": [
                        { "icon": "fa-calendar-check", "value": "2009", "label": "Year Established" },
                        { "icon": "fa-book", "value": "16314+", "label": "Books Available (2025)" }
                    ]
                    },
                    {
                    "type": "subtitle",
                    "value": "Milestones in Our Journey"
                    },
                    {
                    "type": "list",
                    "items": [
                        "2009: Library inaugurated with 2980 books and 24 print journals.",
                        "2010: Partially automated using Integrated Library Management System.",
                        "2010: Access to WHO Global Subscriptions.",
                        "2013: Access to Dr.MGR Medical University E-Consortium.",
                        "2018: Access to DELNET E-Resources.",
                        "2022: Fully automated with KOHA software with RFID Technology.",
                        "2023: Access to international journals from ProQuest and BMJ.",
                        "2024: Access to BMJ E-Journals, Research to Publications, and Best Practice.",
                        "2025: Collection expanded to 16314 Books, 50 international print journals, and 65 Indian print journals."
                    ]
                    }
                ]
                },

                {
                "id": "librarian",
                "title": "Chief Librarian",
                "icon": "fa-user-tie",
                "description": "Leadership & Professional Support",
                "content": [
                    {
                    "type": "profile",
                    "name": "S. MEENAKSHI",
                    "designation": "Chief Librarian",
                    "image": "./assets/images/library/librarian.jpg",
                    "bio": [
                        "An experienced library professional leading the Central Library operations with expertise in Library Automation and academic resource services.",
                        "Responsible for maintaining digital systems, resource management, and ensuring seamless access to learning materials for students and faculty."
                    ],
                    "contact": [
                        { "icon": "fa-envelope", "text": "library@mc.srmtrichy.edu.in" },
                        { "icon": "fa-phone", "text": "0431-2258657" },
                        { "icon": "fa-clock", "text": "Office Hours: 8:00 AM to 4:00 PM" }
                    ]
                    },

                    {
                    "type": "subtitle",
                    "value": "Library Staff"
                    },
                    {
                    "type": "table",
                    "headers": ["Name", "Designation", "Specialization", "Experience"],
                    "rows": [
                        ["Mrs. S. Meenakshi", "Chief Librarian", "Library Automation", "23 years"],
                        ["Mr. G. Ramkumar", "Asst. Librarian", "Library Automation", "9 years"],
                        ["Mr. R. Kathirvel", "Library Assistant", "Library Digitalisation", "7 years"],
                        ["Mr. K. Suresh", "Library Assistant", "Library Automation", "5 years"],
                        ["Ms. T. Rokkaiya Thinoor", "Library Assistant", "Classification", "6 months"]
                    ]
                    }
                ]
                },

                {
                "id": "collection",
                "title": "Library Collection",
                "icon": "fa-book",
                "description": "Vast Academic Resources",
                "content": [
                    {
                    "type": "stats",
                    "items": [
                        { "icon": "fa-book", "value": "16314+", "label": "Books" },
                        { "icon": "fa-journal-whills", "value": "115+", "label": "Print Journals" },
                        { "icon": "fa-globe", "value": "E-Resources", "label": "BMJ, DELNET, E-Consortium" }
                    ]
                    },

                    {
                    "type": "subtitle",
                    "value": "Statistical Collection"
                    },
                    {
                    "type": "text",
                    "value": "E-Books: 8000+, E-Journals: 18000+, Multimedia Resources: 2000+"
                    },

                    {
                    "type": "subtitle",
                    "value": "Subject-wise Collection"
                    },
                    {
                    "type": "table",
                    "headers": ["Subject Area", "Number of Books", "Latest Edition", "Reference Books"],
                    "rows": [
                        ["Anatomy", "973", "Yes", "210"],
                        ["Physiology", "587", "Yes", "150"],
                        ["Biochemistry", "730", "Yes", "182"],
                        ["Community Medicine", "1830", "Yes", "337"],
                        ["Pathology", "751", "Yes", "190"],
                        ["Microbiology", "956", "Yes", "195"],
                        ["Pharmacology", "873", "Yes", "180"],
                        ["Forensic Medicine", "484", "Yes", "130"],
                        ["General Medicine", "2311", "Yes", "225"],
                        ["Pediatric Medicine", "862", "Yes", "170"],
                        ["General Surgery", "656", "Yes", "160"],
                        ["Orthopedics", "564", "Yes", "140"],
                        ["Obstetrics and Gynecology", "877", "Yes", "180"],
                        ["Ear, Nose and Throat", "398", "Yes", "120"],
                        ["Ophthalmology", "480", "Yes", "125"],
                        ["Radiology", "603", "Yes", "145"],
                        ["Anesthesia", "430", "Yes", "110"],
                        ["Respiratory Medicine", "320", "Yes", "105"],
                        ["Dermatology", "374", "Yes", "105"],
                        ["Psychiatry", "431", "Yes", "108"],
                        ["Dentistry", "135", "Yes", "20"],
                        ["Plastic Surgery", "56", "Yes", "20"],
                        ["Emergency Medicine", "230", "Yes", "80"],
                        ["Medical Education", "40", "Yes", "10"],
                        ["General Books", "363", "", "20"]
                    ]
                    }
                ]
                },

                {
                "id": "rare-books",
                "title": "Featured Rare Books",
                "icon": "fa-book-open",
                "description": "Unique Knowledge Resources",
                "content": [
                    {
                    "type": "list",
                    "items": [
                        "Archives-related books donated by faculty from OG, MCH Division, Dermatology, Community Health.",
                        "Yoga books and Tamil literature collections."
                    ]
                    }
                ]
                },

                {
                "id": "e-resources",
                "title": "E-Resources",
                "icon": "fa-laptop",
                "description": "Digital Academic Resources",
                "content": [
                    {
                    "type": "list",
                    "items": [
                        "BMJ Best Practice",
                        "Research to Publication",
                        "Clinical Key",
                        "Elsevier Journals Collection",
                        "DELNET",
                        "Dr. MGR Medical University E-Consortium"
                    ]
                    }
                ]
                },

                {
                "id": "digital",
                "title": "Digital Library",
                "icon": "fa-cloud",
                "description": "Technology-Driven Learning Spaces",
                "content": [
                    {
                    "type": "text",
                    "value": "Browsing centre is air-conditioned with 64 terminals. Faculty, students, and researchers can access book availability, journals, and digital resources."
                    },

                    {
                    "type": "subtitle",
                    "value": "Digital Library Features"
                    },
                    {
                    "type": "list",
                    "items": [
                        "High-speed internet and computer systems",
                        "Air-conditioned environment",
                        "WiFi connection",
                        "Printing facilities available"
                    ]
                    },

                    {
                    "type": "subtitle",
                    "value": "Facility Details"
                    },
                    {
                    "type": "table",
                    "headers": ["Feature", "Description"],
                    "rows": [
                        ["Audio Visual Room", "With projector"],
                        ["Conference Hall", ""],
                        ["Multimedia Room", "Viewing educational CDs and medical procedures"]
                    ]
                    }
                ]
                },

                {
                "id": "activities",
                "title": "Library Activities",
                "icon": "fa-calendar-alt",
                "description": "Programs & Annual Activities",
                "content": [
                    {
                    "type": "subtitle",
                    "value": "Regular Programs"
                    },
                    {
                    "type": "list",
                    "items": [
                        "The Dr.MGR Medical University e-Consortium meeting (June)",
                        "National Librarian Day (August)",
                        "Library Orientation for new students (October)",
                        "National Library Week celebrations (November)"
                    ]
                    }
                ]
                },

                {
                "id": "sections",
                "title": "Library Sections",
                "icon": "fa-sitemap",
                "description": "Well-Organized Reading Spaces",
                "content": [
                    {
                    "type": "list",
                    "items": [
                        "Inside Reading Section – 250 Seats",
                        "Outside Reading Section – 250 Seats",
                        "Faculty Reading Section – 50 Seats",
                        "PG Reading Section – 50 Seats",
                        "Journal Section – 32 Seats",
                        "Back Volume Section",
                        "Browsing Section"
                    ]
                    },

                    {
                    "type": "subtitle",
                    "value": "Library Timings & Rules"
                    },
                    {
                    "type": "list",
                    "items": [
                        "Working Hours: 8:00 AM to 8:00 PM (Open on Sundays and holidays)",
                        "Wear your ID card always.",
                        "ID card scanning required at E-Gate.",
                        "Maintain silence inside the library.",
                        "Follow dress code.",
                        "No food or drinks allowed.",
                        "Leave books on the table after reading.",
                        "Damaging books will lead to disciplinary action.",
                        "Avoid mobile phone use.",
                        "Provide suggestions for improvement."
                    ]
                    }
                ]
                }
            ]
        }

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
                <div class="lib-library-section lib-active" id="${section.id}">
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