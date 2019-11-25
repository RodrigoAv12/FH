<template>
  <v-app>
    <v-container>
      <h3 align="center" justify="center">Mi Empresa</h3>
      <hr />
      <v-form v-model="valid">
        <v-container>
          <v-row align="baseline" no-gutters>
            <hr />
            <v-subheader>Seguridad Social</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique tipo" solo dense></v-text-field>
            </v-col>
            <v-subheader>Prima Dominical</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>

            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Vacaciones</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique dias" solo dense></v-text-field>
            </v-col>
            <v-subheader>Dia de Descanso</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Aguinaldo</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique dias" solo dense></v-text-field>
            </v-col>
            <v-subheader>Licencia Maternidad</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Bono de Productividad</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique dias" solo dense></v-text-field>
            </v-col>
            <v-subheader>Licencia Paternidad</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="2" md="2">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Capacitacion</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique tipo" solo dense></v-text-field>
            </v-col>
            <v-subheader>Lista de Adopcion</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>GMM</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique dias" solo dense></v-text-field>
            </v-col>
            <v-subheader>Lactancia</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Servicio de Comedor</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique %" solo dense></v-text-field>
            </v-col>
            <v-subheader>Prima de Antiguedad</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="2" md="2">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Vales de Despensa</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Utiles Escolares</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="2">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Fondo de Ahorro</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Uniformes</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Automovil</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Bono de Puntualidad</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="2">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <br />
            <pre><v-subheader> Transporte</v-subheader></pre>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Bono Navideño</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>PTU</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Tiempo Extra</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <pre><v-subheader>     Becas</v-subheader></pre>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Tiempo Extra</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Permiso de Estudio</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Horarios Flexibles</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="2">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Telecomunicaciones</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Viajes</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Comisiones %</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Tiempo Libre</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Seguros de Vida</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Premios</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Plan de Carrera</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
            <v-subheader>Otros</v-subheader>
            <v-checkbox v-model="loading" class="mx-2" label="Si"></v-checkbox>
            <v-checkbox v-model="flat" class="mx-2" label="No"></v-checkbox>
            <v-col cols="1" sm="3" md="3">
              <v-text-field label="Especifique" solo dense></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <hr />
        <div class="text-center">
          <v-btn class="ma-2" color="primary" dark>Actualizar</v-btn>
          <v-btn class="ma-2" color="warning" dark>Siguiente</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-app>
</template>