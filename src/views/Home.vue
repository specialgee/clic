<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="button-wrapper">
      <button id="plus-button" @click="increment">
        <p id="count-text">{{ count }}</p>
      </button>
      <button id="minus-button" class="tl" @click="reset">RESET</button>
      <button id="reset-button" class="tr" @click="decrement">BACK</button>
      <div class="corner-bloc bl"></div>
      <div class="corner-bloc br"></div>
    </div>
  </div>
</template>

<style scoped>
.tl {
  top: 0;
  left: 0;
}

.tr {
  top: 0;
  right: 0;
}

.bl {
  position: absolute;
  bottom: 0;
  left: 0;
}

.br {
  position: absolute;
  bottom: 0;
  right: 0;
}

.home {
  position: relative;
  height: 100vh;
}

#button-wrapper {
  display: block;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}

button {
  display: inline-block;
  background-color: #ddd;
  border: none;
  color: #333;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  position: absolute;
}

button:focus {
  outline:0;
}

#plus-button {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#count-text {
  margin: 0;
  font-size: 42px;
}

.corner-bloc {
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border: none;
}

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    reset () {
      store.commit('reset')
    }
  }
}
</script>
