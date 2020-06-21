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
    await render('/invest.html')
  },
  loan: async () => {
    await render('/loan.html')
  },
  faq: async () => {
    await render('/faq.html')
  },
  privacy: async () => {
    await render('/privacy.html')
  },
  'terms-and-conditions': async () => {
    await render('/terms-conditions.html')
  },
  '': async () => {
    await render('/home.html')
  }
}

export default routes
