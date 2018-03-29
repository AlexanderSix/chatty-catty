<template>
  <div>
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
  </div>
</template>

<script>
import CcFaceButton from '@/components/CcFaceButton'
export default {
  name:"MyCat",
  components: {
    CcFaceButton
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
