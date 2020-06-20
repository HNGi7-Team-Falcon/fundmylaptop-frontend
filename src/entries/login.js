import FundMyLaptop from '~/libs/fundmylaptop'
import store from '~/store'
import router from '~/router'
import '../assets/css/login.css'
import '../assets/scss/login.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})

lapi.run()
