<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="8">
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="nombre" label="Nombre"> </v-text-field>
          <v-text-field
            v-model="apellido_paterno"
            label="Apellido Paterno"
          ></v-text-field>
          <v-text-field
            v-model="apellido_materno"
            label="Apellido Materno"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col md="4" cols="12" class="black"> </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="red"
        class="white--text"
        @click="RegistrarCV()"
        style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        color="primary"
        @click="agregarDatosPersonales()"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from "jspdf";
export default {
  data() {
    return {
      nombre:'',
      apellido_paterno: '',
      apellido_materno: ''
    };
  },

  methods: {
    agregarDatosPersonales() {
      var datos_personales = {
        nombre: this.nombre,
        apellido_paterno: this.apellido_paterno,
        apellido_materno: this.apellido_materno
      };
      this.$store.dispatch("agregarDatosPersonales",datos_personales);
    },
    regresar() {
      bus.$emit("regresar", next);
    },
    RegistrarCV() {
      
          
      var vm = this
      var columns = [
      ];
      var doc = new jsPDF('p','pt');
      doc.text(this.$store.getters.RegistrarCV.Nombre,200,70);
      doc.text(this.$store.getters.RegistrarCV.Apellido_Paterno,200,87);
      doc.text('Titulación',240,114);
      //tel
      doc.setFontSize(9);
      doc.text('(442)-123-4567',478, 58);
      //web
      doc.setFontSize(9);
      doc.text('nombre@dominio.com',452,75);
      //pagina web
      doc.setFontSize(9);
      doc.text('www.paginaweb.com',457, 93);
      //Direccion
      doc.setFontSize(9);
      doc.text('Direccion, Ciudad, Pais',446,110);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30,130,550,130);
      //Experiencia
      doc.setFontSize(20);
      doc.text('Experiencia',50,173);
      doc.setFontSize(10);
      doc.text('Nombre Empresa 1',69,208);
      doc.text('ciudad', 123, 222);
      doc.text('Cargo Desempeñado / MAR 2018 - JUN 2019', 200,208);
      doc.text('Describe aquí las funciones realizadas en la empresa durante el tiempo',200,225);
      doc.text('que has estado trabajando en ella.', 200,235);
      doc.setFontSize(10);
      doc.text('Nombre Empresa 2',69,260);
      doc.text('ciudad', 123, 275);
      doc.text('Cargo Desempeñado / MAR 2018 - JUN 2019', 200,260);
      doc.text('Describe aquí las funciones realizadas en la empresa durante el tiempo',200,275);
      doc.text('que has estado trabajando en ella.', 200,290);
      doc.setFontSize(10);
      doc.text('Nombre Empresa 3',69,316);
      doc.text('ciudad', 123, 330);
      doc.text('Cargo Desempeñado / MAR 2018 - JUN 2019', 200,316);
      doc.text('Describe aquí las funciones realizadas en la empresa durante el tiempo',200,331);
      doc.text('que has estado trabajando en ella.', 200,345);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30,375,550,375);
      //Formacion
      doc.setFontSize(20);
      doc.text('Formación',50,418);
      doc.setFontSize(10);
      doc.text('Centro de Formación',66,452);
      doc.text('ciudad', 123, 468);
      doc.text('Titulación / MAR 2018 - JUN 2019', 200,452);
      doc.text('Describe aquí la formación que has recibido y el tipo de titulación',200,468);
      doc.text('que has obtenido al finalizar.', 200,480);
      doc.setFontSize(10);
      doc.text('Centro de Formación',66,507);
      doc.text('ciudad', 123, 523);
      doc.text('Titulación / MAR 2018 - JUN 2019', 200,507);
      doc.text('Describe aquí la formación que has recibido y el tipo de titulación',200,523);
      doc.text('que has obtenido al finalizar.', 200,535);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30,570,270,570);
      //Idioma
      doc.setFontSize(20);
      doc.text('Idiomas',50,618);
      doc.setFontSize(10);
      doc.text('Nivel',170,630);
      doc.text('- Idioma 1',74,665);
      doc.text('____Nativo____',145, 665);
      doc.text('- Idioma 2',74,688);
      doc.text('_____________',145, 688);
      doc.text('- Idioma 2',74,711);
      doc.text('_____________',145, 711);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(319,570,570,570);
      doc.setFontSize(20);
      doc.text('Programación',340,615);
      doc.setFontSize(10)
      doc.text('Nivel',490, 630);
      doc.setFontSize(10);
      doc.text('- C++',410,665);
      doc.text('__Avanzado__',470, 665);
      doc.text('- PHP',410,691);
      doc.text('____________',470, 690);
      doc.text('- JAVA',410,716);
      doc.text('____________',470, 714);

      doc.save('todos.pdf');
    }
  },
  
};
</script>
