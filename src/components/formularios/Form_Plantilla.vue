<template>
  <v-container>
    <v-row>
      <v-col md="12">
        
        <v-btn   text small color="primary"
          ><v-img
          height="100px"
          width="100px"
            src="https://picsum.photos/id/11/500/300"
            lazy-src="https://picsum.photos/id/11/10/6"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="500"
            max-height="300"
          ></v-img
        ></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="black"
        class="white--text"
        @click="RegistrarCV()"
        style="margin-right:10px"
        >Aceptar</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from "jspdf";
export default {
  data() {
    return {
      campos: [],
    };
  },
  created(){}
    
  ,
  methods: {
    RegistrarCV() {
      this.axios
        .post("/registroCV", this.cv)
        .then(result => {
          this.campos.push(result.data);
          Nombre:'',
      Apellido_Paterno:'',
      Apellido_Materno:'',
      Correo:'',
      Tel:'',
      Fecha_Nacimiento:'',
      Curp:'',
      Pais:'',
      Estado:'',
      Municipio:'',
      CP:'',
      Facebook:'',
      Linkedin:'',
      Perfil_Profesional:'',
      Idioma_Principal:'',
      Idioma_1:'',
      Idioma_Nivel_1:'',
      Idioma_2:'',
      Idioma_Nivel_2:'',
      Idioma_3:'',
      Idioma_Nivel_3:'',
      Titulo_Estudios:'',
      Centro_Estudios:'',
      Estudio_Municipio:'',
      Estudio_Estado:'',
      Estudio_Pais:'',
      Estudio_Fecha:'',
      Exp_Empresa:'',
      Exp_Puesto:'',
      Exp_Salario:'',
      Exp_Fecha_Inicio:'',
      Exp_Fecha_Salida:'',
      Exp_Tel_Contacto:'',
      Exp_Funcion:'',
      Curso_Tipo:'',
      Curso_Titulo:'',
      Curso_Fecha:'',
      Curso_Medio:'',
      Sector_1:'',
      Sector_2:'',
      Sector_3:'',
      Area_1:'',
      Area_2:'',
      Area_3:'',
          
        })
        .catch(err => {
          console.log(err.response);
        });
     
    }
  }
};
</script>
