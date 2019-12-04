<template>
  <v-container id="example">
    <v-row
      justify="center"
      align="center"
      style="font-family: 'Noto Sans JP', sans-serif;"
    >
      <v-col cols="12" md="12" justify-self="end" align-self="center">
        <v-row justify="center" align="center">
          <v-radio-group
            :multiple="multiple"
            :error="error"
            :success="success"
            :row="row"
            v-model="checkbox"
          >
            <v-row class="p-4">
              <v-radio label="Primaria"></v-radio>
              <v-radio label="Secundaria"></v-radio>
              <v-radio label="Preparatoria"></v-radio>
              <v-radio label="Universidad"></v-radio>
              <v-radio label="Posgrado"></v-radio>
            </v-row>
          </v-radio-group>
        </v-row>
      </v-col>
      <v-col
        v-show="checkbox.toString() == 3"
        cols="12"
        md="12"
        justify-self="end"
        align-self="center"
      >
        <v-row justify="center" align="center">
          <v-radio-group
            :multiple="multiple"
            :error="error"
            :success="success"
            :row="row"
            v-model="checkbox_uni"
          >
            <v-row style="margin-top:-100px" class="p-4">
              <v-radio label="Cursando"></v-radio>
              <v-radio label="No Titulado"></v-radio>
              <v-radio label="Titulado"></v-radio>
              <v-radio label="Trunco"></v-radio>
              <v-radio label="EGC"></v-radio>
            </v-row>
          </v-radio-group>
        </v-row>
      </v-col>
    </v-row>
    <v-container
      style="margin-top:-80px"
      v-show="checkbox.toString() == 3 && checkbox_uni == 2"
      transition="scroll-y-transition"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="12">
          <form>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="titulo_estudios"
                  label="Título de Estudios Realizados"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="nombre"
                  label="Cédula Profesional"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="centro_estudios"
                  label="Centro de Estudios"
                  required
                ></v-text-field>
              </v-col>
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
                    <v-text-field
                      v-model="estudio_fecha"
                      label="Fecha de Titulación"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="estudio_fecha"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="estudio_ciudad"
                  label="Ciudad/Localidad"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="estudio_estado"
                  label="Estado/Provincia"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="estudio_pais"
                  label="País"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-btn
        dark
        @click="siguiente(false)"
        style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        dark
        @click="agregarFormacion(), siguiente(true)"
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
      titulo_estudios: "",
      centro_estudios: "",
      estudio_ciudad: "",
      estudio_estado: "",
      estudio_pais: "",
      estudio_fecha: "",
      el: "#example",
      checkbox: 3,
      checkbox_uni: 2
    };
  },
  methods: {
    agregarFormacion() {
      var formacion = {
        titulo_estudios: this.titulo_estudios,
        centro_estudios: this.centro_estudios,
        estudio_ciudad: this.estudio_ciudad,
        estudio_estado: this.estudio_estado,
        estudio_pais: this.estudio_pais,
        estudio_fecha: this.estudio_fecha
      };
      this.$store.dispatch("agregarFormacion", formacion);
    },
    siguiente(x) {
      this.$emit("siguiente",x);
    }
  }
};
</script>