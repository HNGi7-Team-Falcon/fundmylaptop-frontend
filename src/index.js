import FundMyLaptop from '~/libs/fundmylaptop'
import store from './store'
import router from './router'
import './assets/css/styles.css'
import './assets/scss/styles.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp',
  store,
  router
})

lapi.run()
