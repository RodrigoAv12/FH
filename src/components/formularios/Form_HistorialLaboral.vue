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
                  v-model="nombre"
                  :error-messages="nameErrors"
                  label="Nombre de la Empresa"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  :disabled="disabled"
                  v-model="apellidos"
                  :error-messages="nameErrors"
                  label="Puesto en la Empresa"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="Salario"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
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
                    <v-text-field
                      :disabled="disabled"
                      v-model="date"
                      label="Fecha de Inicio"
                      readonly
                      v-on="on"
                    ></v-text-field>
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
                      :disabled="disabled"
                      v-model="date"
                      label="Fecha de Salida"
                      readonly
                      v-on="on"
                    ></v-text-field>
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
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Tel. de Contacto"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  placeholder="4424568921"
                ></v-text-field>
              </v-col>
            </v-row>
          </form>
          <!------------Fin Formulario--------------->
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      el: "#example",
      exp: false,
      disabled: false
    };
  },
  methods: {
    disable(val) {
      if(val == "true"){
        this.disabled = true
        reset()
        
      } else{
        this.disabled = false
        
      }
     
      
      
    },
    reset () {
        this.$refs.form.reset()
      },
  }
};
</script>