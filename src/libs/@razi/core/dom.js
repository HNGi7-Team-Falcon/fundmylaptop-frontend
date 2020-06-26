/* eslint-disable no-undef */
import Component from './Component'

export default class FmlDOM extends Component {
  /** accepts only  */
  constructor (param) {
    super(param)
    this.html = param.html || ''
    this.parent = param.parent || {}
    this.fml = window.FundMyLaptop
  }

  /**
   *
   * @param {Component} component The name of the element to create, will be prefixed with fml-
   */
  async createElement (component) {
    const domFragment = await textToDomFragment(component.html, component.id)
    customElements.define(
      `fml-${component.name.toLowerCase()}`,
      class extends HTMLElement {
        constructor () {
          super()
          const template = domFragment.content.cloneNode(true)
          this.attachShadow({ mode: 'open' }).appendChild(
            template
          )
        }
      }
    )
  }

  async mount (domFragment, baseId = '') {
    const clonedTemplate = domFragment.content.cloneNode(true)
    const id = baseId || this.fml.id
    this.render(clonedTemplate, {
      id,
      isBase: true
    })
    // now create shadow doms of with it's components
    this.components.forEach(async component => await this.createElement(component))
  }

  async makeDomReady () {
    /** imported html code is a text, so we need to convert it to a domcoment fragment */
    const domFragment = await textToDomFragment(
      this.html,
      this.id
    )
    // this.html = '' // to free memorysince the raw html will not be refrenced again
    return domFragment
  }
}

/**
 * Converts raw text of html gotten from importing the html file to a document fragment
 * @param {string} rawText
 * @param {string} templateId
 */
export async function textToDomFragment (rawText, templateId) {
  const fmlDiv = document.createElement('fml-div')
  fmlDiv.innerHTML = rawText
  return fmlDiv.querySelector(`#${templateId}`)
}
