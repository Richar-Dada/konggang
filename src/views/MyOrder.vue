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
        orderList: []
      }
    },
    created () {
      let username = localStorage.getItem('username')
      getBooking(username)
        .then((res) => {
          this.orderList = res.data.orderList
        })
    }
  }
</script>
