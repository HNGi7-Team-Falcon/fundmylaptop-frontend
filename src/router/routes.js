import { loadHTML } from '~/libs/fundmylaptop'
const path = require('path')

const routes = {
  login: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/login.html')
  },
  signup: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/signup.html')
  },
  about: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/about.html')
  },
  contact: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/contact.html')
  },
  invest: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/invest.html')
  },
  loan: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/loan.html')
  },
  faq: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/faq.html')
  },
  privacy: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/privacy.html')
  },
  terms_conditions: async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/terms_conditions.html')
  },
  '': async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/home.html')
  }
}

export default routes;
