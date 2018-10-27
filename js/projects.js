var addProjectCards = function() {

  for (var i = 0; i < data.projects.length; i++) {
    var projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    var projectPreview = document.createElement('div');
    projectPreview.classList.add('project__preview');
    projectPreview.style.backgroundImage = 'url(' + data.projects[i].preview + ')';

    var projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = data.projects[i].title;

    projectCard.appendChild(projectPreview);
    projectCard.appendChild(projectTitle);

    projectList.appendChild(projectCard);
  }
}