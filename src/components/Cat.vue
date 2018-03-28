<template>
  <div class="cat">
    <img :src="urlGenerator()" @click="catSelected()">
    <a @click="catSelected">Meow! I'm cat {{this.cat.id}}</a>
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
    },
    cat: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      imageUrl: ""
    }
  },

  methods: {
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      return image('./' + this.type + '-cat.png')
    },

    catSelected(){
      console.log("catSelected() fired!");
      this.$parent.$emit("catselected", this.cat.id);
    }
  }

}
</script>

<style>

</style>
