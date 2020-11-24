/**
 *  creat on 2020年02月11日
 *  以iphone6的屏幕为基准，屏宽为375px， ui设计稿的也是用iphone6为基准，但是用的屏款750px;
 *  在开发中1rem=16px, 元素的rem=设计稿元素px/2/16
 *
 *
* */

// 设置 rem 函数
function setRem () {
    // 375 默认大小16px; 375px = 23.4375rem ;每个元素px基础上/16
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
    htmlDom.style.fontSize= htmlWidth/23.4375 + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}
