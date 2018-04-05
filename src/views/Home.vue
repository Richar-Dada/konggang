<template>
  <div class="home">
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" height="4rem"></swiper>
    <div class="booking-content" :style="{'height': bookingBtnHeight + 'rem'}">
      <div class="booking-btn" @click="booking('guohu')" >市内过户</div>
      <div class="booking-btn" @click="booking('qianchu')" >迁出提档</div>
    </div>
  </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: '/static/banner2.jpg',
    title: '一键预约 无需排队'
  }, {
    url: 'javascript:',
    img: '/static/banner1.jpg',
    title: '一条龙五星级服务'
  }]

  const urlList = baseList.map((item, index) => ({
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `${item.title}`
  }))

  export default {
    name: 'home',
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider
    },
    data () {
      return {
        demo06_list: urlList,
        demo06_index: 0,
        bookingBtnHeight: '3rem'
      }
    },
    methods: {
      demo06_onIndexChange (index) {
        this.demo06_index = index
      },
      booking (key) {
        if (localStorage.getItem('token')) {
          if (key === 'guohu') {
            this.$router.push('/schedulguohua')
          } else {
            this.$router.push('/schedulqianchu')
          }
        } else {
          this.$router.push('/login')
        }
      }
    },
    created () {
      let windowHeight = window.innerHeight
      let rootFontSize = parseInt(window.getComputedStyle(document.documentElement)['fontSize'])
      let rem = windowHeight / rootFontSize
      this.bookingBtnHeight = rem - 92 / 75 - 4
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/base.less";
  .booking-content{
    overflow: hidden;
    background-image: url('../assets/bg.png');
  }
  .booking-btn{
    width: 300px;
    height: 60px;
    border-radius: 10px;
    background-color: @blue;
    color: #ffffff;
    margin: 40px auto;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    box-shadow: 0px 0px 10px #000000;
  }
</style>
