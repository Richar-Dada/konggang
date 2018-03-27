<template>
  <div class="booking">
    <group class="input-list">
      <div class="box">
        <div class="left-label">
          办理业务
        </div>
        <checker v-model="serviceType" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="过户" style="margin-right:0.5rem;">过户</checker-item>
        <checker-item value="迁出">迁出</checker-item>
        </checker>
      </div>
      <x-input title="名字" ref="username" label-width="2.5rem" required v-model="username" placeholder="必填,请输入名字"></x-input>
      <x-input title="手机号码" ref="phone" label-width="2.5rem" required v-model="phone" keyboard="number" :is-type="bePhone" :max="11" placeholder="必填,请输入手机号码"></x-input>
      <x-input title="车牌" ref="carId" label-width="2.5rem" required v-model="carId"  placeholder="必填,这输入车牌号"></x-input>
      <x-textarea :max="200" v-model="remark" placeholder="有什么需要特殊说明吗" show-counter></x-textarea>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="booking">提 交</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { Group, XInput, Checker, CheckerItem, XTextarea, XButton, Toast } from 'vux'
  import { checkPhone } from '@/utils/validateTool'
  import { booking } from '@/service'

  export default {
    name: 'schedul',
    components: {
      Group,
      XInput,
      Checker,
      CheckerItem,
      XTextarea,
      XButton,
      Toast
    },
    props: {
      selectedDate: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        serviceType: '过户',
        username: '',
        phone: '',
        carId: '',
        remark: '',
        toastMsg: '',
        bookingDate: '',
        bookingTime: '',
        showToast: false
      }
    },
    methods: {
      bePhone (value) {
        const result = checkPhone(value)
        return {
          valid: result.valid,
          msg: result.msg
        }
      },
      booking () {
        if (this._isAllValid()) {
          const bookingReq = {
            serviceType: this.serviceType,
            bookingDate: this.bookingDate,
            bookingTime: this.bookingTime,
            carId: this.carId,
            bookingName: this.username,
            bookingPhone: this.phone,
            remark: this.remark,
            createTime: new Date().getTime(),
            createBy: localStorage.getItem('username')
          }

          booking(bookingReq)
            .then((res) => {
              this.showToast = true
              if (res.data.resultCode === 200) {
                this.toastMsg = res.data.successMsg
                setTimeout(() => {
                  this.$router.push('/myOrder')
                }, 1500)
              } else {
                this.toastMsg = res.data.errorMsg
              }
            })
        }
      },
      _isAllValid () {
        if (this.username && this.phone && this.carId) {
          if (this.$refs.username.valid && this.$refs.phone.valid && this.$refs.carId.valid) {
            return true
          }
          this.showToast = true
          this.toastMsg = '请按规则填写信息'
          return false
        } else {
          this.showToast = true
          this.toastMsg = '请把信息填写完整'
          return false
        }
      }
    },
    created () {
      if (!this.selectedDate) {
        this.$router.push('/')
      }

      const selectedDateArr = decodeURI(this.selectedDate).split('-')
      this.bookingDate = selectedDateArr[0]
      this.bookingTime = selectedDateArr[1]
    }
  }
</script>

<style lang="less" scoped>
  .box{
    overflow: hidden;
    padding-left: 15px;
    padding-top: 10px;
  }
  .left-label{
    font-size: 18px;
    float: left;
    color: #000;
    line-height: 44px;
    padding-right: 20px;
  }
  .function-box{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
  }
  .submit-btn{
    margin-bottom: 20px;
  }
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  .demo1-item-selected {
    border: 2px solid #0D70C9;
  }
</style>
