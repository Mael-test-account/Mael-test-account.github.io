const navbar = document.querySelector(".navbar")
const body = document.querySelector(".body")

window.addEventListener('scroll', () => {
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        navbar.classList.add('fixed');
    } else{
        navbar.classList.remove('fixed');
    }
})