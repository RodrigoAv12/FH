<template>
  <v-container style="height: 1000px">
    <v-stepper v-model="e1" alt-labels="true">
      <v-stepper-header>
        <template v-for="(paso, n) in pasos">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n + 1"
            :step="paso.id_paso"
            color="grey darken-4"
          >
            <small>{{ paso.titulo }}</small>
          </v-stepper-step>
          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content
          v-for="(paso, n) in pasos"
          :key="`${n}-content`"
          :step="paso.id_paso"
        >
          <v-container>
            <v-row justify="center">
              <h5
                class="text-center"
                style="font-family: 'Montserrat', sans-serif;"
              >
                {{ paso.titulo }}
              </h5>
              <!--------Contenido-------->
              <keep-alive>
                <component v-bind:is="componenteForm"></component>  
              </keep-alive>
              <!--------Contenido-------->
            </v-row>
            
          </v-container>
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
import { bus } from "@/main";

export default {
  props: {
    step: { type: Boolean }
  },
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

  created() {
    bus.$on("agregarUbicacion", data => {
      this.pais = data;
    });
  },
  data() {
    return {
      e1: 0,
      steps: 9,
      aceptarDisabled: false,
      regresarDisabled: true,
      componenteForm: 'Form_DatosPersonales',
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
    siguiente(){
      bus.$on( )
    },
   
    nextStep(n) {
      
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
    
  }
};
</script>
