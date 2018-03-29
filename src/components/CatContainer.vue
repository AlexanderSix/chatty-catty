<template>
  <div class="bubble">
    <!-- This is the main page of the application shown in the mockups -->
    <dialogue-container
      @addintro="addIntro()"
      :header="header"
      :text="message"
      :type="currentCat.type"
      :currentIntroState="currentIntroState"
    />
    <cat-selector @catselected="onCatClicked"
      :currentCat="currentCat"
      :currentIntroState="currentIntroState"
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
  onCatSelectorClicked () {
    console.log("cat selector clicked")
  },

  methods: {
    onCatClicked(newCat){
      this.currentCat = newCat;
      console.log("Cat Container fired!");
      if(this.currentCat.id == 0){
        this.header = "Add a friend";
      } else if(this.currentCat.id == 1){
        this.header = "I am your cat";
      } else if(this.currentCat.id == 2){
        this.header = "I am your friends cat!"
      }

    },

    addIntro () {
      this.currentIntroState = 'addIntro'
    }
  },

  data () {
    return {
      // TODO: Use props to pass the header and text down to dialogue-container
      header: "Hello",
      message: "How are you?",
      currentCat: {},
      currentIntroState: ""
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
	background: #d5d6d8;
	border-radius: .4em;
}

.bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-top-color: #d5d6d8;
	border-bottom: 0;
	border-left: 0;
	margin-left: -10px;
	margin-bottom: -20px;
}
</style>
