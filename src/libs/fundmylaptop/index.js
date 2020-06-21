/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-prototype-builtins */
import Component from './component'
import Store from './Store'
const path = require('path')

export default class FundMyLaptop extends Component {
  constructor (params) {
    super({
      store: Store,
      element: document.getElementById('app') // set the default app dom base
    })
    this.$dom = ''
    this.$router = ''
    if (params.hasOwnProperty('store')) {
      if (params.store instanceof Store) {
        this.store = params.store
      }
    }
    if (params.hasOwnProperty('ele')) {
      this.element = this.nodeById(params.ele) || this.element
    }
    if (params.hasOwnProperty('router')) {
      this.$router = params.router // set the router
    }
    window.FundMyLaptop = this
  }

  render () {
    this.$router.resolve()
  }

  async setMeta (head, payload) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', payload.name)
    meta.setAttribute('content', payload.content)
    head.insertBefore(meta, head.querySelector('link'))
  }

  async init (dom) {
    this.$dom = dom
    await this.setMeta(this.$dom.querySelector('head'), {
      name: 'author',
      content: 'Samuel Onyijne'
    }) // for test only
    if (!this.element) return
    this.render()
  }

  async run () {
    document.addEventListener('DOMContentLoaded', async e => {
      await this.init(e.target)
    })
  }

  nodeById (id) {
    return document.getElementById(`${id}`)
  }

  // asyncrhonously fetch the html template partial from the template directory,
  // then set its contents to the html of the parent element
  async loadHTML (url) {
    /* eslint-disable quotes */
    // this.element.innerHTML = require(`html-loader!${url}`)
    /* eslint-disable no-undef */
    fetch(url)
      .then(response => response.text())
      .then(data => {
        this.element.innerHTML = data
      })
  }
}

export async function loadHTML (url) {
  /* eslint-disable quotes */
  fetch(url)
    .then(response => response.text())
    .then(data => {
      window.FundMyLaptop.element.innerHTML = data
    })
}

export function nodeById (id) {
  return document.getElementById(`${id}`)
}
