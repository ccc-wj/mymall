<template>
  <div class="rightlist">
      <!-- <scroll class="right-scroll"> -->
          <div class="box">
          <div v-for="(item,index) in rightlist" :key="index" class="item">
              <a :href="item.link">
                  <img :src="item.image" alt="">
                  <div>{{item.title}}</div>
              </a>
          </div>
          </div>
      <!-- </scroll> -->
  </div>
</template>

<script>
// import scroll from '../../../components/common/scroll/scroll.vue';
export default {
name:'rightlist',
components:{
    // scroll
},
props:{
    rightlist:{
        type:Array,
        default:[]
    }
}
}
</script>

<style scoped>
.rightlist{
    height: 100vh;
    width: calc(100% - 60px);
    margin-top: 44px;
    height: 20px;
    /* background-color: #bfc; */
}
/* .right-scroll{
    
    height: calc(100% - 93px);
} */
.box{
    margin-bottom: 49px;
   margin-left: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.item{
    
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
}

.item:nth-child(odd){
    margin-left: 30px;
}
.item img{
    margin: 0 10px;
    height: 65px;
    width: 65px;
    border-radius: 50%;
}
</style>