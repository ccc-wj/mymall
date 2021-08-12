<template>
  <div>
    <div class="warper">
      <div class="left">
        <div class="kf">
          <div class="kfimgbox">
            <img src="../../../assets/imgs/detail/detail_bottom.png" alt="" />
          </div>
          <span class="text">客服</span>
        </div>
        <div class="shop">
          <div class="shopimgbox">
            <img src="../../../assets/imgs/detail/detail_bottom.png" alt="" />
          </div>
          <span class="text">店铺</span>
        </div>
        <div class="sc">
          <div class="scimgbox">
            <img src="../../../assets/imgs/detail/detail_bottom.png" alt="" />
          </div>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="right">
          <button class="join" @click="toshopcar">加入购物车</button>
          <button class="buy">购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbottombar",
  methods: {
      toshopcar(){
          this.$emit('toshopcar')
      }
  },
};
</script>

<style scoped>
.warper {
  height: 55px;
  background-color: #fff;
  z-index: 15;
}
.left {
    font-size: 14px;
  display: flex;
  height: 100%;
  width: 48%;
  /* background-color: #bfa; */
}
.kf,.shop,.sc {
    
    text-align: center;
  height: 100%;
  width: 33%;
  overflow: hidden;
}
.kf img {
  height: 150px;
  transform: translateY(-53px);
}
.kfimgbox,.shopimgbox,
.scimgbox{
    margin: 5px auto;
    overflow: hidden;
    height: 20px;
    width: 22px;
}

.shop img {
  height: 150px;
  transform: translateY(-98px);
}
.sc img {
  height: 150px;
  
}

.right {
  width: 52%;
  height: 100%;
  /* background-color: red; */
}
.join{
    height: 55px;
    width: 50%;
    border: none;
    background-color: #ffe817;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
}
.buy{
    font-size: 15px;
   background-color:  var(--color-high-text);
   border: none;
   width: 50%;
   height:55px;
   color: #fff;
   font-weight: bold;

}
</style>