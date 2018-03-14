<template>
  <div>
    <!-- This is the main page of the application shown in the mockups -->
    <h3>How was your day today?</h3>

    <div class="face-buttons">
      <cc-face-button
        img-name="good.png"
        link-text="Good!"
        link-destination="good-day"
      />
      <cc-face-button
        img-name="avg.png"
        link-text="Average."
        link-destination="average-day"
      />
      <cc-face-button
        img-name="bad.png"
        link-text="Bad..."
        link-destination="bad-day"
      />
    </div>

    <div class="chatty-cat">
      CAT GOES HERE
    </div>

  </div>
</template>

<script>
import CcFaceButton from '@/components/CcFaceButton'

export default {
  name: 'Dashboard',
  components: {
    CcFaceButton
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
