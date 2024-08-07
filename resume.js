const resumeData = {
    "name": "Ahmed Arsallan",
    "contact": {
        "location": "Uttar Pradesh",
        "phone": "91-8840350269",
        "email": "ahmedarsallan93@gmail.com",
        "linkedin": "https://linkedin.com/in/ahmarsallan/",
        "github": "https://github.com/ahmarsallan45562/"
    },
    "education": [
        {
            "institution": "Lovely Professional University, Phagwara, Punjab",
            "degree": "M.Tech. in Data Science and Analytics",
            "cgpa": "7.8",
            "duration": "2023 – 2025"
        },
        {
            "institution": "Integral University, Lucknow, Uttar Pradesh",
            "degree": "B.Tech in Mechanical",
            "cgpa": "8.28",
            "duration": "2019 – 2023"
        },
        {
            "institution": "Children College, Azamgarh, Uttar Pradesh",
            "degree": "Higher Secondary",
            "percentage": "80",
            "duration": "2017 – 2019"
        }
    ],
    "coursework_skills": [
        "Data Analysis",
        "Data preprocessing",
        "OOPS Concept",
        "(DBMS)"
    ],
    "projects": [
        {
            "name": "Vrinda Store Sales Analysis",
            "tech": ["Microsoft Excel"],
            "description": [
                "Created a Dashboard using Excel that showed the store’s sales analysis through different medium.",
                "Assisted them focusing on inventory management.",
                "Assisted them in increasing the revenue."
            ]
        },
        {
            "name": "HR Analysis",
            "tech": ["Power BI", "MS Excel"],
            "description": [
                "Conducted Comprehensive Analysis on Employee Attrition Trends.",
                "Helped in keeping track on Employees performance."
            ]
        },
        {
            "name": "Laptop Price Prediction",
            "tech": ["Python"],
            "description": [
                "Developed a machine learning model using linear regression to predict laptop prices based on brand, specifications, and features.",
                "Involved in data collection, preprocessing, feature engineering, and training the regression model.",
                "Evaluated model performance using metrics like Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE)."
            ]
        },
        {
            "name": "Olympics Data Analysis",
            "tech": ["Python"],
            "description": [
                "Analyzed 120 years of Olympic data until 2016 to uncover trends and insights.",
                "Performed data cleaning and preprocessing on historical Olympic datasets.",
                "Conducted exploratory data analysis to identify key patterns in athlete performance, medal distribution, and country participation.",
                "Created visualizations to represent data insights and trends effectively."
            ]
        }
    ],
    "internship": {
        "title": "Data Scientist",
        "company": "CodSoft",
        "duration": "01 July 2024 – 31 July 2024",
        "description": [
            "Experienced in data preprocessing, normalization, and addressing class imbalances.",
            "Proficient with Python, including Pandas and Scikit-learn, for machine learning tasks.",
            "Developed strong problem-solving skills and effective communication through real-world data projects."
        ]
    },
    "technical_skills": {
        "languages": ["Python"],
        "skills": ["Data Analytics"],
        "technologies_frameworks": ["Excel", "SQL", "PowerBI", "Numpy", "Pandas", "Matplotlib"]
    },
    "achievements": [
        {
            "name": "Leetcode",
            "description": "Solved 50 questions of SQL"
        }
    ],
    "certifications": [
        {
            "name": "Database Structures and Management with MySql Certification by Meta",
            "provider": "Coursera"
        },
        {
            "name": "Introduction to Statistics from Stanford Online",
            "provider": "Coursera"
        }
    ]
};

