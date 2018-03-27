import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
// import MyOrder from '@/views/MyOrder'
// import Individual from '@/views/Individual'
// import Booking from '@/views/Booking'
// import Schedul from '@/views/Schedul'
// import Remark from '@/views/Remark'
/* eslint-disable */
const MyOrder = () => import('@/views/MyOrder')
const Individual = () => import('@/views/Individual')
const BookingGuohu = () => import('@/views/BookingGuohu')
const BookingQianchu = () => import('@/views/BookingQianchu')
const SchedulGuohu = () => import('@/views/SchedulGuohu')
const SchedulQianchu = () => import('@/views/SchedulQianchu')
const Remark = () => import('@/views/Remark')

// 登录注册
// import Login from '@/views/Login'
// import Registe from '@/views/Registe'
// import CertificateConfirm from '@/views/CertificateConfirm'
// import ResetPassword from '@/views/ResetPassword'
/* eslint-disable */
const Login = () => import('@/views/Login')
const Registe = () => import('@/views/Registe')
const CertificateConfirm = () => import('@/views/CertificateConfirm')
const ResetPassword = () => import('@/views/ResetPassword')

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
        { path: 'bookingGuohu/:selectedDate', name: 'BookingGuohu', component: BookingGuohu, props: true },
        { path: 'bookingQianchu/:selectedDate', name: 'BookingQianchu', component: BookingQianchu, props: true },
        { path: 'schedulguohua', name: 'Schedul', component: SchedulGuohu },
        { path: 'schedulqianchu', name: 'Schedul', component: SchedulQianchu },
        { path: 'remark', name: 'Remark', component: Remark }
      ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/registe', name: 'Registe', component: Registe },
    { path: '/certificateconfirm', name: 'CertificateConfirm', component: CertificateConfirm },
    { path: '/resetpassword/:phone', name: 'ResetPassword', component: ResetPassword, props: true },
    { path: '*', redirect: '/' }
  ]
})
