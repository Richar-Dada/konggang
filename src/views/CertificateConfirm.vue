<template>
  <div class="login">
    <x-header title="修改密码"></x-header>
    <group class="input-list">
      <x-input title="身份证" label-width="2.5rem" :is-type="be2333" placeholder="请输入身份证"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" action-type="button" @click.native="submitCertificate">确 认</x-button>
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
      submitCertificate () {
        this.$router.push('/resetPassword')
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