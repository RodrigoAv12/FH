<template>
  <v-app>
    <v-container>
        <h3 align="center"
            justify="center">Mi Empresa</h3>
      <v-form>
        <v-row>
          <v-container fluid><hr>
            <v-row>
              <v-col cols="12" sm="6">
                <v-row justify="start" no-gutters>
                  <v-row justify="start" align="baseline" no-gutters>
                    Seguridad Social
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique tipo"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Vacaciones
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique dias"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Prima Vacacional
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique %"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Aguinaldo
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique dias"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Bono de Productividad
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique dias"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Capacitación
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique tipo"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    GMM
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique dias"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Servicio de Comedor
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique %"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                    <v-row justify="start" align="baseline" no-gutters>
                    Vales de Despensa
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Fondo de Ahorro
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Automóvil
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Transporte
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    PTU
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Becas
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Permiso de Estudio
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Telecomunicaciones
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Comisiones %
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Seguro de Vida
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Plan de Carrera
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" justify-self="center">
                <div>
                  <v-row justify="start" no-gutters>
                  <v-row justify="start" align="baseline" no-gutters>
                    Prima Dominical
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Dia de Descanso
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Licencia Maternidad
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Licencia Paternidad
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Licencia Adopción
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Lactancia
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Prima de Antigüedad
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Útiles Escolares
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Uniformes
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Bono de Puntualidad
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Bono Navideño
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Tiempo Extra
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Horarios Flexibles
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Viajes
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Tiempo Libre
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Premios
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-row justify="start" align="baseline" no-gutters>
                    Otros
                    <v-checkbox
                      v-model="loading"
                      class="mx-2"
                      label="Si"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="flat"
                      class="mx-2"
                      label="No"
                    ></v-checkbox>
                  </v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Especifique"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                </div>
              </v-col>
            </v-row><hr>
            <div class="text-center">
                    <v-btn class="ma-2" color="primary" dark>Actualizar</v-btn>
                    <v-btn class="ma-2" color="warning" dark>Siguiente</v-btn>
                </div>
          </v-container>
        </v-row>
      </v-form>
    </v-container>
  </v-app>
</template>
