<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: TurretRoadLight;
  src: url(assets/font/TurretRoad-Light.ttf);
}

@font-face {
  font-family: CuteFont;
  src: url(assets/font/CuteFont-Regular.ttf);
}

* {
    font-family: "CuteFont", monospace, sans-serif;
}

html, body {
  background: #333;
  margin: 0;
}

#app {
  font-family: monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
