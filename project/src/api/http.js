import Vue from 'vue'
import axios from 'axios'
// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置请求头
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
 
// 配置接口地址
Vue.prototype.$axios=axios; //配置axios方法可以全局使用
