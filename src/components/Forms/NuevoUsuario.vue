<template>
  <div>
    <!-- Modal Header -->
    <div class="modal-header text-center">
      <h4 class="modal-title w-100 register-title">Regístrate</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
      <!-- Default form register -->
      <form
        class="text-center bg-white border-white p-2"
        @submit.prevent="agregarUsuaruio(),inicio(true)"
      >
        <div style="margin-top:-1%">
          <!-- Nombre(s) -->
          <v-text-field v-model="usuario.nombre" outlined label="Nombre(s)" required></v-text-field>

          <v-row>
            <!-- Apellido P -->
            <v-col md="6">
              <v-text-field outlined v-model="usuario.apellido_p" label="Apellido Paterno" required></v-text-field>
            </v-col>
            <!-- Apellido -->
            <v-col md="6">
              <v-text-field outlined v-model="usuario.apellido_m" label="Apellido Materno" required></v-text-field>
            </v-col>
          </v-row>
          <!-- E-mail -->
          <v-text-field outlined v-model="usuario.correo" label="Correo Electrónico" required></v-text-field>
          <!-- Confirmar E-mail -->
          <v-text-field outlined label="Confirmar Correo Electrónico" required></v-text-field>

          <!-- Password -->
          <v-text-field v-model="usuario.pass" outlined label="Contraseña" type="password" required></v-text-field>
          <!-- Confirmar Password -->
          <v-text-field outlined label="Confirmar Contraseña" type="password" required></v-text-field>
          <!-- Botón de Aceptar el Registro -->
          <button class="btn btn-primary my-4 btn-block" type="submit">Aceptar</button>
          <!-- Terms of service -->
          <p>
            ¿Ya tienes una cuenta?
            <a
              href="#"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalIniciarSesion"
            >Iniciar Sesión</a>
          </p>
          <hr />
          <small>
            Al registrarte aceptas los
            <a href target="_blank">terminos de uso y condiciones</a>
            de factor humano
          </small>
        </div>
      </form>
    </div>
  </div>
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
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    inicio(x) {
      console.log(x);
      this.$emit("inicio", x);
    }
  }
};
</script>

<style  scoped>

.modal-header {
    border-bottom: 0 none;
}

.modal-footer {
    border-top: 0 none;
}

</style>