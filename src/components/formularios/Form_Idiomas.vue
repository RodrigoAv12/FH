<!-- Vue Component -->
<template>
  <v-container id="idioma">
    <!------------------------------------->
    <v-row>
      <v-col md="9">
        <v-row>
          <v-col class="d-flex" cols="12" md="12">
            <v-select :items="idiomas" label="Idioma Principal"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" cols="12" justify-self="center" align-self="center">
            <v-row v-for="n in c" :key="n">
              <v-col class="d-flex" cols="12" md="6">
                <v-select :items="idiomas" label="Idioma"></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" md="6">
                <v-select :items="nivel" label="Nivel"></v-select>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" md="12" justify-self="center">
                <v-btn class="ma-2" color="teal" dark @click="c++">
                  <v-icon dark left>fas fa-plus</v-icon>Agregar
                </v-btn>
                <v-btn v-show="c >= 2" class="ma-2" color="pink darken-1" dark @click="c--">
                  <v-icon dark left>fas fa-minus</v-icon>Eliminar
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!------------------------------------->
      <v-col md="3" cols="12" justify-self="center" align-self="center" class="mb-12">
        <v-row justify="center" align="center">
          <p style="font-family: 'Roboto Mono', monospace;">
            A1: Nivel Principiante.
            <br />A2: Nivel elemental.
            <br />B1: Nivel intermedio.
            <br />B2: Nivel intermedio alto.
            <br />C1: Nivel avanzado.
            <br />C2: Bilingüe.
          </p>
        </v-row>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data: () => ({
    el: "#idioma",
    c: 1,
    nivel: ["A1", "A2", "B1", "B2", "C1", "C2"],
    idiomas: ["Español", "Inglés", "Alemán"]
  })
};
</script>