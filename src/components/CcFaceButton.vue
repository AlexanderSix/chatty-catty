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
    /**
    * Generates the URL for the picture to get around a webpack rendering bug
    *
    * @precondition There is a picture called 'cat.png' in the assets folder
    * @postcondition The photo's URL is generated
    */
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      return image('./' + this.imgName + '.png')
    }
  }
}
</script>

<style>

</style>
