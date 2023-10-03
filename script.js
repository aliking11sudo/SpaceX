let navmore = document.getElementById('nav-more');
let menu = document.getElementById('menu');
let section_one=document.getElementById('section_one')
let close = document.getElementById('close');
menu.addEventListener('click', () => {
  navmore.style.display = "block";
  navmore.style.flexDirection="column"
});
close.addEventListener('click', () => {
    navmore.style.display = "none";
  });
