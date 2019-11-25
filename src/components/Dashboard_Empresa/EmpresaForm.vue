<template>
  <div id="app">
    <v-app id="inspire">
      <div class="container">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="form-group-row"
        >
          <v-container fluid>
            <h3 align="center" justify="center">Mi Empresa</h3>
            <hr/>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <h3>Quienes Somos</h3>
                <v-textarea
                  v-model="name"
                  :counter="100"
                  :rules="nameRules"
                  label
                  required
                  outlined
                  width="100"
                  height="100"
                ></v-textarea>

                <h3>Visión</h3>
                <v-textarea
                  v-model="vision"
                  :counter="100"
                  :rules="misionRules"
                  label
                  required
                  outlined
                  width="100"
                  height="100"
                ></v-textarea>

                <h3>Misión</h3>
                <v-textarea
                  v-model="mision"
                  :counter="100"
                  :rules="visionRules"
                  label
                  required
                  outlined
                  width="100"
                  height="100"
                ></v-textarea>

                <h3>Valores</h3>
                <br />

                <v-text-field
                  v-model="valor1"
                  :counter="30"
                  :rules="valor1Rules"
                  label="Valor 1"
                  required
                  outlined
                  dense
                  width="50"
                  height="50"
                ></v-text-field>

                <v-text-field
                  v-model="valor2"
                  :counter="30"
                  :rules="valor2Rules"
                  label="Valor 2"
                  required
                  outlined
                  dense
                  width="50"
                  height="50"
                ></v-text-field>

                <v-text-field
                  v-model="valor3"
                  :counter="30"
                  :rules="valor3Rules"
                  label="Valor 3"
                  required
                  outlined
                  dense
                  width="50"
                  height="50"
                ></v-text-field>

                <v-text-field
                  v-model="valor4"
                  :counter="30"
                  :rules="valor4Rules"
                  label="Valor 4"
                  required
                  outlined
                  dense
                  width="50"
                  height="50"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" justify-self="center">
                <div>
                  <v-col>
                    <v-row justify-self="">
                      <label class="col-form-label">
                        Empresa influyente
                      </label>
                      <v-checkbox
                        v-model="si"
                        class="mx-3"
                        label="Si"
                      ></v-checkbox>

                      <v-checkbox
                        v-model="no"
                        class="mx-1"
                        label="No"
                      ></v-checkbox>
                    </v-row>
                  </v-col>

                  <v-col>
                    <v-row justify-self="">
                      <label class="col-form-label">
                        Tenemos Outsourcing
                      </label>

                      <v-checkbox
                        v-model="si1"
                        class="mx-3"
                        label="Si"
                      ></v-checkbox>

                      <v-checkbox
                        v-model="no1"
                        class="mx-1"
                        label="No"
                      ></v-checkbox>
                    </v-row>
                  </v-col>
                </div>

                <label class="col-form-label">Pagina de internet</label>
                <v-text-field
                  v-model="pagina"
                  :rules="paginaRules"
                  required
                  label
                  outlined
                  style="margin-bottom:-15px"
                  dense="50"
                ></v-text-field>

                <label class="col-form-label">Nombre Legal*</label>
                <v-text-field
                  v-model="nombreL"
                  :rules="nombreRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Nombre Comercial*</label>
                <v-text-field
                  v-model="nombreCom"
                  :rules="nombreComRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">RFC*</label>
                <v-text-field
                  v-model="RFC"
                  :rules="RFCRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Domicilio*</label>
                <v-text-field
                  v-model="Domicilio"
                  :rules="DomicilioRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Referencia/Entre Calles*</label>
                <v-text-field
                v-model="Referencia"
                :rules="referenciaRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Ciudad*</label>
                <v-text-field
                v-model="Ciudad"
                :rules="ciudadRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Estado*</label>
                <v-text-field
                v-model="Estado"
                :rules="estadoRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Pais*</label>
                <v-text-field
                v-model="Pais"
                :rules="paisRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Codigo Postal*</label>
                <v-text-field
                v-model="CP"
                :rules="cpRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Giro o Actividad*</label>
                <v-text-field
                v-model="Giro"
                :rules="giroRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Numero de Trabajadores*</label>
                <v-text-field
                v-model="Trabajadores"
                :rules="trabajadoresRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <label class="col-form-label">Numero de sucursales*</label>
                <v-text-field
                v-model="Sucursal"
                :rules="sucursalRules"
                  label
                  outlined
                  dense="50"
                  style="margin-bottom:-15px"
                ></v-text-field>

                <div>
                  <v-row justify="space-around">
                    <label class="col-form-label">Dias</label>
                    <v-checkbox
                      v-model="lun"
                      class="mx-2"
                      label="L"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="mar"
                      class="mx-2"
                      label="M"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="mie"
                      class="mx-2"
                      label="M"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="jue"
                      class="mx-2"
                      label="J"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="vier"
                      class="mx-2"
                      label="V"
                    ></v-checkbox>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-container fluid>
            <v-col cols="12" sm="12">
              <v-row justify="space-around">
                <v-checkbox
                  class="mr-4"
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  >Validar</v-btn
                >

                <v-btn color="warning" class="mr-4" @click="reset"
                  >Actualizar datos
                </v-btn>

                <v-btn color="blue" @click="resetValidation">Siguiente</v-btn>

                <label class="col-form-label"
                  >Todos los campos con * es de caracter obligatorio</label
                >
              </v-row>
            </v-col>
          </v-container>
        </v-form>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Ingresa Texto",
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],
    mision: "",
    misionRules: [
      v => !!v || "Ingresa Texto",
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],

    vision: "",
    visionRules: [
      v => !!v || "Ingresa Texto",
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],

    valor1: "",
    valor1Rules: [
      v => !!v,
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],
    valor2: "",
    valor2Rules: [
      v => !!v,
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],

    valor3: "",
    valor3Rules: [
      v => !!v,
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],
    valor4: "",
    valor4Rules: [
      v => !!v,
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],

    pagina: "",
    paginaRules: [
      v => !!v,
      v => (v && v.length <= 100) || "Porfavor ingresa una descripcion"
    ],

    checkbox: false,
    si: false,
    no: false,
    si1: false,
    no1: false,
    lun: false,
    mar: false,
    mier: false,
    jue: false,
    vier: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
