<template>
  <div class="background">
  <div class="bubble" :style="styleObject">
    <!-- This is the main page of the application shown in the mockups -->
    <dialogue-container
      class="inBubble"
      @addintro="addIntro()"
      @friendintro="friendIntro()"
      @endintro="endIntro()"
      :header="header"
      :text="message"
      :type="currentCat.type"
      :current-intro-state="currentIntroState"
    />
  </div>
    <cat-selector
      @catselected="onCatClicked"
      :current-cat="currentCat"
      :current-intro-state="currentIntroState"
    />

</div>
</template>

<script>
import CatSelector from '@/components/CatSelector'
import DialogueContainer from '@/components/DialogueContainer'

export default {
  name: 'CatContainer',

  mounted () {
    this.currentIntroState = 'intro'
    this.currentCat = {type: 'intro'}
  },

  components: {
    CatSelector,
    DialogueContainer
  },

  methods: {
    /**
    * Listener for the "catselected" event that chooses which cat was selected based on event payload
    *
    * @precondition The "catselected" event was fired from a Cat component
    * @postcondition The specific cat is selected and the speech bubble is styled to point
    *                 to that specific cat
    */
    onCatClicked (newCat) {
      this.currentCat = newCat
      console.log("Cat Container fired!")
      if (this.currentCat.id === 0) {
        this.header = "Add a friend"
      } else if (this.currentCat.id === 1) {
        this.header = "I am your cat"
      } else if (this.currentCat.id === 2) {
        this.header = "I am your friends cat!"
      }
      this.styleObject["--speakfrom"] = -130 + (115 * this.currentCat.id) + 'px';
      console.log(this.styleObject);
    },

    /**
    * Listens for the addintro event and changes the currentIntroState
    *
    * @precondition The addintro event was fired
    * @postcondition The currentIntroState is changed to "add"
    */
    addIntro () {
      this.currentIntroState = 'add'
    },

    /**
    * Listens for the friendintro event and changes the currentIntroState
    *
    * @precondition The friendintro event was fired
    * @postcondition The currentIntroState is changed to "friend"
    */
    friendIntro () {
      this.currentIntroState = 'friend'
    },

    /**
    * Listens for the endintro event and changes the currentIntroState
    *
    * @precondition The endintro event was fired
    * @postcondition The currentIntroState is changed to "done"
    */
    endIntro () {
      this.currentIntroState = 'done'
    }
  },

  data () {
    return {
      // TODO: Use props to pass the header and text down to dialogue-container
      header: "Hello",
      message: "How are you?",
      currentCat: {},
      currentIntroState: "",
      styleObject: {
        "--speakfrom": "-20px"
      }
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
.bubble {
  position: relative;
  background: #fff;
  border-radius: .4em;
  height: 600px;
  --speakfrom: -10px;
}

.bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: #fff;
  margin-left: var(--speakfrom);
  border-bottom: 0;
  margin-bottom: -20px;
}
.inBubble{
  padding:50px;
}
</style>
