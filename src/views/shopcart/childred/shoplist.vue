<template>
  <div class="shoplist">
      <!-- <div>{{$store.state.cartList}}</div> -->
      <div v-for="(item,index) in $store.state.cartList" :key="index" class="item">
         <div class="item-selector">
          <checkbtn :isChecked="item.checked" @click.native="ischanage(item)"></checkbtn>
         </div>
          <div>
          <img :src="item.image" alt="">
          </div>
          <div class="context">
          <p class="p1">{{item.title}}</p>
          <p class="p2">{{item.desc}}</p>
          <p>
              <span>¥ {{item.price}}</span>
              <span class="count">X {{item.count}}</span>
              </p>
          </div>

      </div>
      <div class="f"></div>
  </div>
</template>

<script>
 import checkbtn from '../../../components/content/checkButton/CheckButton.vue'
export default {
name:'shoplist',
components:{
checkbtn
},
data() {
    return {
        istrue:0
    }
},
methods: {
   ischanage(item){
       item.checked=!item.checked
   }
},
}
</script>

<style>
.shoplist{
    /* display: flex; */
    margin-top: 44px;
    
    
}
.item{
    display: flex;
}
.item img{
    
    width: 70px;
}
/* .icon{
    padding-top: 13%;
}
.icon img{
    
    border-radius: 50%;
    width: 16px;
    height: 16px;
} */
.item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
.context{
    margin-left: 8px;
}
.context p{
    width: 70vw;
 overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin:15px 0;
}
.p1{
    font-size: 17px;
    color: #777777;
}
.p2{
    font-size: 14px;
    color: #666666;
}
.count{
    float: right;
    margin-right: 10px;
}
.f{
    width: 100vw;
    height: 1px;
    background-color: #ccc;
}
.iconbox{
    background-color: red;
}

</style>