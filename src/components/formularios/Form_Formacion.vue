<template>
  <!-- v-show="checkbox.toString() == 3 && checkbox_uni == 2" -->
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="12">
        <form>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="titulo_estudios"
                label="Título de Estudios Realizados"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="cedula"
                label="Cédula Profesional"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="centro_estudios"
                label="Centro de Estudios"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="estudio_fecha"
                    label="Fecha de titulación"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="estudio_fecha"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="estudio_ciudad"
                label="Ciudad/Localidad"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="estudio_estado"
                label="Estado/Provincia"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="estudio_pais"
                label="País"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        dark
        @click="agregarFormacion(), siguiente(true)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menu2: false,
      titulo_estudios: "",
      centro_estudios: "",
      estudio_ciudad: "",
      estudio_estado: "",
      estudio_pais: "",
      estudio_fecha: "",
      el: "#example",
      checkbox: 3,
      checkbox_uni: 2
    };
  },
  methods: {
    agregarFormacion() {
      var formacion = {
        titulo_estudios: this.titulo_estudios,
        centro_estudios: this.centro_estudios,
        estudio_ciudad: this.estudio_ciudad,
        estudio_estado: this.estudio_estado,
        estudio_pais: this.estudio_pais,
        estudio_fecha: this.estudio_fecha
      };
      this.$store.dispatch("agregarFormacion", formacion);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
