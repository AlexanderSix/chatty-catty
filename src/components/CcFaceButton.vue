<template>
  <div>
    <router-link :to="linkDestination">{{ linkText }}</router-link>
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
