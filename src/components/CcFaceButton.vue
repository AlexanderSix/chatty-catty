<template>
  <div>
    <router-link :to="linkDestination"> <img :src="urlGenerator()"> </router-link>
  </div>
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
      required: true
    }
  }
}
</script>

<style>

</style>
