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
  '': async () => {
    await render('/home.html')
  }
}

export default routes
