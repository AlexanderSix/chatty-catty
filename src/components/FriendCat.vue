<template>
  <div>
    <h3>{{ header }}</h3>
    <p>Chart will go here</p>
  </div>
</template>

<script>
export default {
  name: "FriendCat",
  data () {
    return {
      header: "How's Your Friend?" // TODO: Make sure there is a name associated in the DB (when we build this for real)
    }
  }
}
</script>

<style>

</style>
