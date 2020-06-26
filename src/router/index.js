import FmlRouter from '~/libs/@razi/router'
import routes from './routes'
import { loadHTML } from '~/libs/@razi/core'
const path = require('path')

const router = new FmlRouter({
  routes
})
// set default route
router.routes.notFound(async query => {
  await loadHTML(path.resolve(__dirname, '../pages') + '/404.html')
})

export default router
