var addContactCards = function() {
  for (var i = 0 ; i < data.contacts.length; i++) {
    var contactCard = document.createElement('article');
    contactCard.classList.add('contact-list__entry');
    //coinFlip() === 0 ? contactCard.classList.add('project--left') : contactCard.classList.add('project--right');

    var contactFAIcon = document.createElement('i');
    contactFAIcon.classList.add('fa-4x');

    for (var j = 0; j < data.contacts[i].faIconClasses.length; j++) {
      contactFAIcon.classList.add(data.contacts[i].faIconClasses[j]);
    }

    var contactText = document.createElement('a');
    contactText.href = data.contacts[i].url;
    contactText.innerText = data.contacts[i].displayText;

    contactCard.appendChild(contactFAIcon);
    contactCard.appendChild(contactText);

    contactList.appendChild(contactCard);
  }
}