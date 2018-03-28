<template>
  <div id="dialogue-container">
    <h3>{{ header }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "DialogueContainer",
  components: {

  },
  props: {
    header:{
      type: String,
      required: false
    },
    text:{
      type: String,
      required: true
    }
  },
  data () {
    return {
      // TODO: Make these into props passed down by the CatContainer!
      dialogueHeader: "",
      dialogueText: ""
    }
  }
}
</script>

<style>

</style>
