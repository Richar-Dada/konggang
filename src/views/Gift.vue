<template>
  <div class="gift">
    <div class="container">
      <div class="content">
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
        <p>热舞欧日乌尔哦二二五二二位</p>
      </div>
    </div>
    
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
        <div class="item-content">
          <img src="/static/s6394521.jpg" alt="">
        </div>
        <div class="item-title">
          <h3>风的女儿</h3>
          <p>這本所敘述之故事以兩個女孩的成長為主軸,訴說著回教徒女孩在男性文化制度下</p>
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

    <div class="line"></div>
    <div class="footer">
      Made-By-Dadatang 2019-4-10 
    </div>

    <div class="modal" v-if="showModal">
      <div class="button" @click="closeModal">
        <div class="button-item">
        </div>
        <div class="button-item-modal"></div>
      </div>
    </div>
    
    <audio id="music" src="/static/3624518315.aac" loop="loop" preload="auto"></audio>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {
    },
    data () {
      return {
        showModal: true
      }
    },
    methods: {
      closeModal () {
        this.showModal = !this.showModal
        this.startMusic()
      },
      startMusic () {
        var musice = document.getElementById('music')
        musice.play()
      }
    }
  }
</script>

<style scoped lang="less">
.container{
  height: 300px;
  background-color: red;
  overflow: hidden;
  .content{
    width: 300px;
    margin: 20px auto;
    padding: 10px;
    background-color: rgba(0, 0, 0, .5);
    font-size: 14px;
  }
}

.photo-list{
  clear: both;
  overflow: hidden;
}

.photo-list-item:nth-child(2n){
  .item-title{
    margin-top: 10px;
  }
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

.line{
  width: 300px;
  height: 1px;
  margin: 30px auto 10px auto;
  background-color: #666;
}

.footer{
  height: 60px;
  line-height: 40px;  
  text-align: center;
  font-size: 12px;
}

.modal{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .87);

  .button{
    width: 160px;
    height: 160px;
    text-align: center;
    line-height: 160px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    position: relative;
    box-shadow: 0px 0px 10px red;

    .button-item{
      width: 150px;
      height: 150px;
      line-height: 150px;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      background-image: url("/static/s6394521.jpg");
      font-size: 30px;
      animation-name: rotation;
      animation-duration: 10000ms;
      animation-iteration-count: infinite; /*无限循环*/
      animation-timing-function: linear;
      -webkit-animation-name: rotation;
      -webkit-animation-duration: 10000ms;
      -webkit-animation-iteration-count: infinite; /*无限循环*/
      -webkit-animation-timing-function: linear;
    }

    .button-item-modal{
      position: absolute;
      top: 5px;
      left: 5px;
      width: 150px;
      height: 150px;
      background-color: rgba(0, 0, 0, .6);
      border-radius: 50%;
      z-index: 0;
    }
  }

  @keyframes rotation {
    0% { transform: rotate(0deg);}
    50%{ transform: rotate(180deg);}
    100% { transform: rotate(360deg);}
  }

  @-webkit-keyframes rotation {
    0% { transform: rotate(0deg);}
    50%{ transform: rotate(180deg);}
    100% { transform: rotate(360deg);}
  }
}
</style>