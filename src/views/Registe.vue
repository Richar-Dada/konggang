<template>
  <div class="login">
    <x-header title="注册账号"></x-header>
    <group class="input-list">
      <x-input title="用户名" ref="username" label-width="2.5rem" required v-model="username" :is-type="china-name" placeholder="请输入用户名"></x-input>
      <x-input title="密 码" ref="password" type="password" label-width="2.5rem" required v-model="password" :min="6" placeholder="请输入密码"></x-input>
      <x-input title="密码确认" ref="password2" type="password" label-width="2.5rem" required v-model="password2" :equal-with="password"></x-input>
      <x-input title="手机号码" ref="phone" label-width="2.5rem" required v-model="phone" keyboard="number" :is-type="chine-mobile" placeholder="请输入手机号码"></x-input>
      <x-input title="身份证" ref="document" label-width="2.5rem" required v-model="document" :is-type="beID" placeholder="请输入身份证"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="registe">注 册</x-button>
    </div>
    
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Flexbox, FlexboxItem, Group } from 'vux'
  import { checkUserID } from '@/utils/validateTool'
  import { registe } from '@/service'

  export default {
    name: 'login',
    components: {
      XHeader,
      XButton,
      XInput,
      Flexbox,
      FlexboxItem,
      Group
    },
    data () {
      return {
        username: '',
        password: '',
        password2: '',
        phone: '',
        document: ''
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
        if (this.$refs.username.valid && this.$refs.password2.valid && this.$refs.password.valid && this.$refs.phone.valid && this.$refs.document.valid) {
          return true
        }
        return false
      },
      registe () {
        if (this._isAllValid()) {
          let registeReq = {
            username: this.username,
            passwrod: this.password,
            phone: this.phone,
            certificate: this.document
          }
          registe(registeReq)
            .then((res) => {
              console.log(res)
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