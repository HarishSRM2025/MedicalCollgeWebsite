        const medicalCourses = [
    {
        "level": "UG",
        "course": "MBBS",
        "duration": "5.5 Years",
        "eligibility": "NEET-UG",
        "annual_intake": 150,
        "description": "The Undergraduate (UG) medical program provides foundational training in medicine, covering basic sciences, clinical skills, and patient care. It prepares students for a career as medical professionals through structured academics and hands-on clinical exposure.",
        "departments": [
            "Anatomy",
            "Physiology",
            "Biochemistry",
            "Pharmacology",
            "Pathology",
            "Microbiology",
            "Community Medicine",
            "General Medicine",
            "General Surgery",
            "Obstetrics & Gynecology",
            "Pediatrics",
            "ENT",
            "Ophthalmology",
            "Orthopaedics",
            "Dermatology",
            "Psychiatry",
            "Radiology",
            "Anaesthesiology"
        ]
    },

    {
        "level": "PG",
        "course": "MD General Medicine",
        "duration": "3 Years",
        "intake": 10,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MS General Surgery",
        "duration": "3 Years",
        "intake": 8,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Pediatrics",
        "duration": "3 Years",
        "intake": 6,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Obstetrics & Gynecology",
        "duration": "3 Years",
        "intake": 6,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MS Orthopaedics",
        "duration": "3 Years",
        "intake": 5,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Anesthesiology",
        "duration": "3 Years",
        "intake": 8,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Dermatology",
        "duration": "3 Years",
        "intake": 4,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Psychiatry",
        "duration": "3 Years",
        "intake": 3,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    },
    {
        "level": "PG",
        "course": "MD Radiology",
        "duration": "3 Years",
        "intake": 5,
        "eligibility": "NEET-PG",
        "description": "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
    }
];


        function renderCourseSidebar() {
            const menu = document.getElementById("courseSidebarMenu");

            const sections = [
                { id: "ug-courses", title: "UG Courses", icon: "fa-user-graduate" },
                { id: "pg-courses", title: "PG Courses", icon: "fa-user-md" }
            ];

            menu.innerHTML = sections.map((section, index) => `
                <li>
                    <a href="#${section.id}"
                    onclick="showCourseSection('${section.id}')"
                    class="${index === 0 ? 'lib-active' : ''}">
                        <i class="fas ${section.icon}"></i> ${section.title}
                    </a>
                </li>
            `).join("");
        }

       function renderCourseContent(item) {
            switch (item.type) {
                case 'table':
                    return `
                        <div class="lib-table-wrapper">
                            <table>
                                <thead>
                                    <tr>${item.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                                </thead>
                                <tbody>
                                    ${item.rows
                                        .map(row => `
                                        <tr>${row.map((c, i) =>
                                            `<td data-label="${item.headers[i]}">${c}</td>`
                                        ).join('')}</tr>
                                    `)
                                        .join('')}
                                </tbody>
                            </table>
                        </div>
                    `;

                case 'list':
                    return `
                        <ul class="lib-features-list">
                            ${item.items.map(li => `<li><i class="fas fa-check-circle"></i> ${li}</li>`).join("")}
                        </ul>
                    `;

                case 'subtitle':
                    return `<h3>${item.value}</h3>`;
                
                case 'description':
                return `
                    <h3>Description</h3>
                    <p>${item.value}</p>
                `;

                default:
                    return '';
            }
        }

       function showCourseSection(id) {
            const main = document.getElementById("courseMainContent");

            // Build sections dynamically
            let sectionData;

            if (id === "ug-courses") {
                const ug = medicalCourses.find(c => c.level === "UG");

                sectionData = {
                    title: "UG Courses",
                    icon: "fa-user-graduate",
                    description: "Undergraduate medical program (MBBS).",
                    content: [
                        {
                            type: "description",
                            value: ug.description
                        },
                        {
                            type: "table",
                            headers: ["Course", "Duration", "Eligibility", "Annual Intake"],
                            rows: [[ug.course, ug.duration, ug.eligibility, ug.annual_intake]]
                        },
                        {
                            type: "subtitle",
                            value: "Departments Included"
                        },
                        {
                            type: "list",
                            items: ug.departments
                        }
                    ]
                };
            }

            else if (id === "pg-courses") {
                const pg = medicalCourses.filter(c => c.level === "PG");

                sectionData = {
                    title: "PG Courses",
                    icon: "fa-user-md",
                    description: "Postgraduate medical specializations.",
                    content: [
                        {
                            type: "description",
                            value: "The Postgraduate (PG) medical programs offer advanced specialization in various medical disciplines. These courses enhance clinical expertise, research skills, and professional competency to prepare doctors for specialized and super-specialty roles."
                        },
                        {
                            type: "table",
                            headers: ["Course", "Duration", "Eligibility", "Intake"],
                            rows: pg.map(c => [c.course, c.duration, c.eligibility, c.intake])
                        }
                    ]
                };
            }

            // Build final HTML
            const html = `
                <div class="lib-library-section lib-active">
                    <div class="lib-section-header">
                        <div class="lib-section-header-content">
                            <h2><div class="lib-icon-large"><i class="fas ${sectionData.icon}"></i></div>${sectionData.title}</h2>
                            <p>${sectionData.description}</p>
                        </div>
                    </div>

                    <div class="lib-section-content">
                        ${sectionData.content.map(item => renderCourseContent(item)).join('')}
                    </div>
                </div>
            `;

            main.innerHTML = html;

            // Update active menu link
            document.querySelectorAll('#courseSidebarMenu a').forEach(a => a.classList.remove('lib-active'));
            document.querySelector(`#courseSidebarMenu a[href="#${id}"]`).classList.add('lib-active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize
       document.addEventListener("DOMContentLoaded", () => {
    renderCourseSidebar();

    const hash = window.location.hash.slice(1);
    if (hash === "ug-courses" || hash === "pg-courses") {
        showCourseSection(hash);
    } else {
        showCourseSection("ug-courses");
    }
    });

    window.addEventListener("hashchange", () => {
        const hash = window.location.hash.slice(1);
        if (hash === "ug-courses" || hash === "pg-courses") {
            showCourseSection(hash);
        }
    });