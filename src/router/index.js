import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = (r) => require.ensure([], () => r(require('@/page/login')), 'login')
const manage = (r) => require.ensure([], () => r(require('@/page/manage')), 'manage')
const home = (r) => require.ensure([], () => r(require('@/page/home')), 'home')
const addShop = (r) => require.ensure([], () => r(require('@/page/addShop')), 'addShop')

const foodList = (r) => require.ensure([], () => r(require('@/page/foodList')), 'foodList')

const visitor = (r) => require.ensure([], () => r(require('@/page/visitor')), 'visitor')
const svgExample = (r) => require.ensure([], () => r(require('@/page/svgExample')), 'svgExample')

const uploadImg = (r) => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg')
const vueEdit = (r) => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit')
const monitor = (r) => require.ensure([], () => r(require('@/page/monitor')), 'monitor')
const basicTable = (r) => require.ensure([], () => r(require('@/page/basicTable')), 'basicTable')

const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/manage',
    component: manage,
    name: '',
    children: [
      {
        path: '',
        component: home,
        meta: [],
      },
      {
        path: '/addShop',
        component: addShop,
        meta: ['添加数据', '添加商铺'],
      },

      {
        path: '/foodList',
        component: foodList,
        meta: ['数据管理', '食品列表'],
      },

      {
        path: '/visitor',
        component: visitor,
        meta: ['图表', '用户分布'],
      },
      {
        path: '/svgExample',
        component: svgExample,
        meta: ['图表', 'svgExample'],
      },
      {
        path: '/basicTable',
        component: basicTable,
        meta: ['图表', 'basicTable'],
      },

      {
        path: '/uploadImg',
        component: uploadImg,
        meta: ['文本编辑', 'MarkDown'],
      },
      {
        path: '/vueEdit',
        component: vueEdit,
        meta: ['编辑', '文本编辑'],
      },
    ],
  },
  { path: '/monitor', component: monitor },
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
