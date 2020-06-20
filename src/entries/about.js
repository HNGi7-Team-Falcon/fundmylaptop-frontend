import FundMyLaptop from '~/libs/fundmylaptop'
import store from '~/store'
import router from '~/router'
import '../assets/css/about.css'
import '../assets/scss/about.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})
console.log(window.location.host)
lapi.run()
