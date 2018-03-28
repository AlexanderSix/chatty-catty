<template>
  <div class="cat">
    <img :src="imageUrl" @click="catSelected()">
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
    getImageUrl () {
      this.imageUrl = "./" + this.type + ".png"
    },

    catSelected(){
      this.$emit("catClicked", this.cat.id);
    }
  }

}
</script>

<style>

</style>
