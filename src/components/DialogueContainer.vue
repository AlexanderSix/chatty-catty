<template>
  <div>
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
