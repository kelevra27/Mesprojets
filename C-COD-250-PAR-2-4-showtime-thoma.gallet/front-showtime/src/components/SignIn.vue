<template>
    
<div class='form'>

  <input type="email" v-model="email" placeholder="email" required/>

  <input type="password" v-model="password" placeholder="password" required/>
 
  <button @click="login();">Login</button>
  
</div>

</template>

<script>

export default {
  data() {
    return {
    users: null
    }
  },
  methods: {
    login(){
      fetch('http://localhost:8000/users/auth/login',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
    },
  }

}

</script>

<style scoped>

</style>
