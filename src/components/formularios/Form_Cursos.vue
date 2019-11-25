<template>
  <v-container id="example">
    <v-row align="center" justify="center" v-for="n in c" :key="n">
      <v-col cols="12" md="12">
        <form>
          <v-row>
            <v-col class="d-flex" cols="12" md="4">
              <v-select :items="cursos" label="Tipo"></v-select>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="nombre"
                :error-messages="nameErrors"
                label="Título de Estudios Realizados"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="date" label="Fecha" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="apellidos"
                :error-messages="nameErrors"
                label="Centro de Estudios/Medio de Publicación"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
    <!-------Botón para agregar------->
    <v-row>
      <v-col cols="12" md="12" justify-self="center">
        <v-btn class="ma-2" color="teal" dark @click="agregar()">
          <v-icon dark left>fas fa-plus</v-icon>Agregar
        </v-btn>
        <v-btn v-show="c >= 2" class="ma-2" color="pink darken-1" dark @click="eliminar()">
          <v-icon dark left>fas fa-minus</v-icon>Eliminar
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="pa-2" justify="center">
      <v-col class="d-flex pa-4" cols="12" sm="6" md="12">
        <p style="font-family: 'Jomolhari', serif;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis tempora alias aliquid quae beatae accusamus,
          sequi culpa labore ullam praesentium rem. Laborum sit esse
          eveniet aperiam illum. Sapiente, pariatur vel?
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      el: "#example",
      c : 1,
      cursos: [
        "Curso",
        "Diplomado",
        "Seminario",
        "Certificación",
        "Clínica",
        "Congreso",
        "Conferencia"
      ],
      
    };
  },
  methods: {
    agregar() {
      this.c = this.c + 1
    },
    eliminar() {
      this.c = this.c - 1
    },

    }
  
};
</script>