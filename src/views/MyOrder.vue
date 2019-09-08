<template>
  <div class="my-order">
    <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #F7F7F7">
          <th>业务类型</th>
          <th>车牌号</th>
          <th>预约时间</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orderList" :key="index">
          <td>{{ order.serviceType }}</td>
          <td>{{ order.carId }}</td>
          <td>{{ order.bookingDate.split('年')[1] + ' ' + order.bookingTime }}</td>
          <td>{{ couvertText(order.status, order.sendMsg) }}</td>
          <td><x-button mini type="primary" @click.native="deleteOrder(order.id)">删除</x-button></td>
        </tr>
        <tr v-if="noResult">
          <td colspan="5">没有记录</td>
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
      
      <x-dialog 
        v-model="showDialog"
      >
        <p class="dialog-text1">预约成功不能自行取消，需要通过微信或电话联系工作人员进行取消</p>
        <p class="dialog-text2">电话号码：18928930072</p>
        <img class="dialog-img" src="/static/kg_gzh.jpg" alt="">
        <div @click="showDialog=false">
          <span class="dialog-close">关闭</span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { Confirm, XTable, XButton, XDialog, Toast, TransferDomDirective as TransferDom } from 'vux'
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
      Confirm,
      XDialog
    },
    data () {
      return {
        orderList: [],
        noResult: false,
        errorMsg: '',
        showToast: false,
        showDialog: false,
        showConfirm: false,
        id: ''
      }
    },
    methods: {
      couvertText (status, text) {
        if (status === '确认完成') {
          return '确认完成'
        }

        if (status === '记账完成') {
          return '记账完成'
        }

        if (status === '现金完成') {
          return '现金完成'
        }

        if (text.indexOf('成功') > -1 || text.indexOf('后台添加') > -1) {
          return '预约成功'
        } else if (text.indexOf('失败') > -1) {
          return '预约失败'
        } else {
          return '未审核'
        }
      },
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
            if (res.data.resultCode === 430) {
              this.showDialog = true
              return
            }

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

.dialog-text1{
  font-size: 14px;
  margin-top: 5px;
  padding: 0 20px;
}

.dialog-text2{
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
}

.dialog-img{
  width: 100%;
}

.dialog-close{
  display: inline-block;
  width: 60px;
  height: 28px;
  line-height: 28px;
  border-radius: 2px;
  background-color: #cccccc;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>