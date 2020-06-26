/* eslint-disable no-prototype-builtins */
import Component from './Component'
import Store from '../store'
import FmlRouter from '../router'
const path = require('path')

export default class FundMyLaptop extends Component {
  constructor (params) {
    super({
      store: Store,
      element: document.getElementById('app') // set the default app dom base
    })

    this.$dom = ''
    this.$router = ''
    this.id = 'app' // default app dom id
    if (params.hasOwnProperty('store')) {
      if (params.store instanceof Store) {
        this.store = params.store
      }
    }
    if (params.hasOwnProperty('ele')) {
      this.element = this.nodeById(params.ele) || this.element
      this.id = params.ele
    }
    if (params.hasOwnProperty('router')) {
      if (params.router instanceof FmlRouter) {
        this.$router = params.router // set the router
      }
    }
  }

  async setMeta (head, payload) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', payload.name)
    meta.setAttribute('content', payload.content)
    head.insertBefore(meta, head.querySelector('link'))
  }

  async init (dom) {
    this.$dom = dom
    window.FundMyLaptop = this
    await this.setMeta(this.$dom.querySelector('head'), {
      name: 'author',
      content: 'Samuel Onyijne'
    }) // for test only
    if (this.$router) this.$router.start()
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
    /* eslint-disable no-undef */
    fetch(url)
      .then(response => response.text())
      .then(data => {
        this.element.innerHTML = data
      })
  }
}

const fml = new FundMyLaptop({
  ele: 'fundmylaptopapp'
})

/** display the html code */
export async function loadHTML (url) {
  const html = await getHTML(url)
  fml.element.innerHTML = html
}

/** returns the html code */
export async function getHTML (url) {
  return fetch(url).then(response => response.text())
}

export function nodeById (id) {
  return document.getElementById(`${id}`)
}

export async function render (page) {
  if (!fml.element) return
  await loadHTML(`${path.resolve(__dirname, '../pages')}/${page}`)
  await window.FundMyLaptop.$router.bindNavigo()
}

export async function template (htmlTemplate, options) {
  const template = await textToDomFragment(htmlTemplate, options.id)
  const clonedTemplate = template.content.cloneNode(true)
  options.parent.position.toLowerCase() === 'top'
    ? document.getElementById(options.parent.id).prepend(clonedTemplate)
    : document.getElementById(options.parent.id).appendChild(clonedTemplate)
}
