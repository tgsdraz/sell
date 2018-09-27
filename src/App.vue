<template>
  <div id="app">
    <div class="header-wrapper">
      <goods-header></goods-header>
    </div>
    <div class="nav-wrapper">
       <router-link :to="{name:'goods'}" tag="div" class="goods" :class="{red:flag}" @click='flag=true'>商品</router-link>
       <router-link :to="{name:'rating'}" tag="div" class="rating">评价</router-link> 
       <router-link :to="{name:'sellers'}" tag="div" class="sellers">商家</router-link> 
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import goodsHeader from './components/goodsHeader'
export default {
  name: 'App',
  components:{
    goodsHeader
  },
  data(){
    return {
      flag:false
    }
  },
  methods:{
    change(){
      this.flag = true
    }
  }
}
</script>

<style lang="stylus">
@import '../static/style.css'
@import './assets/stylus/index.styl'
#app 
  width 100%
  height 100vh
  .header-wrapper
    width 100%
      goods-header
        blur 10px
  .nav-wrapper
    display flex
    height 40px
    width 100%
    border-1px(rgba(7,17,27,.1))
    .goods,.rating,.sellers
      flex 1
      height 100%
      text-align center
      line-height 40px
      font-size 14px
      color rgb(77,85,93)
      &.red
        color rgb(240,20,20)

</style>
