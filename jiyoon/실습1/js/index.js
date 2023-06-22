let currentMenu;
let menu = document.querySelector('.menu');

function handleClick(e) {
  if(currentMenu) {
    currentMenu.classList.remove('menu_active');
  }

  e.target.classList.add('menu_active');
  currentMenu = e.target;
};

menu.addEventListener('click', handleClick);
