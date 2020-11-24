<template>
  <div class="">
      login
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {

    }
  },
  methods:{
      go() {
          console.log(this.$route)
      }
  },
  created() {
      this.go()
  }
}
</script>

<style scoped lang="less">
</style>
