const header__mobile = {
    navAll: document.querySelector("header > nav"),
    menuHamburgue: document.querySelector('.menu__hamburguer'),
    nav__itemALL: document.querySelectorAll('.nav__item > a')
}

header__mobile.menuHamburgue.addEventListener('click', () =>{
    header__mobile.navAll.classList.toggle('header__active')
})

header__mobile.nav__itemALL.forEach(element => {
    element.addEventListener('click', () =>{
        header__mobile.navAll.classList.toggle('header__active')
    })
});