<template>
  <div>
    <h3>{{ header }}</h3>
    <p>{{ text }}</p><br>
    <input
      v-if="showInput"
      type="number"
      name="pnumber"
      v-model="myNumber"
    >
    <button
      v-if="showInput"
      @click="submitPhoneNumber()"
    >Submit</button>
  </div>
</template>

<script>
export default {
  name: "IntroDialogue",
  data () {
    return {
      header: "Welcome to Chatty Catty!",
      text: "I'm your new virtual cat! Please provide your phone number so that your friends can find you!",
      myNumber: "",
      showInput: true
    }
  },
  methods: {
    submitPhoneNumber () {
      this.myNumber = ""
      this.showInput = false
      this.$parent.$emit('addintro')
      this.header = "Add a friend!"
      this.text = "I can only do my job if you add a friend's cat for me to chat with! Click on the cat to my left to start adding friends and watch as they appear along the bottom of your screen!"
    }
  }
}
</script>

<style>
input {
  border-style:solid;
}
</style>
