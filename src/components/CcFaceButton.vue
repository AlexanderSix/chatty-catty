<template>
  <img
    :src="urlGenerator()"
    @click="$emit('dayresponse')"
  >
</template>

<script>
export default {
  name: 'CcFaceButton',
  props: {
    imgName: {
      type: String,
      required: true
    }
  },
  methods: {
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      return image('./' + this.imgName + '.png')
    }
  }
}
</script>

<style>

</style>
