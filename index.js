const hamburger = document.querySelector(".icon");
const navmenu = document.querySelector(".navbar-list");
const about = document.querySelector("#nav-item");
const portfolio = document.querySelector("#nav-item2");
const contact = document.querySelector("#nav-item3");
const closeMenu = document.querySelector("#closeMenu");
const body = document.querySelector("body");
const works = document.querySelector(".works-container");
const section = document.createElement("div");
works.appendChild(section);
const newsection = document.createElement("section");

const projects = [
  {
    title: "Tonic",
    type: ["CANOPY", "Back End dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    images: "image/nature.png",
    language: ["html", "css", "javascript"],
    live: "see live",
    source: "See source",
  },
  {
    title: "Multi-Post Stories",
    type: ["FACEBOOK", "Full Stack dev", "2015"],
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    images: "image/arts.png",
    language: ["html", "css", "javascript"],
    live: "see live",
    source: "See source",
  },
  {
    title: "Facebook 360",
    type: ["Facebook", "Full Stack dev", "2015"],
    description:
      "Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    images: "image/blog_drbl.png",
    language: ["html", "css", "javascript"],
    live: "see live",
    source: "See source",
  },
  {
    title: "Uber Navigation",
    type: ["Uber", "Lead Developer", "2018"],
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    images: "image/nature.png",
    language: ["html", "css", "javascript"],
    live: "see live",
    source: "See source",
  },
];
function addProjects(n) {
  const { title, type, description, images, language } = projects[n];
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
    <button type="submit" class="project${n}" >
        See Project
    </button>
</div>
</div>
  `;
 }
 
 for(let i=0 ; i<projects.length ; i++)
 {    
  addProjects(i);
 }
 
const open = document.querySelector('.project0');
open.addEventListener('click', ()=>{ 
  const main = document.createElement('body');
  main.className = 'main';
  const pop = document.createElement('section');
  pop.className='popup';
  pop.innerHTML =`
  <div class="project-popup">
    <div class="project-header">
      <h3>
        Tonic
      </h3>
      <i class=" fa fa-times close"></i>
    </div>
    <div class="project-desc">
      <h4>CANOPY</h4>
      <ul>
          <li>Back End dev</li>
          <li>2015</li>
        </ul>
    </div>
    <div >
    <img src="image/nature.png" alt="tonic-project" class="image"/>
    </div>
    <div class="project-details-pop">
        <div class="about-project">
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
        <div class="detailed-popup">
        <div class="technology">
            <ul>
              <li>
                <p>html</p>
              </li>
               <li>
                 <p>
                    css
                 </p>
                </li>
                <li>
                 <p>
                    javascript
                 </p>
               </li>
            </ul>
         </div>
      <div class ="buttons">
        <button type="submit" class="project1" >
          See live<i class="fa fa-github"></i>
        </button>
        <button type="submit" class="project1" >
          See source<i class="fa fa-github"></i>
        </button>
      </div>
    </div>
    </div>
  </div>`;

  main.appendChild(pop);
  works.appendChild(main);
  const close_popup = document.querySelector(".close");
  close_popup.addEventListener("click", () => {
    main.remove(pop);
  });
});

function show() {
  navmenu.style.top = "0";
  navmenu.style.left = "10px";
  navmenu.style.position = "fixed";
  navmenu.style.width = "100%";
}

function close() {
  navmenu.style.top = "-100%";
}

hamburger.addEventListener('click', show);
about.addEventListener('click', close);
portfolio.addEventListener('click', close);
contact.addEventListener('click', close);
closeMenu.addEventListener('click', close);

const form = document.querySelector('form');

let flag =1;

function validate_email() {
  const email = document.getElementById('mail');
  const emailValue = email.value.trim();

  if(emailValue !== emailValue.toLowerCase())
  { 
    document.querySelector('.error_message').style.visibility="visible";
    flag=0;

return 0;
  }
  flag=1;
  return ;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();// prevent sumitting

  validate_email();// run checks

  // deciding to submit or not
  if (flag== 1) {
    form.submit();
  } else {
    flag = 0;
  }
});


