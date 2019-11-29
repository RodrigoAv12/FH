<template>
  <v-container class="white">
    <v-row align="center">
      <v-col>
        <form>
          <v-container>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select v-model="pais" :items="paises" label="País"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select v-model="estado" :items="estados" label="Estado"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select v-model="ciudad" :items="cps" label="Ciudad"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select v-model="cp" :items="cps" label="Código Postal"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select v-model="colonia" :items="cps" label="Colonia"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field label="Calle" v-model="calle" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { bus } from "@/main";
export default {
  data() {
    return {
      estados: ["Querétaro", "Puebla", "Nuevo León", "Guerrero"],
      paises: ["México", "País 2", "USA", "Perú"],
      pais: "",
      estado: "",
      ciudad: "",
      cp: "",
      colonia: "",
      calle: ""
    };
  },

  methods: {
    agregarUbicacion: function() {
      bus.$emit('siguiente',true)
    },
    regresar(){
      bus.$emit('regresar',false)
    }
  }
};
</script>

