<template>
  <v-container>
    <v-row justify="center">
      <v-col md="12" id="example">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  class="grey darken-2"
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4 class="text-white">Sector de Experiencia</h4>
                  </v-row>
                </v-col>
                <v-col class="d-flex" cols="12" md="4" v-for="n in c" :key="n">
                  <v-select
                    v-model="sector_1"
                    :items="cursos"
                    :label="`Sector ${n}`"
                  ></v-select>
                </v-col>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c++">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn
              v-show="c >= 2"
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
      <v-col md="12" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  class="grey darken-2"
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4 class="text-white">
                      Àreas de experiencia de Experiencia | Conocimiento
                    </h4>
                  </v-row>
                </v-col>
                <v-col class="d-flex" cols="12" md="4" v-for="n in c2" :key="n">
                  <v-select
                    v-model="area_1"
                    :items="cursos"
                    :label="`Àrea ${n}`"
                  ></v-select>
                </v-col>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c2++">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn
              v-show="c2 >= 2"
              class="ma-2"
              color="pink darken-1"
              dark
              @click="c2--"
            >
              <v-icon dark left>fas fa-minus</v-icon>Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        dark
        @click="agregarCompetencias(), siguiente(true)"
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
      area_1: "",
      sector_1: "",
      el: "#example",
      el2: "#example2",
      c: 1,
      c2: 1,
      cursos: [
        "Curso",
        "Diplomado",
        "Seminario",
        "Certificación",
        "Clínica",
        "Congreso",
        "Conferencia"
      ]
    };
  },
  methods: {
    agregarCompetencias() {
      var competencias = {
        sector_1: this.sector_1,
        area_1: this.area_1
      };
      this.$store.dispatch("agregarCompetencias", competencias);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
