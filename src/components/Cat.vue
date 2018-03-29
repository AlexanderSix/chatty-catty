<template>
  <div class="cat">
    <img
      :src="urlGenerator()"
      @click="catSelected()"
    >
    <div class="caption" @click="catSelected">{{this.cat.id}}</div>
  </div>
</template>

<script>
export default {
  name: "Cat",

  mounted () {

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

    catSelected () {
      this.$parent.$emit("catselected", this.cat)
    }
  }

}
</script>

<style>
img {
  width: 33%;
  float: left;
}
.caption {
  float: left;
  margin-left:-20px
}
</style>
