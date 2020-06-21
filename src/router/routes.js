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
  '': async () => {
    await render('/home.html')
  },
  '*': async () => {
    await render('/404.html')
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
  }
] */

export default routes
