// import { loadHtml } from '~/libs/fundmylaptop' WILL DO THIS PROPERLY LATER TODAY
import menu from '~/templates/menu'

// eslint-disable-next-line no-unused-expressions
;`<template id='home'>
  <header>menu</header>
</template>`

const home = {
  display: () => {
    // Hamburger menu
    menu()
  }
}
export default home
// FAQ Accordion JS
document.addEventListener('DOMContentLoaded', function (event) {
  var acc = document.getElementsByClassName('accordion')
  var panel = document.getElementsByClassName('panel')
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active')
      setClass(acc, 'active', 'remove')
      setClass(panel, 'show', 'remove')

      if (setClasses) {
        this.classList.toggle('active')
        this.nextElementSibling.classList.toggle('show')
      }
    }
  }

  function setClass (els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className)
    }
  }
})

// testimonials carousel
const sliderButtons = document.querySelectorAll('.slider-btn')
const slideArea = document.querySelector('.testimonials-slider')

sliderButtons.forEach(button => {
  button.addEventListener('click', e => {
    const testimonialWidth = document
      .querySelector('.testimonials-slider .box')
      .getBoundingClientRect().width
    if (e.target.classList.contains('left')) {
      slideArea.scroll({
        left: -testimonialWidth + slideArea.scrollLeft,
        behavior: 'smooth'
      })
    } else {
      slideArea.scroll({
        left: testimonialWidth + slideArea.scrollLeft,
        behavior: 'smooth'
      })
    }
  })
})
