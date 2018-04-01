<template>
  <div class="my-order">
    <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #F7F7F7">
          <th>业务类型</th>
          <th>车牌号</th>
          <th>预约时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orderList" :key="index">
          <td>{{ order.serviceType }}</td>
          <td>{{ order.carId }}</td>
          <td>{{ order.bookingDate + ' ' + order.bookingTime }}</td>
        </tr>
        <tr v-if="noResult">
          <td></td>
          <td>没有记录</td>
          <td></td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
  import { XTable } from 'vux'
  import { getBooking } from '@/service'

  export default {
    name: 'myorder',
    components: {
      XTable
    },
    data () {
      return {
        orderList: [],
        noResult: false
      }
    },
    created () {
      let phone = localStorage.getItem('phone')
      this.$vux.loading.show({
        text: 'Loading'
      })
      getBooking(phone)
        .then((res) => {
          this.$vux.loading.hide()
          this.orderList = res.data.orderList
          if (!this.orderList.length) {
            this.noResult = true
          }
        })
    }
  }
</script>

<style scoped>
.my-order{
  padding-bottom: 60px;
}
</style>