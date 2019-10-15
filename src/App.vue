<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">
        <button class="btn btn-primary">Home</button>
      </router-link>
      <router-link to="/news">
        <button class="btn btn-success">News</button>
      </router-link>
      <router-link to="/about">
        <button class="btn btn-danger">About</button>
      </router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
