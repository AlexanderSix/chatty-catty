<template>
  <div id="dialogue-container">
    <intro v-if="type == 'intro'" />
    <add v-if="type == 'add'" />
    <my-cat v-if="type == 'myCat'" />
    <friend v-if="type == 'friend'" />
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
