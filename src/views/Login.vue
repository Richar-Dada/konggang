<template>
  <div class="login">
    <x-header title="账号登录"></x-header>
    <group class="input-list">
      <x-input title="手机号" type="text" v-model="phone" required :is-type="bePhone" :max="11" label-width="2.5rem" placeholder="请输入手机号码"></x-input>
      <x-input title="密 码" type="password" v-model="password" required label-width="2.5rem" placeholder="请输入密码"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="login">登 录</x-button>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2"><div class="flex-demo registe" @click="goRegiste">注册账号</div></flexbox-item>
        <flexbox-item :span="1/2"><div class="flex-demo forgetPassword" @click="goConfirmCertificate">忘记密码</div></flexbox-item>
      </flexbox>
    </div>
    <toast v-model="loginError" width="6rem" type="text">{{loginErrorMsg}}</toast>
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Flexbox, FlexboxItem, Group, Toast } from 'vux'
  import { checkPhone } from '@/utils/validateTool'
  import { login } from '@/service'

  export default {
    name: 'login',
    components: {
      XHeader,
      XButton,
      XInput,
      Flexbox,
      FlexboxItem,
      Group,
      Toast
    },
    data () {
      return {
        phone: '',
        password: '',
        loginError: false,
        loginErrorMsg: ''
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
      goRegiste () {
        this.$router.push('/registe')
      },
      goConfirmCertificate () {
        this.$router.push('/certificateconfirm')
      },
      login () {
        if (this.phone && this.password) {
          let loginReq = {
            phone: this.phone,
            password: this.password
          }
          login(loginReq)
            .then((res) => {
              this.loginError = true
              if (res.data.resultCode === 200) {
                this.loginErrorMsg = res.data.successMsg
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('phone', res.data.phone)
                localStorage.setItem('username', res.data.phone)
                setTimeout(() => {
                  this.$router.push('/')
                }, 1500)
              } else {
                this.loginErrorMsg = res.data.errorMsg
              }
            })
        } else {
          this.loginError = true
          this.loginErrorMsg = '请输入信息'
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