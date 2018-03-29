<template>
  <div class="cat">
    <img
      :v-show="showImage"
      :src="image"
      @click="catSelected()"
    >
    <div class="caption" @click="catSelected">{{this.cat.id}}</div>
  </div>
</template>

<script>
export default {
  name: "Cat",

  mounted () {
    this.urlGenerator()
  },

  watch: {
    currentIntroState:{
      handler: function (val, oldVal) {
        this.showCat()
      },
      deep: true
    }
  },

  computed: {
    showImage () {
      return this.image && typeof this.image == 'object'
    }
  },

  props: {
    type: {
      type: String,
      required: true
    },
    cat: {
      type: Object,
      required: true
    },
    currentIntroState: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      currentCat: this.cat,
      image: {}
    }
  },

  methods: {
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      this.image = image('./' + this.type + '-cat.png')
    },

    showCat () {
      if (this.currentIntroState == this.currentCat.type) {
        this.currentCat.isVisible = true
      } else if (this.currentIntroState == 'intro' && this.currentCat.type == 'myCat') {
        this.currentCat.isVisible = true
      }
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
