let slides = document.querySelectorAll('.slide')
let bodyElement = document.querySelector('body')
let counter = 1
let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')


rightArrow.addEventListener('click',() => {
    if(counter > 3){
        counter = 1
    }else{
        counter++
    }
    
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[counter -1].classList.add('active')
    bodyElement.style.backgroundImage = `url('./slide${counter}.jpg')`
})
leftArrow.addEventListener('click',() => {
    if(counter < 2){
        counter = 4
    }else{
        counter--
    }
    
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[counter -1].classList.add('active')
    bodyElement.style.backgroundImage = `url('./slide${counter}.jpg')`
})
