<template>
  <div class="wraper" ref="wp">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import observedom from '@better-scroll/observe-dom'
// import pullUpLoad from '@better-scroll/pull-up'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
name:'scroll',
data() {
    return {
        scroll:null,
        a:{}
    }
},props:{
    probeType:{
        type:Number,
        default:0
    },
    pullUpLoad:{
        type:Boolean,
        default:false
    }
  
   
},
mounted() {
    setTimeout(()=>{
  this.scroll = new BScroll(this.$refs.wp,{   
        // observedom:true,
        click:true,
        probeType:this.probeType,
        pullUpLoad : this.pullUpLoad
    })
    console.log(this.scroll)
    this.scroll.on('scroll',position=>{
        this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
        setTimeout(()=>{
            this.scroll.finishPullUp(); 
        },2000)
        
    })
    
    
    },1000)
},
methods: {
    scrollTo(x,y ,t){
        this.scroll && this.scroll.scrollTo(x,y,t)
    },
    gotop(){
        this.scroll && this.scroll.scrollTo(0,0,500)
    },
    refresh(){
        this.scroll && this.scroll.refresh()
        // console.log('--');
    }
},
}
</script>

<style scoped>
/* .warper{
    height: 700px;
} */
</style>