import Mock from 'mockjs'
import data from '../data.json'
Mock.mock('/sell/goods',{
    code:0,
    codeMsg:'success',
    goods:data.goods
})
Mock.mock('/sell/ratings',{
    code:0,
    codeMsg:'success',
    ratings:data.ratings
})
Mock.mock('/sell/seller',{
    code:0,
    codeMsg:'success',
    seller:data.seller
})