import FundMyLaptop from '~/libs/fundmylaptop'
import store from '~/store'
import router from '~/router'
import '../assets/css/signup.css'
import '../assets/scss/signup.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})

lapi.run()
