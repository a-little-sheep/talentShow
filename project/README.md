# talent

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## vuex学习笔记 

```
state 就是状态对象
mutations 就是改变state对象的方法
界面显示用来显示的是 $store.state.count
简单写法：利用 {mapState}
1、
computed:mapState({
   count:state=>state.conut
})
2、
computed:mapState(['conut'])


getters 计算过滤操作
action 和 mutations 区别

```
### 正式环境搭建
```
第一步将绝对路径转化为相对路径  ： 在config/index.js文件中修改 assetsPublicPath 为 './'；
第二步将在控制台中运行 npm ren build  然后会生成新的文件夹叫dest ，将文件夹放到服务器上
```