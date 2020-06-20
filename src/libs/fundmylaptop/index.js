/* eslint-disable no-prototype-builtins */
import Component from './component'
import Store from '~/store/index.js'

export default class FundMyLaptop extends Component {
  constructor (params) {
    super({
      store: Store,
      element: document.getElementById('fundmylaptopapp')
    })
    this.$dom = ''
    this.$route = ''
    if (params.hasOwnProperty('ele')) {
      this.element = this.nodeById(params.ele) || this.element
    }
  }

  async render () {
    // const self = this
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
    this.element.innerHTML = '<p>okay good</p>'
  }

  async run () {
    document.addEventListener('DOMContentLoaded', async e => {
      await this.init(e.target)
    })
  }

  nodeById (id) {
    return document.getElementById(`#${id}`)
  }

  // asyncrhonously fetch the html template partial from the template directory,
  // then set its contents to the html of the parent element
  async loadHTML (url, id) {
    /* eslint-disable no-undef */
    const req = new XMLHttpRequest()
    req.open('GET', url)
    req.send()
    req.onload = () => {
      this.nodeById(id).innerHTML = req.responseText
    }
  }
}
