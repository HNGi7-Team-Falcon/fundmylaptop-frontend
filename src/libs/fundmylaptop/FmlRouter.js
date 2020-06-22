/* eslint-disable no-prototype-builtins */
import Navigo from 'navigo'
import { loadHTML } from '~/libs/fundmylaptop'
const path = require('path')

const FmlRouter = class FmlRouter {
  constructor (params = {}) {
    this.routes = new Navigo(window.location.host, false)
    if (params.hasOwnProperty('routes')) this.routes.on(params.routes)
    // set default route
    this.routes.notFound(async query => {
      await loadHTML(path.resolve(__dirname, '../../pages') + '/404.html')
    })
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
