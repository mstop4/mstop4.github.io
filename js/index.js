var projectList;
var contactList;

document.addEventListener("DOMContentLoaded", function() { 

  // Prepare cards

  projectList = document.getElementsByClassName('project-list')[0];
  contactList = document.getElementsByClassName('contact-list')[0];

  addProjectCards();
  addContactCards();

  console.log(data);
});