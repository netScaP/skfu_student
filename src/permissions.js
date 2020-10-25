import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
import apiClient from './utils/feathers-client'

function hasPermission(to, from, next) {
  next()
}
const whiteList = ['/', '/login', '/student', '/company', '/401', '/404'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) > -1) {
    next()
  } else if (store.getters['user/token']) {
    hasPermission(to, from, next)
  } else if (getToken()) {
    apiClient
      .authenticate()
      .then(async res => {
        await store.dispatch('user/setToken', res.accessToken)
        hasPermission(to, from, next)
      })
      .catch(() => {
        next('/')
      })
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
