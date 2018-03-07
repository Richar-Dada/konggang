<template>
  <div class="remark">
    <group>
      <x-textarea title="反馈" v-model="remark"></x-textarea>
    </group>
    <div class="function-box">
      <x-button class="submit-btn" type="primary" @click.native="postRemark">提 交</x-button>
    </div>
    <toast v-model="showToast" width="6rem" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
  import { Group, XTextarea, XButton, Toast } from 'vux'
  import { remark } from '@/service'

  export default {
    name: 'myorder',
    components: {
      Group,
      XTextarea,
      XButton,
      Toast
    },
    data () {
      return {
        remark: '',
        showToast: false,
        toastMsg: ''
      }
    },
    methods: {
      postRemark () {
        if (this.remark.length > 5) {
          const remarkReq = {
            remark: this.remark,
            createTime: new Date().getTime(),
            createBy: localStorage.getItem('username')
          }
          remark(remarkReq)
            .then((res) => {
              this.showToast = true
              if (res.data.resultCode === 200) {
                this.toastMsg = res.data.successMsg
                setTimeout(() => {
                  this.$router.push('/individual')
                }, 1500)
              } else {
                this.toastMsg = res.data.errorMsg
              }
            })
        } else {
          this.showToast = true
          this.toastMsg = '反馈信息不能太短哟~'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.function-box{
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.submit-btn{
  margin-bottom: 20px;
}
</style>
