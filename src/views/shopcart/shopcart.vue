<template>
  <div class="shopcart">
     <!-- <p>{{$store.state.cartList}}</p> -->
    <nevbar class="nevbarstyle"><div slot="center">购物车({{cartlength}})</div></nevbar>
    <!-- <scroll class="content"> -->
      <shoplist></shoplist>
      <cartbottombar></cartbottombar>
    <!-- </scroll> -->
  </div>
</template>

<script>
import nevbar from "../../components/common/nevbar/nevbar.vue";
import shoplist from './childred/shoplist.vue';
import cartbottombar from './childred/cartbottombar.vue'
import scroll from '../../components/common/scroll/scroll.vue'
export default {
  name: "shopcart",
  components: {
    nevbar,
    shoplist,
    cartbottombar,
    scroll
  },
  computed:{
    cartlength(){
      return this.$store.state.cartList.length
    }
  }
};
</script>

<style scoped>

.content{
  height:  calc(100% - 44px);
}
.nevbarstyle {
  background-color: var(--color-tint);
  color: #fff;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  font-weight: bold;
}
</style>