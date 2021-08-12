<template>
  <div class="detail">
    <detailnev  class="top" @tonar="tonar" ref="nav"></detailnev>
  
    <!-- <h2>{{iid}}</h2> -->
    <scroll class="content" ref="scroll" :probeType="3" @scroll="show">
      <detailswipe :banners="topimages" class="swipe"></detailswipe>
      <detailtitle :goods="goods"></detailtitle>
      <detailshop :shop="shop"></detailshop>
      <detailinfo :detailinfo="detailinfo" @imgload="imgload"></detailinfo>
      <detailpara ref="para" :detailpara="detailpara"></detailpara>
      <detailcommend ref="commend" :ratelist="ratelist"></detailcommend>
      <detailgoodslist ref="recommend" :goods="recommend"></detailgoodslist>
    </scroll>
    <detailbottombar class="bottom" @toshopcar="toshopcar"></detailbottombar>
    <topback @click.native="gotop" v-show="isshow"></topback>
  </div>
</template>

<script>
import detailnev from "../../components/content/detailnerbar/detailnerbar.vue";
import detailswipe from "./childred/detailswipe.vue";
import detailtitle from "../detail/childred/detailtitle.vue";
import detailshop from "./childred/detailshop.vue";
import detailinfo from './childred/detailinfo.vue'
import detailpara from './childred/detailpara.vue'
import detailcommend from './childred/detailcomment.vue'
import detailgoodslist from './childred/detailgoodslist.vue'
import scroll from "../../components/common/scroll/scroll.vue";
import topback from '../../components/content/topback/topback.vue'
import detailbottombar from './childred/detailbottombar.vue'

import { getDetailData, Goods, shop, GoodsParams ,getRecommend} from "../../network/detail";
import {debounce } from '../../common/utils'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast)
export default {
  name: "detail",
  components: {
    detailnev,
    detailswipe,
    detailtitle,
    detailshop,
    detailinfo,
    detailpara,
    detailcommend,
    detailgoodslist,
    scroll,
    topback,
    detailbottombar
  },
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shop: {},
      detailinfo:{},
      position:0,
      detailpara:{},
      ratelist:{},
      recommend:[],
      themetopYs:[]
    
    };
  },
  created() {
    this.iid = this.$route.params.id;
    getDetailData(this.iid).then((res) => {
        console.log(res);
        this.topimages = res.result.itemInfo.topImages;
        // console.log(this.topimages);
        this.goods = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        );
        this.shop = new shop(res.result.shopInfo);
        this.detailinfo = res.result.detailInfo;
        this.detailpara=new GoodsParams(res.result.itemParams.info,res.result.itemParams.rule)
        this.ratelist=res.result.rate.list[0] || {}
        
            
       this.getThemeTopY = debounce( () => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.para.$el.offsetTop)
        this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs)
      },20)
    
      });
    this.getrecommend();
    
  },
  methods: {
    //   事件
    imgload(){
        this.$refs.scroll.refresh();
        this.getThemeTopY()
    },
    gotop(){
        this.$refs.scroll.gotop()
    },
    show(position){
        this.position=position.y;
        const po=-position.y;
        let length = this.themeTopYs.length
      for (let i=0; i<length-1; i++) {
        if(this.currentIndex !== i &&( po >= this.themeTopYs[i] &&
          po < this.themeTopYs[i+1] ))
        {
          this.currentIndex = i;
          this.$refs.nav.count = this.currentIndex
        }
      }
       
    },
    tonar(index){
        const i=-this.themeTopYs[index]
        this.$refs.scroll.scrollTo(0,i,500)

    },
    toshopcar(){
        const product={}
        product.image=this.topimages[0];
        product.title=this.goods.title;
        product.price=this.goods.realPrice;
        product.desc=this.goods.desc;
        product.iid=this.iid
        // this.$store.commit('addcart',product)
        this.$store.dispatch('addcart',product) .then(res=>{
          Toast(res)
        })
        // console.log('---');
    },
    //   网络请求
    
    getrecommend(){
        getRecommend().then((res)=>{
            console.log(res);
            this.recommend=res.data.list
        })
    }
  },
  computed:{
      isshow(){
        return  this.position<=-1100
      }
  }
};
</script>

<style scoped>
.detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
   
}
.swipe{
    margin-top: 44px;
}
.top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* bottom: 0; */
    z-index: 10;
    background-color: #fff;
}
.content{
   height: calc(100% - 44px);
}
.bottom{
    position: fixed;
    z-index: 15;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>