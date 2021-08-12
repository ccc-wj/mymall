<template>
  <div class="leftlist">
    <scroll class="left-scroll">
      <div v-for="(item, index) in leftlist" :key="index" class="item" @click="itemclick(item,index)" :class="{active:count==index}" >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll.vue";
export default {
  name: "leftlist",
  components: {
    scroll,
  },
  props: {
    leftlist: {
      type: Array,
      default: [],
    },
  },
  data() {
      return {
          count:0
      }
  },
  methods: {
      itemclick(item,index){
          this.count=index
         const obj={
             index,
             maitKey: item.maitKey
         }
         this.$emit("inleftlist",obj)
      }
  },
};
</script>

<style scoped>
.leftlist {
  height: 100vh;
}
.left-scroll {
  margin-top: 44px;
  width: 70px;
  height: calc(100% - 93px);
  overflow: hidden;
  background-color: #f6f6f6;
}
.item {
    font-size: 14px;
  text-align: center;
  color: #666666;
  height: 40px;
  width: 70px;
  line-height: 40px;
}
.active{
    background-color: #fff;
    border-left: 2px solid var(--color-high-text);
    color: var(--color-high-text);
}
</style>