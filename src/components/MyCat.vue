<template>
  <div>
    <div v-if="!this.dayQualityGiven">
      <h3>How was your day today?</h3>
      <div class="face-buttons">
        <cc-face-button
          img-name="good"
          link-text="Good!"
          @dayresponse="flipDayResponse()"
        />
        <cc-face-button
          img-name="avg"
          link-text="Average."
          @dayresponse="flipDayResponse()"
        />
        <cc-face-button
          img-name="bad"
          link-text="Bad..."
          @dayresponse="flipDayResponse()"
        />
      </div>
    </div>

    <div v-if="this.dayQualityGiven && !this.feedbackGiven">
      <cc-day-response v-bind="{flipFeedback}"/>
    </div>

    <div v-if="this.feedbackGiven">
      <h3>Thank you!</h3>
      <p>Be sure to come back tomorrow so I know how you are doing!</p>
    </div>

  </div>
</template>

<script>
import CcFaceButton from '@/components/CcFaceButton'
import CcDayResponse from '@/components/CcDayResponse'

export default {
  name: "MyCat",
  components: {
    CcFaceButton,
    CcDayResponse
  },
  methods: {
    flipDayResponse () {
      this.dayQualityGiven = !this.dayQualityGiven
    },
    flipFeedback () {
      this.feedbackGiven = !this.feedbackGiven
      console.log("feedback flipped")
    }
  },
  data () {
    return {
      dayQualityGiven: false,
      feedbackGiven: false
    }
  }
}
</script>

<style>

</style>
