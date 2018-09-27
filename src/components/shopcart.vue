<template>
    <div id="shop-cart-content">
        <div class="shop-cart-wrapper">
            <div class="shop-cart icon-shopping_cart" :class="{hasCount:totalCount != 0}">
                <span class="total-count" v-show="totalCount != 0">{{totalCount}}</span>
            </div>
        </div>
        <div class="delivery-wrapper">
            <span class="total-price" :class="{'text-word':totalCount != 0}">¥{{totalPrice}}</span>
            <span class="delivery-fee">另需配送费¥1元</span>
        </div>
        <div class="delivery-price" :class="{ok:minPrice < totalPrice}">{{inform}}</div>
        <div class="cart-list-wrapper" v-show="showList">
            <div class="cart-gray"></div>
            <div class="cart-list">
                <div class="cart-list-header">
                    <span class="cart-title">购物车</span>
                    <span class="clear">清空</span>
                </div>
                <div class="cart-list-food" v-for="food in selectFoods" :key="food.id">
                    <span class="food-name">{{food.name}}</span>
                    <span class="food-price">{{food.price}}</span>
                    <div class="operate">
                        <cartcontrol class="food-operate" :food = food></cartcontrol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cartcontrol from './cartcontrol'
export default {
    data(){
        return {
            flag:true
        }
    },
    props:{
        deliveryPrice:{
            type:Number
        },
        minPrice:{
            type:Number
        },
        selectFoods: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components:{
        cartcontrol
    },
    computed:{
        totalPrice(){
            let totalPrice = 0
            this.selectFoods.forEach(food => {
                totalPrice += food.price * food.count
            })
            return totalPrice
        },
        totalCount(){
            let totalCount = 0
            this.selectFoods.forEach(food => {
                totalCount += food.count
            })
            return totalCount
        },
        inform(){
            if(this.totalPrice === 0){
                return `¥${this.minPrice}`
            }else if(this.totalPrice < this.minPrice && this.totalPrice > 0){
                return `还差¥${this.minPrice-this.totalPrice}起送`
            }else{
                return `去结算`
            }
        },
        showList(){
            if(!this.totalCount){
                this.flag = true
                return false
            }
            return !this.flag
        }
    }
}
</script>
<style lang="stylus">
@import '../../static/style.css'
@import '../assets/stylus/index.styl'
#shop-cart-content
    position fixed
    left 0
    bottom 0
    display flex
    width 100%
    height 44px
    background #141d27
    .shop-cart-wrapper
        flex 0 0 80px
        position relative
        .shop-cart
            margin-left 18px
            margin-top -12px
            width 44px
            height 44px
            border 6px solid #141d27
            border-radius 44px
            text-align center
            line-height 44px
            font-size 24px 
            color rgba(255,255,255,0.4)
            background rgb(0,0,0,0.1)
            &.hasCount
                color rgb(255,255,255)
                background #1E90FF
            .total-count
                position absolute
                right 0
                top -10px
                width 24px
                height 16px
                font-size 10px
                font-weight 700
                color rgb(255,255,255)
                line-height 16px
                background-color rgb(240,20,20)
                box-shadow 0px 4px 8px 0px rgb(0,0,0,.4)
                border-radius 10px
    .delivery-wrapper
        flex 1
        padding 12px 12px 12px 0
        .total-price
            font-size 16px
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 24px
            padding-right 12px
            border-right 1px solid rgba(255,255,255,0.1)
            &.text-word
                color rgb(255,255,255)
        .delivery-fee
            padding-left 12px
            font-size 16px
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 24px
    .delivery-price
        flex 0 0 105px
        padding 12px 8px
        font-size 12px
        color rgba(255,255,255,0.4)
        font-weight 700
        line-height 24px
        text-align center
        background rgba(255,255,255,0.1)
        &.ok
            background #1E90FF
            color #ffffff
    .cart-list-wrapper
        position fixed
        top 0px
        bottom 44px
        width 100%
        display flex
        flex-direction column
        z-index -1
        .cart-gray
            background rgba(7,17,27,0.6)
            flex 1
        .cart-list
            width 100%
            overflow auto
            max-height 272px
            background-color #ffffff
            .cart-list-header
                width 100%
                height 40px
                padding 0px 18px
                line-height 40px
                background-color #f3f5f7
                box-sizing border-box
                border-1px(rgba(7,17,27,0.1))
                .cart-title
                    font-size 14px
                    font-weight 200
                    color rgb(7,17,27)
                .clear
                    position absolute
                    right 18px
                    font-size 12px
                    color rgb(0,160,220)
            .cart-list-food
                height 48px
                line-height 48px
                margin 0px 18px 0px 18px
                border-1px(rgba(7,17,27,0.1))
                box-sizing border-box
                .food-name
                    font-size 14px
                    color rgb(7,17,27)
                .food-price
                    position absolute
                    right 102px
                    font-size 10px
                    font-weight normal
                    color rgb(240,20,20)
                .operate
                    position absolute
                    right 0px
                    display inline-block
</style>
