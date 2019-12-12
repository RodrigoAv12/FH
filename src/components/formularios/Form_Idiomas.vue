<!-- Vue Component -->
<template>
  <v-container id="idioma">
    <!------------------------------------->
    <v-row>
      <v-col md="9">
        <v-row>
          <v-col class="d-flex" cols="12" md="12">
            <v-select
              :items="idiomas"
              label="Idioma Principal"
              v-model="idioma_principal"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          
          <v-col md="12" cols="12" justify-self="center" align-self="center">
            <v-row justify="center">
              <v-col class="d-flex" cols="12" md="6">
<<<<<<< Updated upstream
                <v-select
                  :items="idiomas"
                  label="Idioma"
                  v-model="idioma_1"
                ></v-select>
=======
<<<<<<< Updated upstream
                <v-select :items="idiomas" label="Idioma" v-model="idioma_1"></v-select>
=======
                <v-select :items="idiomas" label="Idioma Adicional"></v-select>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
              </v-col>
              <v-col class="d-flex" cols="12" md="6">
                <v-select
                  :items="nivel"
                  label="Nivel"
                  v-model="idioma_nivel_1"
                ></v-select>
              </v-col>
              <v-col v-if="c > 1" class="d-flex" cols="12" md="6">
                <v-select
                  :items="idiomas"
                  label="Idioma"
                  v-model="idioma_2"
                ></v-select>
              </v-col>
              <v-col v-if="c > 1" class="d-flex" cols="12" md="6">
                <v-select
                  :items="nivel"
                  label="Nivel"
                  v-model="idioma_nivel_2"
                ></v-select>
              </v-col>
              <v-col v-if="c > 2" class="d-flex" cols="12" md="6">
                <v-select
                  :items="idiomas"
                  label="Idioma"
                  v-model="idioma_3"
                ></v-select>
              </v-col>
              <v-col v-if="c > 2" class="d-flex" cols="12" md="6">
                <v-select
                  :items="nivel"
                  label="Nivel"
                  v-model="idioma_nivel_3"
                ></v-select>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" md="12" justify-self="center">
                <v-btn
                  v-show="c < 3"
                  class="ma-2"
                  color="teal"
                  dark
                  @click="c++"
                >
                  <v-icon dark left>fas fa-plus</v-icon>Agregar
                </v-btn>
                <v-btn
                  v-show="c > 1"
                  class="ma-2"
                  color="pink darken-1"
                  dark
                  @click="c--"
                >
                  <v-icon dark left>fas fa-minus</v-icon>Eliminar
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!------------------------------------->
      <v-col
        md="3"
        cols="12"
        justify-self="center"
        align-self="center"
        class="mb-12"
      >
        <v-row justify="center" align="center">
          <p style="font-family: 'Roboto Mono', monospace;">
            A1: Nivel Principiante.
            <br />A2: Nivel elemental. <br />B1: Nivel intermedio. <br />B2:
            Nivel intermedio alto. <br />C1: Nivel avanzado. <br />C2: Experto.
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        dark
        @click="agregarIdiomas(), siguiente(true)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    el: "#idioma",
    c: 1,
    nivel: ["A1", "A2", "B1", "B2", "C1", "C2"],
    idiomas: ["Español", "Inglés", "Alemán", "Frances"],
    idioma_principal: "",
    idiomas_secundarios: ["idioma_1", "idioma_1", "idioma_1"],
    niveles: ["idioma_nivel_1", "idioma_nivel_2", "idioma_nivel_3"],
    idioma_1: "",
    idioma_2: "null",
    idioma_3: "null",
    idioma_nivel_1: "",
    idioma_nivel_2: "null",
    idioma_nivel_3: "null"
  }),
  methods: {
    agregarIdiomas() {
      var idiomas = {
        idioma_principal: this.idioma_principal,
        idioma_1: this.idioma_1,
        idioma_nivel_1: this.idioma_nivel_1,
        idioma_2: this.idioma_2,
        idioma_nivel_2: this.idioma_nivel_2,
        idioma_3: this.idioma_3,
        idioma_nivel_3: this.idioma_nivel_3
      };
      this.$store.dispatch("agregarIdiomas", idiomas);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>