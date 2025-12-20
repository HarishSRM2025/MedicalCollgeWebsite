const dept = [
  { "dept_id": "Anatomy", "name": "Anatomy", "icon": "fas fa-bone", "color": "#1abc9c" },
  { "dept_id": "Physiology", "name": "Physiology", "icon": "fas fa-heartbeat", "color": "#16a085" },
  { "dept_id": "Biochemistry", "name": "Biochemistry", "icon": "fas fa-flask", "color": "#2ecc71" },

  { "dept_id": "Pathology", "name": "Pathology", "icon": "fas fa-vials", "color": "#27ae60" },
  { "dept_id": "Microbiology", "name": "Microbiology", "icon": "fas fa-bacteria", "color": "#3498db" },
  { "dept_id": "Pharmacology", "name": "Pharmacology", "icon": "fas fa-pills", "color": "#2980b9" },
  { "dept_id": "Forensic Medicine", "name": "Forensic Medicine", "icon": "fas fa-user-secret", "color": "#9b59b6" },
  { "dept_id": "Community Medicine", "name": "Community Medicine", "icon": "fas fa-users", "color": "#8e44ad" },

  { "dept_id": "General Medicine", "name": "General Medicine", "icon": "fas fa-stethoscope", "color": "#34495e" },
  { "dept_id": "Emergency Medicine", "name": "Emergency Medicine", "icon": "fas fa-truck-medical", "color": "#e74c3c" },
  { "dept_id": "General Surgery", "name": "General Surgery", "icon": "fa fa-user-md", "color": "#d35400" },
  { "dept_id": "Obstetrics & Gynaecology", "name": "Obstetrics & Gynaecology", "icon": "fas fa-baby", "color": "#e84393" },
  { "dept_id": "Paediatrics", "name": "Paediatrics", "icon": "fas fa-baby", "color": "#fd79a8" },
  { "dept_id": "Orthopedics", "name": "Orthopedics", "icon": "fas fa-bone", "color": "#6c5ce7" },
  { "dept_id": "Ophthalmology", "name": "Ophthalmology", "icon": "fas fa-eye", "color": "#0984e3" },
  { "dept_id": "ENT", "name": "ENT", "icon": "fas fa-ear-listen", "color": "#fdcb6e" },
  { "dept_id": "Dermatology, Venereology & Leprosy", "name": "Dermatology, Venereology & Leprosy", "icon": "fas fa-hand-dots", "color": "#ff7675" },
  { "dept_id": "Psychiatry", "name": "Psychiatry", "icon": "fas fa-brain", "color": "#a29bfe" },
  { "dept_id": "Respiratory Medicine", "name": "Respiratory Medicine", "icon": "fas fa-lungs", "color": "#00cec9" },
  { "dept_id": "Radiology", "name": "Radiology", "icon": "fas fa-x-ray", "color": "#636e72" },
  { "dept_id": "Anesthesiology", "name": "Anesthesiology", "icon": "fas fa-procedures", "color": "#b2bec3" },

  { "dept_id": "Cardiology", "name": "Cardiology", "icon": "material-symbols-outlined", "Icon-Name": "ecg_heart", "color": "#e17055" },
  { "dept_id": "Neurology", "name": "Neurology", "icon": "fas fa-brain", "color": "#00b894" },
  { "dept_id": "Nephrology", "name": "Nephrology", "icon": "material-symbols-outlined", "Icon-Name": "nephrology", "color": "#fd9644" },
  { "dept_id": "Oncology", "name": "Oncology", "icon": "material-symbols-outlined", "Icon-Name": "oncology", "color": "#eb3b5a" },
  { "dept_id": "Gastroenterology", "name": "Gastroenterology", "icon": "material-symbols-outlined", "Icon-Name": "gastroenterology", "color": "#8854d0" },

  { "dept_id": "Cardio Vascular & Thoracic Surgery", "name": "Cardio Vascular & Thoracic Surgery", "icon": "material-symbols-outlined", "Icon-Name": "ecg_heart", "color": "#3867d6" },
  { "dept_id": "Neurosurgery", "name": "Neurosurgery", "icon": "fas fa-brain", "color": "#20bf6b" },
  { "dept_id": "Urology", "name": "Urology", "icon": "material-symbols-outlined", "Icon-Name": "urology", "color": "#fa8231" },
  { "dept_id": "Surgical Oncology", "name": "Surgical Oncology", "icon": "material-symbols-outlined", "Icon-Name": "oncology", "color": "#d63031" },
  { "dept_id": "Surgical Gastroenterology", "name": "Surgical Gastroenterology", "icon": "material-symbols-outlined", "Icon-Name": "gastroenterology", "color": "#6c5ce7" },
  { "dept_id": "Plastic and Reconstructive Surgery", "name": "Plastic and Reconstructive Surgery", "icon": "fas fa-user", "color": "#e17055" },
  { "dept_id": "Vascular Surgery", "name": "Vascular Surgery", "icon": "fas fa-water", "color": "#0abde3" },
  { "dept_id": "Paediatric Surgery", "name": "Paediatric Surgery", "icon": "fas fa-baby", "color": "#48dbfb" }
];


