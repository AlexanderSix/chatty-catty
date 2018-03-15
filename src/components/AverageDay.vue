<template>
  <div>
    <h3 v-if="!isResponseSubmitted">{{ getResponse() }}</h3>
    <h3 v-if="isResponseSubmitted">{{ getThankYou() }}</h3>
    <cc-day-response
      v-if="!isResponseSubmitted"
      @responseSubmitted="responseSubmitted()"
    />
    <img src="../assets/cat.png" alt="cat" class="chatty-cat">
    <span class="hill"></span>
  </div>
</template>

<script>
import CcDayResponse from '@/components/CcDayResponse'

export default {
  name: 'AverageDay',

  components: {
    CcDayResponse
  },

  data () {
    return {
      responses: [
        "Well that's good! Why was today just alright?",
        "Ok, what happened today then?"
      ],
      thankYous: [
        "Thanks for filling me in! Let's talk again soon!"
      ],
      isResponseSubmitted: false
    }
  },

  methods: {
    getResponse () {
      return this.getRandomArrayElement(this.responses)
    },

    getRandomArrayElement (array) {
      let randomNum = Math.floor(Math.random() * (array.length))
      return array[randomNum]
    },

    getThankYou () {
      return this.getRandomArrayElement(this.thankYous)
    },
    responseSubmitted () {
      this.isResponseSubmitted = true
    }
  }
}
</script>

<style>

</style>
