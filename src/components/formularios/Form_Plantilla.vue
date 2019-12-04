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
    return {};
  },
  created(){}
    
  ,
  methods: {
    RegistrarCV() {
      var vm = this;
      var columns = [];
      var doc = new jsPDF("p", "pt");
      doc.text(this.$store.getters.RegistrarCV.Nombre, 200, 70);
      doc.text(this.$store.getters.RegistrarCV.Apellido_Paterno, 200, 87);
      doc.text(this.$store.getters.RegistrarCV.Apellido_Materno, 200, 103);
      doc.text("Titulación", 240, 114);
      //tel
      doc.setFontSize(9);
      doc.text(this.$store.getters.RegistrarCV.Tel, 478, 58);
      //correo
      doc.setFontSize(9);
      doc.text(this.$store.getters.RegistrarCV.Correo, 452, 75);
      //pagina web
      doc.setFontSize(9);
      doc.text("www.paginaweb.com", 457, 93);
      //Direccion
      doc.setFontSize(9);
      doc.text(
        this.$store.getters.RegistrarCV.Municipio +
          ", " +
          this.$store.getters.RegistrarCV.Estado +
          ", " +
          this.$store.getters.RegistrarCV.Pais,
        446,
        110
      );
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30, 130, 550, 130);
      //Experiencia
      doc.setFontSize(20);
      doc.text("Experiencia", 50, 173);
      doc.setFontSize(10);
      doc.text(this.$store.getters.RegistrarCV.Exp_Empresa, 69, 208);
      doc.text("ciudad", 123, 222);
      doc.text(
        this.$store.getters.RegistrarCV.Exp_Puesto +
          "/" +
          this.$store.getters.RegistrarCV.Exp_Fecha_Inicio +
          "-" +
          this.$store.getters.RegistrarCV.Exp_Fecha_Salida,
        200,
        208
      );
      doc.text(this.$store.getters.RegistrarCV.Exp_Funcion, 200, 225);
      doc.text(
        "Texto grande que no se puede dividir... o sí pero no sé como.",
        200,
        235
      );
      doc.setFontSize(10);
      doc.text("Nombre Empresa 2", 69, 260);
      doc.text("ciudad", 123, 275);
      doc.text("Cargo Desempeñado / MAR 2018 - JUN 2019", 200, 260);
      doc.text(
        "Describe aquí las funciones realizadas en la empresa durante el tiempo",
        200,
        275
      );
      doc.text("que has estado trabajando en ella.", 200, 290);
      doc.setFontSize(10);
      doc.text("Nombre Empresa 3", 69, 316);
      doc.text("ciudad", 123, 330);
      doc.text("Cargo Desempeñado / MAR 2018 - JUN 2019", 200, 316);
      doc.text(
        "Describe aquí las funciones realizadas en la empresa durante el tiempo",
        200,
        331
      );
      doc.text("que has estado trabajando en ella.", 200, 345);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30, 375, 550, 375);
      //Formacion
      doc.setFontSize(20);
      doc.text("Formación", 50, 418);
      doc.setFontSize(10);
      doc.text(this.$store.getters.RegistrarCV.Centro_Estudios, 66, 452);
      doc.text("ciudad", 123, 468);
      doc.text(
        this.$store.getters.RegistrarCV.Titulo_Estudios +
          " / " +
          " MAR 2018 - JUN 2019",
        200,
        452
      );
      doc.text(
        "Describe aquí la formación que has recibido y el tipo de titulación-- Jamás pregunto eso",
        200,
        468
      );
      doc.text("que has obtenido al finalizar. --No pregunto eso", 200, 480);
      doc.setFontSize(10);
      doc.text("Centro de Formación", 66, 507);
      doc.text("ciudad", 123, 523);
      doc.text("Titulación / MAR 2018 - JUN 2019", 200, 507);
      doc.text(
        "Describe aquí la formación que has recibido y el tipo de titulación",
        200,
        523
      );
      doc.text("que has obtenido al finalizar.", 200, 535);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(30, 570, 270, 570);
      //Idioma
      doc.setFontSize(20);
      doc.text("Idiomas", 50, 618);
      doc.setFontSize(10);
      doc.text("Nivel", 170, 630);
      doc.text(
        "- Idioma Principal " +
          this.$store.getters.RegistrarCV.Idioma_Principal,
        74,
        665
      );
      doc.text("____Nativo____", 145, 665);
      doc.text(this.$store.getters.RegistrarCV.Idioma_1, 74, 688);
      doc.text(
        "Nivel " + this.$store.getters.RegistrarCV.Idioma_Nivel_1,
        145,
        688
      );
      doc.text("- Idioma 2", 74, 711);
      doc.text("_____________", 145, 711);
      //linea decorativa
      doc.setLineWidth(1);
      doc.line(319, 570, 570, 570);
      doc.setFontSize(20);
      doc.text("Programación --Ocupo la base de datos", 340, 615);
      doc.setFontSize(10);
      doc.text("Nivel", 490, 630);
      doc.setFontSize(10);
      doc.text("- C++", 410, 665);
      doc.text("__Avanzado__", 470, 665);
      doc.text("- PHP", 410, 691);
      doc.text("____________", 470, 690);
      doc.text("- JAVA", 410, 716);
      doc.text("____________", 470, 714);

      doc.save("CV.pdf");
    }
  }
};
</script>
