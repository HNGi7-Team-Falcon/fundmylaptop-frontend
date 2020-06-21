import { render } from '~/libs/fundmylaptop'

const routes = {
  login: async () => {
    await render('/login.html')
  },
  signup: async () => {
    await render('/signup.html')
  },
  about: async () => {
    await render('/about.html')
  },
  contact: async () => {
    await render('/contact.html')
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
    await render('/home.html')
  }
}

export default routes;
