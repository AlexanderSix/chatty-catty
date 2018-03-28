<template>
  <div class="cat">
    <img src="../assets/cat1.png" @click="catSelected">
    <!-- <a @click="catSelected">Meow! I'm cat {{this.cat.id}}</a> -->
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
      console.log("catSelected() fired!");
      this.$parent.$emit("catselected", this.cat.id);
    }
  }

}
</script>

<style>
img {
  width: 33%;
  float: left;
}
</style>
