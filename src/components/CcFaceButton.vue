<template>
  <div>
  <!-- No idea why tf this doesnt work ALEEEEX -->
    <router-link :to="linkDestination"> <img v-bind:src={imgName}> </router-link>
  </div>
</template>

<script>
export default {
  name: 'CcFaceButton',
  props: {
    imgName: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    linkDestination: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
