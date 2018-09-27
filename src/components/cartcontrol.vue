<template>
    <div id="cart-control">
        <span class="decrease icon-remove_circle_outline" v-show="food.count != 0" @click="remove"></span>
        <span class="count" v-show="food.count > 0">{{food.count}}</span>
        <span class="increase icon-add_circle" @click="add"></span>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        add($event){
            if($event._constructed){
                if(!this.food.count){
                    Vue.set(this.food,'count')
                    this.food.count = 1
                }else{
                    this.food.count++
                }
            }
            
        },
        remove($event){
            if($event._constructed){
                if(this.food.count === 0){
                    return
                }else{
                    this.food.count--
                }
            }
        }
    }
}
</script>
<style lang="stylus">
@import '../../static/style.css';
#cart-control
    font-size 0px
    .icon-remove_circle_outline,.icon-add_circle
        display inline-block
        width 24px
        height 24px
        text-align center
        font-size 24px
        color #1E90FF
        line-height 24px
        padding 6px
    .count
        display inline-block
        width 12px
        font-size 10px
        color rgb(147,153,159)
        line-height 24px
        vertical-align top
        text-align center
    .decrease
        transition all 0.5s linear    
</style>
