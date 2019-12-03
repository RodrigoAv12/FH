<template>
  <v-container class="white">
    <v-row align="center">
      <v-col>
        <form>
          <v-container>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  v-model="pais"
                  :items="paises"
                  label="País"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  v-model="estado"
                  :items="estados"
                  label="Estado"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  v-model="ciudad"
                  :items="cps"
                  label="Ciudad"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  v-model="cp"
                  :items="cps"
                  label="Código Postal"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark="" @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn dark @click="agregarUbicacion(), siguiente(true)" style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      estados: ["Querétaro", "Puebla", "Nuevo León", "Guerrero"],
      paises: ["México", "País 2", "USA", "Perú"],
      ciudades: ["Ciudad 1"],
      cps: ["12345"],
      pais: "",
      estado: "",
      ciudad: "",
      cp: ""
    };
  },

  methods: {
    agregarUbicacion() {
      var ubicacion = {
        pais: this.pais,
        estado: this.estado,
        ciudad: this.ciudad,
        cp: this.cp
      };
      this.$store.dispatch("agregarUbicacion", ubicacion);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    },
    
  }
};
</script>
