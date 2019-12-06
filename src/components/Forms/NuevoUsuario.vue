<template>
  <v-app>
    <form @submit.prevent="agregarUsuaruio()" class="white">
      <v-row justify="center">
        Registro
        <v-col style="margin-bottom:-40px" justify-self="center" cols="12" sm="6" md="12">
          <v-text-field v-model="usuario.nombre" outlined label="Nombre(s)" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" style="margin-bottom:-40px">
          <v-text-field outlined v-model="usuario.apellido_p" label="Apellido Paterno" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" style="margin-bottom:-40px">
          <v-text-field outlined v-model="usuario.apellido_m" label="Apellido Materno" required></v-text-field>
        </v-col>
        <v-col cols="12" md="12" style="margin-bottom:-40px">
          <v-text-field outlined v-model="usuario.correo" label="Correo Electrònico" required></v-text-field>
        </v-col>
        <v-col cols="12" md="12" style="margin-bottom:-40px">
          <v-text-field outlined label="Confirmar Correo Electrònico" required></v-text-field>
        </v-col>

        <v-col cols="12" md="12" style="margin-bottom:-40px">
          <v-text-field v-model="usuario.pass" outlined label="Contraseña" type="password" required></v-text-field>
        </v-col>
        <v-col cols="12" md="12" style="margin-bottom:-20px">
          <v-text-field outlined label="Confirmar Contraseña" type="password" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="12" justify-self="center">
          <v-btn height="50px" block color="primary" type="submit">Aceptar</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" class="white">
        <v-col md="12" cols="12">
          <v-row align="center" justify="center">
            <p>
              ¿Ya tienes cuenta?
              <a href target="_blank">iniciar sesiòn</a>
            </p>
          </v-row>
        </v-col>
        <v-col md="12" cols="12" style="margin-top:-40px; margin-bottom: -40px">
          <v-divider></v-divider>
        </v-col>
        <v-col md="12">
          <v-row align="center" justify="center">
            <p>
              Al registrarte aceptas nuestras
              <a href target="_blank">condiciones y políticas</a>
            </p>
          </v-row>
        </v-col>
      </v-row>
    </form>
  </v-app>
</template>
<script>
export default {
  name: "RegistroUsuario",
  data() {
    return {
      campos: [],
      usuario: {
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        correo: "",
        pass: ""
      }
    };
  },

  methods: {
    agregarUsuaruio() {
      this.axios
        .post("/registro", this.usuario)
        .then(result => {
          this.campos.push(result.data);
          this.usuario.nombre = "";
          this.usuario.apellido_p = "";
          this.usuario.apellido_m = "";
          this.usuario.correo = "";
          this.usuario.pass = "";

          this.inicio(result.data.id);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    inicio(x) {
      console.log("inicio");
      this.$emit("inicioSesion", x);
    }
  }
};
</script>
