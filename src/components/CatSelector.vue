<template>
  <div>
    <cat type="add"/>
    <cat type="myCat"/>
    <cat type="friendCat"/>
  </div>
</template>

<script>
import Cat from '@/components/Cat'

export default {
  name: "CatSelector",
  components: {
    Cat
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
