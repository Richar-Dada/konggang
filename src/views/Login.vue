<template>
  <div class="login">
    <x-header title="账号登录"></x-header>
    <group class="input-list">
      <x-input title="用户名" label-width="100px" :is-type="be2333" placeholder="必须输入数字"></x-input>
      <x-input title="密 码" label-width="100px" :is-type="be2333" placeholder="必须输入数字"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" link="/demo">登 录</x-button>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2"><div class="flex-demo registe" @click="goRegiste">注册账号</div></flexbox-item>
        <flexbox-item :span="1/2"><div class="flex-demo forgetPassword" @click="goConfirmCertificate">忘记密码</div></flexbox-item>
      </flexbox>
    </div>
    
  </div>
</template>

<script>
  import { XHeader, XButton, XInput, Flexbox, FlexboxItem, Group } from 'vux'

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
        name: 'dd'
      }
    },
    methods: {
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      goRegiste () {
        this.$router.push('/registe')
      },
      goConfirmCertificate () {

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