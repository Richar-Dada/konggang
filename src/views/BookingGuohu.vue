<template>
  <div class="booking">
    <x-header title="市内过户"></x-header>
    <group class="input-list">
      <x-input title="联系人姓名" ref="contactName" label-width="2.5rem" required v-model="contactName"  placeholder="必填,请输入姓名"></x-input>
      <x-input title="联系电话" ref="contactPhone" label-width="2.5rem" required v-model="contactPhone" :is-type="bePhone"  placeholder="必填,请输入电话号码"></x-input>
      <x-input title="品牌型号" ref="carname" label-width="2.5rem" required v-model="carname" placeholder="必填,如本田飞度"></x-input>
      <x-input title="车牌号" ref="carId" label-width="2.5rem" required v-model="carId" :is-type="beCarId"  placeholder="必填,这输入车牌号"></x-input>
      <x-input title="车架号" ref="carNumber" label-width="2.5rem" required v-model="carNumber" :min="17" :max="17"  placeholder="必填,请输入17位车架号"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="booking">提 交</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { Group, XInput, XButton, Toast, XHeader } from 'vux'
  import { checkCarId, checkPhone } from '@/utils/validateTool'
  import { booking } from '@/service'

  export default {
    name: 'schedul',
    components: {
      Group,
      XInput,
      XButton,
      Toast,
      XHeader
    },
    props: {
      selectedDate: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        serviceType: '市内过户',
        carname: '',
        carId: '粤A',
        toastMsg: '',
        bookingDate: '',
        bookingTime: '',
        showToast: false,
        contactName: '',
        contactPhone: '',
        carNumber: ''
      }
    },
    methods: {
      beCarId (value) {
        const result = checkCarId(value)
        return {
          valid: result.valid,
          msg: result.msg
        }
      },
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
            contactName: this.contactName,
            contactPhone: this.contactPhone,
            carNumber: this.carNumber,
            carname: this.carname,
            carId: this.carId,
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
        if (this.carname && this.carId.length > 2) {
          if (this.$refs.carname.valid && this.$refs.carId.valid) {
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
