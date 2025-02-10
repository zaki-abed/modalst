document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navToggle = document.querySelector('.btn-show-nav');
    const navLinks = mobileMenu.querySelectorAll('a'); 
    let isNavVisible = false; 

    function toggleNavigation() {
        if (isNavVisible) {
            mobileMenu.classList.remove('active'); 
            isNavVisible = false;
        } else {
            mobileMenu.classList.add('active'); 
            isNavVisible = true;
        }
    }

    function hideNavigation() {
        mobileMenu.classList.remove('active');
        isNavVisible = false;
    }

    function handleNavVisibility() {
        if (window.innerWidth > 991) {
            mobileMenu.classList.add('active'); 
            isNavVisible = true;
        } else {
            hideNavigation();
        }
    }

    navToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleNavigation();
    });

    document.addEventListener('click', function (event) {
        if (window.innerWidth <= 991 && isNavVisible && !mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
            hideNavigation();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 991) {
                hideNavigation();
            }
        });
    });

    window.addEventListener('resize', handleNavVisibility);
    handleNavVisibility();
});

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


document.addEventListener('DOMContentLoaded', function () {
    const langDropdown = document.querySelector('.lang-dropdown');
    const langBtn = document.querySelector('.lang-btn');
    const selectedLang = document.getElementById('selected-lang');
    
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
        selectedLang.textContent = savedLang === 'ar' ? 'العربية' : 'English';
    }

    window.setLanguage = function (lang) {
        selectedLang.textContent = lang === 'ar' ? 'العربية' : 'English';
        localStorage.setItem('selectedLang', lang);
        changeLanguage(lang);
        langDropdown.classList.remove('active');
    };

    langBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!langDropdown.contains(event.target)) {
            langDropdown.classList.remove('active');
        }
    });
});


function toggleContactMenu() {
    document.querySelector('.contact-menu').classList.toggle('active');
}
