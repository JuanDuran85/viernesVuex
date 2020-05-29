<template>
  <div class="about">
    <h1>Ingresar Variable</h1>
    <input type="text" v-model="variable1">
    <button @click="agregarVar">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      variable1: ''
    }
  },
  methods: { 
    agregarVar(){
      if (this.variable1) {
        this.$store.dispatch('agregarVar',this.variable1);
        this.variable1 = '';
      } else {
        alert("Ingresa datos")
      }
    }
  }
}
</script>