<template>
  <div>
    <form @submit.prevent="submitResponse()">
      <textarea
        id="response"
        v-model="response.text"
      />
      <button
        type="Submit"
        name="Submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CcDayResponse',

  data () {
    return {
      response: {
        text: ''
      }
    }
  },

  methods: {
    submitResponse () {
      // TODO: store into a DB using a backend API
      // For now: spoof the storage of the text
      console.log('Saving: ' + this.response.text)

      this.response.text = ''

      this.$emit('responseSubmitted')
    }
  }
}
</script>

<style>

</style>
