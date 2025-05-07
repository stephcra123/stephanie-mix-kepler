const footerElement = document.createElement('footer');
footerElement.id = 'footer';
document.body.appendChild(footerElement);

const today = new Date();
const thisYear = today.getFullYear(); 

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Stephanie Mix - All Rights Reserved`;

footer.appendChild(copyright);

const skills = [
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Responsive Design", 
    //"React", 
    //"Node.js", 
    "Git/GitHub", 
    //"UI/UX Design", 
    //"RESTful APIs"
  ];

  const skillsSection = document.getElementById('skills');
  const skillsList = skillsSection.querySelector('ul');

;
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skill.className = 'skill-item'; // Add class for styling
    skillsList.appendChild(skill);
}