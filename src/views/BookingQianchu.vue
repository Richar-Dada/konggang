<template>
  <div class="booking">
    <group class="input-list">
      <x-input title="品牌型号" ref="carname" label-width="2.5rem" required v-model="carname" placeholder="必填,品牌型号"></x-input>
      <x-input title="车牌号" ref="carId" label-width="2.5rem" required v-model="carId" placeholder="必填,这输入车牌号"></x-input>
      <x-input title="发动机号" ref="engineNumber" label-width="2.5rem" required v-model="engineNumber" keyboard="number" :min="4" :max="4" placeholder="必填,发动机号码后四位"></x-input>
      <x-input title="原车主姓名" ref="oldCarOwner" label-width="2.5rem" required v-model="oldCarOwner" placeholder="必填"></x-input>
      <x-input title="新车主姓名" ref="newCarOwner" label-width="2.5rem" required v-model="newCarOwner" placeholder="必填"></x-input>
      <x-address class="x-address" title="迁入地" v-model="immigrationAddress" raw-value :list="addressData"></x-address>
      <selector ref="newCarDocumentType" title="新车主证件" placeholder="请选择一个" :options="documentType" v-model="newCarDocumentType"></selector>
      <x-input title="新车主证件号码" ref="newCarDocumentNumber" label-width="3.5rem" required v-model="newCarDocumentNumber" placeholder="必填"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="booking">提 交</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
import { Group, XInput, Checker, CheckerItem, XTextarea, XButton, Toast, ChinaAddressV4Data, Value2nameFilter as value2name, XAddress, Selector } from 'vux'
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
    Toast,
    XAddress,
    Selector
  },
  props: {
    selectedDate: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      serviceType: '过户',
      username: '',
      engineNumber: '',
      carId: '粤A',
      carname: '',
      toastMsg: '',
      bookingDate: '',
      bookingTime: '',
      oldCarOwner: '',
      newCarOwner: '',
      immigrationAddress: ['广东省', '广州市', '花都区'],
      documentType: [
        { key: '身份证', value: '身份证' },
        { key: '居住证', value: '居住证' },
        { key: '统一社会代码', value: '统一社会代码' }],
      addressData: ChinaAddressV4Data,
      showToast: false,
      newCarDocumentType: '',
      newCarDocumentNumber: ''
    }
  },
  methods: {
    bePhone(value) {
      const result = checkPhone(value)
      return {
        valid: result.valid,
        msg: result.msg
      }
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    booking() {
      if (this._isAllValid()) {
        const bookingReq = {
          serviceType: this.serviceType,
          bookingDate: this.bookingDate,
          bookingTime: this.bookingTime,
          carname: this.carname,
          carId: this.carId,
          engineNumber: this.engineNumber,
          oldCarOwner: this.oldCarOwner,
          newCarOwner: this.newCarOwner,
          immigrationAddress: this.getName(this.immigrationAddress),
          newCarDocumentType: this.newCarDocumentType,
          newCarDocumentNumber: this.newCarDocumentNumber,
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
    _isAllValid() {
      if (this.oldCarOwner && this.carname && this.carId && this.newCarOwner && this.newCarDocumentType && this.newCarDocumentNumber) {
        if (this.$refs.oldCarOwner.valid && this.$refs.carname.valid && this.$refs.carId.valid && this.$refs.newCarOwner.valid && this.$refs.newCarDocumentNumber.valid) {
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
  created() {
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
.box {
  overflow: hidden;
  padding-left: 15px;
  padding-top: 10px;
}

.left-label {
  font-size: 18px;
  float: left;
  color: #000;
  line-height: 44px;
  padding-right: 20px;
}

.function-box {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}

.submit-btn {
  margin-bottom: 20px;
}

.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}

.demo1-item-selected {
  border: 2px solid #0D70C9;
}

.x-address{
  position: relative;
}

.x-address:before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  border-top: 1px solid #D9D9D9;
  left: 16px;
  transform: scaleY(0.5);
}
</style>
