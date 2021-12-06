<template>
  <div>
    <h1>Register Page</h1>
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <br />
    <input
      placeholder="Password"
      type="password"
      name="password"
      v-model="password"
      autocomplete="new-password"
    />

    <br />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Auth from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
   async register () {
   const response= await  Auth.register({
         email:this.email,
         password:this.password 
    })
    console.log(response.data);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
