<template>
  <div id="dialogue-container">
    <intro-dialogue v-if="type == 'intro'" />
    <add-cat v-if="type == 'add'" />
    <my-cat v-if="type == 'myCat'" />
    <friend-cat v-if="type == 'friend'" />
  </div>
</template>

<script>
export default {
  name: "DialogueContainer",
  components: {
    IntroDialogue,
    AddCat,
    MyCat,
    FriendCat
  },
  props: {
    header: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: String,
      required: true,
      default: ""
    },
    type: {
      type: String,
      required: true,
      default: ""
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
