var addProjectCards = function() {

  for (var i = 0; i < data.projects.length; i++) {
    var projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    var projectPreview = document.createElement('div');
    projectPreview.classList.add('project__preview');
    projectPreview.style.backgroundImage = 'url(' + data.projects[i].preview + ')';

    var projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');

    var projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = data.projects[i].title;

    var projectTypes = document.createElement('span');
    projectTypes.classList.add('project__types');

    for (var j = 0; j < data.projects[i].types.length; j++) {

      var projectTypeIcon = document.createElement('i');
      projectTypeIcon.classList.add('fa-fw', 'fa-2x');

      switch (data.projects[i].types[j]) {
        case "game":
          projectTypeIcon.classList.add('fas', 'fa-gamepad');
          break;
        case "webapp":
          projectTypeIcon.classList.add('fas', 'fa-globe');
          break;
        case "utility":
          projectTypeIcon.classList.add('fas', 'fa-wrench');
          break;
        default:
          projectTypeIcon.classList.add('fas', 'fa-question');          
      }

      projectTypes.appendChild(projectTypeIcon);
    }

    projectShortInfo.appendChild(projectTitle);
    projectShortInfo.appendChild(projectTypes);

    projectCard.appendChild(projectPreview);
    projectCard.appendChild(projectShortInfo);

    projectList.appendChild(projectCard);
  }
}