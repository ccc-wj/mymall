<template>
  <div class="title">
    <div class="titlestyle">{{ goods.title }}</div>
    <div class="content">
      <span class="newprice">{{ goods.newPrice }}</span>
      <span class="oldprice">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="shopmassage">
      <div v-for="(i, index) in goods.columns" :key="index" class="shop">
        {{ i }}
      </div>
    </div>
    <div class="service">
      <div v-for="(item, index) in goods.services" :key="index" class="item">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailtitle",
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.title {
    
    border-bottom: 5px solid rgba(148, 147, 147, 0.1);
  margin-top: 10px;
  padding: 0 10px;
}
.titlestyle {
  font-size: 17px;
  font-weight: bold;
  /* background-color: #bfa; */
}
.newprice {
  margin-right: 5px;
  font-size: 20px;
  color: #ff5777;
}
.oldprice {
  text-decoration: line-through;
  font-size: 12px;
  color: #999999;
}
.discount {
  display: inline-block;
  background-color: var(--color-tint);
  border-radius: 10px;
  font-size: 12px;
  padding: 4px;
  color: #fff;
}
.content {
  margin-top: 10px;
}
.service {
  margin:  10px 0 15px 0;
  display: flex;
  flex: 1;
}
.service img {
  vertical-align: middle;
  height: 14px;
  width: 14px;
}
.item {
  font-size: 9px;
}
.shopmassage {
    padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  font-size: 13px;
  color: #999999;
  margin-top: 15px;
  border-bottom: 1px solid #cccccc;
}
</style>