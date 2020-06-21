import { loadHTML } from '~/libs/fundmylaptop'
import router from '~/libs/fundmylaptop/Router'
import routes from './routes'
const path = require('path')

router.on(routes)
// set default route
router.notFound(async query => {
  await loadHTML(path.resolve(__dirname, '../pages') + '/404.html')
})

export default router
