<template>
  <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="(item,index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" @load="imgload"></a>
        </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    name:'homeswipe',
    props:{
        banners:{
            type:Array,
            default:[]
        }
    },
    data() {
      return {
        isload:false
      }
    },
    methods: {
      imgload(){
        if(!this.isload){
        this.$emit('swipeimgload')
        this.isload=true
        }
      }
    },
};
</script>

<style scoped>
.my-swipe img{
  width: 100%;
  /* height: 166.4px; */
  vertical-align: middle;
  margin-top: 44px;
}
</style>