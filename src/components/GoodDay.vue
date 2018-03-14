<template>
  <div>
    <h3 v-if="!isResponseSubmitted">{{ getResponse() }}</h3>
    <h3 v-if="isResponseSubmitted">{{ getThankYou() }}</h3>
    <cc-day-response
      v-if="!isResponseSubmitted"
      @responseSubmitted="responseSubmitted()"
    />
  </div>
</template>

<script>
import CcDayResponse from '@/components/CcDayResponse'

export default {
  name: 'GoodDay',

  components: {
    CcDayResponse
  },

  data () {
    return {
      responses: [
        "That's great to hear! Tell me more!"
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
