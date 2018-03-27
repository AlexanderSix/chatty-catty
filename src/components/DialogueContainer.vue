<template>
  <div id="dialogue-container">
    <h3>{{ dialogueHeader }}</h3>
    <p>{{ dialogueText }}</p>
  </div>
</template>

<script>
export default {
  name: "DialogueContainer",
  components: {

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
