
        // Department data with comprehensive information
        const depts = [
            {
                id: "dental", name: "Dental", icon: "fa-tooth", color: "#00b894", colorDark: "#00a080",
                desc: "Comprehensive dental care with modern equipment for all oral and maxillofacial procedures.",
                infra: ["Equipped dental OT", "Digital X-ray", "Modern sterilization", "Specialized dental chairs", "Oral surgery unit", "Orthodontic facility", "Prosthodontic lab"],
                services: ["General Dentistry", "Oral Surgery", "Root Canal", "Fillings", "Cosmetic Dentistry", "Orthodontics", "Implants", "Crown & Bridge", "Dentures", "Periodontal Care", "Pediatric Dentistry", "Maxillofacial Surgery"],
                pubStats: [
                    {label: "Total Publications", value: "35+"},
                    {label: "International", value: "10+"},
                    {label: "National", value: "25+"}
                ],
                pubHighlights: ["Dental implantology advances", "Minimally invasive oral surgery", "Biomaterials in restoration", "Digital dentistry & CAD/CAM"],
                pubYearwise: [
                    {year: "2024", title: "3D printing in maxillofacial prosthetics", journal: "J Prosthetic Dentistry", type: "Research"},
                    {year: "2023", title: "Dental implant materials comparison", journal: "Int Dental Journal", type: "Clinical Study"},
                    {year: "2022", title: "Digital workflow in cosmetic dentistry", journal: "Aesthetic Dentistry Today", type: "Review"}
                ],
                research: ["Advanced implantology", "Minimally invasive surgery", "Dental biomaterials", "CAD/CAM technology"],
                events: ["Annual Dental Health Camp", "School Screening Programs"],
                achievements: ["Best Dental Department - State Level"],
                gallery: [
                    {name: "Dental OPD", icon: "fa-clinic-medical", event: "OPD Inauguration", date: "Mar 12, 2024"},
                    {name: "Operation Theatre", icon: "fa-procedures", event: "Surgical Suite", date: "Apr 18, 2024"},
                    {name: "Laboratory", icon: "fa-flask", event: "Prosthetic Lab", date: "May 5, 2024"},
                    {name: "X-ray Room", icon: "fa-x-ray", event: "Digital X-ray", date: "Jun 10, 2024"}
                ]
            },
            {
                id: "general_medicine", name: "General Medicine", icon: "fa-user-doctor", color: "#27ae60", colorDark: "#229954",
                desc: "Comprehensive internal medicine care for all age groups.",
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
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
                id: "pediatrics", name: "Pediatrics", icon: "fa-child", color: "#ff9800", colorDark: "#f57c00",
                desc: "Comprehensive child healthcare with NICU and PICU facilities.",
                infra: ["Pediatric OPD", "NICU", "PICU", "Immunization clinic"],
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
                id: "dermatology", name: "Dermatology", icon: "fa-hand-dots", color: "#e74c3c", colorDark: "#c0392b",
                desc: "Expert care for skin, hair, and nail conditions with advanced cosmetic dermatology services.",
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
                id: "ent", name: "ENT", icon: "fa-ear-listen", color: "#3498db", colorDark: "#2980b9",
                desc: "Comprehensive ear, nose, and throat care with advanced surgical facilities.",
                infra: ["ENT examination rooms", "Endoscopy suite", "Audiometry room", "ENT operation theatre"],
                services: ["General ENT", "Endoscopic Sinus Surgery", "Tonsillectomy", "Adenoidectomy", "Hearing Tests", "Voice Disorders", "Sleep Apnea", "Head & Neck Surgery"],
                pubStats: [{label: "Publications", value: "20+"}],
                pubHighlights: ["Endoscopic sinus surgery techniques"],
                pubYearwise: [{year: "2023", title: "Endoscopic surgery advances", journal: "ENT Journal", type: "Research"}],
                research: ["Voice restoration", "Cochlear implants"],
                events: ["World Hearing Day"],
                achievements: ["Excellence in ENT Surgery"],
                gallery: [{name: "Endoscopy Suite", icon: "fa-video", event: "Endoscopy Setup", date: "Apr 2024"}]
            },
            {
                id: "general_surgery", name: "General Surgery", icon: "fa-scissors", color: "#e67e22", colorDark: "#d35400",
                desc: "Advanced surgical care with minimally invasive techniques.",
                infra: ["Multiple operation theatres", "Laparoscopic equipment", "Post-operative care units", "Surgical ICU"],
                services: ["Laparoscopic Surgery", "Appendectomy", "Hernia Repair", "Gallbladder Surgery", "Thyroid Surgery", "Breast Surgery", "Trauma Surgery"],
                pubStats: [{label: "Publications", value: "35+"}],
                pubHighlights: ["Laparoscopic techniques", "Trauma management"],
                pubYearwise: [{year: "2023", title: "Minimally invasive surgery", journal: "Surgery Today", type: "Research"}],
                research: ["Minimally invasive techniques", "Enhanced recovery protocols"],
                events: ["Annual Surgery Conference"],
                achievements: ["Excellence in Laparoscopic Surgery"],
                gallery: [{name: "Operation Theatre", icon: "fa-procedures", event: "Surgical OT", date: "May 2024"}]
            },
            
            {
                id: "orthopaedics", name: "Orthopaedics", icon: "fa-eye", color: "#00bcd4", colorDark: "#0097a7",
                desc: "Comprehensive eye care with advanced surgical facilities.",
                infra: ["Eye examination rooms", "Operation theatre", "OCT", "Refraction services"],
                services: ["Cataract Surgery", "Glaucoma Treatment", "Retinal Services", "Corneal Procedures", "Pediatric Ophthalmology", "Optical Services"],
                pubStats: [{label: "Publications", value: "22+"}],
                pubHighlights: ["Cataract surgery techniques"],
                pubYearwise: [{year: "2023", title: "Advanced cataract procedures", journal: "Ophthalmology", type: "Research"}],
                research: ["Diabetic retinopathy", "Glaucoma management"],
                events: ["Free Eye Screening Camps"],
                achievements: ["Excellence in Eye Care"],
                gallery: [{name: "Examination Room", icon: "fa-eye-dropper", event: "Eye Clinic", date: "Jul 2024"}]
            },
            {
                id: "obg", name: "OBG", icon: "fa-baby", color: "#e91e63", colorDark: "#c2185b",
                desc: "Comprehensive obstetric and gynecological care with 24/7 maternity services.",
                infra: ["Labor rooms", "C-section OT", "NICU", "Gynecology consultation", "Ultrasound facility"],
                services: ["Antenatal Care", "Normal Delivery", "Cesarean Section", "High-Risk Pregnancy", "Gynecological Surgery", "Infertility Treatment", "Family Planning"],
                pubStats: [{label: "Publications", value: "25+"}],
                pubHighlights: ["High-risk pregnancy management"],
                pubYearwise: [{year: "2023", title: "Maternal health outcomes", journal: "OBG Review", type: "Research"}],
                research: ["Maternal health", "Infertility treatments"],
                events: ["Women's Day Health Camps"],
                achievements: ["Best Maternity Services"],
                gallery: [{name: "Labor Room", icon: "fa-bed", event: "Maternity Ward", date: "Jun 2024"}]
            },
            {
                id: "ophthalmology", name: "Opthalmology", icon: "fa-eye", color: "#00bcd4", colorDark: "#0097a7",
                desc: "Comprehensive eye care with advanced surgical facilities.",
                infra: ["Eye examination rooms", "Operation theatre", "OCT", "Refraction services"],
                services: ["Cataract Surgery", "Glaucoma Treatment", "Retinal Services", "Corneal Procedures", "Pediatric Ophthalmology", "Optical Services"],
                pubStats: [{label: "Publications", value: "22+"}],
                pubHighlights: ["Cataract surgery techniques"],
                pubYearwise: [{year: "2023", title: "Advanced cataract procedures", journal: "Ophthalmology", type: "Research"}],
                research: ["Diabetic retinopathy", "Glaucoma management"],
                events: ["Free Eye Screening Camps"],
                achievements: ["Excellence in Eye Care"],
                gallery: [{name: "Examination Room", icon: "fa-eye-dropper", event: "Eye Clinic", date: "Jul 2024"}]
            },
            {
                id: "orthopedics", name: "Orthopedics", icon: "fa-bone", color: "#795548", colorDark: "#5d4037",
                desc: "Advanced orthopedic care with joint replacement and trauma services.",
                infra: ["Orthopedic OT", "Trauma center", "Physiotherapy unit", "Plaster room"],
                services: ["Joint Replacement", "Arthroscopy", "Trauma Surgery", "Spine Surgery", "Sports Medicine", "Fracture Management", "Pediatric Orthopedics"],
                pubStats: [{label: "Publications", value: "28+"}],
                pubHighlights: ["Joint replacement outcomes"],
                pubYearwise: [{year: "2023", title: "Joint arthroplasty advances", journal: "Orthopedics Today", type: "Research"}],
                research: ["Minimally invasive spine surgery", "Sports injury management"],
                events: ["World Arthritis Day"],
                achievements: ["Excellence in Joint Replacement"],
                gallery: [{name: "Operation Theatre", icon: "fa-procedures", event: "Ortho OT", date: "Aug 2024"}]
            },
            {
                id: "physiotherapy", name: "Physiotherapy", icon: "fa-person-walking", color: "#4caf50", colorDark: "#388e3c",
                desc: "Comprehensive rehabilitation services with modern equipment.",
                infra: ["Exercise therapy room", "Electrotherapy unit", "Hydrotherapy pool", "Rehabilitation gym"],
                services: ["Orthopedic Physiotherapy", "Neurological Rehabilitation", "Sports Physiotherapy", "Pediatric Physiotherapy", "Geriatric Physiotherapy", "Cardiopulmonary Rehabilitation"],
                pubStats: [{label: "Publications", value: "18+"}],
                pubHighlights: ["Rehabilitation protocols"],
                pubYearwise: [{year: "2023", title: "Stroke rehabilitation", journal: "Physiotherapy Journal", type: "Research"}],
                research: ["Stroke rehabilitation", "Sports injury recovery"],
                events: ["World Physiotherapy Day"],
                achievements: ["Excellence in Rehabilitation"],
                gallery: [{name: "Exercise Room", icon: "fa-dumbbell", event: "Physio Unit", date: "Sep 2024"}]
            },
            {
                id: "psychiatry", name: "Psychiatry", icon: "fa-brain", color: "#673ab7", colorDark: "#512da8",
                desc: "Comprehensive mental health services with counseling and therapy.",
                infra: ["Consultation rooms", "Counseling center", "De-addiction unit", "Psychology testing room"],
                services: ["General Psychiatry", "Depression Treatment", "Anxiety Disorders", "Addiction Treatment", "Counseling Services", "Child Psychiatry"],
                pubStats: [{label: "Publications", value: "20+"}],
                pubHighlights: ["Depression management"],
                pubYearwise: [{year: "2023", title: "Mental health interventions", journal: "Psychiatry Review", type: "Research"}],
                research: ["Mental health awareness", "Addiction treatment"],
                events: ["World Mental Health Day"],
                achievements: ["Excellence in Mental Health"],
                gallery: [{name: "Consultation Room", icon: "fa-couch", event: "Psychiatry Dept", date: "Oct 2024"}]
            },
            {
                id: "radiology", name: "Radiology", icon: "fa-x-ray", color: "#607d8b", colorDark: "#455a64",
                desc: "Advanced imaging services with latest technology.",
                infra: ["CT Scanner", "MRI", "Digital X-ray", "Ultrasound", "Mammography", "Fluoroscopy"],
                services: ["CT Scan", "MRI", "X-ray", "Ultrasound", "Mammography", "Interventional Radiology"],
                pubStats: [{label: "Publications", value: "16+"}],
                pubHighlights: ["Imaging techniques"],
                pubYearwise: [{year: "2023", title: "Advanced imaging protocols", journal: "Radiology", type: "Research"}],
                research: ["AI in imaging", "Novel protocols"],
                events: ["Radiology Conference"],
                achievements: ["Excellence in Imaging"],
                gallery: [{name: "CT Room", icon: "fa-circle-radiation", event: "Radiology Setup", date: "Nov 2024"}]
            },
            {
                id: "respiratory", name: "Respiratory Medicine", icon: "fa-lungs", color: "#26c6da", colorDark: "#00acc1",
                desc: "Comprehensive respiratory care with pulmonary function testing.",
                infra: ["Pulmonary function lab", "Bronchoscopy suite", "Respiratory ICU", "Sleep study lab"],
                services: ["Asthma Management", "COPD Care", "TB Treatment", "Bronchoscopy", "Pulmonary Function Tests", "Sleep Studies"],
                pubStats: [{label: "Publications", value: "19+"}],
                pubHighlights: ["COPD management"],
                pubYearwise: [{year: "2023", title: "Asthma treatment protocols", journal: "Respiratory Medicine", type: "Research"}],
                research: ["Asthma protocols", "TB treatment"],
                events: ["World COPD Day"],
                achievements: ["Excellence in Pulmonary Care"],
                gallery: [{name: "PFT Lab", icon: "fa-wind", event: "Respiratory Lab", date: "Dec 2023"}]
            },
            {
                id: "Urology", name: "Opthalmology", icon: "fa-eye", color: "#00bcd4", colorDark: "#0097a7",
                desc: "Comprehensive eye care with advanced surgical facilities.",
                infra: ["Eye examination rooms", "Operation theatre", "OCT", "Refraction services"],
                services: ["Cataract Surgery", "Glaucoma Treatment", "Retinal Services", "Corneal Procedures", "Pediatric Ophthalmology", "Optical Services"],
                pubStats: [{label: "Publications", value: "22+"}],
                pubHighlights: ["Cataract surgery techniques"],
                pubYearwise: [{year: "2023", title: "Advanced cataract procedures", journal: "Ophthalmology", type: "Research"}],
                research: ["Diabetic retinopathy", "Glaucoma management"],
                events: ["Free Eye Screening Camps"],
                achievements: ["Excellence in Eye Care"],
                gallery: [{name: "Examination Room", icon: "fa-eye-dropper", event: "Eye Clinic", date: "Jul 2024"}]
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
                <li><a href="#" onclick="showDept('${d.id}'); return false;">
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
                <div class="detail-header">
                    <div class="detail-header-content">
                        <h2>
                            <div class="icon-large"><i class="fas ${d.icon}"></i></div>
                            ${d.name}
                        </h2>
                        <p>${d.desc}</p>
                    </div>
                </div>
            `;
            
            if (d.infra) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-building"></i> Infrastructure</div>
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
                            <div class="tabs-title"><i class="fas fa-book-medical"></i> Publications</div>
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