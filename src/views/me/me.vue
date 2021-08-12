<template>
  <div class="pro-file">
    <nevbar class="nevbarstyle">
      <div slot="center">我的</div>
    </nevbar>
    <Login></Login>
    <Money></Money>
    <div class="line"></div>
    <profile-list></profile-list>
  </div>
</template>

<script>
import nevbar from "../../components/common/nevbar/nevbar.vue";
import Login from "./ChildComps/Login";
import Money from "./ChildComps/Money";
import ProfileList from "./ChildComps/ProfileList";
export default {
  name: "me",
  components: {
    nevbar,
    Login,
    Money,
    ProfileList,
  },
};
</script>

<style scoped>
.pro-file {
  width: 100%;
  height: 100%;
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
.line {
  width: 100%;
  height: 10px;
  background-color: #eee;
}
</style>