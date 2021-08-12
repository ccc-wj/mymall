<template>
  <div class="cbtm">
     
      <div class="icon">
          <img src="../../../assets/imgs/cart/icon-tick.svg" alt="" :class="{alltrue:istrue}" @click="chanage">
          <span>全选</span>
      </div>
      
      <div class="hj">
          <span>合计：</span>
          <span>¥ {{add().toFixed(2)}}</span>
      </div>
      <button class="btn">去结算({{jiesuan}})</button>
      
  </div>
</template>

<script>

export default {

name:'cartbottombar',

computed:{
istrue(){
        let start=true
    for(let i=0;i<this.$store.state.cartList.length;i++){
        if(!this.$store.state.cartList[i].checked){
             start=false
             break
        }else{
            start=true
    }
    }
    return start
},
jiesuan(){
    return this.$store.state.cartList.filter( item => item.checked).length
}

},
methods:{
    add(){
        let sum=0
        for(let i=0;i<this.$store.state.cartList.length;i++){
            if(this.$store.state.cartList[i].checked){
           sum+= this.$store.state.cartList[i].price * this.$store.state.cartList[i].count
           }
        }
        return sum
    },
    chanage(){
        if(this.istrue){
        this.$store.state.cartList.forEach( item => item.checked = false)
        }else{
        this.$store.state.cartList.forEach( item => item.checked = true)
        }
    }
}

}
</script>

<style>
.cbtm{
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: rgb(231, 230, 230);
    width: 100vw;
    height: 44px;
    line-height: 44px;
    display: flex;
}
.icon{
    /* margin-left: 15px; */
     display: flex;
        align-items: center;
        width: 30%;
}
.icon img{
    margin: 0 8px ;
    height: 22px;
    width: 22px;
    border-radius: 50%;
}
.hj{
    width: 40%;
    font-size: 15px;
    /* margin-left: 20px; */
}
.btn{
    border: none;
    background-color: #ff6600;
    /* margin-left: 20px; */
    width: 30%;
}
.alltrue{
    background-color: red;
}
</style>