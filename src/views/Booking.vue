<template>
  <div class="schedul">
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      <tab style="width:500px;" bar-active-color="#668599" :line-width="1">
        <tab-item>已发货</tab-item>
        <tab-item selected>未发货</tab-item>
        <tab-item>全部订单</tab-item>
        <tab-item>全部订单</tab-item>
        <tab-item>全部订单</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'

  export default {
    name: 'schedul',
    components: {
      Tab,
      TabItem
    },
    data () {
      return {}
    }
  }
</script>
