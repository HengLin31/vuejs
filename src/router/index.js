import Vue from 'vue'
import Router from 'vue-router'
import DataList from '@/components/DataList'
import DataEdit from '@/components/DataEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: DataList
    },
    {
      path: '/update/:id',
      name: 'update',
      component: DataEdit
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
