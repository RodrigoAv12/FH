<template>
  <v-app>
    <template>
      <v-container>
        <h3 align="center" justify="center">Mi Perfil</h3>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            class="grey lighten-5"
            style="height: 500px;"
          >
            <v-card v-for="n in 1" :key="n" class="ma-3 pa-6" outlined tile>
              <v-row align="center" justify="center">
                ¡Comienza ya desde tu cuenta de Facebook!
              </v-row>
              <v-row align="center" justify="center">
                <div class="my-2">
                  <v-btn large color="primary">Conectate a Facebook</v-btn>
                </div>
              </v-row>

              <v-row align="center" justify="center">
                Prodras publicar tus variantes en Facebook
              </v-row>
              <hr />
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Foto de Perfil</v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn color="orange" text>
                    Seleccionar Foto
                  </v-btn>
                </v-card-actions> </v-card
              ><br />
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title>Logo Empresa</v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn color="orange" text>
                    Seleccionar Logo
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
            <v-card v-for="n in 1" :key="n" class="ma-3 pa-6" outlined tile>
              <v-row justify="space-around">
                <v-checkbox
                  v-model="loading"
                  class="mx-2"
                  label="Perfil Publico"
                ></v-checkbox>
                <v-checkbox
                  v-model="flat"
                  class="mx-2"
                  label="Perfil Privado"
                ></v-checkbox>
                <v-checkbox
                  v-model="inset"
                  class="mx-2"
                  label="Perfil Oculto"
                ></v-checkbox>
              </v-row>
              <v-row justify="space-around">
                <FONT SIZE="1">Muestra sus datos de contacto</FONT>
                <FONT SIZE="1">No Muestra sus datos de contacto</FONT>
                <FONT SIZE="1">No se muestra su Empresa</FONT>
              </v-row>
              <hr />
              Perfil Perzonalizado
              <v-row justify="space-around">
                <v-checkbox
                  v-model="loading"
                  class="mx-2"
                  label="Mostrar Telefono"
                ></v-checkbox>
                <v-checkbox
                  v-model="flat"
                  class="mx-2"
                  label="Mostrar e-mail"
                ></v-checkbox>
                <v-checkbox
                  v-model="inset"
                  class="mx-2"
                  label="Mostrar Direccion"
                ></v-checkbox>
              </v-row>
              <v-row justify="space-around">
                <v-checkbox
                  v-model="loading"
                  class="mx-2"
                  label="Mostrar Website"
                ></v-checkbox>
                <v-checkbox
                  v-model="flat"
                  class="mx-2"
                  label="Mostrar Social Net"
                ></v-checkbox>
                <v-checkbox
                  v-model="inset"
                  class="mx-2"
                  label="Mostrar Vacantes"
                ></v-checkbox>
              </v-row>
              <hr />
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Nombre*"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Apellidos*"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Puesto de la empresa*"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Skype"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Telefono Celular*"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Telefono de oficina*"
                  required
                ></v-text-field>
              </v-form>
              <hr />
              <v-row align="center" justify="center">
                <div class="my-2">
                  <v-btn large color="primary">Actualizar</v-btn>
                </div>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-container>
    </template>
  </v-app>
</template>

<script>
export default {};
</script>
