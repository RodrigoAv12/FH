<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="black" class="white--text" v-on="on" to=""
            >Registrarse</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <v-row>
              <v-col md="12" cols="12">
                <v-row justify="end">
                  <v-btn icon color="black" @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
              <v-col md="12" cols="12">
                <v-row justify="center">
                  <span class="headline">Registrate</span>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-container>
              <form @submit.prevent="registrar_u()">
                <v-row justify="center">
                  <v-col
                    style="margin-bottom:-40px"
                    justify-self="center"
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-text-field
                      v-model="usuario.nombre"
                      outlined
                      label="Nombre(s)"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6" style="margin-bottom:-40px">
                    <v-text-field
                      outlined
                      v-model="usuario.apellido_p"
                      label="Apellido Paterno"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" style="margin-bottom:-40px">
                    <v-text-field
                      outlined
                      v-model=" usuario.apellido_m"
                      label="Apellido Materno"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" style="margin-bottom:-40px">
                    <v-text-field
                      outlined
                      v-model="usuario.correo"
                      label="Correo Electrònico"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" style="margin-bottom:-40px">
                    <v-text-field
                      outlined
                      label="Confirmar Correo Electrònico"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" style="margin-bottom:-40px">
                    <v-text-field
                      v-model="usuario.pass"
                      outlined
                      label="Contraseña"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" style="margin-bottom:-40px">
                    <v-text-field
                      outlined
                      label="Confirmar Contraseña"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="10" justify-self="center">
                    <v-btn block color="primary" type="submint" 
                      >Aceptar</v-btn
                    >
                  </v-col>
                </v-row>
              </form>
            </v-container>

            <v-row justify="center">
              <v-col justify-self="center">
                <p>
                  ¿Ya tienes cuenta?
                  <a href="" target="_blank">iniciar sesiòn</a>
                </p>
              </v-col>
              <v-col md="12">
                <v-divider></v-divider>
              </v-col>
              <v-col md="12">
                <v-row align="center" justify="center">
                  <p>
                    Al registrarte aceptas las
                    <a href="" target="_blank">condiciones y políticas</a> de
                    Factor Humano
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
</template>