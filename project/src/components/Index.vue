<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <drawer>
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <!-- main content -->
      <view-box>
        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition>
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
          <tabbar-item :link="{path:'/'}">
            <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon">&#xe637;</span>
            <span slot="label">Home</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/demo'}">
            <span class="demo-icon-22" slot="icon">&#xe633;</span>
            <span slot="label"><span>Demos</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/project/donate'}">
            <span class="demo-icon-22" slot="icon">&#xe630;</span>
            <span slot="label">Donate</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/project/donate'}">
            <span class="demo-icon-22" slot="icon">&#xe630;</span>
            <span slot="label">Donate</span>
          </tabbar-item>
        </tabbar>

      </view-box>
    </drawer>

  </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  data () {
    return {
      msg: 'Hello World!',
      isLoading: false
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
