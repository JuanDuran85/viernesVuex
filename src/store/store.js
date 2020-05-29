import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mensaje: 'Mensaje desde el store con Vuex, Vue Router',
    nombre: 'Vue',
    apellido: 'JS',
    variable: []
  },
  getters: {
    llamadoMensaje(state){
      console.log(state);
      return state.mensaje
    },
    completo(state){
      return `${state.nombre} ${state.apellido}`;
    }
  },
  mutations: {
    agregarVariable(state,varReci){
      state.variable.push(varReci);
    },
    borrando(state, index){
      state.variable.splice(index,1);
    }
  },
  actions: {
    agregarVar(context,var1Reci){
      console.log(context);
      console.log(var1Reci);
      context.commit('agregarVariable',var1Reci);
    }
  },
})
