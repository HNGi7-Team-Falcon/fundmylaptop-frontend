const menu = () => {
  // Hamburger menu
  const trigger = document.querySelector('.side-menu-trigger')
  const hamburgerIcon = document.querySelector('span')
  const sideMenu = document.querySelector('.side-menu')
  let isActive = false
  trigger.addEventListener('click', () => {
    isActive = !isActive
    if (isActive) {
      sideMenu.classList.add('is-active')
      hamburgerIcon.classList.add('is-active')
    } else {
      sideMenu.classList.remove('is-active')
      hamburgerIcon.classList.remove('is-active')
    }
  })
}

export default menu
