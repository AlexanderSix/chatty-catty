<template>
  <div>
    <h3>{{ header }}</h3>
    <p>{{ text }}</p>
    <input type="number" name="pnumber" v-model="myNumber">
    <button @click="submitFriendPhoneNumber()">Submit</button>
  </div>
</template>

<script>
export default {
  name: "AddCat",
  data () {
    return {
      header: "Add a Friend!",
      text: "Enter your friend's phone number below to add them to your list (we'll change this text)",
      myNumber: ""
    }
  },
  methods: {
    submitFriendPhoneNumber () {
      this.myNumber = ""
      this.$parent.$emit('endintro')
      this.header = "Your friend has been added!"
      this.text = "Your friend's cat has been added! You can now check in on them by clicking on their cat along the bottom of your screen! Have you checked in yet today? Click on your cat to do a quick check-in and let it know how you're doing! Or keep adding numbers to add more friends!"
    }
  }
}
</script>

<style>

</style>
