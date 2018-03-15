<template>
  <div>
    <!-- This is the main page of the application shown in the mockups -->
    <h3>How was your day today?</h3>

    <div class="face-buttons">
      <cc-face-button
        img-name="../assets/good.png"
        link-text="Good!"
        link-destination="good-day"
      />
      <cc-face-button
        img-name="../assets/avg.png"
        link-text="Average."
        link-destination="average-day"
      />
      <cc-face-button
        img-name="../assets/bad.png"
        link-text="Bad..."
        link-destination="bad-day"
      />
    </div>

    <img src="../assets/cat.png" alt="cat" class="chatty-cat">
    <span class="hill"></span>

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
<style>
h1, h2 {
  font-weight: normal;
}
.chatty-cat {
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50%;
  z-index: 1;
}
.hill{
  height: 2000px;
  width: 2000px;
  background-color: #55efc4;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  top: 500px;
  left: -800px;
  z-index: -1;
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
