<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-4">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email" />
          <br>
          <input
            placeholder="Password"
            type="password"
            name="password"
            v-model="password" />
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="cyan"
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
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
        const response = await Auth.register({
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
.error{
color: red
}
input{
margin: 15px;
border: solid #32a1ce;
padding: 5px
}
.white{
border: solid gray;
}
.cyan{
margin: 5px 2px 2px 2px
}
</style>
