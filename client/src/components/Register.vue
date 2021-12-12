<template>
  <form class="formbox" autocomplete="off">
  <h2>Register Page</h2>
    <v-text-field
      placeholder="Email"
      v-model="email"
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Password"
      type="password"
      v-model="password"
      autocomplete="new-password"
    ></v-text-field>
    <br>
    <div class="danger-alert" v-html="error" />
    <v-btn
      color="success"
      class="mr-4 regbtn"
      @click="register"
    >
      Register
    </v-btn>
    <p class="mt-4">Do you already have an account ?</p>
    <router-link :to="{ name: 'login' }" tag="v-btn" class="btn" dark>Log In</router-link>
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
    async register () {
      try {
       this.error = null
        const response = await Auth.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name:'sessions'
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
 margin-top:5rem;
 margin-left:150px;
 margin-right:150px;
 border: solid 2px #e9e9ff;
 padding:10px 10px 10px;
 box-shadow: 3px -3px #e9e9ff;
 }
</style>
