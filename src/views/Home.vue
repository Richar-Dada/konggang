<template>
  <div class="home">
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" height="4rem"></swiper>
    <div class="booking-btn">约</div>
  </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
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
        demo06_index: 0
      }
    },
    methods: {
      demo06_onIndexChange (index) {
        this.demo06_index = index
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/base.less";
  .booking-btn{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: @blue;
    color: #ffffff;
    margin: 100px auto;
    font-size: 100px;
    line-height: 200px;
    text-align: center;
  }
</style>
