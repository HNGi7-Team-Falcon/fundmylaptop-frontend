import { render } from '~/libs/fundmylaptop'
/** will work on the folowing later */
import home from '~/pages/home'

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
  home: async () => {
    await render('/home.html')
    home.display()
  },
  '': async () => {
    await render('/home.html')
    home.display()
  }
}

/* const routes = [
  {
    path: '', component: 'home.html', name: 'home'
  },
  {
    path: '/about', component: 'about.html', name: 'about'
  },
  {
    path: '/contact', component: 'contact.html', name: 'contact'
  },
  {
    path: '/login', component: 'login.html', name: 'login'
  },
  {
    path: '/signup', component: 'signup.html', name: 'signup'
  },
  {
    path: '/signup', component: 'signup.html', name: 'signup'
  },
  {
    path: '/faq', component: 'faq.html', name: 'faq'
  },
  {
    path: '/privacy-policy', component: 'privacy-policy.html', name: 'privacy-policy'
  },
  {
    path: '/tos', component: 'tos.html', name: 'tos'
  } WILL REIMPLEMENT THE ROUTER
] */

export default routes
