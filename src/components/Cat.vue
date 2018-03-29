<template>
  <div class="cat" v-bind:style="{marginLeft: (120 * this.cat.id) + 'px' }">
    <div
      @click="catSelected()"
    >
    <img
      :v-show="showImage"
      :src="image"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "Cat",

  mounted () {
    this.urlGenerator()
  },

  watch: {
    currentIntroState: {
      handler (val, oldVal) {
        this.showCat()
      },
      deep: true
    }
  },

  computed: {
    showImage () {
      return this.image && typeof this.image === 'object'
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
      if (this.currentIntroState === this.currentCat.type) {
        this.currentCat.isVisible = true
      } else if (this.currentIntroState === 'intro' && this.currentCat.type === 'myCat') {
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
  width: 100px;
  height: 100px;
  float: left;
}
.caption {
  float: left;
  position: relative;
  bottom: 25px;
  right: 53px;
}
.cat{
  position: fixed;
  bottom:0;
}
</style>
