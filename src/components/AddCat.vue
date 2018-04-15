<template>
  <div>
    <h3>{{ header }}</h3>
    <p>{{ text }}</p>
    <input
      type="number"
      name="pnumber"
      v-model="myNumber"
      :class="{ error: !correctPhoneNumber }"
      placeholder="Like: 8032233213"
    >
    <button
      v-if="correctPhoneNumber"
      @click="submitFriendPhoneNumber()"
    >Submit</button>
  </div>
</template>

<script>
export default {
  name: "AddCat",
  computed: {
    correctPhoneNumber () {
      return this.myNumber.length === 10
    }
  },
  data () {
    return {
      header: "Add a Friend!",
      text: "Enter your friend's phone number below to invite their cat",
      myNumber: ""
    }
  },
  methods: {
    /**
    * Front-end spoofing of the friend's phone number submission
    *
    * @precondition The user must have put a phone number into the submission box
    * @postcondition The phone number submission is spoofed, and the UI moves to the next frame
    */
    submitFriendPhoneNumber () {
      localStorage.setItem('friend-' + this.myNumber, this.myNumber)
      this.myNumber = ""
      this.$parent.$emit('friendintro')
      this.header = "Your friend has been added!"
      this.text = "Your friend's cat has been added! You can now check in on them by clicking on their cat along the bottom of your screen! Have you checked in yet today? Click on your cat to do a quick check-in and let it know how you're doing! Or keep adding numbers to add more friends!"
      localStorage.setItem('registeredtoken', 'registered')
      localStorage.setItem('logintoken', 'logged-in')
    }
  }
}
</script>

<style>
.error {
  border: 3px solid red;
}
</style>
