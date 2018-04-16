<template>
  <div>
    <p class="rFriend" @click="onRemoveFriend">Remove Friend</p>
    <h3>{{ header }}</h3>
    <chart
      :good-days="goodDays"
      :avg-days="avgDays"
      :bad-days="badDays"
    />
    <p>{{ interpretedResult() }}</p>
  </div>
</template>

<script>
import Chart from '@/components/Chart.js'

export default {
  name: "FriendCat",
  components: {
    Chart
  },
  data () {
    return {
      header: "How's Your Friend?", // TODO: Make sure there is a name associated in the DB (when we build this for real)
      goodDays: 2,
      avgDays: 4,
      badDays: 1,
      daysObj: {}
    }
  },
  methods: {
    /**
     * Interprets the result to determine whether Luke had a good, average, or bad week
     * (this will probably be added into the back-end to reduce front-end load)
     *
     * @precondition N/A
     * @postcondition A message is returned depending on whether it has been a good,
     *                average, or bad week
     */
    interpretedResult () {
      if (this.goodDays > this.avgDays && this.goodDays > this.badDays) {
        return "Luke has had mostly good days this week!"
      } else if (this.badDays > this.goodDays && this.badDays > this.avgDays) {
        return "Luke has had mostly bad days this week--maybe you should check in on him."
      } else {
        return "Luke has had a pretty average week!"
      }
    },

    onRemoveFriend (event){
      this.$parent.$emit('removeFriend');
    }
  }
}
</script>

<style>

.rFriend {
  position: fixed;
top: 50px;
left: 250px;
color: red;
}

</style>
