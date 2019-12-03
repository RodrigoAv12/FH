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
          <v-row justify="center">
            <v-col md="12" cols="12" style="margin-bottom:-40px">
              <p class="text-secondary">Fecha de nacimiento</p>
            </v-col>
            <v-col cols="12" md="4">
              <v-select  :items="anios" label="Año" v-model="anio"></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select :items="meses" label="Mes" v-model="mes"></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select :items="dias" label="Día" v-model="dia"></v-select>
            </v-col>
          </v-row>
          <v-text-field v-model="tel" label="Número Teléfono"></v-text-field>
          <v-text-field v-model="curp" label="Curp"></v-text-field>
        </v-form>
      </v-col>
      <v-col md="4" cols="12" style="height:300px" class="pt-10">
        <v-row>
          <v-col md="12">
            <v-row align="center" justify="center">
              <v-img
                src="https://picsum.photos/id/11/500/300"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                max-height="300"
              ></v-img>
            </v-row>
          </v-col>
          <v-col align-self="center" justify-self="center">
            <v-row justify="center">
              <v-btn light>
                Agregar
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="left" class="pb-3 pt-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
      reprehenderit corrupti quis voluptatibus id itaque accusamus quos nihil
      recusandae accusantium cum impedit, ratione consectetur expedita!
      Reprehenderit sit animi vero quasi.
    </v-row>
    <v-row>
      <v-divider style="width:100%" class="grey darken-3"> </v-divider>
    </v-row>
    <v-row>
      <v-btn
        dark
        @click="agregarDatosPersonales(), siguiente(true)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      correo: "",
      tel: "",
      anios:[],
      meses:[],
      dias:[],
      anio:"",
      mes:"",
      dia:"",
      fecha_anio: new Date().getFullYear
    };
  },
  created(){
    this.crearFecha()
  },

  methods: {
    crearFecha(){

      for (let i = 1950; i <= this.fecha_anio; i++) {
        this.anios.push(i.toString())
      }
      alert("Fecha")
    },
    agregarDatosPersonales() {
      var datos_personales = {
        nombre: this.nombre,
        apellido_paterno: this.apellido_paterno,
        apellido_materno: this.apellido_materno,
        correo: this.correo,
        tel: this.tel,
        anio: this.anio,
        mes: this.mes,
        dia: this.dia
      };
      this.$store.dispatch("agregarDatosPersonales", datos_personales);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
