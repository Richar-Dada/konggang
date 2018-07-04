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
      <x-address class="x-address" title="迁入地" v-model="immigrationAddress" placeholder="请选择地址" raw-value :list="addressData" hide-district></x-address>
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
        <group>
          <cell value-align="left">1.	空港登记服务只接受办理9座（含9座）以下使用性质为小型客车的国产或合资车辆，无法办理使用性质为中型客车、大型客车、货车和进口车等其他车辆。</cell>
          <cell value-align="left">2.	车辆行驶证<span style="color:red">（年审需要30日的有效期）</span></cell>
          <cell value-align="left">3.	车辆登记证<span style="color:red">（身份证明信息需和证件一致，需要升位或三证合一的请到分所办理）</span></cell>
          <cell value-align="left">4.	原车主身份证原件<span style="color:red">（证件需要有5个工作日有效期）</span></cell>
          <cell value-align="left">5.	原车主身份证复印件<span style="color:red">（复印件签名、日期、手机号码）</span></cell>
          <cell value-align="left">6.	新车主身份证原件<span style="color:red">（证件需要有30日有效期）</span></cell>
          <cell value-align="left">7.	新车主身份证复印件<span style="color:red">（复印件签名、日期、手机号码）</span></cell>
          <cell value-align="left">8.	非迁入地户口需要居住证原件<span style="color:red">（证件信息清晰、完整且需要有30日有效期）</span></cell>
          <cell value-align="left">9.	非迁入地户口需要居住证复印件<span style="color:red">（复印件签名、日期、手机号码）</span></cell>
          <cell value-align="left">10.	若原车主或新车主是单位/公司，需要提供：
                    ①	营业执照原件<span style="color:red">（证件需要有30日有效期）</span>
                    ②	营业执照复印件<span style="color:red">（复印件需盖单位公章）</span>
                    ③	委托书<span style="color:red">（需盖单位公章及委托时间在有效期内）</span>
                    ④	被委托人身份证原件<span style="color:red">（证件需要有30个工作日有效期）</span>
                    ⑤	被委托人身份证复印件<span style="color:red">（复印件签名、日期、手机号码）</span>
          </cell>
          <cell value-align="left">11.	业务办理声明（前台领用，填写区有模板）</cell>
          <cell value-align="left">12.	机动车业务告知书（前台领用，填写区有模板）</cell>
          <cell value-align="left">13.	<span style="color:red">2003年10月以前注册登记的车辆无法在站点办理迁出</span></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="showNotice = false" type="primary"> 关 闭 </x-button>
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
      showNotice: false,
      isRead: false,
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

      if (this.oldCarOwner && this.newCarOwner && this.carname && this.carId.length > 2 && this.newCarDocumentNumber && this.contactName && this.contactPhone && this.engineNumber) {
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
</style>
