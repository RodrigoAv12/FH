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
          
          <v-form 
          v-model="form">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  :disabled="disabled"
                  v-model="nombreEmpresa"
                  :error-messages="nameErrors"
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
                  v-model="puestoEmpresa"
                  :error-messages="nameErrors"
                  label="Puesto en la Empresa"
                  required
                  :rules="puestoR"
                  
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :disabled="disabled"
                  v-model="salario"
                  :error-messages="emailErrors"
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
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
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
                      :rules="dateRules"
                      required
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
                :disabled="disabled"
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :disabled="disabled"
                      v-model="date2"
                      label="Fecha de Salida"
                      readonly
                      v-on="on"
                      :rules="dateR"
                      required
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
                  v-model="contacto"
                  :error-messages="nameErrors"
                  label="Tel. de Contacto"
                  required
                  :rules="contactoRules"
                  
                  
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
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
      exp: true,
      disabled: true,
    
    nombreEmpresa: "",
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
    ],

    };
  },
  methods: {
    disable(val) {
      if(val == "true"){
        this.disabled = true
        this.$delete.form;
        this.nombreEmpresa= ""
        this.puestoEmpresa= ""
        this.salario =""
        this.date=""
        this.contacto=""
      } else{
        this.disabled = false
      }
    },
    validate(exp){
      if(exp=="true"){
        this.$refs.form.$delete()
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

  }
};
</script>