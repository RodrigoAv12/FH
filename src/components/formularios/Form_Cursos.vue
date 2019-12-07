<template>
  <v-container id="example">
    <v-row align="center" justify="center">
      <v-col cols="12" md="12">
        <form>
          <v-container fluid>
            <v-row>
              <v-col class="d-flex" cols="12" md="4">
                <v-select :items="cursos" v-model="cursos_tipo" label="Tipo"></v-select>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_titulo"
                  label="Título de Estudios Realizados"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="cursos_fecha"
                      label="Fecha de nacimiento"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="cursos_fecha" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_medio"
                  label="Centro de Estudios/Medio de Publicación"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-container fluid v-if="c>=2">
            <v-row>
              <v-col class="d-flex" cols="12" md="4">
                <v-select :items="cursos" v-model="cursos_tipo_2" label="Tipo"></v-select>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_titulo_2"
                  label="Título de Estudios Realizados"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
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
                      v-model="cursos_fecha_2"
                      label="Fecha de nacimiento"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="cursos_fecha_2" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_medio_2"
                  label="Centro de Estudios/Medio de Publicación"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-container fluid v-if="c>=3">
            <v-row>
              <v-col class="d-flex" cols="12" md="4">
                <v-select :items="cursos" v-model="cursos_tipo_3" label="Tipo"></v-select>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_titulo_3"
                  label="Título de Estudios Realizados"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-menu
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="cursos_fecha_3"
                      label="Fecha de nacimiento"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="cursos_fecha_3" @input="menu3 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="cursos_medio_3"
                  label="Centro de Estudios/Medio de Publicación"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
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
    <v-row class="pa-2" justify="center">
      <v-col class="d-flex pa-4" cols="12" sm="6" md="12">
        <p style="font-family: 'Jomolhari', serif;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora alias aliquid quae beatae accusamus, sequi culpa labore ullam
          praesentium rem. Laborum sit esse eveniet aperiam illum. Sapiente,
          pariatur vel?
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px">Regresar</v-btn>
      <v-btn dark @click="agregarCursos(), siguiente(true)" style="margin-right:10px">Siguiente</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu2: false,
      menu3: false,
      cursos_titulo: "",
      cursos_tipo: "",
      cursos_fecha: "",
      cursos_medio: "",

      cursos_titulo_2: "",
      cursos_tipo_2: "",
      cursos_fecha_2: "",
      cursos_medio_2: "",

      cursos_titulo_3: "",
      cursos_tipo_3: "",
      cursos_fecha_3: "",
      cursos_medio_3: "",
      el: "#example",
      c: 1,
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
    agregarCursos() {
      var cursos = {
        cursos_titulo: this.cursos_titulo,
        cursos_tipo: this.cursos_tipo,
        cursos_fecha: this.cursos_fecha,
        cursos_medio: this.cursos_medio,

        cursos_titulo_2: this.cursos_titulo_2,
        cursos_tipo_2: this.cursos_tipo_2,
        cursos_fecha_2: this.cursos_fecha_2,
        cursos_medio_2: this.cursos_medio_2,

        cursos_titulo_3: this.cursos_titulo_3,
        cursos_tipo_3: this.cursos_tipo_3,
        cursos_fecha_3: this.cursos_fecha_3,
        cursos_medio_3: this.cursos_medio_3
      };
      this.$store.dispatch("agregarCursos", cursos);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
