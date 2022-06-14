const hamburger = document.querySelector('.icon');
const navmenu =document.querySelector('.navbar-list');
const about=document.querySelector('#nav-item');
const portfolio=document.querySelector('#nav-item2');
const contact =document.querySelector('#nav-item3')


hamburger.addEventListener('click',show);
about.addEventListener('click',close)
portfolio.addEventListener('click',close)
contact.addEventListener('click',close)


function show()
{
   console.log("clicked me")
   navmenu.style.top='0';
   navmenu.style.left='10px';
   navmenu.style.position='fixed'
   navmenu.style.width='100%'
}

function close() {
    navmenu.style.top='-100%'
}