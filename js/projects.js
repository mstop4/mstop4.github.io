const addProjectCards = function() {

  for (let i = 0; i < data.projects.length; i++) {
    let projectCard = document.createElement('article');
    projectCard.classList.add('project');
    coinFlip() === 0 ? projectCard.classList.add('project--left') : projectCard.classList.add('project--right');

    let projectPreview = document.createElement('div');
    projectPreview.classList.add('project__preview');
    projectPreview.style.backgroundImage = 'url(' + data.projects[i].preview + ')';

    projectCard.addEventListener('mouseenter', function() {
      projectPreview.classList.add('hidden');
    });

    projectCard.addEventListener('mouseleave', function() {
      projectPreview.classList.remove('hidden');
    });

    let projectShortInfo = document.createElement('div');
    projectShortInfo.classList.add('project__short-info');

    let projectTitle = document.createElement('h3');
    projectTitle.classList.add('project__title');
    projectTitle.innerText = data.projects[i].title;

    let projectTypes = document.createElement('span');
    projectTypes.classList.add('project__types');

    for (let j = 0; j < data.projects[i].types.length; j++) {

      let projectTypeIcon = document.createElement('i');
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