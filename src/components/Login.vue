<template>
  <div class="login-box">
    <h2>Login:</h2>
    <input type="email">
    <button @click.prevent="login()">Login</button>

    <h5><router-link to="/register">Register Here!</router-link></h5>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {

    }
  },
  methods: {
    login () {
      localStorage.setItem('logintoken', 'logged-in')
      localStorage.setItem('registeredtoken', 'registered')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
