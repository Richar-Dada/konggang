<template>
  <div class="booking">
    <x-header title="迁出提档"></x-header>
    <group class="input-list">
      <divider class="divider-text">为保证业务顺利完成请如实填写以下资料</divider>
      <x-input title="业务联系人" ref="contactName" label-width="3rem" required v-model="contactName"  placeholder="必填,请输入姓名"></x-input>
      <x-input title="业务联系电话" ref="contactPhone" label-width="3rem" required v-model="contactPhone" :is-type="bePhone" :min="11" :max="11"  placeholder="必填,请输入电话号码"></x-input>
      <x-input title="品牌型号" ref="carname" label-width="3rem" required v-model="carname" placeholder="必填,如:本田飞度"></x-input>
      <x-input title="车牌号" ref="carId" label-width="3rem" required  :min="7" :max="7" v-model="carId" :is-type="beCarId" placeholder="必填,这输入车牌号"></x-input>
      <x-input title="发动机号" ref="engineNumber" label-width="3rem" required v-model="engineNumber" :min="4" :max="4" :is-type="beEngineNumber" placeholder="必填,发动机号码后4位"></x-input>
      <x-input title="原车主姓名" ref="oldCarOwner" label-width="3rem" required v-model="oldCarOwner" placeholder="必填"></x-input>
      <x-input title="新车主姓名" ref="newCarOwner" label-width="3rem" required v-model="newCarOwner" placeholder="必填"></x-input>
      <x-address class="x-address" title="迁入地" ref="immigrationAddress" v-model="immigrationAddress" placeholder="请选择地址" raw-value :list="addressData" hide-district></x-address>
      <selector ref="newCarDocumentType" title="新车主证件" :options="documentType" placeholder="请选择证件" v-model="newCarDocumentType"></selector>
      <x-input title="新车主证件号码" ref="newCarDocumentNumber" label-width="3.5rem" :min="18" :max="18" v-model="newCarDocumentNumber" placeholder="必填"></x-input>
      <x-input title="备注" ref="mark" label-width="3rem" v-model="mark" :max="100" placeholder="特殊情况请备注"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="booking">提 交</x-button>
      <x-button mini class="submit-btn" @click.native="openNotice">迁出提档预约须知</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
    <div v-transfer-dom>
      <popup v-model="showNotice" position="bottom">
        <div class="notice-list">
          <h3 class="notice-title">受理范围：</h3>
          <p>9座以下（含9座）使用性质为小型客车的国产或合资车辆可办理市内过户和迁出提档业务。进口小型客车和轻型、微型货车可办理市内过户业务。</p>
          <p class="color">PS：预约货车业务指标有限期可随意选择</p>
          <p class="mt10">使用性质为非营运、营转非、出租转非、预约出租转非的小型客车可办理市内内过户和迁出提档业务，使用性质为非营运、营转非、货运的轻型、微型货车可办理市内过户业务。</p>
          <p class="color">PS：办理业务过程不能改变车辆的使用性质</p>
          <p class="mt10">办理车辆的所有人身份证证明号码必须为与原车主证件号码一致，站点无法办理变更业务，不符合的需要先到分所办理变更手续后两个工作日再预约本站。</p>
          <p class="mt10">预约本站迁出业务，请在上一宗车管业务（过户、变更、补证、解押）办结后20天再预约。</p>
          <p class="color">PS：市内过户业务不受此影响</p>

          <h3 class="notice-title mt10">预约时间：</h3>
          <p>当天15:00前可预约次工作日的市内过户业务。</p>
          <p>当天10:00前可预约3个工作日后的迁出提档业务。</p>

          <h3 class="notice-title mt10">所需资料：</h3>
          <p>1.车辆行驶证<span class="color">（市内过户：年审当月有效；迁出提档：年审有效期到次月）</span></p>
          <p>2.车辆登记证<span class="color">（身份证明信息需和证件一致，需要升位或三证合一的请先到分所办理）</span></p>
          <p>3. 新车主身份证原件和复印件<span class="color">（证件需要有5个工作日有效期）</span> </p>
          <p>4.指标书<span class="color">（需要有3个工作日有效期，迁入地没有限号标准则不需提供）</span></p>
          <p>5.非迁入地户口需要居住证原件和复印件<span class="color">（一个月以上有效期；证件信息模糊需提供居住信息表）</span></p>
          <p>6.若新车主是单位/公司，需要提供：</p>
          <p class="pl10">①营业执照原件<span class="color">（证件需要有1个月以上有效期）</span></p>
          <p class="pl10">②营业执照复印件<span class="color">（复印件需盖单位公章）</span></p>
          <p class="pl10">③委托书<span class="color">（需盖单位公章及委托时间在有效期内）</span></p>
          <p class="pl10">④被委托人身份证原件和复印件<span class="color">（证件需要有5个工作日有效期）</span></p>
          <p>7.若原车主是单位/公司需要提供业务委托书<span class="color">（盖公章）</span>和<span class="color">增值税发票</span>。</p>
        </div>
        <div style="padding: 15px;">
          <x-button @click.native="showNotice = false" type="primary"> 知晓并关闭 </x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { Divider, TransferDom, Group, Popup, Cell, XInput, XHeader, Checker, CheckerItem, XTextarea, XButton, Toast, ChinaAddressV4Data, Value2nameFilter as value2name, XAddress, Selector } from 'vux'
