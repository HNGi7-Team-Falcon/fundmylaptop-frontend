/* eslint-disable no-prototype-builtins */
import Navigo from 'navigo'
import FmlDOM from '../core/dom'

const FmlRouter = class FmlRouter {
  constructor (params = {}) {
    this.routes = new Navigo(window.location.host, false)
    if (params.hasOwnProperty('routes')) {
      params.routes.forEach(route => {
        this.routes.on(route.path, () => this.renderPage(route))
      })
    }
  }

  async renderPage (route) {
    const component = new FmlDOM(route.component)
    const domFragment = await component.makeDomReady()
    component.mount(domFragment)
  }

  start () {
    return this.routes.resolve()
  }

  bindNavigo () {
    document.querySelectorAll('a').forEach(ele => {
      ele.setAttribute('data-navigo', '')
      const location = ele.getAttribute('href')
      ele.addEventListener('click', e => {
        e.preventDefault()
        this.routes.navigate(location, true)
      })
    })
  }
}

export default FmlRouter
