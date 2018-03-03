<template>
  <div class="login">
    <x-header title="修改账号"></x-header>
    <group class="input-list">
      <x-input title="新密码" ref="password" label-width="2.5rem" v-model="password" :min="6" :is-type="bePassword" placeholder="密码只支持英文和数字"></x-input>
      <x-input title="密码确认" ref="password2" label-width="2.5rem" v-model="password2" :is-type="bePassword" :equal-with="password" placeholder="请再次输入密码"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="resetPassword">确 定</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Group, Toast } from 'vux'
  import { checkPassword } from '@/utils/validateTool'
  import { resetPassword } from '@/service'

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
        password: '',
        password2: '',
        showToast: false,
        toastMsg: ''
      }
    },
    methods: {
      bePassword (value) {
        const result = checkPassword(value)
        return {
          valid: result.valid,
          msg: result.msg
        }
      },
      _isAllValid () {
        if (this.password && this.password2) {
          if (this.$refs.password.valid && this.$refs.password2.valid) {
            return true
          }
          this.showToast = true
          this.toastMsg = '密码不一致'
          return false
        } else {
          this.showToast = true
          this.toastMsg = '请把信息填写完整'
          return false
        }
      },
      resetPassword () {
        if (this._isAllValid()) {
          const resetPasswordReg = {
            certificate: sessionStorage.getItem('confirmId'),
            password: this.password
          }
          resetPassword(resetPasswordReg)
            .then((res) => {
              this.showToast = true
              if (res.data.resultCode === 200) {
                this.toastMsg = res.data.successMsg
                sessionStorage.removeItem('confirmId')
                setTimeout(() => {
                  this.$router.push('/login')
                }, 1500)
              } else {
                this.toastMsg = res.data.errorMsg
              }
            })
        }
      }
    },
    created () {
      if (!sessionStorage.getItem('confirmId')) {
        this.$router.push('/')
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