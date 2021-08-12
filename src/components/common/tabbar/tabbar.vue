<template>
  <div id='tabbar'>
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

 #tabbar{
  background-color: #f6f6f6;   
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
}
</style>