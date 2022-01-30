/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// Lấy Element của class .navlink 
const navLink = document.querySelectorAll('.nav__link')

// khi nhấn vào nav__link thì sẽ remove class show-menu
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
// Chờ sự kiện click nhấn vào nav__link thì dùng hàm linkAction
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    let win = window
    const scrollTop = document.getElementById('scrolltop');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= (win.innerHeight)) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
/*==================== SHOW AVATAR NAV ======================*/
function showAvatarNav() {
    const navName = document.getElementById('nav-name');
    const navAvatar = document.getElementById('nav-avatar');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 144) {
        navAvatar.classList.add('show-avatar');
        navName.classList.remove('show-avatar');
    } else {
        navAvatar.classList.remove('show-avatar');
        navName.classList.add('show-avatar');
    }
}
window.addEventListener('scroll', showAvatarNav)

/*==================== DARK LIGHT THEME ====================*/


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/


/*==================== GENERATE PDF ====================*/
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

// 1. The class .scale-cv is added to the body, where it reduces the size of the elements


// 2. The PDF is generated


// 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.