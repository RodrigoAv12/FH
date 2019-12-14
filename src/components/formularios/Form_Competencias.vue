<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4>Sector de experiencia</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col cols="12" sm="12">
                    <v-select
                      @click="addSectores()"
                      v-model="sectores"
                      :menu-props="{ maxHeight: '700' }"
                      :items="states"
                      label="Select"
                      multiple
                      chips
                      hint="What are the target regions"
                      persistent-hint
                    ></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
      </v-col>

      <!-- áeas -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4>Áreas de experiencia | Conocimiento</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col cols="12" md="12">
                 <v-select
                      @click="addSectores()"
                      v-model="areas"
                      :menu-props="{ maxHeight: '700' }"
                      :items="are"
                      label="Select"
                      multiple
                      chips
                      hint="What are the target regions"
                      persistent-hint
                    ></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
      </v-col>

      <!-- software -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4>Software</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
        

                         <v-select
                      @click="addSectores()"
                      v-model="software"
                      :menu-props="{ maxHeight: '700' }"
                      :items="soft"
                      label="Select"
                      multiple
                      chips
                      hint="What are the target regions"
                      persistent-hint
                    ></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
      </v-col>

      <!-- Habilidades -->
      <v-col md="6" id="example2">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <form>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  align-self="center"
                  justify-self="center"
                >
                  <v-row justify="center">
                    <h4>Habilidades</h4>
                  </v-row>
                </v-col>
                <v-row class="p-4">
                  <v-col class="d-flex" cols="12" md="12">
                       <v-select
                      @click="addSectores()"
                      v-model="skill"
                      :menu-props="{ maxHeight: '700' }"
                      :items="habi"
                      label="Select"
                      multiple
                      chips
                      hint="What are the target regions"
                      persistent-hint
                    ></v-select>
                  </v-col>
                </v-row>
              </v-row>
            </form>
          </v-col>
        </v-row>
        <!-------Botón para agregar------->
    
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
      area_2: "",
      sector_2: "",
      area_3: "",
      sector_3: "",
      habilidad_1: "",
      habilidad_2: "",
      habilidad_3: "",
      software_1: "",
      software_2: "",
      software_3: "",
      el: "#example",
      el2: "#example2",
      c: 1,
      c2: 1,
      c3: 1,
      c4: 1,

      sectores: [],
      states: [
        'Artes',
        'Belleza',
        'Automotriz',
        'Oficios',
        'Seguridad'
      ],

      areas: [],
      are: [
        'Academico',
        'Acustica',
        'Arereo',
        'Aduanas',
        'Apicultura'
      ],

      software: [],
      soft: ['Windows', 
      'OS', 
      'Linux',
      'Fedora'],

      skill:[],
      habi:['Control', 'Organizacion', 'Productividad'],

      cursos: ["1", "2", "3", "4", "5", "6", "7"]
    };
  },
  methods: {
    agregarCompetencias() {
      var competencias = {
        sector_1: this.sectores[0],
        area_1: this.areas[0],
        sector_2: this.sectores[1],
        area_2: this.areas[1],
        sector_3: this.sectores[2],
        area_3: this.areas[2],

        software_1: this.software[0],
        software_2: this.software[1],
        software_3: this.software[2],

        habilidad_1: this.habilidad_1,
        habilidad_2: this.habilidad_2,
        habilidad_3: this.habilidad_3
      };
      this.$store.dispatch("agregarCompetencias", competencias);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    },
    addSectores() {
      console.log(this.sectores);
      console.log(this.areas);
    }
  }
};
</script>
