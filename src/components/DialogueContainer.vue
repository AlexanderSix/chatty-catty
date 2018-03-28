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
    header: {
      type: String,
      required: false,
      default: ""
    },
    text: {
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
