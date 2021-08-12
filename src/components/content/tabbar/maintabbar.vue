<template>
  <tab-bar>
      <tab-bar-item path='/home'>
          <img slot="item-img" src="../../../assets/imgs/tabbar/home.svg" alt="">
          <img slot="item-img-at" src="../../../assets/imgs/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
          <img slot="item-img" src="../../../assets/imgs/tabbar/category.svg" alt="">
          <img slot="item-img-at" src="../../../assets/imgs/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/me'>
          <img slot="item-img" src="../../../assets/imgs/tabbar/profile.svg" alt="">
          <img slot="item-img-at" src="../../../assets/imgs/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
          <img slot="item-img" src="../../../assets/imgs/tabbar/shopcart.svg" alt="">
          <img slot="item-img-at" src="../../../assets/imgs/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/tabbar.vue'
import TabBarItem from '../../common/tabbar/tabbar-item.vue'
export default {
name:'maintabbar',
components:{
    TabBar,
    TabBarItem
}
}
</script>

<style>

</style>