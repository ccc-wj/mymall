<template>
  <div id="home">
    <nevbar class="nevbarstyle"><div slot="center">购物街</div></nevbar>
    <tabcontrol
          class="tabcont"
          :titles="['流行', '新款', '精选']"
          @tabindex="tabindex"
          ref="tabcontrol1"
          v-show="isstop"
        ></tabcontrol> 

    <scroll class="ct " ref="scroll" :probeType="3" @scroll="show" :pullUpLoad="true" @pullingUp="loadmore">
        <homeswipe :banners="banners" @swipeimgload="imgload"></homeswipe>
        <homeremmend :remmend="recommends"></homeremmend>
        <homefeature></homefeature>
        <tabcontrol
         
          :titles="['流行', '新款', '精选']"
          @tabindex="tabindex"
          ref="tabcontrol2"
        ></tabcontrol> 
         <goodslist :goods="goods[gettype].list"></goodslist>
          <!-- <h2 class="dian">....</h2> -->
    </scroll>
   <topback @click.native="gotop" v-show="isshow" ></topback>
  </div>
</template>

<script>
import nevbar from "../../components/common/nevbar/nevbar.vue";
import tabcontrol from "../../components/content/tabcontrol/tabcontrol.vue";
import goodslist from "../../components/content/Goods/goodslist.vue";
import scroll from '../../components/common/scroll/scroll.vue'
import topback from '../../components/content/topback/topback.vue'

import homeswipe from "./childred/homeswipe.vue";
import homeremmend from "./childred/homeremmend.vue";
import homefeature from "./childred/homefeature.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home";
export default {
  name: "home",
  components: {
    nevbar,
    homeswipe,
    homeremmend,
    homefeature,
    tabcontrol,
    goodslist,
    topback,
    scroll,
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      gettype: "pop",
      position:0,
      taboffsetTop:0,
      isstop:false,
      
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  methods: {
    // 事件监听
    tabindex(index) {
      switch (index) {
        case 0:
          this.gettype = "pop";
          break;
        case 1:
          this.gettype = "new";
          break;
        case 2:
          this.gettype = "sell";
          break;
      }
      this.$refs.tabcontrol1.istrue=index;
      this.$refs.tabcontrol2.istrue=index;
    },
    gotop(){
      this.$refs.scroll.gotop()
    },
    show(position){
      this.position=position.y
      this.isstop=(-position.y)>this.taboffsetTop
    },
    loadmore(){
      this.getHomeGoods(this.gettype);
      this.$refs.scroll.refresh()
    },
    imgload(){
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
      this.taboffsetTop=this.$refs.tabcontrol2.$el.offsetTop-44
    },
    // 网络请求事件
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
computed:{
  isshow(){
   return this.position>-1200? false:true
  },
}
};
</script>

<style scoped>
#home{
  height: 100vh;
  padding-top: 44px;
}

.nevbarstyle {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  font-weight: bold;
}
.ct{
  position: absolute;
  top: 0px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.tabcont{
  position: relative;
  z-index: 9;
}
.dian{
  margin: 0 auto;
}


</style>