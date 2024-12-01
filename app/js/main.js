const menuBurger = document.getElementById("burger");
const header = document.querySelector(".header");
const body = document.querySelector('body')

const overLay = document.querySelector(".overlay")

menuBurger.addEventListener('click',()=> {
    if (header.classList.contains("open")) {
        header.classList.remove('open')
        body.classList.remove("noscroll")
        overLay.classList.remove('fade-in')
        overLay.classList.add('fade-out')
        setTimeout(()=> {
            overLay.style.display = 'none'
        }, 300)
    } else {
        header.classList.add('open')
        overLay.classList.add('fade-in')
        overLay.classList.remove('fade-out')
        overLay.style.display = 'block'
        body.classList.add("noscroll")
    }
})