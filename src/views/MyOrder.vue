<template>
  <div class="my-order">
    <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #F7F7F7">
          <th>业务类型</th>
          <th>车牌号</th>
          <th>预约时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orderList" :key="index">
          <td>{{ order.serviceType }}</td>
          <td>{{ order.carId }}</td>
          <td>{{ order.bookingDate + ' ' + order.bookingTime }}</td>
          <td><x-button mini type="primary" @click.native="deleteOrder(order.id)">删除</x-button></td>
        </tr>
        <tr v-if="noResult">
          <td></td>
          <td>没有记录</td>
          <td></td>
        </tr>
      </tbody>
    </x-table>
    <toast v-model="showToast" width="6rem" type="text">{{errorMsg}}</toast>
    <div v-transfer-dom>
      <confirm v-model="showConfirm"
      title="操作提示"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">确定删除？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
  import { Confirm, XTable, XButton, Toast, TransferDomDirective as TransferDom } from 'vux'
  import { getBooking, deleteBooking } from '@/service'

  export default {
    name: 'myorder',
    directives: {
      TransferDom
    },
    components: {
      XTable,
      XButton,
      Toast,
      Confirm
    },
    data () {
      return {
        orderList: [],
        noResult: false,
        errorMsg: '',
        showToast: false,
        showConfirm: false,
        id: ''
      }
    },
    methods: {
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      onCancel () {
        console.log('on cancel')
      },
      deleteOrder (id) {
        console.log(11)
        this.showConfirm = true
        this.id = id
      },
      onConfirm () {
        deleteBooking(this.id)
          .then((res) => {
            this.showToast = true
            if (res.data.resultCode === 200) {
              this.errorMsg = res.data.successMsg
              setTimeout(() => {
                location.reload()
              }, 1000)
            } else {
              this.errorMsg = res.data.errorMsg
            }
          })
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