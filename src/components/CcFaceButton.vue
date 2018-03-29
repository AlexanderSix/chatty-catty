<template>
    <img :src="urlGenerator()">
</template>

<script>
export default {
  methods: {
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      return image('./' + this.imgName + '.png')
    }
  },
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
      required: false
    }
  }
}
</script>

<style>

</style>
