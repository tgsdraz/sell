<template>
    <div class="goods-header">
        <div class="header-info">
            <div class="header-avtor">
                <img :src="sellerObj.avatar" alt="" class="avatar">
            </div>
            <div class="header-info-content">
                <div class="header-title">
                    <div class="header-title-img"></div>
                    <div class="header-title-warpper">{{sellerObj.name}}</div>
                </div>
                <div class="transport">
                    {{sellerObj.description}} / {{sellerObj.deliveryTime}}分钟到达
                </div>
                <div class="reduce-fee" v-if='sellerObj.supports'>
                    <span class="reduce" :class="map[sellerObj.supports[0].type]"></span>
                    <span class="reduce-info">{{sellerObj.supports[0].description}}</span>
                    <div class="sell-count">
                        5个
                        <span class="icon-keyboard_arrow_right more"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bulletin">
            <span class="bulletin-img"></span>
            <span class="bulletin">{{sellerObj.bulletin}}</span>    
            <span class="icon-keyboard_arrow_right more"></span>
        </div> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'goodsHeader',
    data(){
        return {
            sellerObj:{},
            map:[]
        }
    },
    created(){
        this.map = ['decrease','discount','decrease','discount','decrease']
        axios.get('/sell/seller').then((res) => {
            if(res.data.code === 0){
                this.sellerObj = res.data.seller
                console.log(this.sellerObj)
            }
        })
    }
}
</script>
<style lang='stylus'>
@import '../../static/style.css'
@import '../assets/stylus/index.styl'
.goods-header
    width 100%
    .header-info
        position relative
        padding 24px 0 18px 24px
        background rgba(7,17,27,0.5)
        display flex
        .header-avtor
            width 64px
            height 64px
            .avatar
                width 100%
                height 100%
                border-radius 4px
        .header-info-content
            margin-left 16px
            margin-top 2px
            .header-title
                display flex
                .header-title-img
                    width 30px;
                    height 18px
                    bg-image(brand)
                    background-size 100% 100%
                .header-title-warpper
                    font-size 16px
                    color rgb(255,255,255)
                    font-weight bold
                    line-height 18px
                    margin-left 6px 
            .transport
                font-size 12px
                color rgb(255,255,255)
                font-weight 200
                line-height 12px
                margin-top 8px
            .reduce-fee
                margin-top 10px
                .reduce
                    set-img(16px)
                    background-size 100% 100%
                    vertical-align top
                    &.decrease
                        bg-image('decrease_1')
                    &.discount
                        bg-image('discount_1')
                .reduce-info
                    font-size 10px
                    color rgb(255,255,255)
                    font-weight 200
                    line-height 12px
                    margin-left 4px
                .sell-count
                    position absolute
                    right 12px
                    bottom 12px
                    padding 7px 8px
                    background rgba(0,0,0,0.2)
                    border-radius 14px
                    font-size 10px
                    color rgb(255,255,255)
                    font-weight 200
                    line-height 12px
                    .more
                        set-img(10px)
                        margin-left 2px
    .header-bulletin
        display flex
        align-items center
        width 100%
        height 28px
        background rgba(7,17,27,0.2)
        padding 0 12px
        line-height 28px
        font-size 10px
        color rgb(255,255,255)
        font-weight 200
        box-sizing border-box
        .bulletin-img
            display inline-block
            width 22px
            height 12px
            bg-image(bulletin)
            background-size 22px 11px
            vertical-align middle
            margin-right 4px
            margin-top 2px
        .bulletin
            flex 1
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .more
            set-img(12px)
           
            

</style>
