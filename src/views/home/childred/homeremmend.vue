<template>
  <div>
      <ul class="box">
          <li v-for="(item,index) in remmend" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt="">
                  <div>{{item.title}}</div>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
 name:'homeremmend',
 props:{
     remmend:{
         type:Array,
         default:[]
     }
 }

}
</script>

<style>
.box{
    display: flex;
    /* background-color: fuchsia; */
    height: 120px;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
    padding-top: 10px;
    border-bottom:8px solid #eee;
    background-color: #fff;
    
}
.box li{
    /* justify-content:center */
    flex: 1;
}
.box img{
    height: 65px;
    border-radius: 50%;
    margin-bottom: 5px;
}

</style>