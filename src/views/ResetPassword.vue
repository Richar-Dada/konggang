<template>
  <div class="login">
    <x-header title="修改账号"></x-header>
    <group class="input-list">
      <x-input title="新密码" label-width="2.5rem" :is-type="be2333" placeholder="必须输入数字"></x-input>
      <x-input title="密码确认" label-width="2.5rem" :is-type="be2333" placeholder="请确认密码"></x-input>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" link="/demo">确 定</x-button>
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