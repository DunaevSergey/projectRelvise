// footer-menu


// /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const titleList = document.querySelectorAll('.menu-footer__list-title');

const menuList = document.querySelectorAll('.menu-footer__list');

if (window.screen.width < 768) {
   menuList.forEach(menuList => {
      menuList.classList.add('menulist-close');
   });

   document.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('menu-footer__list-title')) {
         e.target.nextElementSibling.classList.toggle('menulist-close');
         e.target.classList.toggle('arrow-up');
      }
      
      if (targetElement.classList.contains('icon-menu')) {
         document.documentElement.classList.toggle('menu-open');
         document.documentElement.classList.toggle('scroll-lock');
      }
      

   });
} else {
   // код для обычных устройств
}

// burger

// document.addEventListener("click", function (e) {
//    const targetElement = e.target;
  
//    }

// });