import { checkCarId, checkUserID, checkPhone, checkCarNumber, checkEngineNumber } from '@/utils/validateTool'
import { booking } from '@/service'

export default {
  name: 'schedul',
  directives: {
    TransferDom
  },
  components: {
    Divider,
    Group,
    XInput,
    XHeader,
    Checker,
    CheckerItem,
    XTextarea,
    XButton,
    Toast,
    XAddress,
    Selector,
    Popup,
    Cell
  },
  props: {
    selectedDate: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      serviceType: '迁出提档',
      username: '',
      engineNumber: '',
      carId: '粤A',
      carname: '',
      toastMsg: '',
      bookingDate: '',
      bookingTime: '',
      oldCarOwner: '',
      newCarOwner: '',
      immigrationAddress: [],
      documentType: [
        { key: '身份证', value: '身份证' },
        { key: '居住证', value: '居住证' },
        { key: '统一社会代码', value: '统一社会代码' }],
      addressData: ChinaAddressV4Data,
      showToast: false,
      newCarDocumentType: null,
      newCarDocumentNumber: '',
      contactName: '',
      contactPhone: '',
      carNumber: '',
      showNotice: true,
      isRead: true,
      mark: ''
    }
  },
  methods: {
    beUserID(value) {
      const result = checkUserID(value)
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
    openNotice () {
      this.showNotice = true
      this.isRead = true
    },
    beCarId(value) {
      const result = checkCarId(value)
      return {
        valid: result.valid,
        msg: result.msg
      }
    },
    beCarNumber (value) {
      const result = checkCarNumber(value)
      return {
        valid: result.valid,
        msg: result.msg
      }
    },
    beEngineNumber (value) {
      const result = checkEngineNumber(value)
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
          contactName: this.contactName,
          contactPhone: this.contactPhone,
          carNumber: this.carNumber,
          carname: this.carname,
          carId: this.carId,
          engineNumber: this.engineNumber,
          oldCarOwner: this.oldCarOwner,
          newCarOwner: this.newCarOwner,
          immigrationAddress: this.getName(this.immigrationAddress),
          newCarDocumentType: this.newCarDocumentType,
          newCarDocumentNumber: this.newCarDocumentNumber,
          mark: this.mark,
          createTime: new Date().getTime(),
          createBy: localStorage.getItem('phone')
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
      if (!this.isRead) {
        this.showToast = true
        this.toastMsg = '请阅读一遍预约须知'
        return false
      }

      if (this.oldCarOwner && this.newCarOwner && this.carname && this.carId.length > 2 && this.newCarDocumentNumber && this.contactName && this.contactPhone && this.engineNumber && this.immigrationAddress.length > 0) {
        if (this.$refs.oldCarOwner.valid && this.$refs.newCarOwner.valid && this.$refs.carname.valid && this.$refs.carId.valid && this.$refs.newCarDocumentNumber.valid && this.$refs.contactName.valid && this.$refs.contactPhone.valid && this.$refs.engineNumber.valid) {
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
  text-align: center;
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

.divider-text{
  font-size: 12px;
}

.notice-list{
  padding: 10px 20px;
}

.notice-title{
  font-size: 18px;
  font-weight: bold;
}

.color{
  color: red;
}

.pl10{
  padding-left: 10px;
}

.mt10{
  margin-top: 10px;
}
</style>
