/* eslint-disable no-prototype-builtins */
import Component from './component'
import Store from '../FundlapiState/index.js'

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
}
