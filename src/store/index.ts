import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    CV:{
      Nombre:'',
      Apellido_Paterno:'',
      Apellido_Materno:''
    },
      

  },
  mutations: {
    agregarDatosPersonales(state, datos_personales){
      state.CV.Nombre = datos_personales.nombre
      state.CV.Apellido_Paterno = datos_personales.apellido_paterno
      state.CV.Apellido_Materno = datos_personales.apellido_materno
      console.log(state.CV.Nombre + ' Nombre');
      
    }
  },
  actions: {
    agregarDatosPersonales(context, datos_personales){
      context.commit('agregarDatosPersonales', datos_personales)
    }
  },
  getters: {
    
    RegistrarCV: state => {
      return state.CV
    }
  },
  modules: {}
});