const deptForLink=[
  { "dept": "pre-clinical.html", "name": "Anatomy" },
  { "dept": "pre-clinical.html", "name": "Physiology" },
  { "dept": "pre-clinical.html", "name": "Biochemistry" },

  { "dept": "para-clinical.html", "name": "Pathology" },
  { "dept": "para-clinical.html", "name": "Microbiology" },
  { "dept": "para-clinical.html", "name": "Pharmacology" },
  { "dept": "para-clinical.html", "name": "Forensic Medicine" },
  { "dept": "para-clinical.html", "name": "Community Medicine" },

  { "dept": "boardspecialties.html", "name": "General Medicine" },
  { "dept": "boardspecialties.html", "name": "Paediatrics" },
  { "dept": "boardspecialties.html", "name": "Respiratory Medicine" },
  { "dept": "boardspecialties.html", "name": "Dermatology, Venereology & Leprosy" },
  { "dept": "boardspecialties.html", "name": "Psychiatry" },
  { "dept": "boardspecialties.html", "name": "Emergency Medicine" },

  { "dept": "surgeryspecialties.html", "name": "General Surgery" },
  { "dept": "surgeryspecialties.html", "name": "Orthopaedics" },
  { "dept": "surgeryspecialties.html", "name": "ENT" },
  { "dept": "surgeryspecialties.html", "name": "Ophthalmology" },
  { "dept": "surgeryspecialties.html", "name": "Obstetrics and Gynaecology" },
  { "dept": "surgeryspecialties.html", "name": "Anaesthesiology" },
  { "dept": "surgeryspecialties.html", "name": "Radiodiagnosis" },
  { "dept": "surgeryspecialties.html", "name": "Dentistry" },

  { "dept": "MedicalSuperSpecialties.html", "name": "Cardiology" },
  { "dept": "MedicalSuperSpecialties.html", "name": "Neurology" },
  { "dept": "MedicalSuperSpecialties.html", "name": "Nephrology" },
  { "dept": "MedicalSuperSpecialties.html", "name": "Oncology" },
  { "dept": "MedicalSuperSpecialties.html", "name": "Gastroenterology" },

  { "dept": "SurgerySuperSpecialties.html", "name": "Cardio Vascular & Thoracic Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Neurosurgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Urology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Surgical Oncology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Surgical Gastroenterology" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Plastic and Reconstructive Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Vascular Surgery" },
  { "dept": "SurgerySuperSpecialties.html", "name": "Paediatric Surgery" }
]

function DeptLink(spec) {
  const found = deptForLink.find(e => e.name === spec);
  return found ? found.dept : "#";
}

let SpecialityCard = dept.map(e => {
    let Iconinner = e["Icon-Name"] ? e["Icon-Name"] : ""
  return `
    <div class="infra-spec-card">
      <a href="${DeptLink(e.name)}?dept=${e.dept_id}">
        <div class="infra-icon-image" style="background-color:${e.color}">
          <i class="${e.icon}">${Iconinner}</i>
        </div>
        <div class="infra-icon-title">${e.name}</div>
      </a>
    </div>
  `;
}).join("");

document.getElementById("Specialties").innerHTML = SpecialityCard;

