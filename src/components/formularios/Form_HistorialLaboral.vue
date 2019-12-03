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
          <form>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_empresa"
                  :error-messages="nameErrors"
                  label="Nombre de la Empresa"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_puesto"
                  :error-messages="nameErrors"
                  label="Puesto en la Empresa"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_salario"
                  :error-messages="emailErrors"
                  label="Salario"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-menu
                  :disabled="disabled"
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
                      :disabled="disabled"
                      v-model="exp_inicio"
                      label="Fecha de Inicio"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="exp_inicio"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="4">
                <v-menu
                  :disabled="disabled"
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
                      :disabled="disabled"
                      v-model="exp_salida"
                      label="Fecha de Salida"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="exp_salida"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="exp_contacto"
                  :error-messages="nameErrors"
                  label="Tel. de Contacto"
                  required
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-textarea
                  :rules="rules"
                  v-model="exp_funcion"
                  name="input-7-1"
                  filled
                  label="Descripción tu función en la empresa"
                  auto-grow
                  counter="250"
                  maxlength="250"
                  outlined
                  height="200"
                ></v-textarea>
              </v-col>
            </v-row>
          </form>
          <!------------Fin Formulario--------------->
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          dark
          @click="siguiente(false)"
          style="margin-right:10px"
        >Regresar</v-btn>
        <v-btn
          dark
          @click="agregarHistorialLaboral(), siguiente(true)"
          style="margin-right:10px"
        >Siguiente</v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      rules: [v => v.length <= 250 || "Sólo se permite 250 caracteres"],
      el: "#example",
      exp: false,
      disabled: false,
      exp_empresa,
      exp_puesto,
      exp_salario,
      exp_inicio,
      exp_salida,
      exp_contacto,
      exp_funcion
    };
  },
  methods: {
    disable(val) {
      if (val == "true") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    agregarHistorialLaboral(){

      var historial = {
        exp_empresa : this.exp_empresa,
      exp_puesto : this.exp_puesto,
      exp_salario : this.exp_salario,
      exp_inicio : this.exp_inicio,
      exp_salida : this.exp_salida,
      exp_contacto : this.exp_contacto,
      exp_funcion : this.exp_funcion
      };
      this.$store.dispatch("agregarHistorialLaboral",historial);
  
    },
    siguiente(x){
      this.$emit('siguiente',x)
    }
  },
};
</script>