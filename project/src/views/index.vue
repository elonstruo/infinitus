<template>
  <div>
      <div class="location">定位</div>
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img :src="item.img" />
        </van-swipe-item>
      </van-swipe>
      <div class="module">
        
      </div>
  </div>
</template>





 
<script>
import axios from 'axios'
import { Swipe, SwipeItem } from 'axios'
export default {
    name: "index",
    data() {
        return {
          banner:[]
        }
    },
    created() {
      axios({
        url: 'https://www.easy-mock.com/mock/5fb23670b6c9532e3bc4c649/buyfun/banner',
        method: 'post',
      })
      .then(res=>{
        console.log('res')
        console.log(res)
        if(res.status==200) {
          this.banner = res.data.data.banner
        }
      })
      .catch(err=>{
        console.log('err')
        console.log(err)
      })
    }
}
</script>

<style>
  img {
    max-width: 100%;
  }
</style>