function displayResume(resume) {
    const resumeContainer = document.getElementById('resume');

    // Name and Contact
    const header = document.createElement('div');
    header.classList.add('section');
    header.innerHTML = `
        <h1>${resume.name}</h1>
        <div class="contact-list">
            <div><strong>Location:</strong> ${resume.contact.location}</div>
            <div><strong>Phone:</strong> ${resume.contact.phone}</div>
            <div><strong>Email:</strong> <a href="mailto:${resume.contact.email}">${resume.contact.email}</a></div>
            <div><strong>LinkedIn:</strong> <a href="${resume.contact.linkedin}" target="_blank">${resume.contact.linkedin}</a></div>
            <div><strong>GitHub:</strong> <a href="${resume.contact.github}" target="_blank">${resume.contact.github}</a></div>
        </div>
    `;
    resumeContainer.appendChild(header);

    // Education
    const educationSection = document.createElement('div');
    educationSection.classList.add('section');
    educationSection.innerHTML = `<h2>Education</h2>`;
    resume.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.degree}</p>
            <p>${edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}</p>
            <p>${edu.duration}</p>
        `;
        educationSection.appendChild(eduDiv);
    });
    resumeContainer.appendChild(educationSection);

    // Coursework/Skills
    const skillsSection = document.createElement('div');
    skillsSection.classList.add('section');
    skillsSection.innerHTML = `<h2>Coursework / Skills</h2>`;
    const skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skill-list');
    skillsDiv.innerHTML = `
        <ul>
            ${resume.coursework_skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
    skillsSection.appendChild(skillsDiv);
    resumeContainer.appendChild(skillsSection);

    // Projects
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('section');
    projectsSection.innerHTML = `<h2>Projects</h2>`;
    resume.projects.forEach(proj => {
        const projDiv = document.createElement('div');
        projDiv.innerHTML = `
            <h3>${proj.name}</h3>
            <p><strong>Tech:</strong> ${proj.tech.join(', ')}</p>
            <ul>
                ${proj.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        projectsSection.appendChild(projDiv);
    });
    resumeContainer.appendChild(projectsSection);

    // Internship
    const internshipSection = document.createElement('div');
    internshipSection.classList.add('section');
    internshipSection.innerHTML = `<h2>Internship</h2>`;
    const internshipDiv = document.createElement('div');
    internshipDiv.innerHTML = `
        <h3>${resume.internship.title}</h3>
        <p><strong>Company:</strong> ${resume.internship.company}</p>
        <p><strong>Duration:</strong> ${resume.internship.duration}</p>
        <ul>
            ${resume.internship.description.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
    `;
    internshipSection.appendChild(internshipDiv);
    resumeContainer.appendChild(internshipSection);

    // Technical Skills
    const techSkillsSection = document.createElement('div');
    techSkillsSection.classList.add('section');
    techSkillsSection.innerHTML = `<h2>Technical Skills</h2>`;
    const techSkillsDiv = document.createElement('div');
    techSkillsDiv.classList.add('skill-list');
    techSkillsDiv.innerHTML = `
        <div><strong>Languages:</strong> ${resume.technical_skills.languages.join(', ')}</div>
        <div><strong>Skills:</strong> ${resume.technical_skills.skills.join(', ')}</div>
        <div><strong>Technologies/Frameworks:</strong> ${resume.technical_skills.technologies_frameworks.join(', ')}</div>
    `;
    techSkillsSection.appendChild(techSkillsDiv);
    resumeContainer.appendChild(techSkillsSection);

    // Achievements
    const achievementsSection = document.createElement('div');
    achievementsSection.classList.add('section');
    achievementsSection.innerHTML = `<h2>Achievements</h2>`;
    resume.achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.innerHTML = `<p><strong>${achievement.name}</strong> - ${achievement.description}</p>`;
        achievementsSection.appendChild(achievementDiv);
    });
    resumeContainer.appendChild(achievementsSection);

    // Certifications
    const certificationsSection = document.createElement('div');
    certificationsSection.classList.add('section');
    certificationsSection.innerHTML = `<h2>Certifications</h2>`;
    resume.certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.innerHTML = `<p><strong>${cert.name}</strong> - ${cert.provider}</p>`;
        certificationsSection.appendChild(certDiv);
    });
    resumeContainer.appendChild(certificationsSection);
}

document.addEventListener('DOMContentLoaded', () => {
    displayResume(resumeData);
});
