<template>
  <v-container class="white">
    <v-row align="center">
      <v-col>
        <form>
          <v-container>
            <v-row align="center">
              <v-col class="d-flex" cols="12" md="8">
                <v-text-field v-model="cp" label="Còdigo Postal"></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" md="4">
                <v-btn>Validar mi código postal</v-btn>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="d-flex" cols="12" md="6">
                <h3>Estado</h3>
              </v-col>
              <v-col class="d-flex" cols="12" md="6">
                <h3>Municipio</h3>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px">Regresar</v-btn>
      <v-btn dark @click="agregarUbicacion(), siguiente(true)" style="margin-right:10px">Siguiente</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      estados: ["Querétaro", "Puebla", "Nuevo León", "Guerrero"],

      ciudades: ["Ciudad 1"],
      cps: ["12345"],
      estado: "",
      municipio: "",
      cp: ""
    };
  },

  methods: {
    agregarUbicacion() {
      var ubicacion = {
        estado: this.estado,
        municipio: this.municipio,
        cp: this.cp
      };
      this.$store.dispatch("agregarUbicacion", ubicacion);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
