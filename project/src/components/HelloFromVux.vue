<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <div style="height:100%;">
      <view-box ref="viewBox">
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
        <router-view></router-view>
        <tabbar slot="bottom"></tabbar>
      </view-box>
    </div>
  </div>
</template>

<script>
import { Group, Cell, ViewBox } from 'vux'

export default {
  components: {
    Group,
    Cell,
    ViewBox
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
