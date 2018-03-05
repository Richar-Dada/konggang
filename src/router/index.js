import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
import MyOrder from '@/views/MyOrder'
import Individual from '@/views/Individual'
import Booking from '@/views/Booking'
import Schedul from '@/views/Schedul'

// 登录注册
import Login from '@/views/Login'
import Registe from '@/views/Registe'
import CertificateConfirm from '@/views/CertificateConfirm'
import ResetPassword from '@/views/ResetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'myOrder', name: 'MyOrder', component: MyOrder },
        { path: 'individual', name: 'Individual', component: Individual },
        { path: 'booking', name: 'Booking', component: Booking },
        { path: 'schedul', name: 'Schedul', component: Schedul }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/registe', name: 'Registe', component: Registe },
    { path: '/certificateconfirm', name: 'CertificateConfirm', component: CertificateConfirm },
    { path: '/resetpassword', name: 'ResetPassword', component: ResetPassword },
    { path: '*', redirect: '/' }
  ]
})
