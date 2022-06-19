const hamburger = document.querySelector('.icon');
const navmenu = document.querySelector('.navbar-list');
const about = document.querySelector('#nav-item');
const portfolio = document.querySelector('#nav-item2');
const contact = document.querySelector('#nav-item3');
const closeMenu = document.querySelector('#closeMenu');
const works = document.querySelector('.works-container');
const myPopup = document.querySelector('body');
const section = document.createElement('div');
works.appendChild(section);
const projects = [
  {
    title: 'Tonic',
    type: ['CANOPY', 'Back End dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    images: 'image/nature.png',
    language: ['html', 'css', 'javascript'],
    liveLink: 'https://mbonabucya.github.io/Portfolio/',
    sourceLink: 'https://github.com/mbonabucya/Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    images: 'image/arts.png',
    language: ['html', 'css', 'javascript'],
    liveLink: 'https://mbonabucya.github.io/Portfolio/',
    sourceLink: 'https://github.com/mbonabucya/Portfolio',

  },
  {
    title: 'Facebook 360',
    type: ['Facebook', 'Full Stack dev', '2015'],
    description:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    images: 'image/blog_drbl.png',
    language: ['html', 'css', 'javascript'],
    liveLink: 'https://mbonabucya.github.io/Portfolio/',
    sourceLink: 'https://github.com/mbonabucya/Portfolio',
  },
  {
    title: 'Uber Navigation',
    type: ['Uber', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    images: 'image/uber.png',
    language: ['html', 'css', 'javascript'],
    liveLink: 'https://mbonabucya.github.io/Portfolio/',
    sourceLink: 'https://github.com/mbonabucya/Portfolio',
  },
];
function addProjects(n) {
  const {
    title, type, description, images, language,
  } = projects[n];
  section.innerHTML += `
  <div class="project">
<div >
    <img src=${images} alt="tonic-project" class="image"/>
</div>
<div class="project-details">
    <h3>${title}</h3>
    <div class="project-desc">
        <h4>${type[0]}</h4>
        <ul>
            <li>${type[1]}</li>
            <li>${type[2]}</li>
        </ul>
    </div>
    <div class="about-project">
        <p>
            ${description}
        </p>
    </div>
    <div class="technology">
        <ul>
            <li>
                <p>${language[0]}</p>
            </li>
            <li>
                <p>
                ${language[1]}
                </p>
            </li>
            <li>
                <p>
                ${language[2]}
                </p>
            </li>
        </ul>
    </div>
    <button type="submit" class="project${n} btn" >
        See Project
    </button>
</div>
</div>
  `;
}

for (let i = 0; i < projects.length; i += 1) {
  addProjects(i);
}
const projectButtons = document.querySelectorAll('.btn');

function addPopup(position) {
  const popup = document.createElement('section');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="project-popup">
    <div class="project-header">
      <h3>
      ${projects[position].title}
      </h3>
      <i class=" fa fa-times close"></i>
    </div>
    <div class="project-desc">
      <h4>${projects[position].type[0]}</h4>
      <ul>
          <li>${projects[position].type[1]}</li>
          <li>${projects[position].type[2]}</li>
        </ul>
    </div>
    <div >
    <img src="${projects[position].images}" alt="tonic-project" class="image"/>
    </div>
    <div class="project-details-pop">
        <div class="about-project">
            <p>
            ${projects[position].description}
            </p>
        </div>
        <div class="detailed-popup">
        <div class="technology">
            <ul>
              <li>
                <p>${projects[position].language[0]}</p>
              </li>
               <li>
                 <p>
                 ${projects[position].language[1]}
                 </p>
                </li>
                <li>
                 <p>
                 ${projects[position].language[2]}
                 </p>
               </li>
            </ul>
         </div>
      <div class ="buttons">
        <a href="${projects[position].liveLink}"target="_blank"><button type="submit" >
        See Live<i class="fa fa-github"></i>
        </button></a>
        <a href="${projects[position].sourceLink}" target="_blank">
        <button type="submit" class="source" >See source
        <i class="fa fa-github"></i>
        </button></a>
      </div>
    </div>
    </div>
  </div>`;
  popup.id = 'project-pop';
  myPopup.appendChild(popup);
}

projectButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    addPopup(index);
    const pophtml = document.getElementById('project-pop');
    const closePopup = document.querySelector('.close');
    closePopup.addEventListener('click', () => {
      myPopup.removeChild(pophtml);
    });
  });
});

function show() {
  navmenu.style.top = '0';
  navmenu.style.left = '10px';
  navmenu.style.position = 'fixed';
  navmenu.style.width = '100%';
}

function close() {
  navmenu.style.top = '-100%';
}

hamburger.addEventListener('click', show);
about.addEventListener('click', close);
portfolio.addEventListener('click', close);
contact.addEventListener('click', close);
closeMenu.addEventListener('click', close);

const form = document.querySelector('form');

let newFlag = 1;

function validateEmail() {
  const email = document.getElementById('mail');
  const emailValue = email.value.trim();

  if (emailValue !== emailValue.toLowerCase()) {
    document.querySelector('.error_message').style.visibility = 'visible';
    newFlag = 0;

    return 0;
  }
  newFlag = 1;
  return 1;
}
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent sumitting

  validateEmail();
  if (newFlag === 1) {
    form.submit();
  } else {
    newFlag = 0;
  }
});
