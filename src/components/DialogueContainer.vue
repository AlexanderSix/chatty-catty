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
      dialogueHeader: "",
      dialogueText: ""
    }
  }
}
</script>

<style>

</style>
