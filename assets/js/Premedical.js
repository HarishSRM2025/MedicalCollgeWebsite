const departmentsData = {
            "Anatomy": {
                id: "Anatomy",
                name: "Anatomy",
                icon: "fa-heart",
                color: "#6e0065ff",
                colorDark: "#7b0080ff",
                shortDescription: "Anatomy explores the structure of the human body as the foundation of all medical knowledge.",
                sections: [
                    {
                        id: "aims",
                        title: "Aims & Objectives",
                        icon: "fa-bullseye",
                        content: [
                            { type: "heading", level: 3, text: "Aims" },
                            { type: "paragraph", text: "The discipline of anatomy aims to maintain the importance of understanding the structure of the living body at the forefront of clinical medical, nursing and therapeutic practice, thereby enhancing the quality and efficiency of patient care." },
                            { type: "list", items: [
                                "Deliver teaching within a research-led environment.",
                                "Provide students with a broad background in modern anatomy.",
                                "Provide laboratory/practical training in aspects of Bio photonics and Imaging.",
                                "Encourage students to develop oral, written, numerical, visual, presentation and collaborative skills."
                            ]},
                            { type: "divider" },
                            { type: "heading", level: 3, text: "Objectives" },
                            { type: "list", items: [
                                "Gross and Developmental Anatomy is a first-year course designed to provide students with a fundamental working knowledge of normal human gross and developmental anatomy.",
                                "To provide an opportunity for medical students who distinguish themselves in Human Anatomy undertake research-based training.",
                                "To provide training as would enable them to sub-specialize in anatomy at an early stage of their career."
                            ]}
                        ]
                    },
                    {
                        id: "message",
                        title: "Message from HOD",
                        icon: "fa-user-tie",
                        content: [
                            { type: "heading", level: 3, text: "Message from HOD" },
                            { type: "paragraph", text: "It is a pleasure and honor to head the anatomy department at Trichy SRM Medical College. Our faculty work in an invigorating and friendly atmosphere. Our students gain exposure to traditional and current styles of learning anatomy. It is my personal belief that forging the foundation of a competent and conscientious medical graduate lies with the Department of Anatomy when he first meets the cadaver, 'the first patient'." }
                        ]
                    },
                    {
                        id: "infrastructure",
                        title: "Infrastructure",
                        icon: "fa-hospital",
                        content: [
                            { type: "heading", level: 3, text: "Infrastructure of the Department" },
                            { type: "paragraph", text: "The department of anatomy occupies 2143 sq. area. It encompasses a dissection hall, cadaver preservation area, histology laboratory, research laboratory, demonstration rooms, seminar cum library room, faculty rooms, locker room and common room for students, burial ground and a museum." },
                            { type: "divider" },
                            { type: "heading", level: 4, text: "Dissection Hall" },
                            { type: "paragraph", text: "Our dissection hall is spacious enough to accommodate 150 students comfortably. It stands well illuminated and sufficiently ventilated both naturally and artificially with sufficient wash area." },
                            { type: "divider" },
                            { type: "heading", level: 4, text: "Museum" },
                            { type: "list", items: [
                                "Categorisation according to region",
                                "Sectional anatomy extensively displayed",
                                "Dry specimens properly curated and displayed",
                                "A collection of complete set of fetal bones",
                                "Large collection of charts, models and x-rays"
                            ]}
                        ]
                    },
                    {
                        id: "publications",
                        title: "Publications & Research",
                        icon: "fa-book",
                        content: [
                            { type: "heading", level: 4, text: "Publications" },
                            { type: "list", items: [
                                "Venkatesh G, Gugapriya T S, Vinay Kumar N, Nalinakumari S.D. Does the side deviation of nasal septum have concomitant predictive relation with side of sphenoid septum deviation? International Journal of Anatomy, Radiology and Surgery (IJARS) 26th October, 2020.",
                                "Mythraeyee Prasad, Bina Isaac. Anatomic Landmarks to Identify the Radial Nerve. Journal of Clinical and Diagnostic Research. 2018; 12(11): AC01–AC04."
                            ]},
                            { type: "heading", level: 4, text: "Ongoing Projects" },
                            { type: "list", items: [
                                "Dr. S. D. Nalinakumari: ACT evaluative study of pneumatisation of paranasal air sinuses",
                                "Dr. Praveen Kumar K: Human Pancreatic Islet Dimension: Revisiting the Quantification Technique"
                            ]}
                        ]
                    },
                    {
                        id: "achievements",
                        title: "Achievements & Awards",
                        icon: "fa-trophy",
                        content: [
                            { type: "list", items: [
                                "Dr.M. Rajeshkumar I year PG awarded the First Prize in the Poster Presentation at K.A.P.Viswantham Government Medical College, Trichy 05.01.2019"
                            ]}
                        ]
                    }
                ]
            },
            "Biochemistry": {
                id: "Biochemistry",
                name: "Biochemistry",
                icon: "fa-flask",
                color: "#00b894",
                colorDark: "#00a080",
                shortDescription: "Biochemistry uncovers the chemical processes that drive life and health within the human body.",
                sections: [
                    {
                        id: "infrastructure",
                        title: "Infrastructure",
                        icon: "fa-hospital",
                        content: [
                            { type: "heading", level: 3, text: "Space Allocation" },
                            { type: "table", headers: ["S.No", "Details", "Area (sqm)"], rows: [
                                ["1", "Professor and H.O.D.", "28.00"],
                                ["2", "Practical Lab", "297.71"],
                                ["3", "Demonstration Room 1", "96.38"],
                                ["4", "Research cum PG Lab", "92.79"]
                            ]},
                            { type: "heading", level: 3, text: "Major Equipment" },
                            { type: "table", headers: ["Equipment", "Make", "Model"], rows: [
                                ["Fully Auto Analyzer", "Mindray", "BS 420"],
                                ["Immunology Analyzer", "ROCHE COBAS", "E411"],
                                ["ABG Analyzer", "Roche", "COBAS b121"],
                                ["UV Spectrophotometer", "LABINDIA", "UV 3000+"]
                            ]}
                        ]
                    },
                    {
                        id: "publications",
                        title: "Publications",
                        icon: "fa-book",
                        content: [
                            { type: "heading", level: 4, text: "2020" },
                            { type: "list", items: [
                                "Thivyah Prabha, Rasheed Khan, G Saritha. High Sensitivity C-Reactive Protein in Early Diagnosis of Diabetic Nephropathy"
                            ]},
                            { type: "heading", level: 4, text: "2019" },
                            { type: "list", items: [
                                "Sivakumar P, Moonishaa TM. Evaluation of liver function in acute complications of type 2 diabetes mellitus. Int J Adv Med 2019;6:118-23."
                            ]}
                        ]
                    }
                ]
            },
            "Physiology": {
                id: "Physiology",
                name: "Physiology",
                icon: "fa-heart-pulse",
                color: "#e74c3c",
                colorDark: "#c0392b",
                shortDescription: "Understanding the functions and mechanisms of the human body systems.",
                sections: [
                    {
                        id: "objectives",
                        title: "Objectives",
                        icon: "fa-bullseye",
                        content: [
                            { type: "heading", level: 3, text: "Department Objectives 2019-2020" },
                            { type: "list", items: [
                                "To teach students physiological basis of medicine and assess their knowledge periodically",
                                "To ensure that every student meets the attendance of 95%",
                                "To continue mentor–mentee program for I MBBS students",
                                "To organize minimum one CME program and two Guest Lectures"
                            ]}
                        ]
                    },
                    {
                        id: "faculty",
                        title: "Faculty",
                        icon: "fa-users",
                        content: [
                            { type: "heading", level: 3, text: "Teaching Faculty" },
                            { type: "table", headers: ["Name", "Degree", "Designation", "Experience"], rows: [
                                ["Dr. Nachal Annamalai", "M.B.B.S., M.D.", "Professor & H.O.D", "28 Years"],
                                ["Dr. M. Muhil", "M.B.B.S., M.D., Ph.D.", "Associate Professor", "13 Years"],
                                ["Dr. N. Swarnalatha", "M.B.B.S., M.D.", "Associate Professor", "9 Years"]
                            ]}
                        ]
                    },
                    {
                        id: "academic",
                        title: "Academic Programme",
                        icon: "fa-graduation-cap",
                        content: [
                            { type: "heading", level: 4, text: "Guest Lectures" },
                            { type: "table", headers: ["Date", "Topic"], rows: [
                                ["14.12.18", "Endocrinology – Thyroid Disorders"],
                                ["06.04.18", "Basics and Clinical Applications of ECG"],
                                ["10.03.16", "Update in Diabetes Mellitus"]
                            ]}
                        ]
                    }
                ]
            }
        };

        function renderContent(contentArray) {
            let html = '';
            contentArray.forEach(item => {
                switch(item.type) {
                    case 'heading':
                        html += `<h${item.level}>${item.text}</h${item.level}>`;
                        break;
                    case 'paragraph':
                        html += `<p>${item.text}</p>`;
                        break;
                    case 'list':
                        html += '<ul class="custom-list">';
                        item.items.forEach(listItem => {
                            html += `<li>${listItem}</li>`;
                        });
                        html += '</ul>';
                        break;
                    case 'table':
                        html += '<div class="responsive-table"><table><thead><tr>';
                        item.headers.forEach(header => {
                            html += `<th>${header}</th>`;
                        });
                        html += '</tr></thead><tbody>';
                        item.rows.forEach(row => {
                            html += '<tr>';
                            row.forEach(cell => {
                                html += `<td>${cell}</td>`;
                            });
                            html += '</tr>';
                        });
                        html += '</tbody></table></div>';
                        break;
                    case 'divider':
                        html += '<hr>';
                        break;
                }
            });
            return html;
        }

        document.addEventListener('DOMContentLoaded', function() {
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
            dept.sections.forEach(section => {
                html += `
                    <div class="accordion-section">
                        <div class="accordion-header" onclick="toggleAccordion(this)">
                            <div class="accordion-title">
                                <i class="fas ${section.icon}"></i>
                                ${section.title}
                            </div>
                            <i class="fas fa-chevron-down accordion-icon"></i>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-body">
                                ${renderContent(section.content)}
                            </div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            header.classList.toggle('active');
            content.classList.toggle('active');
        }