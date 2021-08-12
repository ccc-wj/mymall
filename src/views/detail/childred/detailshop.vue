<template>
  <div class="shopinfo">
      <div class="logo">
          <img :src="shop.logo" alt="">
          <div>{{shop.name}}</div>
      </div>
      <div  class="shopmassage">
          <div class="left">
              <div class="sales">
                  <div class="info-sells">{{shop.sells}}</div>
                  <div class="info-add">总销量</div>
              </div>
              <div class="goods">
                  <div class="info-good">{{shop.goodsCount}}</div>
                  <div class="info-baby">全部宝贝</div>
              </div>
          </div>
          <div class="right">
              <table >
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td class="name">{{item.name}}</td>
                      <td class="star" :class="{ishigh:item.isBetter }">{{item.score}}</td>
                      <td>
                          <div class="content" :class="{isred:item.isBetter}">{{item.isBetter? '高':'低'}}</div>
                    </td>
                  </tr>
              </table>
          </div>
          <div class="btn">
              <button >进店逛逛</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detailshop',
    props:{
        shop:{
            type:Object,
            dafault:{}
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>

    .shopinfo{
        position: relative;
        padding: 25px 8px;
        height: 250px;
        border-bottom: 5px solid #f2f5f8;
    }
    .logo{
        display: flex;
        align-items: center;
        
    }
    .logo img{
        margin-right: 5px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    .shopmassage{
        margin-top: 20px;
        /* display: flex; */
        position: relative;
        flex: 1;
        
    }
    .left{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        position: absolute;
        top:10px;
        border-right: 1px solid rgb(102, 101, 101);
        flex: 1;
    }
    .info-sells,
    .info-good{
font-size: 18px;
margin-bottom: 8px;
    }
    .info-baby,
    .info-add{
        font-size: 12px;
        /* width: 80px; */
    }
    .right{
        padding-left: 10px;
        width: 50%;
        flex: 1;
    }
    .name{
        font-size: 13px;
    }
    .right table td{
        padding: 0 5px;
    }
    .star{
      color:   #5ea732;
      font-size: 13px;
    }
    .ishigh{
        color: #f13e3a;
    }
    .content{
        color: #fff;
        background-color:#5ea732 ;
    }
    .isred{
        background-color: #f13e3a;
    }
    .btn{
        position: absolute;
        top: 80px;
        left: 26%;
        
        
    }
    .btn button{
        width: 150px;
        border:none;
        border-radius: 10px;
        padding: 7px 0;
        font-size: 13px;
    }
</style>