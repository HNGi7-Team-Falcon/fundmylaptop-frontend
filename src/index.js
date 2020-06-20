import FundMyLaptop from '~/libs/fundmylaptop'
import './assets/css/styles.css'
import './assets/scss/styles.scss'

const lapi = new FundMyLaptop({
  ele: 'fundmylaptopapp'
})

lapi.run()
