<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <p>Variable directa: {{$store.state.mensaje}}</p>
    <p>Variable con getters: {{$store.getters.llamadoMensaje}}</p>
    <p>Variable con getters: {{completo}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    completo(){
      return this.$store.getters.completo;
    }
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
