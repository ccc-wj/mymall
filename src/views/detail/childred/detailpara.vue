<template>
  <div class="detailpara">
      <h4>产品参数</h4>
      <div v-for="(item,index) in detailpara.sizes" :key="index+'12'">
          <div v-for="(i,indexa) in item" :key="indexa+'13'" class="sizes">
              <span v-for="(ii,indexb) in i" :key="indexb">
                  {{ii}}
              </span>
          </div>
      </div>
      <div v-for="(item,index) in detailpara.infos" :key="index">
          <div class="infos">
              <span class="info-key">{{item.key}}</span>
              <span class="info-value">{{item.value}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'detailpara',
props:{
    detailpara:{
        type:Object,
        default:{}
    }
}
}
</script>

<style>
.detailpara{
    padding: 20px 10px;
}
h4{
    margin: 5px 10px 15px 0;
}
.sizes {
    padding: 10px 0;
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid #f2f5f8;
}
.sizes span{
    flex: 1;
}
.infos{
    padding: 10px 0;
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid #f2f5f8;
    
}
.info-key{
    flex: 1;
}
.info-value{
    color: #eb4868;
    flex: 2.5;
}
</style>