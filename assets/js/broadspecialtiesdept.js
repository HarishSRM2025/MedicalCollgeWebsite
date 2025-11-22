
        // Department data with comprehensive information
        const depts = [
            {
                id: "general_medicine", name: "General Medicine", icon:"fa-stethoscope", color: "#3558c9ff", colorDark: "#07268dff",
                desc: "Comprehensive internal medicine care for all age groups.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                 mission:["To provide state-of-art management options for patients with respiratory diseases, according to the latest evidence-based guidelines.","Train the students with focus on bench to bedside practice through rigorous implementation of the course along with innovative teaching-learning practices and to delve into dynamic clinical research.","To create awareness among patients, their caregivers and the general public about basic Respiratory illnesses and their symptoms.","To conduct patient empowerment programs so as to reduce morbidity or mortality and arrive at early diagnosis of chest diseases at an affordable cost."],
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["OPD rooms", "Inpatient wards", "ICU", "Procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services_desc:"The Department offers diagnostic and consultative services for patient management across various specialties",
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
                "id": "emergency",
                "name": "Emergency Medicine",
                "icon": "fa-truck-medical",
                "color": "#ef5350",
                "colorDark": "#d32f2f",

                "desc": "The Department of Emergency Medicine provides immediate and comprehensive emergency care with rapid assessment, stabilization, and treatment. The department ensures seamless coordination, advanced life-saving interventions and multi-disciplinary care 24/7.",

                "vision": "We provide excellent, accessible and affordable emergency care to all our patients compassionately, holistic education to the future doctors and progressive research.",

                "mission": [
                    "To provide high quality and low cost emergency healthcare at international standards.",
                    "Provide state-of-the-art education and mentorship to the future emergency physicians.",
                    "To create awareness among patients, their caregivers and the general public about basic emergencies and first aid.",
                    "To grow as a Centre of excellence and leader in quality emergency care."
                ],

                "objectives": [
                    "Aims to ensure rapid triage, accurate assessment and timely stabilization of all patients using national and international compliant protocols.",
                    "To encourage UG & PG students for research activities in various dimensions of Emergency Medicine.",
                    "To ensure 24/7 availability of trained staff and essential services with coordinated multidisciplinary care."
                ],

                "infra_desc": "The department is equipped with state-of-the-art facilities, teaching units and diagnostic services to support comprehensive emergency care.",
                "infra": [
                    "40-bedded emergency care facility",
                    "Resuscitation ICU",
                    "Isolation ward",
                    "Emergency ward",
                    "Minor OT",
                    "Emergency OT",
                    "Dedicated X-ray and CT units",
                    "24×7 dedicated automated laboratory services"
                ],

                "teaching_research_infra": [
                    "Seminar rooms and demo rooms",
                    "Department library / e-library",
                    "Museum",
                    "Research lab"
                ],

                "faculty_desc": "The department has a team of qualified and experienced faculty committed to academic excellence, research, and clinical service.",
                "faculty": [
                    {"name": "Dr.S. Srihari", "designation": "Professor", "exp": "25"},
                    {"name": "Dr.R. Ajith Kumar", "designation": "Assistant Professor", "exp": "5"},
                    {"name": "Dr.SU. Banu Rekha", "designation": "Senior Resident", "exp": "1"}
                ],

                "services_desc": "The Department offers diagnostic and consultative services for patient management across various specialties.",
                "services": [
                    "Resuscitation of emergency patients",
                    "Management of trauma patients",
                    "Management of acute coronary syndrome",
                    "Management of acute stroke patients",
                    "Central venous cannulation and intercostal drain",
                    "Pericardiocentesis",
                    "Point of care ultrasound",
                    "Treatment of obstructive & restrictive airway diseases",
                    "Treatment of sepsis and septic shock",
                    "Management of pulmonary embolism",
                    "Management of poisoning patients"
                ],

                "facilities": [
                    "Point of care ultrasound",
                    "Echocardiography",
                    "Bronchoscopy",
                    "Arterial blood gas analysis",
                    "Intercostal tube drainage",
                    "Ultrasound-guided pleural fluid aspiration",
                    "Non-invasive ventilation",
                    "Invasive ventilation"
                ],

                "publication_overview": "Faculty members actively publish research papers in national and international journals, contributing to advancements in emergency medicine and clinical toxicology.",
                "pubStats": [
                    { "label": "Overall", "value": "6" },
                    { "label": "International", "value": "4" },
                    { "label": "National", "value": "2" }
                ],

                "pubHighlights": [
                    "Predicting disease severity in bronchiectasis, Bronchial asthma and COPD"
                ],

                "pubYearwise": [
                    {
                    "year": "2021",
                    "title": "2,4-Dichlorophenoxyacetic Acid Poisoning Mimicking as Organophosphorus Poisoning",
                    "journal": "Cureus",
                    "type": "International journal"
                    },
                    {
                    "year": "2024",
                    "title": "One and Half Syndrome in a Case of Brainstem Bleed",
                    "journal": "Cureus",
                    "type": "International journal"
                    },
                    {
                    "year": "2024",
                    "title": "Mechanodefibrillator Dissociation due to Prolonged Sinus Arrest",
                    "journal": "Visual Journal of Emergency Medicine",
                    "type": "International journal"
                    },
                    {
                    "year": "2024",
                    "title": "Trembling Voice Pointing Towards Heart – The Ortner Syndrome",
                    "journal": "Visual Journal of Emergency Medicine",
                    "type": "International journal"
                    },
                    {
                    "year": "2024",
                    "title": "Stanford A Aortic Dissection Presenting as a Triple Mimic",
                    "journal": "Journal of Emergency Trauma and Shock",
                    "type": "National journal"
                    },
                    {
                    "year": "2024",
                    "title": "Curious Case of Dimethoate Poisoning with Early Onset Intermediate Syndrome",
                    "journal": "Journal of Clinical Toxicology",
                    "type": "National journal"
                    }
                ],

                "research_desc": "The department encourages clinical and basic research with multidisciplinary collaboration.",
                "research": [
                    "Study on pattern of hospitalization of chronic kidney disease patients in the emergency department of a tertiary care hospital.",
                    "Study on pattern and outcome of acute poisoning in a tertiary care centre."
                ],

                "events_desc": "The Department conducts regular academic and community outreach programs.",
                "events": [
                    "Trauma Uncovered – Radiology (Guest Lecture)",
                    "Rapidly Changing Face of AI in Healthcare (Guest Lecture)",
                    "CPR Awareness Programme Week (CME & Workshop)"
                ],

                "achievements_desc": "",
                "achievements": [],

                "gallery": [
                    {
                    "name": "Trauma Uncovered – Radiology",
                    "icon": "fa-hospital",
                    "event": "Emergency Medicine",
                    "path": "Emergency_Medicine/1.jpg",
                    "date": "02 Jul 2025"
                    },
                    {
                    "name": "Rapidly Changing Face of AI in Healthcare",
                    "icon": "fa-hospital",
                    "event": "Emergency Medicine",
                    "path": "Emergency_Medicine/2.jpg",
                    "date": "02 Jul 2025"
                    },
                    {
                    "name": "CPR Awareness Programme Week",
                    "icon": "fa-hospital",
                    "event": "Emergency Medicine",
                    "path": "Emergency_Medicine/3.jpg",
                    "date": "13 Jul 2025 - 17 Jul 2025"
                    }
                ]
            }
            ,
            {
                id: "pediatrics", name: "Pediatrics", icon: "fa-child", color: "#ff9800", colorDark: "#f57c00",
                desc: "Comprehensive child healthcare with NICU and PICU facilities.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                 mission:["To provide state-of-art management options for patients with respiratory diseases, according to the latest evidence-based guidelines.","Train the students with focus on bench to bedside practice through rigorous implementation of the course along with innovative teaching-learning practices and to delve into dynamic clinical research.","To create awareness among patients, their caregivers and the general public about basic Respiratory illnesses and their symptoms.","To conduct patient empowerment programs so as to reduce morbidity or mortality and arrive at early diagnosis of chest diseases at an affordable cost."],
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["Pediatric OPD", "NICU", "PICU", "Immunization clinic"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services_desc:"The Department offers diagnostic and consultative services for patient management across various specialties",
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
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                 mission:["To provide state-of-art management options for patients with respiratory diseases, according to the latest evidence-based guidelines.","Train the students with focus on bench to bedside practice through rigorous implementation of the course along with innovative teaching-learning practices and to delve into dynamic clinical research.","To create awareness among patients, their caregivers and the general public about basic Respiratory illnesses and their symptoms.","To conduct patient empowerment programs so as to reduce morbidity or mortality and arrive at early diagnosis of chest diseases at an affordable cost."],
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["Dermatology consultation rooms", "Laser therapy unit", "Phototherapy equipment", "Dermoscopy facility", "Minor procedure room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services_desc:"The Department offers diagnostic and consultative services for patient management across various specialties",
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
                id: "psychiatry", name: "Psychiatry", icon: "fa-brain", color: "#673ab7", colorDark: "#512da8",
                desc: "Comprehensive mental health services with counseling and therapy.",
                vision:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque impedit earum, exercitationem eligendi saepe magni iure, voluptatum ipsam cumque adipisci quasi asperiores debitis dolor, cum doloribus quod perspiciatis non modi!",
                 mission:["To provide state-of-art management options for patients with respiratory diseases, according to the latest evidence-based guidelines.","Train the students with focus on bench to bedside practice through rigorous implementation of the course along with innovative teaching-learning practices and to delve into dynamic clinical research.","To create awareness among patients, their caregivers and the general public about basic Respiratory illnesses and their symptoms.","To conduct patient empowerment programs so as to reduce morbidity or mortality and arrive at early diagnosis of chest diseases at an affordable cost."],
                objectives:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro."],
                infra: ["Consultation rooms", "Counseling center", "De-addiction unit", "Psychology testing room"],
                faculty: [{name: "Ram", designation: "Assistant professor", exp: "5"},{name: "Sam", designation: "Assistant professor", exp: "5"},{name: "John", designation: "Assistant professor", exp: "5"}],
                services_desc:"The Department offers diagnostic and consultative services for patient management across various specialties",
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
                id: "respiratory", name: "Respiratory Medicine", icon: "fa-lungs", color: "#26c6da", colorDark: "#00acc1",
                desc: "Respiratory Medicine Department specializes in the diagnosis, treatment and prevention of diseases affecting the lungs and entire respiratory system. Our commitment is to manage a comprehensive range of conditions- from common respiratory ailments to complex, life-threatening diseases- with expertise and compassion.",
                vision:"We provide outstanding clinical care, which is comprehensive, affordable, accessible and delivered compassionately, to the patient & nurture the students with knowledge, skills, and attitude essential to make them professional, compassionate & competent physician.",
                mission:["To provide state-of-art management options for patients with respiratory diseases, according to the latest evidence-based guidelines.","Train the students with focus on bench to bedside practice through rigorous implementation of the course along with innovative teaching-learning practices and to delve into dynamic clinical research.","To create awareness among patients, their caregivers and the general public about basic Respiratory illnesses and their symptoms.","To conduct patient empowerment programs so as to reduce morbidity or mortality and arrive at early diagnosis of chest diseases at an affordable cost."],
                objectives:["To conduct awareness & outreach programs to medically unreached populations.","To encourage UG & PG students for research activities in various dimension of respiratory medicine.","To create highly structured and quality respiratory care for a fully-fledged pulmonary rehabilitation program."],
                infra: ["Spirometry and DLCO", "Flexible video Bronchoscope.", "Facilities for Thoracoscopy","Respiratory intensive care unit (RICU)","Specialty clinics and counselling rooms","Lecture Halls and seminar rooms","Department library/ e-library"],
                faculty: [{name: "Dr.K.G.RanganathaMallan", designation: "Professor", exp: "25"},{name: "Dr.R.VelRaj", designation: "Assistant Professor", exp: "17"},{name: "Dr.A.Anusuya", designation: "Assistant Professor", exp: "11"},{name: "Dr.B.Prabhu", designation: "Senior Resident", exp: "7"},{name: "Dr.Parath Kumar.M.C", designation: "Assistant Professor", exp: "5"}],
                services_desc:"The Department offers diagnostic and consultative services for patient management across various specialties",
                services: ["Treatment of obstructive & restrictive airway diseases", "Treatment of dust or smoke related airway diseases", "Treatment of lung cancer and  its manifestations", "Treatment of Tuberculosis", "Treatment of Post Covid sequelae", "Treatment of sleep related diseases.","Vaccinations to prevent lung infections like Influenza  and Pneumococcal  vaccines","Breathing exercises and chest physiotherapy","Pulmonary function tests  (Spirometry  & DLCO)","Bronchial wash and lavage","Trans bronchial lung biopsy (TBLB), Endobronchial Biopsy (EBB)","Medical Thoracoscopy","Inter costal tube drainage","Ultrasound guided pleural fluid aspiration","Non- invasive ventilation","Invasive Ventilation"],
                publication_overview:"Faculty members actively publish research papers in national and international journals, contributing to advancements in diagnostic pathology and laboratory medicine.",
                pubStats: [
                    {label: "Overall", value: "4"},
                    {label: "International", value: "3"},
                    {label: "National", value: "1"},

                ],
                pubHighlights: ["Predicting disease severity in bronchiectasis, Bronchial asthma and COPD"],
                pubYearwise: [
                    {year: "2025", title: "Role of serum Albumin in predicting disease severity and hospitalization in patients with Non-Cystic Fibrosis Bronchiectasis", journal: "Journal of Xidian University", type: "International journal"},
                    {year: "2025", title: "A study on the prevalence of suboptimal peak inspiratory flow and its associated risk factors among COPD patients", journal: "Journal of Academic Medicine and Pharmacy (JAMP)", type: "International journal"},
                    {year: "2024", title: "Prevalence and Factors Affecting the Optimal and Non-optimal Peak Inspiratory Flow Rate in Stable and Exacerbation Phases of Chronic Obstructive Pulmonary Disease and Bronchial Asthma in India", journal: "CUREUS ", type: "International journal"},
                    {year: "2024", title: "DECAF Score and BAP-65 Score as Tools for Prediction of Clinical Outcome in Acute Exacerbation of Chronic Obstructive Pulmonary Disease", journal: "SCOPE", type: "National journal"},
                ],
                research_desc:"The department encourages clinical and basic research with multidisciplinary collaboration.",
                research: ["To correlate MDCT severity score of bronchiectasis and FEV1 in spirometry.","A study on monitoring the effectiveness of Noninvasive Ventilation in Managing Type 2 Respiratory Failure"," The FEV1/ DLCO ratio as an effective predictor of severity and survival in COPD associated pulmonary hypertension","Relationship between serum vitamin D3 and forced expiratory volume in patients with Chronic Obstructive Pulmonary Disorder(COPD)","Role of serum Albumin in predicting disease severity and hospitalization in patients with Non-Cystic Fibrosis   Bronchiectasis"],
                events: ["Lung Cancer (GUEST LECTURE)","Non-Invasive Ventilation (CME & WORKSHOP)","Smoking Cessation (GUEST LECTURE & AWARENESS PROGRAM)","TB (GUEST LECTURE & STATE LEVEL QUIZ)","Bronchial Asthma (CME & QUIZ)","Obstructive Sleep Apnoea (CME)"],
                events_desc:"The Department conducts regular academic and community outreach programs.",
                achievements: ["Postgraduate student’s research selected for ICMR grant."],
                achievements_desc:"Recognition and awards for excellence in healthcare.",

                gallery: [
                    {name: "World Asthma Day – Asthma Education Empowers", icon: "fa-wind", event: "Respiratory Lab",path:"Respiratory_Medicine/1.jpg", date: "07 May 2024"},
                    {name: "CME on Tuberculosis “Pulmo Prism” for World TB day - 2025", icon: "fa-wind", event: "Respiratory Lab",path:"Respiratory_Medicine/2.jpg", date: "27 Mar 2025"},
                    {name: "World No Tobacco Day – 2025 “Bright Products Dark Intentions, Unmasking The Appeal”", icon: "fa-wind", event: "Respiratory Lab",path:"Respiratory_Medicine/3.jpg", date: "03 Jun 2025"},
                    {name: "Symposium on “Recent trends in the management of Lung Cancer”", icon: "fa-wind", event: "Respiratory Lab",path:"Respiratory_Medicine/4.jpg", date: "29 Aug 2025"}
                ],
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
                <li ><a href="#${d.id}" onclick="showDept('${d.id}');">
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
            if (d.vision) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title"><i class="fas fa-bullseye"></i> Vision & Mission</div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <h4>Vision</h4>
                                <br>
                                <ul>${d.vision}</ul>
                                <br><br>
                                <h4>Mission</h4>
                                <br>
                                <ul>${d.mission.map(f => `<li>${f}</li>`).join('')}</ul>
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
                                <p>${d.services_desc}</p>
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
                                <p>${d.events_desc}</p>
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
                                <p>${d.gallery_desc?d.gallery_desc:"Visual documentation of our facilities, events, and achievements."}</p>
                                <div class="gallery-grid">
                                    ${d.gallery.map(img => `
                                        <div class="gallery-item">
                                            <div class="gallery-placeholder">
                                                <img src="./assets/images/gallery/${img.path}">
                                            </div>
                                            <div class="gallery-overlay">
                                                <div class="gallery-overlay-title">${img.name}</div>
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