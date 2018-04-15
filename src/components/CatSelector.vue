<template>
  <div id="cat-selector">
    <cat
      v-for="cat in catsArr"
      :key="cat.id"
      :type="cat.type"
      :cat="cat"
      :current-intro-state="currentIntroState"
      v-show="cat.isVisible"
    />
  </div>
</template>

<script>
import Cat from '@/components/Cat'

// TODO: Implement switching focus on cats for mockup on Friday

// Component-scope global to keep track of
// number of cats
// let numberOfCats = 0

/**
* Creates CatClass objects that hold information about a Cat
*/
class CatClass {
  constructor (type, numberOfCats) {
    this.id = numberOfCats
    this.type = type
    if (localStorage.getItem('registeredtoken') === 'registered') {
      this.isVisible = true
    } else {
      this.isVisible = false
    }
  }
}

export default {
  name: "CatSelector",

  /**
   * Basically acts as a constructor--this method is
   * called when the component is created
   */
  created () {
    this.setUpCatsArr()
  },

  mounted () {

  },

  components: {
    Cat
  },

  data () {
    return {
      catsArr: []
    }
  },

  props: {
    currentCat: {
      type: Object,
      required: true
    },
    currentIntroState: {
      type: String,
      required: true
    }
  },

  methods: {
    /**
     * Sets up the cats array to always have the add cat
     * as the first cat, and the user's cat as the second
     * and the friends cat as the third
     */
    setUpCatsArr () {
      this.catsArr[0] = new CatClass('add', 0)
      this.catsArr[1] = new CatClass('myCat', 1)
      this.catsArr[2] = new CatClass('friend', 2)
    },

    reduceCatCount () {
      numberOfCats--
      console.log(numberOfCats)
    }
  }
}
</script>

<style>

</style>
