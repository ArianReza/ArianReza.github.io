/* ==== SECTION MENU === */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (sectionId != "") {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('n-active')
            } else {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('n-active')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)


 /*==== MENU PHONE === */
const showMenu = (toggleId, navId, iconID) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        icons = document.getElementById(iconID)

    if (toggle && nav) {
       
        toggle.addEventListener('change', () => {
            console.log(document.getElementById("check").checked)
            nav.classList.toggle('show')
            icons.classList.toggle('show')

        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'social-icon')

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

