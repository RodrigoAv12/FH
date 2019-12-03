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
          <v-text-field
            v-model="correo"
            label="Correo Electrónico"
          ></v-text-field>
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
              <v-btn
            light
            >
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
      tel: ""
    };
  },

  methods: {
    agregarDatosPersonales() {
      var datos_personales = {
        nombre: this.nombre,
        apellido_paterno: this.apellido_paterno,
        apellido_materno: this.apellido_materno,
        correo: this.correo,
        tel: this.tel
      };
      this.$store.dispatch("agregarDatosPersonales", datos_personales);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
