<template>
  <v-container style="height: 1000px">
    <v-stepper v-model="e1" alt-labels="true">
      <v-stepper-header>
        <template v-for="(paso, n) in pasos">
          <v-stepper-step :key="`${n}-step`" :complete="e1 > n + 1" :step="paso.id_paso">
            <small>{{ paso.titulo }}</small>
          </v-stepper-step>
          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content v-for="(paso, n) in pasos" :key="`${n}-content`" :step="paso.id_paso">
          <v-card class="mb-12" color="white" height="auto">
            <h5 class="text-center" style="font-family: 'Montserrat', sans-serif;">{{ paso.titulo }}</h5>

            <!--------Formulario o Contenido-------->
              <keep-alive>
                <component :is="paso.name" :key="paso.id_paso" :users="unregisteredUsers"></component>
                
              </keep-alive>
            <!--------Final del Formulario o Contenido-------->
          </v-card>
          <v-btn
            :disabled="regresarDisabled"
            color="red"
            class="white--text"
            @click="backStep(paso.id_paso)"
            style="margin-right:10px"
          >Regresar</v-btn>
          <v-btn
            :disabled="aceptarDisabled"
            color="primary"
            @click="nextStep(paso.id_paso)"
            style="margin-right:10px"
          >Siguiente</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import Form_DatosPersonales from "@/components/formularios/Form_DatosPersonales.vue";
import Form_Ubicacion from "@/components/formularios/Form_Ubicacion.vue";
import Form_RedesSociales from "@/components/formularios/Form_RedesSociales.vue";
import Form_Formacion from "@/components/formularios/Form_Formacion.vue";
import Form_PerfilProfesional from "@/components/formularios/Form_PerfilProfesional.vue";
import Form_Idiomas from "@/components/formularios/Form_Idiomas.vue";
import Form_HistorialLaboral from "@/components/formularios/Form_HistorialLaboral.vue";
import Form_Cursos from "@/components/formularios/Form_Cursos.vue";
import Competencias from "@/components/formularios/Form_Competencias.vue";
import {bus} from '@/main';

export default {
  components: {
    Form_DatosPersonales,
    Form_Ubicacion,
    Form_RedesSociales,
    Form_Formacion,
    Form_Idiomas,
    Form_PerfilProfesional,
    Form_HistorialLaboral,
    Form_Cursos,
    Competencias
  },
  props: {
    pais:{type: String},
    estado:{type: String} 
  },
  created (){
    bus.$on('agregarUbicacion', (data) => {
      this.pais = data
      
    })
  },
  data() {
    return {
      
      e1: 0,
      steps: 9,
      aceptarDisabled: false,
      regresarDisabled: true,
      pasos: [
        {
          id_paso: 1,
          titulo: "Datos Personales",
          name: "Form_DatosPersonales"
        },
        {
          id_paso: 2,
          titulo: "Datos de Ubicación",
          name: "Form_Ubicacion"
        },
        {
          id_paso: 3,
          titulo: "Redes Sociales",
          name: "Form_RedesSociales"
        },
        {
          id_paso: 4,
          titulo: "Perfil Profesional",
          name: "Form_PerfilProfesional"
        },
        {
          id_paso: 5,
          titulo: "Idiomas",
          name: "Form_Idiomas"
        },
        {
          id_paso: 6,
          titulo: "Historia Laboral",
          name: "Form_HistorialLaboral"
        },
        {
          id_paso: 7,
          titulo: "Formación",
          name: "Form_Formacion"
        },
        {
          id_paso: 8,
          titulo: "Cursos",
          name: "Form_Cursos"
        },
        {
          id_paso: 9,
          titulo: "Competencias",
          name: "Competencias"
        },
        {
          id_paso: 10,
          titulo: "Plantilla"
        }
      ]
    };
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },

  methods: {
    nextStep(n) {
      switch(n){
        case 1: alert(n)
        break
        case 2: alert(n)
        break
        case 3: alert(n)
        break
        case 4: alert(n)
        break
        case 5: alert(n)
        break
        case 6: alert(n)
        break
        case 7: alert(n)
        break
        case 8: alert(n)
        break
        case 9: alert(n)
        break
        case 10: alert(n)
        break
        default:
      }
      if (this.regresarDisabled === true) {
        this.regresarDisabled = false;

      }
      if (n === this.steps) {
        this.aceptarDisabled = true;
        this.e1 = n + 1;
      } else {
        
        this.e1 = n + 1;
        this.aceptarDisabled = false;
      }
    },
    backStep(n) {
      if (this.aceptarDisabled === true) {
        this.aceptarDisabled = false;
      }
      if (n <= 2) {
        this.regresarDisabled = true;
        this.e1 = n - 1;
      } else {
        this.regresarDisabled = false;
        this.e1 = n - 1;
      }
    },
    agregarUbicacion(){
      alert(this.pais+ " " + this.estado)
    }
    
  },
  
};
</script>
