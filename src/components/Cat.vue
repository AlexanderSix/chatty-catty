<template>
  <div class="cat" v-bind:style="{marginLeft: -5 + (115 * this.cat.id) + 'px' }">
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
    /**
    * Generates the URL for the picture to get around a webpack rendering bug
    *
    * @precondition There is a picture called 'cat.png' in the assets folder
    * @postcondition The photo's URL is generated
    */
    urlGenerator () {
      let image = require.context('../assets/', false, /\.png$/)
      this.image = image('./' + this.type + '-cat.png')
    },

    /**
    * Shows the cat for the intro sequence depending on the introState and currentCat props
    *
    * @precondition The intro sequence is being played in the UI
    * @postcondition The cat becomes shown if the prop values are true
    */
    showCat () {
      if (this.currentIntroState === this.currentCat.type) {
        this.currentCat.isVisible = true
      } else if (this.currentIntroState === 'intro' && this.currentCat.type === 'myCat') {
        this.currentCat.isVisible = true
      }
    },

    /**
    * Emits a "catselected" event to the parent component
    *
    * @precondition The user clicks on a cat
    * @postcondition The "catselected" event is emitted from the parent component
    */
    catSelected () {
      this.$parent.$emit("catselected", this.cat)
    }
  }

}
</script>

<style>
img {
  width: 140px;
  height: 140px;
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
  margin-bottom: -10px
}
</style>
