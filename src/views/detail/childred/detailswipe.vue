<template>
<div>
    <van-swipe  :autoplay="3000" indicator-color="white"  height="200">
      <van-swipe-item v-for="(item,index) in banners" :key="index" >
       <img :src="item" alt="" class="img">
        </van-swipe-item>
    </van-swipe>
</div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import SwiperItem from '../../../../../mall-main/src/components/common/swiper/SwiperItem.vue';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  components: { SwiperItem },
  name: "detailswipe",
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
.img{
    width: 100%;
    
}
</style>