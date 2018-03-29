<template>
  <div id="dialogue-container">
    <intro-dialogue v-if="type == 'intro'" />
    <add-cat v-if="type == 'add'" />
    <my-cat v-if="type == 'myCat'" />
    <friend-cat v-if="type == 'friend'" />
  </div>
</template>

<script>
import IntroDialogue from '@/components/IntroDialogue'
import AddCat from '@/components/AddCat'
import MyCat from '@/components/MyCat'
import FriendCat from '@/components/FriendCat'

export default {
  name: "DialogueContainer",
  mounted () {
    if (typeof this.type == 'undefined') {
      this.type = 'intro'
    }
  },
  components: {
    IntroDialogue,
    AddCat,
    MyCat,
    FriendCat
  },
  props: {
    header: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: String,
      required: true,
      default: ""
    },
    type: {
      type: String,
      required: true,
      default: "intro" // TODO: This will probably have to change to "" when we actually wire up this app
    },
    currentIntroState: {
      type: String,
      required: true,
      default: "intro"
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
