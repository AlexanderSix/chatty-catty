<template>
  <div class="login-box">
    <h2>Login:</h2>
    <input type="email">
    <button @click.prevent="login()">Login</button>

    <h5 v-show="noRegisteredToken"><router-link to="/">Register Here!</router-link></h5>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {

    }
  },
  computed: {
    noRegisteredToken () {
      let token = localStorage.getItem('registeredtoken')
      return (token === null || token === undefined || token === '')
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

<style scoped>

</style>
