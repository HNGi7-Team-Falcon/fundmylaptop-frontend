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
  '': async () => {
    await loadHTML(path.resolve(__dirname, '../pages') + '/home.html')
  }
}

export default routes
