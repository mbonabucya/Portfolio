const hamburger = document.querySelector('.icon');
const navmenu = document.querySelector('.navbar-list');
const about = document.querySelector('#nav-item');
const portfolio = document.querySelector('#nav-item2');
const contact = document.querySelector('#nav-item3');
const closeMenu = document.querySelector('#closeMenu');
const body = document.querySelector('body');
const works = document.querySelector('.works-container');
const section = document.createElement('section');
works.appendChild(section);

section.innerHTML = `
<div class="project">
<div >
    <img src="image/nature.png" alt="tonic-project" class="image"/>
</div>
<div class="project-details">
    <h3>Tonic</h3>
    <div class="project-desc">
        <h4>CANOPY</h4>
        <ul>
            <li>Back End dev</li>
            <li>2015</li>
        </ul>
    </div>
    <div class="about-project">
        <p>
            A daily selection of privately personalized reads; no accounts or sign-ups required.
        </p>
    </div>
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
    <button type="submit" class="project1" >
        See Project
    </button>
</div>
</div>

<div class="project reverse">
                <div>
                    <img src="image/arts.png" alt="arts-project" class="image" />
                </div>
                <div class="project-details">
                    <h3>Multi-Post Stories</h3>
                    <div class="project-desc">
                        <h4>FACEBOOK</h4>
                        <ul>
                            <li>Full Stack Dev</li>
                            <li>2015</li>
                        </ul>
                    </div>
                    <div class="about-project">
                        <p>
                            Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.
                        </p>
                    </div>
                    <div class="technology">
                        <ul>
                            <li>
                                <p>html</p>
                            </li>
                            <li>
                                <p>Ruby on rails</p>
                             </li>
                            <li>
                               <p>css</p>
                            </li>
                            <li>
                               <p>javascript</p> 
                            </li>
                        </ul>
                    </div>
                    <button type="submit">
                        See Project
                    </button>
                </div>
            </div>

            <div class="project">
            <div>
                <img src="image/blog_drbl.png" alt="facebook-360" class="image" />
            </div>
            <div class="project-details">
                <h3>Facebook 360</h3>
                <div class="project-desc">
                    <h4>FACEBOOK</h4>
                    <ul>
                        <li>Full Stack Dev</li>
                        <li>2015</li>
                    </ul>
                </div>
                <div class="about-project">
                    <p>
                        Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
                    </p>
                </div>
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
                <button type="submit" id="facebook-btn">
                    See Project
                </button>
            </div>
        </div>

        <div class="project reverse">
            <div>
                <img src="image/uber.png" alt="uber-navigation" class="image" />
            </div>
            <div class="project-details">
                <h3>Uber Navigation</h3>
                <div class="project-desc">
                    <h4>Uber</h4>
                    <ul>
                        <li>Lead Developer</li>
                        <li>2018</li>
                    </ul>
                </div>
                <div class="about-project">
                    <p>
                        A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.
                    </p>
                </div>
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
                <button type="submit">
                    See Project
                </button>
            </div>
        </div>
`;

const open = document.querySelector('.project1');
open.addEventListener('click', ()=>{
  console.log('click') 
  const main = document.createElement('body');
  main.className = 'main';
  const pop = document.createElement('section');
  pop.className='popup';
  pop.innerHTML =`
  <div class="project">
    <div class="project-header">
      <h3>
        Tonic
      </h3>
      <i class=" fa fa-times"></i>
    </div>
    <div class="project-desc">
      <h4>CANOPY</h4>
      <ul>
          <li>Back End dev</li>
          <li>2015</li>
        </ul>
    </div>
    <div class="project-details">
        <div >
          <img src="image/nature.png" alt="tonic-project" class="image"/>
        </div>
        <div class="about-project">
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
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
          See live
        </button>
        <button type="submit" class="project1" >
          See source
        </button>
      </div>
    </div>
  </div>`;
  pop.className ='popup';

  main.appendChild(pop);
  works.appendChild(main);

} )







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
