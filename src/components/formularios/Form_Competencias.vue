<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col cols="12" md="12" align-self="center" justify-self="center">
                  <v-row justify="center">
                    <h4>Sector de experiencia</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
                    <v-select v-model="sector_1" :items="cursos" :label="`Sector 1`"></v-select>
                  </v-col>
                  <v-col v-if="c>=2" class="d-flex" cols="12" md="12">
                    <v-select v-model="sector_2" :items="cursos" :label="`Sector 2`"></v-select>
                  </v-col>
                  <v-col v-if="c>=3" class="d-flex" cols="12" md="12">
                    <v-select v-model="sector_3" :items="cursos" :label="`Sector 3`"></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c++" v-if="c<=2">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn v-show="c >= 2" class="ma-2" color="pink darken-1" dark @click="c--">
              <v-icon dark left>fas fa-minus</v-icon>Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <!-- áeas -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col cols="12" md="12" align-self="center" justify-self="center">
                  <v-row justify="center">
                    <h4>Áreas de experiencia | Conocimiento</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
                    <v-select v-model="area_1" :items="cursos" :label="`Área 1`"></v-select>
                  </v-col>
                  <v-col v-if="c2>=2" class="d-flex" cols="12" md="12">
                    <v-select v-model="area_2" :items="cursos" :label="`Área 2`"></v-select>
                  </v-col>
                  <v-col v-if="c2>=3" class="d-flex" cols="12" md="12">
                    <v-select v-model="area_3" :items="cursos" :label="`Área 3`"></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c2++" v-if="c2<=2">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn v-show="c2 >= 2" class="ma-2" color="pink darken-1" dark @click="c2--">
              <v-icon dark left>fas fa-minus</v-icon>Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>


      <!-- software -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col cols="12" md="12" align-self="center" justify-self="center">
                  <v-row justify="center">
                    <h4>Software</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
                    <v-select v-model="software_1" :items="cursos" :label="`Software 1`"></v-select>
                  </v-col>
                  <v-col v-if="c3>=2" class="d-flex" cols="12" md="12">
                    <v-select v-model="software_2" :items="cursos" :label="`Software 2`"></v-select>
                  </v-col>
                  <v-col v-if="c3>=3" class="d-flex" cols="12" md="12">
                    <v-select v-model="software_3" :items="cursos" :label="`Software 3`"></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c3++" v-if="c3<=2">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn v-show="c3 >= 2" class="ma-2" color="pink darken-1" dark @click="c3--">
              <v-icon dark left>fas fa-minus</v-icon>Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>


      <!-- Habilidades -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col cols="12" md="12" align-self="center" justify-self="center">
                  <v-row justify="center">
                    <h4>Habilidades</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
                    <v-select v-model="habilidad_1" :items="cursos" :label="`Habilidad 1`"></v-select>
                  </v-col>
                  <v-col v-if="c4>=2" class="d-flex" cols="12" md="12">
                    <v-select v-model="habilidad_2" :items="cursos" :label="`Habilidad 2`"></v-select>
                  </v-col>
                  <v-col v-if="c4>=3" class="d-flex" cols="12" md="12">
                    <v-select v-model="habilidad_3" :items="cursos" :label="`Habilidad 3`"></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
        <v-row>
          <v-col cols="12" md="12" justify-self="center">
            <v-btn class="ma-2" color="teal" dark @click="c4++" v-if="c4<=2">
              <v-icon dark left>fas fa-plus</v-icon>Agregar
            </v-btn>
            <v-btn v-show="c4 >= 2" class="ma-2" color="pink darken-1" dark @click="c4--">
              <v-icon dark left>fas fa-minus</v-icon>Eliminar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px">Regresar</v-btn>
      <v-btn
        dark
        @click="agregarCompetencias(), siguiente(true)"
        style="margin-right:10px"
      >Siguiente</v-btn>
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
      area_2: "",
      sector_2: "",
      area_3: "",
      sector_3: "",
      habilidad_1:"",
      habilidad_2:"",
      habilidad_3:"",
      software_1:"",
      software_2:"",
      software_3:"",
      el: "#example",
      el2: "#example2",
      c: 1,
      c2: 1,
      c3:1,
      c4:1,
      cursos: ["1", "2", "3", "4", "5", "6", "7"]
    };
  },
  methods: {
    agregarCompetencias() {
      var competencias = {
        sector_1: this.sector_1,
        area_1: this.area_1,
        sector_2: this.sector_2,
        area_2: this.area_2,
        sector_3: this.sector_3,
        area_3: this.area_3,
        software_1:this.software_1,
        software_2:this.software_2,
        software_3:this.software_3,
        habilidad_1:this.habilidad_1,
        habilidad_2:this.habilidad_2,
        habilidad_3:this.habilidad_3,
      };
      this.$store.dispatch("agregarCompetencias", competencias);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
