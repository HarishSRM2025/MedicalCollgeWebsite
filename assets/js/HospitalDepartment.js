const departmentsData = {
            "anesthesia": {
                id: "anesthesia",
                name: "Anesthesia",
                icon: "fa-syringe",
                color: "#667eea",
                colorDark: "#5568d3",
                shortDescription: "Advanced anesthesia services for all surgical procedures with expert pain management and critical care support.",
                infrastructure: {
                    description: "State-of-the-art facilities ensuring highest standards of patient care and safety.",
                    facilities: [
                        "14 fully functional operation theatres with 6 Workstations",
                        "Laminar flow with HEPA filters in all operation theatres",
                        "Well-furnished library with extensive medical literature",
                        "24 hour Internet facility for research and learning",
                        "Demo hall with 42 inches LED TV for presentations",
                        "Museum showcasing evolution of anesthesia equipment",
                        "Well-equipped preoperative rooms for patient preparation",
                        "Well equipped recovery rooms with ventilators",
                        "Fibreoptic Intubation Bronchoscope for difficult airways"
                    ]
                },
                services: {
                    description: "Comprehensive anesthesia services catering to all surgical specialties.",
                    list: [
                        "Anesthesia for all types of surgeries",
                        "Sedation in ICU, CT Scan & MRI",
                        "Airway management in Casualty & ICU",
                        "Ventilation Management in ICU",
                        "Central Venous Cannulations",
                        "Pain Relief Procedures",
                        "Monitored Anesthesia Care",
                        "Diagnostic Lumbar Punctures",
                        "CPR Training Programs",
                        "Integrated Teaching Programs"
                    ]
                },
                publications: {
                    description: "Significant contributions to medical literature across various categories.",
                    tabs: [
                        {
                            id: "international",
                            title: "International",
                            stats: [
                                { label: "Total Publications", value: "25+" },
                                { label: "Research Papers", value: "18" },
                                { label: "Case Reports", value: "7" }
                            ],
                            papers: [
                                "Novel approaches to perioperative pain management in cardiac surgery",
                                "Advances in regional anesthesia techniques for orthopedic procedures",
                                "Dexmedetomidine in pediatric anesthesia: A comprehensive review"
                            ]
                        },
                        {
                            id: "national",
                            title: "National",
                            stats: [
                                { label: "Total Publications", value: "40+" },
                                { label: "Research Papers", value: "28" },
                                { label: "Case Studies", value: "12" }
                            ],
                            papers: [
                                "Critical care management in post-operative neurosurgical patients",
                                "Comparison of different anesthetic techniques in laparoscopic surgeries",
                                "Management of difficult airway in emergency settings"
                            ]
                        },
                        {
                            id: "reviews",
                            title: "Review Articles",
                            stats: [
                                { label: "Total Reviews", value: "15+" },
                                { label: "Systematic Reviews", value: "8" },
                                { label: "Meta-analyses", value: "7" }
                            ],
                            papers: [
                                "Systematic review of anesthetic management in renal transplants",
                                "Meta-analysis of ultrasound-guided nerve blocks",
                                "Current trends in obstetric anesthesia"
                            ]
                        }
                    ]
                },
                research: {
                    description: "Cutting-edge research advancing anesthesiology.",
                    ongoing: [
                        "The clinical effects of intramuscular Dexmedetomidine as premedication in elective laparoscopic surgeries - Dr.B.Sundari",
                        "A Study of hemodynamic stress response among cases receiving intravenous Dexmedetomidine - Dr.A.Siva Shanmugam",
                        "Comparative Study To Determine The Efficacy Of Etomidate Vs Midazolam - Dr.Dhivalakar.S",
                        "Study To Assess The Efficacy Of EMLA CREAM In Pediatric Spinal Anesthesia - Dr.T.R Mehala"
                    ]
                },
                events: {
                    description: "Regular conferences and training programs.",
                    list: [
                        "CME on Pain Management - September 2014",
                        "CME on Ultrasonographic Anatomy - April 2016",
                        "South Zone ISA meet - August 2017 (965 participants)",
                        "SONAMASTER 2019 CME Program - September 2019"
                    ]
                },
                achievements: {
                    description: "Recognition and awards received.",
                    list: [
                        "Dr.T.K Seetha Devi - Achiever Award by Lions Club International (2008)",
                        "Dr.T.K Seetha Devi - Life-Time Achievement Award at PREPP (2013)",
                        "5+ successful renal transplants completed"
                    ]
                },
                gallery: {
                    description: "Visual documentation of facilities and events.",
                    images: [
                        { name: "Operation Theatre 1", icon: "fa-procedures" },
                        { name: "Operation Theatre 2", icon: "fa-bed-pulse" },
                        { name: "Anesthesia Museum", icon: "fa-landmark" },
                        { name: "Department Library", icon: "fa-book-medical" },
                        { name: "World Anesthesia Day 2023", icon: "fa-calendar-day" },
                        { name: "CME Conference Hall", icon: "fa-chalkboard-user" },
                        { name: "Recovery Room", icon: "fa-heart-pulse" },
                        { name: "Equipment Display", icon: "fa-display" }
                    ]
                }
            },
            "dental": {
                id: "dental",
                name: "Dental Surgery",
                icon: "fa-tooth",
                color: "#00b894",
                colorDark: "#00a080",
                shortDescription: "Comprehensive dental care with modern equipment for all oral and maxillofacial procedures.",
                infrastructure: {
                    description: "Modern dental facility with advanced equipment.",
                    facilities: [
                        "Fully equipped dental operation theatre",
                        "Digital X-ray and imaging facilities",
                        "Modern sterilization equipment",
                        "Specialized dental chairs",
                        "Oral surgery unit",
                        "Orthodontic treatment facility",
                        "Prosthodontic laboratory"
                    ]
                },
                services: {
                    description: "Complete range of dental and oral healthcare services.",
                    list: [
                        "General Dentistry", "Oral Surgery", "Root Canal Treatment",
                        "Dental Fillings", "Cosmetic Dentistry", "Orthodontics",
                        "Dental Implants", "Crown and Bridge Work", "Dentures",
                        "Periodontal Treatment", "Pediatric Dentistry", "Maxillofacial Surgery"
                    ]
                },
                publications: {
                    description: "Research contributions in dental sciences.",
                    tabs: [
                        {
                            id: "international",
                            title: "International",
                            stats: [
                                { label: "Publications", value: "10+" },
                                { label: "Impact Factor", value: "3.5" }
                            ],
                            papers: ["Advanced dental implantology techniques", "Biomaterials in restoration"]
                        },
                        {
                            id: "national",
                            title: "National",
                            stats: [
                                { label: "Publications", value: "25+" },
                                { label: "Case Studies", value: "15+" }
                            ],
                            papers: ["Minimally invasive oral surgery", "Digital dentistry advances"]
                        }
                    ]
                },
                research: {
                    description: "Ongoing research in dental surgery.",
                    ongoing: [
                        "Advanced techniques in dental implantology",
                        "Minimally invasive oral surgery procedures",
                        "Biomaterials in dental restoration",
                        "Digital dentistry and CAD/CAM technology"
                    ]
                },
                events: {
                    description: "Regular dental health camps.",
                    list: ["Annual Dental Health Camp", "School Dental Screening Programs"]
                },
                achievements: {
                    description: "Excellence in dental education.",
                    list: ["Best Dental Department Award - State Level"]
                },
                gallery: {
                    description: "Department facilities.",
                    images: [
                        { name: "Dental OPD", icon: "fa-clinic-medical" },
                        { name: "Operation Theatre", icon: "fa-procedures" },
                        { name: "Laboratory", icon: "fa-flask" },
                        { name: "X-ray Room", icon: "fa-x-ray" }
                    ]
                }
            },
            "dermatology": {
                id: "dermatology",
                name: "Dermatology",
                icon: "fa-hand-dots",
                color: "#e74c3c",
                colorDark: "#c0392b",
                shortDescription: "Expert care for skin, hair, and nail conditions with advanced cosmetic dermatology services.",
                infrastructure: {
                    description: "Comprehensive dermatology facilities with modern equipment.",
                    facilities: [
                        "Dermatology consultation rooms",
                        "Laser therapy unit",
                        "Phototherapy equipment",
                        "Dermoscopy facility",
                        "Minor procedure room",
                        "Cosmetic dermatology suite"
                    ]
                },
                services: {
                    description: "Complete dermatological care services.",
                    list: [
                        "General Dermatology", "Cosmetic Dermatology", "Laser Treatments",
                        "Hair Restoration", "Acne Treatment", "Psoriasis Care",
                        "Vitiligo Treatment", "Skin Cancer Screening", "Chemical Peels",
                        "Botox and Fillers", "Phototherapy", "Cryotherapy"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "international",
                            title: "International",
                            stats: [{ label: "Publications", value: "12+" }],
                            papers: ["Advances in psoriasis treatment"]
                        }
                    ]
                },
                research: {
                    description: "Dermatology research initiatives.",
                    ongoing: ["Novel treatments for vitiligo", "Laser therapy in acne scars"]
                },
                events: {
                    description: "Skin health awareness programs.",
                    list: ["Annual Skin Cancer Screening Camp", "World Psoriasis Day Events"]
                },
                achievements: {
                    description: "Recognition in dermatology.",
                    list: ["Excellence in Cosmetic Dermatology Award"]
                },
                gallery: {
                    description: "Dermatology facilities.",
                    images: [
                        { name: "Consultation Room", icon: "fa-stethoscope" },
                        { name: "Laser Unit", icon: "fa-bolt" },
                        { name: "Treatment Area", icon: "fa-bed" }
                    ]
                }
            },
            "diagnostic": {
                id: "diagnostic",
                name: "Diagnostic Services",
                icon: "fa-microscope",
                color: "#9b59b6",
                colorDark: "#8e44ad",
                shortDescription: "Advanced diagnostic facilities with state-of-the-art imaging and laboratory services.",
                infrastructure: {
                    description: "Comprehensive diagnostic infrastructure.",
                    facilities: [
                        "64-slice CT Scanner",
                        "1.5 Tesla MRI",
                        "Digital X-ray",
                        "Ultrasound with Doppler",
                        "Mammography unit",
                        "Clinical laboratory",
                        "Pathology services"
                    ]
                },
                services: {
                    description: "Complete diagnostic services.",
                    list: [
                        "CT Scan", "MRI", "X-ray", "Ultrasound", "Mammography",
                        "ECG", "Blood Tests", "Pathology", "Microbiology",
                        "Biochemistry", "Hematology", "Histopathology"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "15+" }],
                            papers: ["Advanced imaging in diagnosis"]
                        }
                    ]
                },
                research: {
                    description: "Diagnostic research.",
                    ongoing: ["AI in diagnostic imaging", "Novel biomarkers"]
                },
                events: {
                    description: "Diagnostic workshops.",
                    list: ["Annual Radiology Conference"]
                },
                achievements: {
                    description: "Quality certifications.",
                    list: ["NABL Accreditation"]
                },
                gallery: {
                    description: "Diagnostic facilities.",
                    images: [
                        { name: "CT Scanner", icon: "fa-circle-radiation" },
                        { name: "MRI Room", icon: "fa-magnet" },
                        { name: "Laboratory", icon: "fa-vials" }
                    ]
                }
            },
            "emergency": {
                id: "emergency",
                name: "Emergency Medicine",
                icon: "fa-truck-medical",
                color: "#ff6b6b",
                colorDark: "#ee5a52",
                shortDescription: "24/7 emergency care with rapid response teams and advanced life support systems.",
                infrastructure: {
                    description: "State-of-the-art emergency department.",
                    facilities: [
                        "24/7 Emergency Department",
                        "Trauma bay with advanced equipment",
                        "Emergency operation theatre",
                        "Critical care monitoring systems",
                        "Ambulance services with paramedics"
                    ]
                },
                services: {
                    description: "Comprehensive emergency services.",
                    list: [
                        "24/7 Emergency Services", "Trauma Care", "Cardiac Emergency",
                        "Stroke Care", "Poisoning Management", "Emergency Surgery",
                        "Pediatric Emergency", "Obstetric Emergencies", "Ambulance Services"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "18+" }],
                            papers: ["Trauma management protocols"]
                        }
                    ]
                },
                research: {
                    description: "Emergency medicine research.",
                    ongoing: ["Emergency response optimization", "Sepsis management"]
                },
                events: {
                    description: "Emergency training programs.",
                    list: ["BLS/ACLS Training", "Disaster Management Drills"]
                },
                achievements: {
                    description: "Emergency service excellence.",
                    list: ["Best Emergency Response Award"]
                },
                gallery: {
                    description: "Emergency facilities.",
                    images: [
                        { name: "Emergency Department", icon: "fa-hospital" },
                        { name: "Trauma Bay", icon: "fa-bed-pulse" },
                        { name: "Ambulance", icon: "fa-ambulance" }
                    ]
                }
            },
            "ent": {
                id: "ent",
                name: "ENT",
                icon: "fa-ear-listen",
                color: "#3498db",
                colorDark: "#2980b9",
                shortDescription: "Comprehensive ear, nose, and throat care with advanced surgical facilities.",
                infrastructure: {
                    description: "Modern ENT facilities.",
                    facilities: [
                        "ENT examination rooms",
                        "Endoscopy suite",
                        "Audiometry room",
                        "Minor procedure room",
                        "ENT operation theatre"
                    ]
                },
                services: {
                    description: "Complete ENT services.",
                    list: [
                        "General ENT", "Endoscopic Sinus Surgery", "Tonsillectomy",
                        "Adenoidectomy", "Hearing Tests", "Voice Disorders",
                        "Sleep Apnea Treatment", "Head & Neck Surgery"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "20+" }],
                            papers: ["Endoscopic sinus surgery techniques"]
                        }
                    ]
                },
                research: {
                    description: "ENT research.",
                    ongoing: ["Voice restoration techniques", "Cochlear implants"]
                },
                events: {
                    description: "ENT programs.",
                    list: ["World Hearing Day Events"]
                },
                achievements: {
                    description: "ENT excellence.",
                    list: ["Excellence in ENT Surgery"]
                },
                gallery: {
                    description: "ENT facilities.",
                    images: [
                        { name: "Endoscopy Suite", icon: "fa-video" },
                        { name: "Audiometry", icon: "fa-volume-high" }
                    ]
                }
            },
            "general_medicine": {
                id: "general_medicine",
                name: "General Medicine",
                icon: "fa-user-doctor",
                color: "#27ae60",
                colorDark: "#229954",
                shortDescription: "Comprehensive internal medicine care for all age groups.",
                infrastructure: {
                    description: "Well-equipped medicine department.",
                    facilities: [
                        "Outpatient consultation rooms",
                        "Inpatient wards",
                        "ICU facilities",
                        "Procedure room"
                    ]
                },
                services: {
                    description: "General medicine services.",
                    list: [
                        "General Consultation", "Diabetes Management", "Hypertension Care",
                        "Infectious Diseases", "Respiratory Medicine", "Gastroenterology",
                        "Cardiology", "Nephrology", "Endocrinology"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "30+" }],
                            papers: ["Diabetes management protocols"]
                        }
                    ]
                },
                research: {
                    description: "Internal medicine research.",
                    ongoing: ["Chronic disease management", "Infectious disease protocols"]
                },
                events: {
                    description: "Health awareness programs.",
                    list: ["World Diabetes Day", "Hypertension Awareness Camps"]
                },
                achievements: {
                    description: "Medicine excellence.",
                    list: ["Best Medicine Department"]
                },
                gallery: {
                    description: "Medicine facilities.",
                    images: [
                        { name: "OPD", icon: "fa-clinic-medical" },
                        { name: "Ward", icon: "fa-bed" }
                    ]
                }
            },
            "general_surgery": {
                id: "general_surgery",
                name: "General Surgery",
                icon: "fa-scissors",
                color: "#e67e22",
                colorDark: "#d35400",
                shortDescription: "Advanced surgical care with minimally invasive techniques.",
                infrastructure: {
                    description: "Modern surgical facilities.",
                    facilities: [
                        "Multiple operation theatres",
                        "Laparoscopic equipment",
                        "Post-operative care units",
                        "Surgical ICU"
                    ]
                },
                services: {
                    description: "Comprehensive surgical services.",
                    list: [
                        "Laparoscopic Surgery", "Appendectomy", "Hernia Repair",
                        "Gallbladder Surgery", "Thyroid Surgery", "Breast Surgery",
                        "Trauma Surgery", "Emergency Surgery"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "35+" }],
                            papers: ["Laparoscopic techniques", "Trauma management"]
                        }
                    ]
                },
                research: {
                    description: "Surgical research.",
                    ongoing: ["Minimally invasive surgery", "Enhanced recovery protocols"]
                },
                events: {
                    description: "Surgical conferences.",
                    list: ["Annual Surgery Conference"]
                },
                achievements: {
                    description: "Surgical excellence.",
                    list: ["Excellence in Laparoscopic Surgery"]
                },
                gallery: {
                    description: "Surgery facilities.",
                    images: [
                        { name: "Operation Theatre", icon: "fa-procedures" },
                        { name: "Surgical ICU", icon: "fa-heartbeat" }
                    ]
                }
            },
            "obg": {
                id: "obg",
                name: "OBG",
                icon: "fa-baby",
                color: "#e91e63",
                colorDark: "#c2185b",
                shortDescription: "Comprehensive obstetric and gynecological care with 24/7 maternity services.",
                infrastructure: {
                    description: "Modern maternity facilities.",
                    facilities: [
                        "Labor rooms",
                        "Operation theatre for C-sections",
                        "NICU",
                        "Gynecology consultation rooms",
                        "Ultrasound facility"
                    ]
                },
                services: {
                    description: "Complete OBG services.",
                    list: [
                        "Antenatal Care", "Normal Delivery", "Cesarean Section",
                        "High-Risk Pregnancy", "Gynecological Surgery", "Infertility Treatment",
                        "Family Planning", "Menopause Management"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "25+" }],
                            papers: ["High-risk pregnancy management"]
                        }
                    ]
                },
                research: {
                    description: "OBG research.",
                    ongoing: ["Maternal health outcomes", "Infertility treatments"]
                },
                events: {
                    description: "Women's health programs.",
                    list: ["World Women's Day Health Camps"]
                },
                achievements: {
                    description: "OBG excellence.",
                    list: ["Best Maternity Services"]
                },
                gallery: {
                    description: "Maternity facilities.",
                    images: [
                        { name: "Labor Room", icon: "fa-bed" },
                        { name: "NICU", icon: "fa-baby-carriage" }
                    ]
                }
            },
            "ophthalmology": {
                id: "ophthalmology",
                name: "Ophthalmology",
                icon: "fa-eye",
                color: "#00bcd4",
                colorDark: "#0097a7",
                shortDescription: "Comprehensive eye care with advanced surgical facilities.",
                infrastructure: {
                    description: "Modern eye care facilities.",
                    facilities: [
                        "Eye examination rooms",
                        "Operation theatre",
                        "Optical coherence tomography",
                        "Refraction services"
                    ]
                },
                services: {
                    description: "Complete eye care services.",
                    list: [
                        "Cataract Surgery", "Glaucoma Treatment", "Retinal Services",
                        "Corneal Procedures", "Pediatric Ophthalmology", "Optical Services"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "22+" }],
                            papers: ["Cataract surgery techniques"]
                        }
                    ]
                },
                research: {
                    description: "Ophthalmology research.",
                    ongoing: ["Diabetic retinopathy", "Glaucoma management"]
                },
                events: {
                    description: "Eye health programs.",
                    list: ["Free Eye Screening Camps"]
                },
                achievements: {
                    description: "Ophthalmology excellence.",
                    list: ["Excellence in Eye Care"]
                },
                gallery: {
                    description: "Eye care facilities.",
                    images: [
                        { name: "Examination Room", icon: "fa-eye-dropper" },
                        { name: "Operation Theatre", icon: "fa-procedures" }
                    ]
                }
            },
            "orthopedics": {
                id: "orthopedics",
                name: "Orthopedics",
                icon: "fa-bone",
                color: "#795548",
                colorDark: "#5d4037",
                shortDescription: "Advanced orthopedic care with joint replacement and trauma services.",
                infrastructure: {
                    description: "Modern orthopedic facilities.",
                    facilities: [
                        "Orthopedic operation theatres",
                        "Trauma center",
                        "Physiotherapy unit",
                        "Plaster room"
                    ]
                },
                services: {
                    description: "Comprehensive orthopedic services.",
                    list: [
                        "Joint Replacement", "Arthroscopy", "Trauma Surgery",
                        "Spine Surgery", "Sports Medicine", "Fracture Management",
                        "Pediatric Orthopedics"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "28+" }],
                            papers: ["Joint replacement outcomes"]
                        }
                    ]
                },
                research: {
                    description: "Orthopedic research.",
                    ongoing: ["Minimally invasive spine surgery", "Sports injury management"]
                },
                events: {
                    description: "Orthopedic programs.",
                    list: ["World Arthritis Day Camps"]
                },
                achievements: {
                    description: "Orthopedic excellence.",
                    list: ["Excellence in Joint Replacement"]
                },
                gallery: {
                    description: "Orthopedic facilities.",
                    images: [
                        { name: "Operation Theatre", icon: "fa-procedures" },
                        { name: "Physiotherapy", icon: "fa-dumbbell" }
                    ]
                }
            },
            "pediatrics": {
                id: "pediatrics",
                name: "Pediatrics",
                icon: "fa-child",
                color: "#ff9800",
                colorDark: "#f57c00",
                shortDescription: "Comprehensive child healthcare with NICU and pediatric ICU facilities.",
                infrastructure: {
                    description: "Child-friendly facilities.",
                    facilities: [
                        "Pediatric OPD",
                        "NICU",
                        "PICU",
                        "Immunization clinic",
                        "Growth monitoring"
                    ]
                },
                services: {
                    description: "Complete pediatric care.",
                    list: [
                        "General Pediatrics", "Neonatology", "Pediatric ICU",
                        "Immunization", "Growth Monitoring", "Developmental Assessment",
                        "Pediatric Emergency"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "24+" }],
                            papers: ["Neonatal care protocols"]
                        }
                    ]
                },
                research: {
                    description: "Pediatric research.",
                    ongoing: ["Neonatal outcomes", "Childhood nutrition"]
                },
                events: {
                    description: "Child health programs.",
                    list: ["Universal Children's Day Events"]
                },
                achievements: {
                    description: "Pediatric excellence.",
                    list: ["Best NICU Services"]
                },
                gallery: {
                    description: "Pediatric facilities.",
                    images: [
                        { name: "NICU", icon: "fa-baby" },
                        { name: "Pediatric Ward", icon: "fa-bed" }
                    ]
                }
            },
            "physiotherapy": {
                id: "physiotherapy",
                name: "Physiotherapy",
                icon: "fa-person-walking",
                color: "#4caf50",
                colorDark: "#388e3c",
                shortDescription: "Comprehensive rehabilitation services with modern equipment.",
                infrastructure: {
                    description: "Modern physiotherapy facilities.",
                    facilities: [
                        "Exercise therapy room",
                        "Electrotherapy unit",
                        "Hydrotherapy pool",
                        "Rehabilitation gym"
                    ]
                },
                services: {
                    description: "Complete physiotherapy services.",
                    list: [
                        "Orthopedic Physiotherapy", "Neurological Rehabilitation",
                        "Sports Physiotherapy", "Pediatric Physiotherapy",
                        "Geriatric Physiotherapy", "Cardiopulmonary Rehabilitation"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "18+" }],
                            papers: ["Rehabilitation protocols"]
                        }
                    ]
                },
                research: {
                    description: "Physiotherapy research.",
                    ongoing: ["Stroke rehabilitation", "Sports injury recovery"]
                },
                events: {
                    description: "Physiotherapy programs.",
                    list: ["World Physiotherapy Day"]
                },
                achievements: {
                    description: "Physiotherapy excellence.",
                    list: ["Excellence in Rehabilitation"]
                },
                gallery: {
                    description: "Physiotherapy facilities.",
                    images: [
                        { name: "Exercise Room", icon: "fa-dumbbell" },
                        { name: "Hydrotherapy", icon: "fa-water" }
                    ]
                }
            },
            "psychiatry": {
                id: "psychiatry",
                name: "Psychiatry",
                icon: "fa-brain",
                color: "#673ab7",
                colorDark: "#512da8",
                shortDescription: "Comprehensive mental health services with counseling and therapy.",
                infrastructure: {
                    description: "Mental health facilities.",
                    facilities: [
                        "Consultation rooms",
                        "Counseling center",
                        "De-addiction unit",
                        "Psychology testing room"
                    ]
                },
                services: {
                    description: "Mental health services.",
                    list: [
                        "General Psychiatry", "Depression Treatment", "Anxiety Disorders",
                        "Addiction Treatment", "Counseling Services", "Child Psychiatry"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "20+" }],
                            papers: ["Depression management"]
                        }
                    ]
                },
                research: {
                    description: "Psychiatry research.",
                    ongoing: ["Mental health awareness", "Addiction treatment"]
                },
                events: {
                    description: "Mental health programs.",
                    list: ["World Mental Health Day"]
                },
                achievements: {
                    description: "Psychiatry excellence.",
                    list: ["Excellence in Mental Health"]
                },
                gallery: {
                    description: "Psychiatry facilities.",
                    images: [
                        { name: "Consultation Room", icon: "fa-couch" },
                        { name: "Counseling Center", icon: "fa-comments" }
                    ]
                }
            },
            "radiodiagnosis": {
                id: "radiodiagnosis",
                name: "Radiodiagnosis",
                icon: "fa-x-ray",
                color: "#607d8b",
                colorDark: "#455a64",
                shortDescription: "Advanced imaging services with latest technology.",
                infrastructure: {
                    description: "State-of-the-art imaging facilities.",
                    facilities: [
                        "CT Scanner", "MRI", "Digital X-ray",
                        "Ultrasound", "Mammography", "Fluoroscopy"
                    ]
                },
                services: {
                    description: "Comprehensive imaging services.",
                    list: [
                        "CT Scan", "MRI", "X-ray", "Ultrasound",
                        "Mammography", "Interventional Radiology"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "16+" }],
                            papers: ["Imaging techniques"]
                        }
                    ]
                },
                research: {
                    description: "Radiology research.",
                    ongoing: ["AI in imaging", "Novel protocols"]
                },
                events: {
                    description: "Radiology programs.",
                    list: ["Radiology Conferences"]
                },
                achievements: {
                    description: "Radiology excellence.",
                    list: ["Excellence in Imaging"]
                },
                gallery: {
                    description: "Radiology facilities.",
                    images: [
                        { name: "CT Room", icon: "fa-circle-radiation" },
                        { name: "MRI Room", icon: "fa-magnet" }
                    ]
                }
            },
            "respiratory": {
                id: "respiratory",
                name: "Respiratory Medicine",
                icon: "fa-lungs",
                color: "#26c6da",
                colorDark: "#00acc1",
                shortDescription: "Comprehensive respiratory care with pulmonary function testing.",
                infrastructure: {
                    description: "Respiratory medicine facilities.",
                    facilities: [
                        "Pulmonary function lab",
                        "Bronchoscopy suite",
                        "Respiratory ICU",
                        "Sleep study lab"
                    ]
                },
                services: {
                    description: "Complete respiratory services.",
                    list: [
                        "Asthma Management", "COPD Care", "Tuberculosis Treatment",
                        "Bronchoscopy", "Pulmonary Function Tests", "Sleep Studies"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "19+" }],
                            papers: ["COPD management"]
                        }
                    ]
                },
                research: {
                    description: "Respiratory research.",
                    ongoing: ["Asthma protocols", "TB treatment"]
                },
                events: {
                    description: "Respiratory programs.",
                    list: ["World COPD Day"]
                },
                achievements: {
                    description: "Respiratory excellence.",
                    list: ["Excellence in Pulmonary Care"]
                },
                gallery: {
                    description: "Respiratory facilities.",
                    images: [
                        { name: "PFT Lab", icon: "fa-wind" },
                        { name: "Bronchoscopy", icon: "fa-video" }
                    ]
                }
            },
            "mfp": {
                id: "mfp",
                name: "Maxillofacial Prosthesis (MFP)",
                icon: "fa-mask-face",
                color: "#f06292",
                colorDark: "#ec407a",
                shortDescription: "Specialized prosthetic services for maxillofacial reconstruction.",
                infrastructure: {
                    description: "Specialized MFP facilities.",
                    facilities: [
                        "Prosthetic laboratory",
                        "3D scanning equipment",
                        "Consultation rooms",
                        "Material testing lab"
                    ]
                },
                services: {
                    description: "Maxillofacial prosthetic services.",
                    list: [
                        "Facial Prosthesis", "Ocular Prosthesis", "Auricular Prosthesis",
                        "Nasal Prosthesis", "Obturator Prosthesis", "Custom Implants"
                    ]
                },
                publications: {
                    tabs: [
                        {
                            id: "national",
                            title: "National",
                            stats: [{ label: "Publications", value: "12+" }],
                            papers: ["Prosthetic techniques"]
                        }
                    ]
                },
                research: {
                    description: "MFP research.",
                    ongoing: ["3D printing in prosthetics", "Novel materials"]
                },
                events: {
                    description: "MFP programs.",
                    list: ["Prosthetic Awareness Camps"]
                },
                achievements: {
                    description: "MFP excellence.",
                    list: ["Excellence in Prosthetic Services"]
                },
                gallery: {
                    description: "MFP facilities.",
                    images: [
                        { name: "Laboratory", icon: "fa-flask" },
                        { name: "3D Scanner", icon: "fa-cube" }
                    ]
                }
            }
        };

        let currentDepartment = null;

        document.addEventListener('DOMContentLoaded', function() {
            renderSidebarMenu();
            // Show first department by default
            const firstDeptId = Object.keys(departmentsData)[0];
            showDepartmentDetail(firstDeptId);
        });

        function renderSidebarMenu() {
            const menu = document.getElementById('sidebarMenu');
            menu.innerHTML = '';
            
            Object.values(departmentsData).forEach(dept => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.innerHTML = `<i class="fas ${dept.icon}"></i> ${dept.name}`;
                a.onclick = (e) => {
                    e.preventDefault();
                    showDepartmentDetail(dept.id);
                };
                li.appendChild(a);
                menu.appendChild(li);
            });
        }

        function showDepartmentDetail(deptId) {
            const dept = departmentsData[deptId];
            if (!dept) return;
            
            currentDepartment = deptId;
            
            document.getElementById('breadcrumbText').innerHTML = 
                `<a href="#" onclick="return false;">Clinical Departments</a> <i class="fas fa-chevron-right" style="font-size: 0.75rem;"></i> ${dept.name}`;
            document.getElementById('pageTitle').textContent = dept.name;
            
            const detailContainer = document.getElementById('departmentDetail');
            detailContainer.classList.remove('hidden');
            detailContainer.classList.add('active');
            
            updateSidebarActive(deptId);
            renderDepartmentDetail(dept);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateSidebarActive(deptId) {
            const links = document.querySelectorAll('.sidebar-nav a');
            links.forEach(link => link.classList.remove('active'));
            
            if (deptId) {
                const dept = departmentsData[deptId];
                links.forEach(link => {
                    if (link.textContent.trim().includes(dept.name)) {
                        link.classList.add('active');
                    }
                });
            }
        }

        function renderDepartmentDetail(dept) {
            const container = document.getElementById('departmentDetail');
            container.style.setProperty('--dept-color', dept.color);
            container.style.setProperty('--dept-color-dark', dept.colorDark);
            
            let html = `
                <div class="detail-header">
                    <div class="detail-header-content">
                        <h2>
                            <div class="icon-large">
                                <i class="fas ${dept.icon}"></i>
                            </div>
                            ${dept.name}
                        </h2>
                        <p>${dept.shortDescription}</p>
                    </div>
                </div>
            `;
            
            if (dept.infrastructure) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-building"></i>
                                Infrastructure
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.infrastructure.description}</p>
                                <ul>
                                    ${dept.infrastructure.facilities.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (dept.services) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-hand-holding-medical"></i>
                                Services
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.services.description}</p>
                                <ul>
                                    ${dept.services.list.map(s => `<li>${s}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (dept.publications) {
                html += `
                    <div class="tabs-container">
                        <div class="tabs-header">
                            <h3><i class="fas fa-book-medical"></i> Publications</h3>
                        </div>
                        <div class="tabs-nav">
                            ${dept.publications.tabs.map((tab, idx) => `
                                <button class="tab-button ${idx === 0 ? 'active' : ''}" onclick="switchTab(event, '${tab.id}-${dept.id}')">
                                    ${tab.title}
                                </button>
                            `).join('')}
                        </div>
                        ${dept.publications.tabs.map((tab, idx) => `
                            <div id="${tab.id}-${dept.id}" class="tab-content ${idx === 0 ? 'active' : ''}">
                                ${dept.publications.description ? `<p>${dept.publications.description}</p>` : ''}
                                <div class="stats-grid">
                                    ${tab.stats.map(stat => `
                                        <div class="stat-card">
                                            <h4>${stat.value}</h4>
                                            <p>${stat.label}</p>
                                        </div>
                                    `).join('')}
                                </div>
                                ${tab.papers && tab.papers.length > 0 ? `
                                    <h4 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--color-text-primary);">Key Research Papers</h4>
                                    <ul class="accordion-body" style="padding: 0;">
                                        ${tab.papers.map(paper => `<li>${paper}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            if (dept.research) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-microscope"></i>
                                Research
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.research.description}</p>
                                <ul>
                                    ${dept.research.ongoing.map(r => `<li>${r}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (dept.events) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-calendar-alt"></i>
                                Events
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.events.description}</p>
                                <ul>
                                    ${dept.events.list.map(e => `<li>${e}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (dept.achievements) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-trophy"></i>
                                Achievements & Awards
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.achievements.description}</p>
                                <ul>
                                    ${dept.achievements.list.map(a => `<li>${a}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (dept.gallery) {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas fa-images"></i>
                                Gallery
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                <p>${dept.gallery.description}</p>
                                <div class="gallery-grid">
                                    ${dept.gallery.images.map(img => `
                                        <div class="gallery-item">
                                            <div class="gallery-placeholder">
                                                <i class="fas ${img.icon}"></i>
                                                <span>${img.name}</span>
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
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            header.classList.toggle('active');
            content.classList.toggle('active');
        }

        function switchTab(event, tabId) {
            const container = event.target.closest('.tabs-container');
            
            container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            event.target.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }