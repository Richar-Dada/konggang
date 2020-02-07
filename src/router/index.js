import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/Index'
// import Home from '@/views/Home'
// import MyOrder from '@/views/MyOrder'
// import Individual from '@/views/Individual'
// import BookingGuohu from '@/views/BookingGuohu'
// import BookingQianchu from '@/views/BookingQianchu'
// import SchedulGuohu from '@/views/SchedulGuohu'
// import SchedulQianchu from '@/views/SchedulQianchu'
// import Remark from '@/views/Remark'
import Notice from '@/views/Notice'
/* eslint-disable */
// const MyOrder = () => import('@/views/MyOrder')
// const Individual = () => import('@/views/Individual')
// const BookingGuohu = () => import('@/views/BookingGuohu')
// const BookingQianchu = () => import('@/views/BookingQianchu')
// const SchedulGuohu = () => import('@/views/SchedulGuohu')
// const SchedulQianchu = () => import('@/views/SchedulQianchu')
// const Remark = () => import('@/views/Remark')

// 登录注册
import Login from '@/views/Login'
import Registe from '@/views/Registe'
import CertificateConfirm from '@/views/CertificateConfirm'
import ResetPassword from '@/views/ResetPassword'
/* eslint-disable */
// const Login = () => import('@/views/Login')
// const Registe = () => import('@/views/Registe')
// const CertificateConfirm = () => import('@/views/CertificateConfirm')
// const ResetPassword = () => import('@/views/ResetPassword')

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: Index,
    //   children: [
    //     { path: '', name: 'Home', component: Home },
    //     { path: 'myOrder', name: 'MyOrder', component: MyOrder },
    //     { path: 'individual', name: 'Individual', component: Individual },
    //     { path: 'schedulguohua', name: 'Schedulguohu', component: SchedulGuohu },
    //     { path: 'schedulqianchu', name: 'Schedulqianchu', component: SchedulQianchu },
    //     { path: 'remark', name: 'Remark', component: Remark }
    //   ]
    // },
    // { path: '/login', name: 'Login', component: Login },
    // { path: '/registe', name: 'Registe', component: Registe },
    // { path: '/certificateconfirm', name: 'CertificateConfirm', component: CertificateConfirm },
    // { path: '/resetpassword/:phone', name: 'ResetPassword', component: ResetPassword, props: true },
    // { path: 'bookingGuohu/:selectedDate', name: 'BookingGuohu', component: BookingGuohu, props: true },
    // { path: 'bookingQianchu/:selectedDate', name: 'BookingQianchu', component: BookingQianchu, props: true },
    { path: '/notice', component: Notice },
    { path: '*', redirect: '/notice' }
  ]
})
