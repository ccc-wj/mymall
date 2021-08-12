import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
   addcounter(state,payload){
      payload.count++
   },
   addtocart(state,payload){
     payload.checked=true
    state.cartList.push(payload)
   }
  },
  actions: {
    addcart(context,payload){
      return new Promise((resolve, reject)=>{
        let oldproduct=context.state.cartList.find(item => item.iid === payload.iid)
      // for(let item of context.state.cartList){
      //   if(item.iid===payload.iid){
      //     oldproduct=item
      //   }
      // }
      if(oldproduct){
        oldproduct.count+=1
        context.commit('addcounter',oldproduct)
        resolve('商品+1')
      }else{
        payload.count=1
        // context.state.cartList.push(payload)
        context.commit('addtocart',payload)
        
        resolve('成功添加商品')
      }
      })
      
    }
  },
  modules: {
  }
})
