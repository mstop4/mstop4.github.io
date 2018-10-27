var projectContainer;

// ---

var addProjectCard = function() {
  var projectCard = document.createElement('article');
  projectCard.classList.add('project');
  coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

  var projectPreview = document.createElement('div');
  projectPreview.classList.add('project__preview');

  var projectTitle = document.createElement('h3');
  projectTitle.classList.add('project__title');
  projectTitle.innerText = 'Bunny';

  projectCard.appendChild(projectPreview);
  projectCard.appendChild(projectTitle);

  projectContainer.appendChild(projectCard);
}

// ----

document.addEventListener("DOMContentLoaded", function() { 
  projectContainer = document.getElementsByClassName('project-container')[0];
  for (var i = 0; i < 8; i++) {
    addProjectCard();
  }
  console.log('Hello');
});