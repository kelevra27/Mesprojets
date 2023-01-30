<template>
<nav> 
  <router-link to="/register">Register</router-link> | 
  <router-link to="/login">Login</router-link> 
</nav>
<router-view/>

  <div class="home">
    <PageBase/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageBase from '@/components/PageBase.vue'


export default {
  name: 'HomeView',
  components: {
    PageBase,
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
  display: flex;
  justify-content: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
