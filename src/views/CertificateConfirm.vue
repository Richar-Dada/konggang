<template>
  <div class="login">
    <x-header title="修改密码"></x-header>
    <group class="input-list">
      <x-input title="手机号码" ref="phone" label-width="2.5rem" v-model="phone" :is-type="bePhone" :max="11" placeholder="请输入11位手机号码"></x-input>
      <x-input title="验证码" ref="code" label-width="2.5rem" class="weui-vcode" required :min="6" :max="6" v-model="code">
        <x-button slot="right" type="primary" mini :disabled="!canSendCode" @click.native="sendCode">{{sendCodeBtnText}}</x-button>
      </x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" action-type="button" @click.native="submitCertificate">确 认</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Group, Toast } from 'vux'
  import { checkPhone } from '@/utils/validateTool'
  import { confirmCertificate, sendCode } from '@/service'

  export default {
    name: 'login',
    components: {
      XHeader,
      XButton,
      XInput,
      Group,
      Toast
    },
    data () {
      return {
        phone: '',
        code: '',
        showToast: false,
        toastMsg: '',
        canSendCode: true,
        sendCodeBtnText: '发送验证码',
        sendCodeCounter: null
      }
    },
    methods: {
      sendCode (event) {
        if (!this.phone || !this.$refs.phone.valid) {
          this.toastMsg = '手机号码不正确'
          this.showToast = true
          return
        }

        let that = this
        this.canSendCode = false
        let counter = 59
        that.sendCodeBtnText = counter + 's'
        this.sendCodeCounter = setInterval(function () {
          if (counter <= 0) {
            that.canSendCode = true
            that.sendCodeBtnText = '发送验证码'
            clearInterval(that.sendCodeCounter)
          } else {
            counter -= 1
            that.sendCodeBtnText = counter + 's'
            console.log(that.sendCodeBtnText)
          }
        }, 1000)
        sendCode({ phone: this.phone })
          .then((res) => {
            if (res.resultCode !== 200) {
              this.toastMsg = res.errorMsg
              this.showToast = true
            }
          })
      },
      bePhone (value) {
        const result = checkPhone(value)
        return {
          valid: result.valid,
          msg: result.msg
        }
      },
      _isAllValid () {
        if (this.phone && this.code) {
          if (this.$refs.phone.valid && this.$refs.code.valid) {
            return true
          }
          this.showToast = true
          this.toastMsg = '请正确填写信息'
          return false
        } else {
          this.showToast = true
          this.toastMsg = '请填写信息'
          return false
        }
      },
      submitCertificate () {
        if (this._isAllValid()) {
          const confirmCertificateReq = { phone: this.phone, code: this.code }
          confirmCertificate(confirmCertificateReq)
            .then((res) => {
              if (res.data.resultCode === 200) {
                this.$router.push('/resetPassword/' + this.phone)
              } else {
                this.showToast = true
                this.toastMsg = res.data.errorMsg
              }
            })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .input-list{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .function-box{
    margin-left: 10px;
    margin-right: 10px;
  }
  .submit-btn{
    margin-bottom: 20px;
  }
  .flex-demo{
    font-size: 16px;
    color: #666;
  }
  .registe{
    text-align: left;
  }
  .forgetPassword{
    text-align: right;
  }
  .login{
    
  }
</style>