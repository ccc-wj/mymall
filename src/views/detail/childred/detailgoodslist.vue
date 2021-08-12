<template>
  <div class="goods" >
    <div v-for="(item, index) in goods" :key="index" class=" goods-item">
      <img :src="item.image" alt="" />
      <div class="goods-info">
        <p class="p">{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="cfav">
            <img src="../../../assets/imgs/common/collect.svg" alt="" />
          {{ item.cfav }}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
   
};
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.goods-item {
    padding-bottom: 40px;
    
    position: relative;
    width: 46%;
    font-size: 12px;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }
.cfav img{
    
    width: 14px;
    height: 14px;
}
</style>