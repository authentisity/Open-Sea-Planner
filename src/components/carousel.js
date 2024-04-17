// import { useEffect } from "react"

// export default function runCarousel(){
//     useEffect(() =>{

document.querySelector("[data-slides]").children[0].setAttribute('data-active', true)
var buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? -1 : 1
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]')
        
        const activeSlides = slides.querySelector("[data-active]")
        console.log(activeSlides)
        var newIndex = [...slides.children].indexOf(activeSlides) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].setAttribute('data-active', true)
        delete activeSlides.dataset.active
    })
})
//     }, [])
// }

// runCarousel()