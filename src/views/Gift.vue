<template>
  <div class="gift">
    <p>gift   sfsfsfsdf</p>
    <div class="photo-list">
      <div class="photo-list-item">
        <div class="item-title">
          <h3>风的女儿</h3>
          <p>這本所敘述之故事以兩個女孩的成長為主軸,訴說著回教徒女孩在男性文化制度下</p>
        </div>
        <div class="item-content">
          <img src="/static/s6394521.jpg" alt="">
        </div>
      </div>
      <div class="photo-list-item">
        <div class="item-title">
          <h3>风的女儿</h3>
          <p>這本所敘述之故事以兩個女孩的成長為主軸,訴說著回教徒女孩在男性文化制度下</p>
        </div>
        <div class="item-content">
          <img src="/static/s6394521.jpg" alt="">
        </div>
      </div>
      <div class="photo-list-item">
        <div class="item-title">
          <h3>风的女儿</h3>
          <p>這本所敘述之故事以兩個女孩的成長為主軸,訴說著回教徒女孩在男性文化制度下,沒有「屈服」可言。但書中女主角─莎芭努在成長</p>
        </div>
        <div class="item-content">
          <img src="/static/s6394521.jpg" alt="">
        </div>
      </div>
      <div class="photo-list-item">
        <div class="item-title">
          <h3>风的女儿</h3>
          <p>這本所敘述之故事以兩個女孩的成長為主軸,訴說著回教徒女孩在男性文化制度下,沒有「屈服」可言。但書中女主角─莎芭努在成長</p>
        </div>
        <div class="item-content">
          <img src="/static/s6394521.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="footer">
      Made-By-Dadatang 2019-4-10 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
.photo-list{
  clear: both;
  overflow: hidden;
}
.photo-list-item{
  width: 50%;
  float: left;
  padding: 5px 10px;
  box-sizing: border-box;
  .item-title{
    text-align: center;
    h3{
      font-weight: 600;
      height: 32px;
      line-height: 32px;;
      font-size: 14px;
    }
    p{
      font-size: 12px;
      padding: 0 20px;
    }
  }
  .item-content{
    height: 200px;
    margin: 0 auto;
    border: 1px solid #ccc;
    position: relative;
    img{
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
}

.footer{
  height: 40px;
  line-height: 40px;  
  text-align: center;
  font-size: 14px;
}
</style>