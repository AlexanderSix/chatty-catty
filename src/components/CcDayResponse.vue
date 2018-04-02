<template>
  <div>
    <h3>Tell me a little more about it:</h3>
    <form @submit.prevent="submitResponse()">
      <textarea
        id="response"
        v-model="response.text"
      />
      <button
        type="Submit"
        name="Submit"
        id="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CcDayResponse',

  props: {
    flipFeedback: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      response: {
        text: ''
      }
    }
  },

  methods: {
    /**
     * Spoofs a response submittal
     *
     * @precondition User has entered text into the field and clicked the submit button
     * @postcondition The component emits the responseSubmitted event
     */
    submitResponse () {
      // TODO: store into a DB using a backend API
      // For now: spoof the storage of the text
      console.log('Saving: ' + this.response.text)

      this.response.text = ''

      this.flipFeedback()

      this.$emit('responseSubmitted')
    }
  }
}
</script>

<style>
#response{
  border-radius: 2px;
  width: 300px;
}
#submit{
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px;
  width: 300px;
  height: 40px;
  margin-top: 10px;
}
</style>
