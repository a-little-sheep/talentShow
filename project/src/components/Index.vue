<template>
  <div class="box">
    <drawer height="100%">
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
            <span class="" slot="icon"></span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/classification'}">
            <span class="" slot="icon"></span>
            <span slot="label"><span>分类</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/help'}">
            <span class="" slot="icon"></span>
            <span slot="label">作业</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/my'}">
            <span class="" slot="icon"></span>
            <span slot="label">我的</span>
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
      isLoading: false
    }
  }
}
</script>
<style>

</style>
