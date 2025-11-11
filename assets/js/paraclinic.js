
        // Department data with comprehensive information
        const depts = [
            {
                id: "Pathology", name: "Pathology", icon: "fa-microscope", color: "#3558c9ff", colorDark: "#07268dff",
                desc: "Comprehensive internal medicine care for all age groups.",
                vission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Consultation", "Diabetes Care", "Hypertension", "Infectious Diseases", "Respiratory Medicine", "Gastroenterology", "Cardiology", "Nephrology"],
                pubStats: [{label: "Publications", value: "30+"}],
                pubHighlights: ["Diabetes management"],
                pubYearwise: [{year: "2023", title: "Diabetes protocols", journal: "Medicine Today", type: "Research"}],
                research: ["Chronic disease management"],
                events: ["World Diabetes Day"],
                achievements: ["Best Medicine Dept"],
                gallery: [{name: "OPD", icon: "fa-clinic-medical", event: "OPD", date: "Jan 2024"}]
            },
            {
                id: "Microbiology", name: "Microbiology", icon: "fa-virus-covid", color: "#27ae60", colorDark: "#229954",
                desc: "Comprehensive internal medicine care for all age groups.",
                vission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Consultation", "Diabetes Care", "Hypertension", "Infectious Diseases", "Respiratory Medicine", "Gastroenterology", "Cardiology", "Nephrology"],
                pubStats: [{label: "Publications", value: "30+"}],
                pubHighlights: ["Diabetes management"],
                pubYearwise: [{year: "2023", title: "Diabetes protocols", journal: "Medicine Today", type: "Research"}],
                research: ["Chronic disease management"],
                events: ["World Diabetes Day"],
                achievements: ["Best Medicine Dept"],
                gallery: [{name: "OPD", icon: "fa-clinic-medical", event: "OPD", date: "Jan 2024"}]
            }
            ,
            {
                id: "Pharmacology", name: "Pharmacology", icon: "fa-pills", color: "#ff9800", colorDark: "#f57c00",
                desc: "Comprehensive child healthcare with NICU and PICU facilities.",
                vission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services: ["General Pediatrics", "Neonatology", "PICU", "Immunization", "Growth Monitoring"],
                pubStats: [{label: "Publications", value: "24+"}],
                pubHighlights: ["Neonatal care"],
                pubYearwise: [{year: "2023", title: "Neonatal protocols", journal: "Pediatrics", type: "Research"}],
                research: ["Neonatal outcomes"],
                events: ["Children's Day"],
                achievements: ["Best NICU"],
                gallery: [{name: "NICU", icon: "fa-baby", event: "NICU Setup", date: "Jan 2024"}]
            },
            {
                id: "Forensic Medicine", name: "Forensic Medicine", icon: "fa-capsules", color: "#e74c3c", colorDark: "#c0392b",
                desc: "Expert care for skin, hair, and nail conditions with advanced cosmetic dermatology services.",
                vission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["Dermatology consultation rooms", "Laser therapy unit", "Phototherapy equipment", "Dermoscopy facility", "Minor procedure room"],
                services: ["General Dermatology", "Cosmetic Dermatology", "Laser Treatments", "Hair Restoration", "Acne Treatment", "Psoriasis Care", "Vitiligo Treatment", "Chemical Peels"],
                pubStats: [{label: "Publications", value: "28+"}, {label: "International", value: "12+"}],
                pubHighlights: ["Advances in psoriasis treatment", "Laser therapy in acne scars", "Novel vitiligo treatments"],
                pubYearwise: [
                    {year: "2024", title: "Biologic therapy in psoriasis", journal: "Dermatology International", type: "Research"},
                    {year: "2023", title: "Fractional CO2 laser in acne scars", journal: "Aesthetic Dermatology", type: "Clinical Study"}
                ],
                research: ["Novel vitiligo treatments", "Laser therapy advances", "Immunotherapy in skin diseases"],
                events: ["Skin Cancer Screening Camp", "World Psoriasis Day"],
                achievements: ["Excellence in Cosmetic Dermatology"],
                gallery: [
                    {name: "Consultation Room", icon: "fa-stethoscope", event: "Derma OPD", date: "Jan 20, 2024"},
                    {name: "Laser Unit", icon: "fa-bolt", event: "Laser Therapy Center", date: "Feb 14, 2024"}
                ]
            },
            {
                id: "Community Medicine", name: "Community Medicine", icon: "fa-suitcase-medical", color: "#673ab7", colorDark: "#512da8",
                desc: "Comprehensive mental health services with counseling and therapy.",
                vission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                mission:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["Consultation rooms", "Counseling center", "De-addiction unit", "Psychology testing room"],
                services: ["General Psychiatry", "Depression Treatment", "Anxiety Disorders", "Addiction Treatment", "Counseling Services", "Child Psychiatry"],
                pubStats: [{label: "Publications", value: "20+"}],
                pubHighlights: ["Depression management"],
                pubYearwise: [{year: "2023", title: "Mental health interventions", journal: "Psychiatry Review", type: "Research"}],
                research: ["Mental health awareness", "Addiction treatment"],
                events: ["World Mental Health Day"],
                achievements: ["Excellence in Mental Health"],
                gallery: [{name: "Consultation Room", icon: "fa-couch", event: "Psychiatry Dept", date: "Oct 2024"}]
            }
        ];

        let currentDept = null;

        document.addEventListener('DOMContentLoaded', function() {
            renderSidebar();
            showDept(depts[0].id);
        });

        function renderSidebar() {
            const menu = document.getElementById('sidebarMenu');
            menu.innerHTML = depts.map(d => `
                <li><a href="#${d.id}" onclick="showDept('${d.id}');">
                    <i class="fas ${d.icon}"></i> ${d.name}
                </a></li>
            `).join('');
        }

        function showDept(id) {
            const d = depts.find(x => x.id === id);
            if (!d) return;
            
            currentDept = id;
            
            const det = document.getElementById('departmentDetail');
            det.classList.remove('hidden');
            det.classList.add('active');
            
            updateSidebarActive(id);
            renderDetail(d);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateSidebarActive(id) {
            document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
            const d = depts.find(x => x.id === id);
            if (d) {
                document.querySelectorAll('.sidebar-nav a').forEach(a => {
                    if (a.textContent.trim().includes(d.name)) a.classList.add('active');
                });
            }
        }

        function renderDetail(d) {
            const container = document.getElementById('departmentDetail');
            container.style.setProperty('--dept-color', d.color);
            container.style.setProperty('--dept-color-dark', d.colorDark);
            
            let html = `
                <div class="detail-header" id="${d.id}">
                    <div class="detail-header-content">
                        <h2>
                            <div class="icon-large"><i class="fas ${d.icon}"></i></div>
                            ${d.name}
                        </h2>
                        <p>${d.desc}</p>
                    </div>
                </div>
            `;
            if (d.aim) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-bullseye"></i> Vission & Mission</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <h4>Vission</h4>
                                <br>
                                <ul>${d.vission}</ul>
                                <br><br>
                                <h4>Nission</h4>
                                <br>
                                <ul>${d.mission}</ul>
                                <br><br>
                                <h4>Objectives</h4>
                                <br>
                                <ul>${d.objectives.map(f => `<li>${f}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }

            if (d.infra) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-hospital"></i> Infrastructure</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>State-of-the-art facilities ensuring highest standards of patient care.</p>
                                <ul>${d.infra.map(f => `<li>${f}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.faculty) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-users"></i> Faculty</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>State-of-the-art facilities ensuring highest standards of patient care.</p>
                                ${d.faculty ? `
                                        <div class="publication-table-wrapper">
                                            <table class="publication-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10%">S.No</th>
                                                        <th style="width: 30%">Name of the Faculty</th>
                                                        <th style="width: 40%">Designation</th>
                                                        <th style="width: 20%">Experience</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${d.faculty.map((p,i) => `
                                                        <tr>
                                                            <td data-label="S.No">${i+1}</td>
                                                            <td data-label="Name of the Faculty"><strong>${p.name}</strong></td>
                                                            <td data-label="Designation">${p.designation}</td>
                                                            <td data-label="Experience"><span class="year-badge">${p.exp}+ Yrs</span></td>
                                                        </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    ` : '<p>Year-wise publication data will be updated soon.</p>'}
                            </div>
                        </div>
                    </div>
                `;
            }

            
            
            if (d.services) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-hand-holding-medical"></i> Services</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Comprehensive healthcare services catering to all needs.</p>
                                <ul>${d.services.map(s => `<li>${s}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.pubStats) {
                html += `
                    <div class="accordion-section">
                        <div class="tabs-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-book-medical"></i> Publications</div>
                            <i class="fas fa-chevron-down tabs-expand-icon"></i>
                        </div>
                        <div class="tabs-body">
                            <div class="tabs-content-wrapper">
                                <div class="tabs-nav">
                                    <button class="tab-button active" onclick="switchTab(event, 'overview-${d.id}')">Overview</button>
                                    <button class="tab-button" onclick="switchTab(event, 'yearwise-${d.id}')">Year-wise</button>
                                </div>
                                
                                <div id="overview-${d.id}" class="tab-content active">
                                    <p>Significant contributions to medical literature and research.</p>
                                    <div class="stats-grid">
                                        ${d.pubStats.map(s => `
                                            <div class="stat-card">
                                                <h4>${s.value}</h4>
                                                <p>${s.label}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                    ${d.pubHighlights ? `
                                        <h4 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-text-primary);">Key Research Highlights</h4>
                                        <ul class="accordion-body" style="padding: 0;list-style:none;">
                                            ${d.pubHighlights.map(p => `<li>${p}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                                
                                <div id="yearwise-${d.id}" class="tab-content">
                                    ${d.pubYearwise ? `
                                        <div class="publication-table-wrapper">
                                            <table class="publication-table">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10%">Year</th>
                                                        <th style="width: 45%">Title</th>
                                                        <th style="width: 30%">Journal</th>
                                                        <th style="width: 15%">Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${d.pubYearwise.map(p => `
                                                        <tr>
                                                            <td data-label="Year"><span class="year-badge">${p.year}</span></td>
                                                            <td data-label="Title"><strong>${p.title}</strong></td>
                                                            <td data-label="Journal">${p.journal}</td>
                                                            <td data-label="Type"><span class="year-badge">${p.type}</span></td>
                                                        </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    ` : '<p>Year-wise publication data will be updated soon.</p>'}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.research) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-microscope"></i> Research</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Cutting-edge research advancing medical science.</p>
                                <ul>${d.research.map(r => `<li>${r}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.events) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-calendar-alt"></i> Events</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Regular conferences, training programs, and awareness campaigns.</p>
                                <ul>${d.events.map(e => `<li>${e}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.achievements) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-trophy"></i> Achievements</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Recognition and awards for excellence in healthcare.</p>
                                <ul>${d.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (d.gallery) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-images"></i> Gallery</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>Visual documentation of our facilities, events, and achievements.</p>
                                <div class="gallery-grid">
                                    ${d.gallery.map(img => `
                                        <div class="gallery-item">
                                            <div class="gallery-placeholder">
                                                <i class="fas ${img.icon}"></i>
                                                <span>${img.name}</span>
                                            </div>
                                            <div class="gallery-overlay">
                                                <div class="gallery-overlay-title">${img.event}</div>
                                                <div class="gallery-overlay-date"><i class="fas fa-calendar"></i> ${img.date}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            container.innerHTML = html;
        }

        

    function toggleAccordion(header) {
            const isActive = header.classList.contains('active');
            
            // Close all accordions (including publications)
            document.querySelectorAll('.accordion-header, .tabs-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            
            // If the clicked accordion wasn't active, open it
            if (!isActive) {
                header.classList.add('active');
                header.nextElementSibling.classList.add('active');
            }
        }

        function switchTab(event, tabId) {
            const container = event.target.closest('.tabs-content-wrapper');
            container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }