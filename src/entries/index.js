import FundMyLaptop from '~/libs/fundmylaptop'
import store from '~/store'
import router from '~/router'
import '../assets/css/index.css'
import '../assets/scss/index.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})

lapi.run()
