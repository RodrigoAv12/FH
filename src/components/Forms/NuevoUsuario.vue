<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="10" md="8" justify-self="center">
        <v-row justify="center">
          <v-card width="550px">
            <v-card-title>
              <v-row justify="center" align="center" style="margin-bottom:-30px">
                <v-col md="12" cols="12">
                  <v-row justify="center" align="center">
                    <span class="headline">Regìstrate</span>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-container>
                <form @submit.prevent="registrarUsuario()">
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
                        v-model="usuario.apellido_m"
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
                    <v-col cols="12" md="12" style="margin-bottom:-20px">
                      <v-text-field
                        outlined
                        label="Confirmar Contraseña"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center" >
                    <v-col md="12" justify-self="center">
                      <v-btn height="50px" block color="primary" type="submint"
                        >Aceptar</v-btn
                      >
                    </v-col>
                  </v-row>
                </form>
              </v-container>

              <v-row justify="center">
                <v-col  md="12">
                  <v-row align="center" justify="center">
                    <p>
                    ¿Ya tienes cuenta?
                    <a href="" target="_blank">iniciar sesiòn</a>
                  </p>
                  </v-row>
                  
                </v-col>
                <v-col md="10" style="margin-top:-40px; margin-bottom: -40px">
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
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "RegistroUsuario",
  data() {
    return {
      usuario: {
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        correo: "",
        pass: ""
      }
    };
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      this.axios
        .get("/get")
        .then(result => {
          console.log(result.data);
          this.campos = result.data;
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    agregarUsuaruio() {
      this.axios
        .post("/post", this.usuario)
        .then(result => {
          this.campos.push(result.data);
          this.usuario.nombre = "";
          this.usuario.apellido_p = "";
          this.usuario.apellido_m = "";
          this.usuario.correo = "";
          this.usuario.pass = "";
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>
