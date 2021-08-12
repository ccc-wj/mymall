<template>
  <div class="detailinfo" >
      <div class="start"></div>
      <div class="desc">{{detailinfo.desc}}</div>
      <div class="end"></div>
      <div v-for="(item,index) in detailinfo.detailImage" :key="index" >
          <div class="info-key">{{item.key}}</div>
          <div class="info-img" v-for="(i,imgindex) in item.list" :key="imgindex">
              <img @load="imgload" :src="i" alt="" >
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'detailinfo',
    props:{
        detailinfo:{
        type:Object,
        default:{}
    }
    },
    data() {
        return {
            imgkey:[]
        }
    },
    methods: {
        imgload(){
            this.$emit('imgload')
        }
    },
    
}
</script>

<style scoped>
.detailinfo{
    padding: 20px 12px 20px 12px;
    border-bottom: 5px solid #f2f5f8;
}

.start,
 .end{
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.start {
  float: left;
}

.end {
  float: right;
}

 .start::before,
 .end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333333;
}
.desc{
    padding: 8px;
    font-size: 14px;
}
.info-key{
    margin: 10px 0;
}
.info-img img{
    width: 100%;
}
</style>