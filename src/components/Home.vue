<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h3>{{ description }}</h3>

    <h3 v-if="goals.length">My 2019 Goals</h3>
    <ul class="goal-list">
      <li class="tooltip" v-bind:key="index" v-bind:class="{ strike: goal.strike }" v-on:click="strikeToogle(index)" v-for="(goal,index) in goals">
        {{ goal.text }} <span class="tooltiptext">Tap to strike</span>
      </li>
    </ul>
    <button v-if="goals.length" class="tweet-btn" v-on:click="tweet(encodedTweet)">Tweet</button>

    <input ref="newGoal" v-on:keyup.enter="addGoal(newGoal)" v-model.trim="newGoal" placeholder="Add a goal">
    <button class="add-btn" v-if="newGoal" v-on:click="addGoal(newGoal)">Add</button>

    <p v-show="copiedText" class="copied"><span id="c-text" ref="copiedText">{{ copiedText }}</span> <br/> You need to save this somewhere to prove your hashes later. </p>
    <ul class="footer">
      <li>
        <a
          href="https://github.com/5hanth/Mankatha-da"
          target="_blank"
        >
          fork
        </a>
      </li>
      <li>
        <a
          href="https://github.com/5hanth/Mankatha-da/blob/master/Readme.md"
          target="_blank"
        >
          how it works?
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/5hanth/"
          target="_blank"
        >
          say hi
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Mankatha-da',
      description: 'Tweet SHA256 version of your goals and crypto prove it once you have achieved.',
      goals: [],
      newGoal: '',
      encodedTweet: '',
      copiedText: ''
    }
  },

  methods: {
    addGoal (goal) {
      let activeGoals = this.goals.filter(goal => !goal.strike)
      console.log(activeGoals)
      if (activeGoals.length >= 4) return alert(`maximum 4 goals per tweet allowed`)
      this.goals.push({text: goal, strike: false})
      this.newGoal = ''
      this.tweetGoals(this.goals)
      this.$refs.newGoal.focus()
    },
    tweetGoals (goals) {
      let selectedGoals = goals.filter(goal => !goal.strike)
      if (!selectedGoals.length) { return alert('no goals added to tweet') }
      let willBeHashed = selectedGoals.map(goal => this.sha256(goal.text))
      Promise.all(willBeHashed).then(hashes => {
        let toTweet = hashes.join('')
        console.log('concatenated hashes string', toTweet)
        if (toTweet.length > 280) {
          console.log('string greater than 280 chars. You need to tweet 4 goals per tweet to hash and prove them individually. Or you can tweet hash of concatenated hashes string but can only prove them by revealing all other goals.')
          this.sha256(toTweet).then(this.composeTweetMsg)
        } else {
          this.composeTweetMsg(toTweet)
        }
      })
    },
    composeTweetMsg (hash) {
      let msg = `${hash} #2019Goals #MankathaDa`
      let encoded = encodeURIComponent(msg)
      this.encodedTweet = encoded
    },
    tweet (encoded) {
      let intent = `https://twitter.com/intent/tweet?text=${encoded}`
      if (encoded.length <= 239) {
        intent += `&url=https://5hanth.github.io/mankatha-da`
      }
      this.copiedText = this.goals.filter(goal => !goal.strike).map(goal => goal.text).join(',')
      window.open(intent)
    },
    strikeToogle (index) {
      let activeGoals = this.goals.filter(goal => !goal.strike)
      if (activeGoals.length >= 4 && this.goals[index].strike) return alert(`maximum 4 goals per tweet allowed`)

      this.goals[index].strike = !this.goals[index].strike
    },
    async sha256 (message) {
      const msgBuffer = new TextEncoder('utf-8').encode(message)
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
      return hashHex
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

h1, h2, h3, h4 {
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

.goal-list li {
  display: grid;
  font-size: 1em;
}

.add-btn {

}

textarea, input {
  resize: none;
  width: 30vw;
  height: 1rem;
  font-size: 16px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
}

button {
  background: transparent;
  border: 1px solid grey;
  border-radius: 10px;
  color: grey;
  padding: 10px 14px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px auto;
}

.footer {
  margin: 20px auto;
}

.tweet-btn {
 margin: 20px auto;
 display: grid;
}

@media screen and (max-width: 800px) {
   textarea, input {
     width: 80vw !important;
   }
}

.strike {
  text-decoration: line-through;
}

</style>
