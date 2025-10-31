const departmentsData = {
            "Anatomy": {
                id: "Anatomy",
                name: "Anatomy",
                icon: "fa-heart",
                color: "#6e0065ff",
                colorDark: "#7b0080ff",
                shortDescription: "Anatomy explores the structure of the human body as the foundation of all medical knowledge.",
                infrastructure: {
                    description: `<h3>Infrastructure of the Department</h2>
                                <p>Human body is a complex creation. It continues to baffle the medical professionals in spite of great many leaps in the field of therapeutic and diagnostic medicine. Therefore, the proper understanding of the basic structure of human body grossly, microscopically and developmentally forms the foundation stone of the medical curriculum. This extensive knowledge of structural aspects of human body is essential for future building up as the student climbs up the ladder of medical education.</p>
                                <p>The encouraging and challenging atmosphere of the anatomy department always creates a long lasting impact on the students and it reserves a special place in the minds of present and past students.</p>
                                <p>The department of anatomy that occupies the rear end of the college building occupying 2143 sq. area. It encompasses a dissection hall, cadaver preservation area, histology laboratory, research laboratory, demonstration rooms, seminar cum library room, faculty rooms, locker room and common room for students, burial ground and a museum.</p>

                                <hr>
                                <h4>Dissection Hall</h4>
                                <p>Our dissection hall is spacious enough to accommodate 150 students comfortably. It stands well illuminated and sufficiently ventilated both naturally and artificially with sufficient wash area. It is equipped with teaching aids like board and audio system for table side teaching.</p>
                                <hr>

                                <h4>Cadaver preservation area</h4>
                                <p>This area has three subunits –the embalming room, cold storage area and storage tank area.</p>
                                <ol class='custom-list'>
                                    <li>The embalming room has facilities for mechanical and manual embalming of cadavers.</li>
                                    <li>Cold storage area has sufficient chambers for storage of 12 cadavers at any point of time. </li>
                                    <li>Storage tank area has three larger tanks with approximately 2500 litre capacity for preserving whole cadavers and small tank of 1000 litre capacity for cut parts.</li>
                                    <li>A small room for storage of viscera’s and a whole body cutting machine are also present here</li>
                                </ol>

                                <h4>Histology laboratory</h4>
                                <p>A well aerated and adequately lighted laboratory with capacity for 90 students. Self-illuminating microscopes for each student, projection microscope with camera and screen for teaching and almost 2000 histological slide adds strength to this laboratory.</p>
                                <p>This laboratory has a preparation room equipped for routine preparation of histology slides by rotatory microtomy and H&E staining.</p>

                                <h4>Research Laboratory</h4>
                                <p>Advanced histological staining procedures, special staining, anthropometric works are being done here. This laboratory has cryostat, Leica microtome and an array of anthropometric instruments.</p>

                                <h4>Demonstration rooms</h4>
                                <p>Three demonstration rooms provided with necessary teaching aids and audio-visual system having 90, 90 and 50 capacity respectively are present.</p>

                                <h4>Seminar cum library room</h4>
                                <ol class='custom-list'>
                                    <li>Our seminar room has satisfactory projection system and air conditioning for 30 people.</li>
                                    <li>The department library has 192 titles spread among gross, clinical, neuro, radio anatomy, embryology, genetics, and histology. Also, 3 national journals are available.</li>
                                </ol>

                                <h4>Faculty rooms</h4>
                                <p>8 spacious, comfortable rooms with intercom and internet facility for all cadres of teaching faculty. A common restroom separately for male and female faculties is also present with continuous water supply.</p>

                                <p>Locker rooms with 150 locker separately for boys and girls is present in our department. Common rooms with adequate facilities for students to have their food and relax in between their class and in their interval is also present in our department.</p>

                                <h4>Burial ground</h4>
                                <p>A properly gated burial ground for burying dissected and worn human parts and to harvest bone from them is present.</p>

                                <h4>Museum</h4>
                                <p>A properly arranged, illuminated, ventilated museum with 90 capacity housing total number of 300 specimens. Has a preparation area. Our museum has</p>
                                <ol class="custom-list">
                                    <li>Categorisation according to region</li>
                                    <li>Sectional anatomy extensively displayed</li>
                                    <li>Dry specimens properly curated and displayed</li>
                                    <li>A collection of complete set of fetal bones</li>
                                    <li>Various stages of embryological specimens</li>
                                    <li>Large collection of charts, models and x-rays</li>
                                    <li>Informative legends and catalogue</li>
                                    <li>An array of plastinated specimens</li>
                                </ol>`,
                    facilities: [
                        "14 fully functional operation theatres with 6 Workstations",
                        "Laminar flow with HEPA filters in all operation theatres",
                        "Well-furnished library with extensive medical literature",
                        "24 hour Internet facility for research and learning",
                        "Demo hall with 42 inches LED TV for presentations",
                        "Museum showcasing evolution of Anatomy equipment",
                        "Well-equipped preoperative rooms for patient preparation",
                        "Well equipped recovery rooms with ventilators",
                        "Fibreoptic Intubation Bronchoscope for difficult airways"
                    ]
                },
                services: {
                    description: "Comprehensive Anatomy services catering to all surgical specialties.",
                    list: [
                        "Anatomy for all types of surgeries",
                        "Sedation in ICU, CT Scan & MRI",
                        "Airway management in Casualty & ICU",
                        "Ventilation Management in ICU",
                        "Central Venous Cannulations",
                        "Pain Relief Procedures",
                        "Monitored Anatomy Care",
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
                                "Advances in regional Anatomy techniques for orthopedic procedures",
                                "Dexmedetomidine in pediatric Anatomy: A comprehensive review"
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
                                "Current trends in obstetric Anatomy"
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
                        "Study To Assess The Efficacy Of EMLA CREAM In Pediatric Spinal Anatomy - Dr.T.R Mehala"
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
                        { name: "Anatomy Museum", icon: "fa-landmark" },
                        { name: "Department Library", icon: "fa-book-medical" },
                        { name: "World Anatomy Day 2023", icon: "fa-calendar-day" },
                        { name: "CME Conference Hall", icon: "fa-chalkboard-user" },
                        { name: "Recovery Room", icon: "fa-heart-pulse" },
                        { name: "Equipment Display", icon: "fa-display" }
                    ]
                }
            },
            "Biochemistry": {
                id: "Biochemistry",
                name: "Biochemistry Surgery",
                icon: "fa-flask",
                color: "#00b894",
                colorDark: "#00a080",
                shortDescription: "Biochemistry uncovers the chemical processes that drive life and health within the human body.",
                infrastructure: {
                    description: "Modern Biochemistry facility with advanced equipment.",
                    facilities: [
                        "Fully equipped Biochemistry operation theatre",
                        "Digital X-ray and imaging facilities",
                        "Modern sterilization equipment",
                        "Specialized Biochemistry chairs",
                        "Oral surgery unit",
                        "Orthodontic treatment facility",
                        "Prosthodontic laboratory"
                    ]
                },
                services: {
                    description: "Complete range of Biochemistry and oral healthcare services.",
                    list: [
                        "General Dentistry", "Oral Surgery", "Root Canal Treatment",
                        "Biochemistry Fillings", "Cosmetic Dentistry", "Orthodontics",
                        "Biochemistry Implants", "Crown and Bridge Work", "Dentures",
                        "Periodontal Treatment", "Pediatric Dentistry", "Maxillofacial Surgery"
                    ]
                },
                publications: {
                    description: "Research contributions in Biochemistry sciences.",
                    tabs: [
                        {
                            id: "international",
                            title: "International",
                            stats: [
                                { label: "Publications", value: "10+" },
                                { label: "Impact Factor", value: "3.5" }
                            ],
                            papers: ["Advanced Biochemistry implantology techniques", "Biomaterials in restoration"]
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
                    description: "Ongoing research in Biochemistry surgery.",
                    ongoing: [
                        "Advanced techniques in Biochemistry implantology",
                        "Minimally invasive oral surgery procedures",
                        "Biomaterials in Biochemistry restoration",
                        "Digital dentistry and CAD/CAM technology"
                    ]
                },
                events: {
                    description: "Regular Biochemistry health camps.",
                    list: ["Annual Biochemistry Health Camp", "School Biochemistry Screening Programs"]
                },
                achievements: {
                    description: "Excellence in Biochemistry education.",
                    list: ["Best Biochemistry Department Award - State Level"]
                },
                gallery: {
                    description: "Department facilities.",
                    images: [
                        { name: "Biochemistry OPD", icon: "fa-clinic-medical" },
                        { name: "Operation Theatre", icon: "fa-procedures" },
                        { name: "Laboratory", icon: "fa-flask" },
                        { name: "X-ray Room", icon: "fa-x-ray" }
                    ]
                }
            },
            "Physiology": {
                id: "Physiology",
                name: "Physiology",
                icon: "fa-heart-pulse",
                color: "#e74c3c",
                colorDark: "#c0392b",
                shortDescription: "",
                infrastructure: {
                    description: "Comprehensive Physiology facilities with modern equipment.",
                    facilities: [
                        "Physiology consultation rooms",
                        "Laser therapy unit",
                        "Phototherapy equipment",
                        "Dermoscopy facility",
                        "Minor procedure room",
                        "Cosmetic Physiology suite"
                    ]
                },
                services: {
                    description: "Complete dermatological care services.",
                    list: [
                        "General Physiology", "Cosmetic Physiology", "Laser Treatments",
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
                    description: "Physiology research initiatives.",
                    ongoing: ["Novel treatments for vitiligo", "Laser therapy in acne scars"]
                },
                events: {
                    description: "Skin health awareness programs.",
                    list: ["Annual Skin Cancer Screening Camp", "World Psoriasis Day Events"]
                },
                achievements: {
                    description: "Recognition in Physiology.",
                    list: ["Excellence in Cosmetic Physiology Award"]
                },
                gallery: {
                    description: "Physiology facilities.",
                    images: [
                        { name: "Consultation Room", icon: "fa-stethoscope" },
                        { name: "Laser Unit", icon: "fa-bolt" },
                        { name: "Treatment Area", icon: "fa-bed" }
                    ]
                }
            }
        };
let currentDepartment = null;

document.addEventListener('DOMContentLoaded', () => {
  renderSidebarMenu();
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
    a.innerHTML = `<i class="fas ${dept.icon || 'fa-circle-info'}"></i> ${dept.name || dept.id}`;
    a.onclick = e => {
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
  const dept = departmentsData[deptId];
  links.forEach(link => {
    if (link.textContent.trim().includes(dept.name)) link.classList.add('active');
  });
}
const excludeKeys = ['id', 'name', 'icon', 'color', 'colorDark', 'shortDescription'];

function renderDepartmentDetail(dept) {
  const container = document.getElementById('departmentDetail');
  container.style.setProperty('--dept-color', dept.color || '#007bff');
  container.style.setProperty('--dept-color-dark', dept.colorDark || '#0056b3');

  let html1 = `
    <div class="detail-header">
      <div class="detail-header-content">
        <h2><i class="fas ${dept.icon || 'fa-circle-info'}"></i> ${dept.name || 'Department'}</h2>
        <p>${dept.shortDescription || ''}</p>
      </div>
    </div>
    <br>
  `;

    let html = `
    <div class="detail-header121">
      <div class="detail-header-content">
        <h2>${dept.name || 'Department'}</h2>
        <p>${dept.shortDescription || ''}</p>
      </div>
    </div>
  `;

  Object.entries(dept).forEach(([key, value]) => {
    // skip excluded or empty sections
    if (excludeKeys.includes(key) || value == null) return;
    if (typeof value === 'object' && Object.keys(value).length === 0) return;
    if (Array.isArray(value) && value.length === 0) return;

    // Generate readable title
    const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());

    // Render accordion section dynamically
    const sectionHTML = renderSection(value, key);
    if (!sectionHTML.trim()) return; // skip empty sections

    html += `
      <div class="accordion-section">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-title">
            <i class="fas ${getSectionIcon(key)}"></i> ${title}
          </div>
          <i class="fas fa-chevron-down accordion-icon"></i>
        </div>
        <div class="accordion-content">
          <div class="accordion-body">${sectionHTML}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* 🔹 Robust section renderer */
function renderSection(value, key) {
  if (!value) return '';

  // String
  if (typeof value === 'string') return `<p>${value}</p>`;

  // Description + List/Facilities
  if (value.description && (value.list || value.facilities)) {
    const items = value.list || value.facilities;
    if (!Array.isArray(items) || items.length === 0) return `<p>${value.description}</p>`;
    return `
      <p>${value.description}</p>
      <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
    `;
  }

  // Tabs (like publications)
  if (Array.isArray(value.tabs) && value.tabs.length > 0) {
    return `
      <div class="tabs-container">
        <div class="tabs-nav">
          ${value.tabs.map((tab, i) => `
            <button class="tab-button ${i === 0 ? 'active' : ''}" onclick="switchTab(event, '${tab.id}-${key}')">${tab.title}</button>
          `).join('')}
        </div>
        ${value.tabs.map((tab, i) => `
          <div id="${tab.id}-${key}" class="tab-content ${i === 0 ? 'active' : ''}">
            ${value.description ? `<p>${value.description}</p>` : ''}
            ${Array.isArray(tab.stats) ? `
              <div class="stats-grid">
                ${tab.stats.map(stat => `<div class="stat-card"><h4>${stat.value}</h4><p>${stat.label}</p></div>`).join('')}
              </div>
            ` : ''}
            ${Array.isArray(tab.papers) ? `<ul>${tab.papers.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Gallery
  if (Array.isArray(value.images) && value.images.length > 0) {
    return `
      <p>${value.description || ''}</p>
      <div class="gallery-grid">
        ${value.images.map(img => `
          <div class="gallery-item">
            <div class="gallery-placeholder">
              <i class="fas ${img.icon || 'fa-image'}"></i>
              <span>${img.name || ''}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Simple list
  if (Array.isArray(value)) {
    if (value.length === 0) return '';
    return `<ul>${value.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }

  // Description-only object
  if (value.description) return `<p>${value.description}</p>`;

  // Unknown / invalid section
  return '';
}

/* 🔹 Icon mapper */
function getSectionIcon(key) {
  const icons = {
    infrastructure: 'fa-building',
    services: 'fa-hand-holding-medical',
    publications: 'fa-book-medical',
    research: 'fa-microscope',
    events: 'fa-calendar-alt',
    achievements: 'fa-trophy',
    gallery: 'fa-images',
    aboutus: 'fa-user',
  };
  return icons[key.toLowerCase()] || 'fa-circle-info';
}

/* 🔹 Accordion toggle */
function toggleAccordion(header) {
  header.classList.toggle('active');
  header.nextElementSibling.classList.toggle('active');
}

/* 🔹 Tab switch */
function switchTab(event, tabId) {
  const container = event.target.closest('.tabs-container');
  container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}