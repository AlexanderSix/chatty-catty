<template>
  <div class="cat">
    <img src="../assets/cat1.png" @click="catSelected">
    <div class="caption" @click="catSelected">{{this.cat.id}}</div>
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
.caption {
  float: left;
  margin-left:-20px
}
</style>
