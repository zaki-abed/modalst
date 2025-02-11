/*
Author: Zaki Abed
Project Name: Modalst
------------------------------------------------
Table of Content:
1. Mobile menu and language dropdown toggle
2. Change header style on scroll
3. Toggle contact menu visibility
*/

/* ------------------------------ */
/* 1. Mobile menu and language dropdown */
/* ------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
    // القائمة المتنقلة
    const mobileMenu = document.querySelector('.mobile-menu');
    const navToggle = document.querySelector('.btn-show-nav');
    const navLinks = mobileMenu.querySelectorAll('a');
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    let isNavVisible = false;

    function toggleNavigation() {
      isNavVisible = !isNavVisible;
      mobileMenu.classList.toggle('active', isNavVisible);
      overlay.classList.toggle('active', isNavVisible);
    }

    function hideNavigation() {
      isNavVisible = false;
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    }

    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleNavigation();
    });

    document.addEventListener('click', function (event) {
      if (isNavVisible && !mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
        hideNavigation();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        hideNavigation();
      });
    });

    // تفعيل القائمة المنسدلة لتغيير اللغة
    const langDropdown = document.querySelector('.lang-dropdown');
    const langBtn = document.querySelector('.lang-btn');
    const langMenu = document.querySelector('.lang-menu');

    langBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
      if (!langDropdown.contains(event.target)) {
        langDropdown.classList.remove('active');
      }
    });

    langMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        langDropdown.classList.remove('active');
        hideNavigation();
      });
    });
});

/* ------------------------------ */
/* 2. Change header style on scroll */
/* ------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
  
/* ------------------------------ */
/* 3. Toggle contact menu visibility */
/* ------------------------------ */
function toggleContactMenu() {
  document.querySelector('.contact-menu').classList.toggle('active');
}


