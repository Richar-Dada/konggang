<template>
  <div class="login">
    <x-header title="修改密码"></x-header>
    <group class="input-list">
      <x-input title="身份证" ref="document" label-width="2.5rem" v-model="document" :is-type="beID" placeholder="请输入身份证"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" action-type="button" @click.native="submitCertificate">确 认</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Group, Toast } from 'vux'
  import { checkUserID } from '@/utils/validateTool'
  import { confirmCertificate } from '@/service'

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
        document: '',
        showToast: false,
        toastMsg: ''
      }
    },
    methods: {
      beID: function (value) {
        const result = checkUserID(value)
        return {
          valid: result.valid,
          msg: result.msg
        }
      },
      _isAllValid () {
        if (this.document) {
          if (this.$refs.document.valid) {
            return true
          }
          this.showToast = true
          this.toastMsg = '请正确填写身份证号码'
          return false
        } else {
          this.showToast = true
          this.toastMsg = '请填写身份证号码'
          return false
        }
      },
      submitCertificate () {
        if (this._isAllValid()) {
          const confirmCertificateReq = { certificate: this.document }
          confirmCertificate(confirmCertificateReq)
            .then((res) => {
              if (res.data.resultCode === 200) {
                this.$router.push('/resetPassword')
                sessionStorage.setItem('confirmId', this.document)
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