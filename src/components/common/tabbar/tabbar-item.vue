<template>
  <div class="tabbar-item" @click="chanage">
      <div v-if="!istrue"><slot name='item-img'></slot></div>
      <div v-else><slot name='item-img-at'></slot></div>
      <div :style="chanagestyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
name:'tabbar-item',
props:{
    path:{
        type:String,
    },
    activatc:{
         type:String,
         default:'red'
     }
},
data() {
    return {
        // istrue:true,
    }
},
computed:{
    istrue(){
        return this.$route.path.indexOf(this.path)!=-1
    },
    chanagestyle(){
        return this.istrue?{color:this.activatc}:{}
    }
},
methods: {
    chanage(){
        this.$router.push(this.path)
    }
},
}
</script>

<style>
.tabbar-item{
    flex: 1;
    color: #000;
    text-align: center;
    font-size: 14px;

}
.tabbar-item img{
    margin-top: 5px;
    vertical-align: middle;
    height: 24px;
    width: 24px;
}
</style>