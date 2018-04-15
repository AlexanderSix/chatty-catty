<template>
  <div>
    <h3>{{ header }}</h3>
    <p>{{ text }}</p><br>
    <input
      v-if="showInput"
      type="number"
      name="pnumber"
      v-model="myNumber"
      :class="{ error : !correctPhoneNumber }"
      placeholder="Like: 8033211234"
    >
    <button
      v-if="showInput && correctPhoneNumber"
      @click="submitPhoneNumber()"
    >Submit</button>
  </div>
</template>

<script>
export default {
  name: "IntroDialogue",
  computed: {
    correctPhoneNumber () {
      return this.myNumber.length === 10
    }
  },
  data () {
    return {
      header: "Welcome to Chatty Catty!",
      text: "I'm your new virtual cat! Please provide your phone number so that your friends can find you!",
      myNumber: "",
      showInput: true
    }
  },
  methods: {
    /**
     * Spoofs the submittal of a phone number to the back-end
     *
     * @precondition User has entered a number in the text box and clicked submit
     * @postcondition The number entry is spoofed
     */
    submitPhoneNumber () {
      localStorage.setItem('mynumber', this.myNumber)
      this.showInput = false
      this.myNumber = ""
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

.error {
  border: 3px solid red;
}
</style>
