<template>
  <div class="booking">
    <x-header title="市内过户"></x-header>
    <group class="input-list">
      <divider class="divider-text">为保证业务顺利完成请如实填写以下资料</divider>    
      <x-input title="业务联系人" ref="contactName" label-width="3rem" required v-model="contactName"  placeholder="必填,请输入姓名"></x-input>
      <x-input title="业务联系电话" ref="contactPhone" label-width="3rem" required v-model="contactPhone" :max="11" :is-type="bePhone"  placeholder="必填,请输入电话号码"></x-input>
      <x-input title="品牌型号" ref="carname" label-width="3rem" required v-model="carname" placeholder="必填,如本田飞度"></x-input>
      <x-input title="车牌号" ref="carId" label-width="3rem" :min="7" :max="8" required v-model="carId" :is-type="beCarId"  placeholder="必填,这输入车牌号"></x-input>
      <div class="car-type">
        <div class="car-type-label">汽车类型</div>
        <checker
        v-model="carType"
        default-item-class="car-type-item"
        selected-item-class="car-type-item-selected"
        >
          <checker-item v-for="(item, index) in carTypeList" :key="index" :value="item.value">{{ item.name }}</checker-item>
        </checker>
      </div>
      
      <datetime v-if="carType == 'car'" ref="startDate" v-model="startDate" format="YYYY-MM-DD" title="指标有效期开始时间"></datetime>
      <datetime v-if="carType == 'car'" ref="endDate" v-model="endDate" format="YYYY-MM-DD" title="指标有效期结束时间"></datetime>
      <x-input title="备注" ref="mark" label-width="3rem" v-model="mark" :max="100" placeholder="特殊情况请备注"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="booking">提 交</x-button>
      <x-button mini class="submit-btn" @click.native="openNotice">市内过户预约须知</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
    <div v-transfer-dom>
      <popup v-model="showNotice" position="bottom">
        <div class="notice-list">
          <h3 class="notice-title">受理范围：</h3>
          <p>9座以下（含9座）车辆类型为小型客车（含新能源车）的国产或合资车辆可办理市内过户和迁出提档业务，进口小型客车（含新能源）办理市内过户业务。</p>
          <p class="color">PS：进口车迁出业务暂未开通</p>
          <p class="mt10">使用性质为非营运、营转非、出租转非、预约出租转非的小型客车可办理市内过户和迁出提档业务</p>
          <p class="color">PS：办理业务过程不能改变车辆的使用性质</p>
          <p class="mt10">车辆类型为轻型、微型货车（含新能源）的国产或合资车辆可办理市内过户和迁出业务，进口轻型、微型货车（含新能源）办理市内过户业务。</p>
          <p class="color">PS：进口车迁出业务暂未开通</p>
          <p class="mt10">使用性质为非营运、营转非、货运的轻型、微型货车可办理市内过户和迁出提档业务。</p>
          <p class="color">PS：货运性质车辆转移登记时可变更性质为“营转非”</p>
          <p class="mt10">办理车辆的所有人身份证证明号码必须为与原车主证件号码一致，站点无法办理变更业务，不符合的需要先到分所办理变更手续一个工作日后再预约本站。</p>
          <p>预约本站迁出业务，请在上一宗车管业务（过户、变更、补证、解押）办结后20天再预约。</p>
          <p class="color">PS：市内过户业务不受此影响</p>

          <h3 class="notice-title mt10">预约时间：</h3>
          <p>当天15:00前可预约次工作日的市内过户业务。</p>
          <p>当天10:00前可预约3个工作日后的迁出提档业务。</p>

          <h3 class="notice-title mt10">所需资料：</h3>
          <p>1.车辆行驶证<span class="color">（市内过户：年审当月有效；迁出提档：年审有效期到次月）</span></p>
          <p>2.车辆登记证<span class="color">（身份证明信息需和证件一致，需要升位或三证合一的请先到分所办理）</span></p>
          <p>3.新车主身份证原件和复印件<span class="color">（证件需要有5个工作日有效期）</span> </p>
          <p>4.指标书<span class="color">（需要有3个工作日有效期，迁入地没有限号标准则不需提供）</span></p>
          <p>5.非迁入地户口需要居住证原件和复印件<span class="color">（一个月以上有效期；证件信息模糊需提供居住信息表）</span></p>
          <p>6.若新车主是单位/公司，需要提供：</p>
          <p class="pl10">①营业执照原件<span class="color">（证件需要有1个月以上有效期）</span></p>
          <p class="pl10">②营业执照复印件<span class="color">（复印件需盖单位公章）</span></p>
          <p class="pl10">③委托书<span class="color">（需盖单位公章及委托时间在有效期内）</span></p>
          <p class="pl10">④被委托人身份证原件和复印件<span class="color">（证件需要有5个工作日有效期）</span></p>
          <p>7.若原车主是单位/公司需要提供<span class="color">业务委托书（盖公章）</span>和<span class="color">增值税发票</span>。</p>
        </div>
        
        <div style="padding: 15px;">
          <x-button @click.native="showNotice = false" type="primary"> 知晓并关闭 </x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import { Divider, TransferDom, Group, XInput, XButton, Toast, XHeader, Popup, Cell, Datetime, Checker, CheckerItem } from 'vux'
  import { checkCarId, checkPhone, checkCarNumber, checkEngineNumber } from '@/utils/validateTool'
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
      XButton,
      Toast,
      XHeader,
      Popup,
      Cell,
      Datetime,
      Checker,
      CheckerItem
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
        carNumber: '',
        engineNumber: '',
        showNotice: true,
        isRead: true,
        mark: '',
        startDate: '',
        endDate: '',
        carType: '',
        carTypeList: [
          { name: '小型客车', value: 'car' },
          { name: '轻微型货车', value: 'van' }
        ]
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
            carType: this.carType,
            mark: this.mark,
            engineNumber: this.engineNumber,
            createTime: new Date().getTime(),
            createBy: localStorage.getItem('phone'),
            validDate: this.carType === 'car' ? this.startDate + '～' + this.endDate : '--'
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
        if (!this.isRead) {
          this.showToast = true
          this.toastMsg = '请阅读一遍预约须知'
          return false
        }

        if (this.carType === '') {
          this.showToast = true
          this.toastMsg = '请选择汽车类型'
          return false
        } else if (this.carType === 'car') {
          if (this.carname && this.carId.length > 2 && this.contactName && this.contactPhone && this.startDate && this.endDate) {
            if (this.$refs.carname.valid && this.$refs.carId.valid && this.$refs.contactName.valid && this.$refs.contactPhone.valid) {
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
        } else {
          if (this.carname && this.carId.length > 2 && this.contactName && this.contactPhone) {
            if (this.$refs.carname.valid && this.$refs.carId.valid && this.$refs.contactName.valid && this.$refs.contactPhone.valid) {
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
      }
    },
    created () {
      if (!this.selectedDate) {
        this.$router.push('/')
      }

      const selectedDateArr = decodeURI(this.selectedDate).split('-')
      console.log(selectedDateArr)
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
    text-align: center;
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
  .car-type{
    margin-left: 20px;
    height: 40px;
    width: 730px;
    display: flex;
    align-content: center;
    line-height: 40px;
  }
  .car-type-label {
  text-align: center;
  border-radius: 3px;
  
  margin-right: 6px;
}
.car-type-item{
  height: 26px;
  line-height: 26px;
  border: 2px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 10px;
  padding: 0 5px;
}
.car-type-item-selected {
  //background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
  
}
.car-type{
  border-top: 1px solid #D9D9D9;
}
</style>
