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
const messageform = document.forms['leave_message'];

messageform.addEventListener('submit', function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log the values to the console
  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  const messageSection = document.getElementById('Messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.className = 'message-item';
  newMessage.innerHTML = `<a href="mailto:${usersEmail}"> ${usersName}</a> <span>${usersMessage}</span>`;
  //console.log(newMessage)
  
  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  removeButton.type = 'button';
  removeButton.className = 'remove-btn';
  removeButton.addEventListener('click', function() {
    const entry = this.parentNode;
    entry.remove();
    
  })
  newMessage.appendChild (removeButton)
  messageList.appendChild (newMessage)
  //console.log(messageList)
  event.target.reset ();
});
  fetch('https://api.github.com/users/stephcra123/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    const repositories = data;
    
      const projectSection = document.getElementById('projects');
      const projectList = projectSection.querySelector('ul');
      
      for (let i = 0; i < repositories.length; i++) {
        const repository = document.createElement('li');
        repository.textContent = repositories[i].name;
        console.log(i)
        projects.className = 'projects-item'; // Add class for styling
        projectList.appendChild(repository);
      }
      return (repositories)
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });