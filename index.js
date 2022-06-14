

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