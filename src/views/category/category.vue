<template>
  <div class="category">
    <nevbar class="nevbarstyle"><div slot="center" >分类</div></nevbar>
   <leftlist :leftlist="leftlist" @inleftlist="itemclick"  class="inleft"></leftlist>
   <rightlist :rightlist="SubCategory"></rightlist>
  </div>
</template>

<script>
// import topback from '../../components/content/topback/topback.vue'
import nevbar from '../../components/common/nevbar/nevbar.vue'
import leftlist from './childred/leftlist.vue'
import rightlist from './childred/rightlist.vue';
import {getcategory ,getSubCategory} from '../../network/category';
export default {
name:'category',
components:{
  nevbar,
  leftlist,
  rightlist
},
data() {
  return {
    leftlist:[],
    SubCategory:[]
  }
},
created() {
  getcategory().then(res=>{
    console.log(res);
    this.leftlist=res.data.category.list
    console.log(this.leftlist);
  })
  getSubCategory(3627).then(res=>{
    this.SubCategory=res.data.list
    console.log(this.SubCategory);
  })
},
methods: {
  getSubCategory(maitkey){
    getSubCategory(maitkey).then(res=>{
      console.log(res);
      this.SubCategory=res.data.list
    })
  },
  itemclick(obj){
    // console.log(obj.maitKey);
    this.getSubCategory(obj.maitKey)
  }
}
}
  
</script>

<style scoped>
.category{
  display: flex;
}
.nevbarstyle {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  font-weight: bold;
}
.inleft{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 49px;
}
</style>