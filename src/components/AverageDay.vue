<template>
  <div>
    <h3>{{ getResponse() }}</h3>
    <cc-day-response />
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
      ]
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
    }
  }
}
</script>

<style>

</style>
