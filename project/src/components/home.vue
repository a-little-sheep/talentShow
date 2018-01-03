<template>
   <div>
       <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange" auto loop></swiper>
       <grid>
           <grid-item :label="i" v-for="i in 4" :key="i">
               <img slot="icon" src="https://static.vux.li/demo/1.jpg">
           </grid-item>
       </grid>
   </div>
</template>

<script>
    import { Swiper,Grid,GridItem,FormPreview } from 'vux'
    const baseList = [{
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵花'
    }, {
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
    }, {
        url: 'javascript:;',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '送你一次旅行',
    }]

    export default {
        components: {
            Swiper,
            FormPreview,
            Grid,
            GridItem
        },
        methods: {
            demo01_onIndexChange (index) {
                this.demo01_index = index
                console.log()
            }
        },
        data() {
            return {
                demo01_list: baseList,
                demo01_index: 0
            }
        }
    }
</script>
<style scoped>
.swiper-demo-img img {
   width: 100%;
}
.grid-center {
    display: block;
    text-align: center;
    color: #666;
}

</style>

