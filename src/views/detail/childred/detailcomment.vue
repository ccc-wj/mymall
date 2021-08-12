<template>
  <div class="detailcommend clearfix">
    <div class="top">
      <div class="title">用户评论</div>
      <div class="more">更多</div>
    </div>
    <div class="logo">
      <img :src="ratelist.user.avatar" alt="" />
      <span>{{ ratelist.user.uname }}</span>
    </div>
    <div class="content">
      <p>{{ ratelist.content }}</p>
      <span class="data">{{ ratelist.created | showDate }}</span>
      <span class="style">{{ ratelist.style }}</span>
    </div>
    <div class="images">
    <div v-for="(item,index) in ratelist.images" :key="index" >
        <img :src="item" alt="">
    </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  name: "detailcommend",
  props: {
    ratelist: {
      type: Object,
      default: {},
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style scoped>
.deatailcommend {
  position: relative;
  padding: 5px 12px;
  
}
.top {
  margin: 5px 12px 0px 12px;
  border-bottom: 1px solid #f2f5f8;
  height: 50px;
  text-align: center;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
}
.more {
  font-size: 13px;
  margin-right: 8px;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 5px 12px;
}
.logo img {
  margin-right: 5px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.content{
    margin: 5px 12px;
    font-size: 14px;
    color: #777777;
}
.content p{
    margin-bottom: 5px;
}
.data{
    margin-right: 6px;
    font-size: 12px;
}
.style{
    font-size: 12px;

}
.images{
    margin: 5px 12px 0px 12px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 2px solid #f2f5f8;
}
.images img{ 
    vertical-align: middle;
    height: 80px;
    width: 80px;
    margin-right: 4px;
}
</style>