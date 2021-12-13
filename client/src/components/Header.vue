<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <p class="navbar-brand">Project-Iqra</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse float-md-right" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link :to="{ name: 'sessions' }" tag="v-btn" class="btn" v-if="$store.state.isUserLoggedIn" dark>
                Todays Sessions
            </router-link>
      </li>
      <li class="nav-item">
            <router-link :to="{ name: 'upcomingsessions' }" tag="v-btn" class="btn" v-if="$store.state.isUserLoggedIn" dark>
                Upcoming Sessions
            </router-link>
      </li>
      <li class="nav-item">
            <router-link :to="{ name: 'createssions' }" tag="v-btn" class="btn" v-if="$store.state.isUserLoggedIn" dark>
                Create your own sesssion
            </router-link>
      </li>
      <li class="nav-item active">
            <router-link :to="{ name: 'register' }" tag="v-btn" class="btn" v-if="!$store.state.isUserLoggedIn" dark>
            Register
            </router-link>
      </li>
      <li class="nav-item">
       <router-link :to="{ name: 'login' }" tag="v-btn" class="btn" v-if="!$store.state.isUserLoggedIn" dark>
        Log In
        </router-link>
      </li>
      <li class="nav-item">
        <v-btn
            v-if="$store.state.isUserLoggedIn"
            class="mr-4 nav-link"
            @click="logout"
        >
            Log Out
        </v-btn>
      </li>
      
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style scoped>
.nav-item{
margin-left:57px;
margin-bottom:15px;
}
</style>