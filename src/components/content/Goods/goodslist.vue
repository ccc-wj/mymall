<template>
  <div class="goods">
      <goodslist-item v-for="(item,index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
import goodslistItem from './goodslist-item.vue'

export default {
name:'goodslist',
components:{
    goodslistItem
},
props:{
    goods:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>