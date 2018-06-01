<template>
  <div class="schedul">
    <div style="overflow:scroll;-webkit-overflow-scrolling:touch;">
      <tab style="width:15rem;" bar-active-color="#668599" :line-width="0">
        <tab-item selected @on-item-click="getSchedul">{{ dateList[0].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[1].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[2].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[3].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[4].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[5].date }}</tab-item>
        <tab-item @on-item-click="getSchedul">{{ dateList[6].date }}</tab-item>
      </tab>
    </div>
    <div class="schedul-list">
      <div class="schedul-item" v-for="(item, index) in schedulList" :key="index" @click="booking(item)">
        <p class="schedul-item-text">{{ item.duration }}</p>
      </div>
      <div class="no-result" v-if="noResult">
        <icon type="warn" is-msg></icon>
        <p class="no-result-text">{{errorMsg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem, Masker, Icon } from 'vux'
  import { getSchedulDateQianchu } from '../utils/dateTool'
  import { getScheList } from '@/service'

  export default {
    name: 'schedul',
    components: {
      Tab,
      TabItem,
      Masker,
      Icon
    },
    data () {
      return {
        dateList: [],
        schedulList: '',
        selectedIndex: 0,
        noResult: false,
        deadline: '',
        errorMsg: ''
      }
    },
    methods: {
      getSchedul (activeIndex, type = 'qianchu') {
        this.schedulList = []
        this.selectedIndex = activeIndex
        this.$vux.loading.show({
          text: 'Loading'
        })
        getScheList(this.dateList[activeIndex].fullDate, type)
          .then((res) => {
            this.$vux.loading.hide()
            if (res.data.resultCode === 200) {
              this.schedulList = res.data.schedulList
              this.noResult = false
            } else {
              this.noResult = true
              this.errorMsg = res.data.errorMsg
            }
          })
      },
      booking (item) {
        let selectedDate = `${this.dateList[this.selectedIndex].fullDate}-${item.duration}`
        this.$router.push({ name: 'BookingQianchu', params: { selectedDate: encodeURI(selectedDate) } })
      }
    },
    created () {
      this.dateList = getSchedulDateQianchu()
      this.getSchedul(0)
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/css/base.less';

  .schedul{
    padding-bottom: 60px;
  }
  .schedul-item{
    height: 100px;
    margin: 10px 10px 0 10px;
    background-color: @light-blue;
  }
  .schedul-item-text{
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    color: #ffffff;
  }
  .no-result{
    height: 100px;
    margin: 30px 10px 0 10px;
    text-align: center;
  }
  .no-result-text{
    line-height: 100px; /* no */
    text-align: center;
    font-size: 22px;
  }
</style>
