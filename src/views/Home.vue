<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p id="count-text">{{ count }}</p>
    <p>
      <button id="plus-button" @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

button {
  display: inline-block;
  background-color: #ddd;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}

button:focus {
  outline:0;
}

#plus-button {
  border-radius: 50vh;
  width: 50vh;
  height: 50vh;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#count-text {
  margin: 0;
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
    }
  }
}
</script>
