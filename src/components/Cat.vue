<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "Cat",

  mounted () {
    this.getImageUrl()
  },

  components: {

  },

  props: {
    type: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      imageUrl: ""
    }
  },

  methods: {
    getImageUrl () {
      this.imageUrl = "./" + this.type + ".png"
    }
  }

}
</script>

<style>

</style>
