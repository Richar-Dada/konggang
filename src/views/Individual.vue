<template>
  <div class="individual">
    <div class="user-inofo">
      <p>Richar</p>
    </div>
    <grid :cols="3">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    name: 'individual',
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/css/base.less';
  .user-inofo{
    height: 300px;
    line-height: 300px;
    text-align: center;
    background-color: @blue;
    color: #ffffff;
    font-size: 40px;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>