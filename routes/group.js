const group = require('../controllers/group.js')
const Router = require('koa-router')
const { auth } = require('../utils/middlewares')

const router = new Router({
  prefix: '/group'
})

router.get('/list', group.find)
router.get('/:gid', group.preload, group.findOne)
router.post('/', auth.login, auth.admin, group.create)
router.put('/:gid', auth.login, auth.admin, group.preload, group.update)
router.del('/:gid', auth.login, group.del)

module.exports = router
