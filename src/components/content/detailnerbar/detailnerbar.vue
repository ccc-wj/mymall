<template>
  <div>
      <nevbar>
          <div slot="left" class="back" @click="backlast"><img src="../../../assets/imgs/common/back.svg" alt=""></div>
          <div slot="center" class="centerlist">
              <div v-for="(i,index) in thingsarr" 
                :key="index" 
                class="itemlist"
                @click="chanagecolor(index)"
                :class="{iscolor:count===index}"
              >{{i}}</div>
          </div>
      </nevbar>
  </div>
</template>

<script>
import nevbar from '../../common/nevbar/nevbar.vue'
export default {
name:'detailnerbar',
components:{
    nevbar
},
data() {
    return {
        thingsarr:['商品','参数','评论','推荐'],
        count:0
    }
},
methods: {
    chanagecolor(index){
        this.count=index;
        this.$emit('tonar',index)
    },
    backlast(){
        this.$router.back()
    }
},
}
</script>

<style scoped>
.centerlist{
    display: flex;
    font-size: 13px;
}
.itemlist{
    flex: 1;
}
.iscolor{
    color: var(--color-high-text);
}
.back{
    text-align: center;
}
.back img{
    height: 12px;
} 
</style>