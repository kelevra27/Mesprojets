<template>
<div class='form'>

  <input type="text" v-model="name" placeholder="name" required/>

  <input type="email" v-model="email" placeholder="email" required/>

  <input type="password" v-model="password" placeholder="password" required/>

  <button @click="register();">Register</button>
  
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
    register(){
      fetch('http://localhost:8000/users/auth/register',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:  this.name,
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
form {
display: flex;
}
input{
  margin-right: 5%;
}
</style>



