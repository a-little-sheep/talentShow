<template>
   <div>
       <group>
           <cell-box link="/home/search">
               搜索
           </cell-box>
       </group>
       <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange" auto loop></swiper>
       <flexbox class="radio vux-1px-b">
           <flexbox-item :span="1" class="vux-center"><span class="radio_icon iconfont icon-horn"></span></flexbox-item>
           <flexbox-item :span="11"><span class="radio_info">{{nav_text}}</span></flexbox-item>
       </flexbox>
       <!--<grid>-->
           <!--<grid-item :label="i" v-for="i in 4" :key="i">-->
               <!--<img slot="icon" src="https://static.vux.li/demo/1.jpg">-->
           <!--</grid-item>-->
       <!--</grid>-->
   </div>
</template>

<script>
    import { Swiper,Grid,GridItem,FormPreview,Flexbox, FlexboxItem,Search,Group,CellBox } from 'vux'
    const baseList = [{
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/1.jpg',
    }, {
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/2.jpg',
    }, {
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/3.jpg',
    }]

    export default {
        components: {
            Swiper,
            FormPreview,
            Grid,
            GridItem,
            Flexbox,
            FlexboxItem,
            Search,
            Group,
            CellBox
        },
        methods: {
            demo01_onIndexChange (index) {
                this.demo01_index = index
            },
            onSubmit (val) {
                window.alert('on submit' + val)
            },
            onCancel () {
                console.log('on cancel')
            },
            onFocus () {
                console.log('on focus')
            }
        },
        data() {
            return {
                demo01_list: baseList,
                demo01_index: 0,
                nav_text:'这是一个消息显示区',
                autoFixed: true
            }
        }
    }
</script>
<style>
*{ touch-action: none; }
.swiper-demo-img img {
   width: 100%;
}
.grid-center {
    display: block;
    text-align: center;
    color: #666;
}

.radio{width:100%;height:44px;}
.vux-center{text-align:center;}
.radio_icon{color:#323232;}
.radio_info{font-size:14px;color:#999;}
.search{position:fixed !important;top:0;z-index:999;}
.search .weui-search-bar{background-color:rgba(255,255,255,0);}
/*.search .weui-search-bar:after{height:0;border-bottom:0;}*/
/*.weui-cell_access .weui-cell__ft{padding-right:0 !important;}*/
/*.weui-cell__ft:after{display:none !important;}*/
/*.weui-cell__hd{display:none;}*/
/*.vux-cell-primary{display:none !important;}*/
</style>

