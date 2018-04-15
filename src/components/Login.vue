<template>
  <div class="login-box">
    <h2>Login:</h2>
    <label>Phone Number:</label>
    <input
      type="number"
      v-model="myNumber"
      :class="{ error : !correctPhoneNumber }"
      placeholder="Phone Number"
    >
    <button
      @click.prevent="login()"
      v-show="correctPhoneNumber"
    >Login</button>

    <h5 v-show="noRegisteredToken"><router-link to="/">Register Here!</router-link></h5>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      myNumber: ""
    }
  },
  computed: {
    noRegisteredToken () {
      let token = localStorage.getItem('registeredtoken')
      return (token === null || token === undefined || token === '')
    },
    correctPhoneNumber () {
      return this.myNumber.length === 10
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
.error {
  border: 3px solid red;
}
</style>
