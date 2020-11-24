<template>
  <div class="home">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/home/logistics" icon="friends-o">跑腿</van-tabbar-item>
      <van-tabbar-item to="/home/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {

  },
  created() {
    
  }
}
</script>
