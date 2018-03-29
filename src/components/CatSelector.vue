<template>
  <div id="cat-selector">
    <cat
      v-for="cat in catsArr"
      :key="cat.id"
      :type="cat.type"
      :cat="cat"
    />
  </div>
</template>

<script>
import Cat from '@/components/Cat'

// TODO: Implement switching focus on cats for mockup on Friday

// Component-scope global to keep track of
// number of cats
var numberOfCats = 0

class CatClass {
  constructor (type) {
    this.id = numberOfCats++
    this.type = type
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
      type: Number,
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
      console.log(this.currentCat);
      this.catsArr[0] = new CatClass('add')
      this.catsArr[1] = new CatClass('myCat')
      this.catsArr[2] = new CatClass('friend')
    },

    onCatClicked(catId){
      console.log(catId);
    }
  }
}
</script>

<style>

#cat-selector {
  padding-top: 80%;
}

</style>
