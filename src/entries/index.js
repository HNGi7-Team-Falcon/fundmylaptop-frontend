import 'bootstrap'
import 'fontawesome'
import FundMyLaptop from '~/libs/fundmylaptop'
import store from '~/store'
import router from '~/router'
import '../assets/css/home.css'
import '../assets/scss/home.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})

lapi.run()
