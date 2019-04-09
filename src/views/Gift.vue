<template>
  <div class="gift">
    <div class="container">
      <div class="content">
        <p>佛说，前世的五百次回眸，才换来今生的擦肩而过。</p>
        <p>金子山邂逅，初识小仙女，正值开年之初。</p>
        <p>时至今日，相识日子刚好过百，甚是庆幸。</p>
        <p>回想过往，想聊甚欢！</p>
        <p>双方爱吃，话题总有，又因半个同乡，吃喝玩乐总想到一块，又有一同觅食的经历，我乐在其中！！</p>
        <p>那一世</p>
        <p>转山转水转佛塔</p>
        <p>遇见过世界</p>
        <p>方可遇见你</p>
        <p>佛又说，五百年前，</p>
        <p>我决定上山，</p>
        <p>用整整一天的时间专心致志想你，</p>
        <p>下山后全部忘掉。</p>
        <p>于是，我看猪的时候想你，</p>
        <p>看树的时候想你，</p>
        <p>看电脑的时候想你，</p>
        <p>忘下山的时候脑海还有你</p>
        <p>走过下个百日！</p>
      </div>
    </div>
    
    <div class="photo-list">
      <div class="photo-list-item">
        <div class="item-title">
          <h3>小仙女</h3>
          <p>超级无敌可爱小仙女，满屏都是青春的气息</p>
        </div>
        <div class="item-content">
          <img src="/static/xuesheng.jpg" alt="">
        </div>
      </div>
      <div class="photo-list-item">
        <div class="item-content">
          <img src="/static/hai.jpg" alt="">
        </div>
        <div class="item-title">
          <h3>海的女儿</h3>
          <p>吹着清凉的海风，踩着柔软都沙滩，尽显自己的风情万种</p>
        </div>
       
      </div>
      <div class="photo-list-item">
        <div class="item-title">
          <div class="item-content">
            <img src="/static/nvwang.jpg" alt="">
          </div>
          <h3 style="margin-top: 20px;">女王大人</h3>
          <p>欲戴皇冠，必承其重，霸气女总裁已上线</p>
        </div>
      </div>
      <div class="photo-list-item">
        <div class="item-title">
          <h3>谜之女人</h3>
          <p>没错！即使这样，她依然美如画～</p>
        </div>
        <div class="item-content">
          <img src="/static/mianmo.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="line"></div>
    <div class="footer">
      Made-By-Dadatang 2019-4-10 
    </div>

    <div class="modal" v-if="showModal">
      <div class="top">
        <div class="item">猪</div>
        <div class="item">猪</div>
        <div class="item">女</div>
      </div>
      <div class="button" @click="closeModal">
        <div class="button-item">
        </div>
        <div class="button-item-modal"></div>
      </div>
      <div class="bottom">
        <div class="item">亲</div>
        <div class="item">启</div>
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
  height: 600px;
  background-color: red;
  overflow: hidden;
  background-image: url("/static/bg.jpg");
  background-size: cover;
  .content{
    text-align: center;
    width: 330px;
    margin: 80px auto 20px auto;
    padding: 10px;
    font-size: 14px;
    p{
      line-height: 26px;
    }
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
      width: 88%;
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
  background-color: rgba(0, 0, 0, .9);

  .top{
    width: 50px;
    height: 150px;
    margin: 50px auto 30px auto;
    .item{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      color: #dd817b; 
    }
  }

  .bottom{
    width: 50px;
    height: 150px;
    margin: 50px auto 20px auto;
    .item{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      color: #dd817b; 
    }
  }

  .button{
    width: 160px;
    height: 160px;
    text-align: center;
    line-height: 160px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
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
      background-image: url("/static/zhuzhunv.jpg");
      background-size: cover;
      font-size: 30px;
      margin-top: 5px;
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