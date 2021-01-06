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

    }
}
</script>

<style>
  img {
    max-width: 100%;
  }
</style>