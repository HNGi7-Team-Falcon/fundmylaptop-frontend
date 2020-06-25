import Store from './Store.js'

/**
 * this is the base class for all components : WIP
 */
export default class Component {
  constructor (props = {}) {
    this.components = props.components || []

    this.id = props.id || 'application-base-component'

    this.name = props.name || 'application-base-component'

    this.element = props.element || ''
    /** functions that should be called at certain life circles */
    this.onInit = props.onInit || function () {}
    this.onDomReady = props.onDomReady || function () {}
    this.beforeMount = props.beforeMount || function () {} // handler to execute before mounting to DOM
    this.afterMount = props.afterMount || function () {} // handler to execute after mounting to DOM

    this.render = props.render || function (ele, parent = { id: '', isBase: true }) {
      const app = document.getElementById(parent.id)
      if (parent.isBase) app.innerHTML = ''
      app.appendChild(ele)
    }

    if (props.store instanceof Store) {
      // props.store.events.subscribe('stateChange', () => {})
    }
  }
}
