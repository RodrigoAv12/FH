<template>
  <v-container id="example">
    <v-row justify="center" align="center" style="font-family: 'Noto Sans JP', sans-serif;">
      <v-col justify-self="end" md="12">
        <v-checkbox
          v-model="exp"
          label="No cuento con experiencia laboral"
          @change="disable(exp.toString())"
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-container style="margin-top:-50px">
      <v-row align="center" justify="center">
        <v-col cols="12" md="12">
          <!------------Fin Formulario--------------->

          <v-form>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_empresa"
                  label="Nombre de la Empresa"
                  required
                  :rules="nombreE"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_puesto"
                  label="Puesto en la Empresa"
                  required
                  :rules="puestoR"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_salario"
                  label="Salario"
                  required
                  :rules="salarioRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-menu
                :disabled="disabled"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                    :disabled="disabled"
                      v-model="exp_inicio"
                      label="Fecha de inicio"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker :disabled="disabled" v-model="exp_inicio" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="4">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                  :disabled="disabled"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                    :disabled="disabled"
                      v-model="exp_salida"
                      label="Fecha de salida"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker :disabled="disabled" v-model="exp_salida" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_contacto"
                  label="Tel. de Contacto"
                  required
                  :rules="contactoRules"
                ></v-text-field>
              </v-col>
              <v-col md="12">
      <v-textarea
      v-model="exp_funcion"
      :disabled="disabled"
        :rules="rules"
        name="input-7-1"
        filled
        label="Describe tu función en la empresa"
        auto-grow
        counter="250"
        maxlength="250"
        outlined
        height="200"
      ></v-textarea>
    </v-col>
            </v-row>
          </v-form>
          <!------------Fin Formulario--------------->
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px">Regresar</v-btn>
      <v-btn dark @click="agregarHistorialLaboral(), siguiente(true)" style="margin-right:10px">Siguiente</v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      el: "#example",
      exp: true,
      disabled: true,
      menu: false,
      menu2: false,
      exp_empresa: "",
      exp_puesto: "",
      exp_salario: "",
      exp_inicio: "",
      exp_salida: "",
      exp_contacto: "",
      exp_funcion: "",

      nombreE: [
        v => !!v || "Ingresa Texto",
        v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
      ],

      puestoEmpresa: "",
      puestoR: [
        v => !!v || "Ingresa Texto",
        v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
      ],

      date: "",
      dateRules: [
        v => !!v || "Ingresa Fecha",
        v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
      ],
      salario: "",
      salarioRules: [
        v => !!v || "Ingresa Salario",
        v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
      ],
      contacto: "",
      contactoRules: [
        v => !!v || "Ingresa Telefono de Contacto",
        v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
      ]
    };
  },
  methods: {
    disable(val) {
      if (val == "true") {
        this.disabled = true;
        this.$delete.form;
        this.nombreEmpresa = "";
        this.puestoEmpresa = "";
        this.salario = "";
        this.date = "";
        this.contacto = "";
        this.exp_funcion= ""
      } else {
        this.disabled = false;
      }
    },
    validate(exp) {
      if (exp == "true") {
        this.$refs.form.$delete();
      }
    },
    agregarHistorialLaboral() {
      var historial = {
        exp_empresa: this.exp_empresa,
        exp_puesto: this.exp_puesto,
        exp_salario: this.exp_salario,
        exp_inicio: this.exp_inicio,
        exp_salida: this.exp_salida,
        exp_contacto: this.exp_contacto,
        exp_funcion: this.exp_funcion
      };
      this.$store.dispatch("agregarHistorialLaboral", historial);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
<style scoped>
.example {
  background: white;
  border-bottom: 0.8px solid rgba(20, 18, 18, 0.733);
  padding: 5px;
}
</style>