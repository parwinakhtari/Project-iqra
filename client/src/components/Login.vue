<template>
  <form class="formbox">
  <h2>Login Page</h2>
    <v-text-field
      placeholder="Email"
      v-model="email"
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Password"
      type="password"
      v-model="password"
    ></v-text-field>
    <br>
    <div class="danger-alert" v-html="error" />
    <v-btn
      dark
      class="mr-4 regbtn"
      @click='login'
    >
      LogIn
    </v-btn>
    <p class="mt-4">Don't have an account ?</p>
    <router-link :to="{ name: 'register' }" tag="v-btn" class="btn" dark>Register</router-link>
  </form>
</template>

<script>
import Auth from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        this.error = null
        const response = await Auth.login({
          email: this.email,
          password: this.password
        })
      }
      catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.regbtn{
 background-color: #000490 !important;
 }
 .formbox{
 margin-left:150px;
 margin-right:150px;
 border: solid 2px #e9e9ff;
 padding:10px 10px 10px;
 box-shadow: 3px -3px #e9e9ff;
 }
</style>
