<template>
  <div class="box">
    <drawer height="100%">
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <!-- main content -->
      <view-box>
        <!--内容模块盒子 -->
        <transition :name="'box-'+(direction ? 'in' : 'out')">
          <router-view class="router-view"></router-view>
        </transition>

        <tabbar icon-class="vux-center" slot="bottom">
          <tabbar-item :link="{path:'/'}" :selected="$route.path === '/'">
            <span class="iconfont icon-shouye" slot="icon"></span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/classification'}" :selected="$route.path === '/classification'">
            <span class="iconfont icon-yingyongchengxu" slot="icon"></span>
            <span slot="label"><span>分类</span></span>
          </tabbar-item>
          <tabbar-item :link="{path:'/help'}" :selected="$route.path === '/help'">
            <span class="iconfont icon-jiaosequnti" slot="icon"></span>
            <span slot="label">作业</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/my'}" :selected="$route.path === '/my'">
            <span class="iconfont icon-yonghu" slot="icon"></span>
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
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        let routerArr = ['/', '/classification', '/help', '/my']
        let toPath = routerArr.indexOf(to.path)
        let fromPath = routerArr.indexOf(from.path)
        if (toPath >= fromPath) {
          this.direction = true
        } else {
          this.direction = false
        }
      }
    },
    data () {
      return {
        isLoading: false,
        direction: true
      }
    }
  }

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/icon/iconfont.css';

body {
  background-color: #fbf9fe;
}
html,body,#app,.box{width:100%;height:100%;}
.iconfont{font-size:22px;}
.box-out-enter-active,
.box-out-leave-active,
.box-in-enter-active,
.box-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  top:0;
  backface-visibility: hidden;
  perspective: 1000;
}
.box-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.box-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.box-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.box-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
