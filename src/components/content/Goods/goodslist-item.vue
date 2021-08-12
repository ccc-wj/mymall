<template>
  <div class="goods-item" @click="itemclick">
    <img v-lazy="goodsitem.show.img" alt="" />
    <div class="goods-info">
      <p class="p">{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="cfav"><img src="../../../assets/imgs/common/collect.svg" alt="">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslist-item",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemclick(){
      this.$router.push('/detail/'+this.goodsitem.iid)
    }
  },
};
</script>

<style scoped>
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