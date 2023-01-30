<template>
  <div>
    <MyNavbar />
    <router-view />
  </div>

</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue"

export default {
  components: { MyNavbar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.AddPostb {
  position: absolute;
  right:10%
}
</style>
