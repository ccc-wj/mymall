<template>
  <div class="tabcontrol" >
      <div v-for='(item,index) in titles' :key="index" :class="{chanage:istrue===index}" @click="chanageindex(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'tabcontrol',
props:{
    titles:{
        type:Array,
        default:[]
    }
},
data() {
    return {
        istrue:0,
    }
},
methods: {
    chanageindex(index){
        this.istrue=index;
        this.$emit('tabindex',index)
    }
},
}
</script>

<style scoped>
.tabcontrol{
    /* position:sticky; */
    background-color: #fff;
    height: 40px;
    /* top:100px; */
    display: flex;
    text-align: center;
}
.tabcontrol div{
    /* text-align: center; */
    line-height: 40px;
    flex:1;
}
.tabcontrol span{
    font-size: 15px;
    padding: 5px;
}
.chanage{
    border-bottom: solid var(--color-high-text) 3px;
    color: var(--color-high-text);
}
</style>