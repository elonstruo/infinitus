/*
 * @Author: elonstruo
 * @Date: 2020-12-23 10:15:46
 * @LastEditTime: 2020-12-23 10:17:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koa2/forBuyfunKoa/index.js
 */

 const Koa = require('koa')
 const app = new Koa()

 app.use(async(ctx)=>{
     ctx.body='hh'
 })

 app.listen(3023,()=>{console.log('buyfunkoa')})