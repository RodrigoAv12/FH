<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand js-scroll-trigger" href="Index.html">
          <img
            class="main-logo"
            style="height: 50px; width: 50px; margin-top: -90px; margin-bottom: -85px;"
            src="@/assets/logo.png"
            alt
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto" style="align-self: flex-end">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" style="color: black" href="#about">About us</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                style="color: black"
                href="#"
                data-toggle="modal"
                data-target="#modalIniciarSesion"
              >Log in</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                style="color: black"
                href="#"
                data-toggle="modal"
                data-target="#myModal"
              >Sign in</a>
            </li>
            <router-link
              class="nav-item nav-link js-scroll-trigger"
              style="color: black"
              v-for="routes in links"
              v-bind:key="routes.id"
              :to="`${routes.page}`"
            >{{ routes.text }}</router-link>
          </ul>
        </div>
      </div>
    </nav>
    <!---------------Modal Form Iniciar Sesión----------------------->
    <div>
      <!-- The Modal -->
      <div class="modal" id="modalIniciarSesion">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 register-title">Log in</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
              <!-- Default form register -->
              <form class="text-center border border-light p-5" action="#!">
                <!-- E-mail -->
                <input
                  type="email"
                  id="defaultRegisterFormEmail"
                  style="margin-top:-15%"
                  class="form-control mb-4"
                  placeholder="E-mail"
                />
                <!-- Password -->
                <input
                  type="password"
                  id="defaultRegisterFormPassword"
                  class="form-control mb-4"
                  placeholder="Password"
                  aria-describedby="defaultRegisterFormPasswordHelpBlock"
                />

                <!-- Botón de Inicio de Sesión -->
                <div class="checkbox" style="margin-bottom: -5%; margin-top: -2%">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button class="btn btn-primary my-4 btn-block" type="submit">Log in</button>
                <!-- Terms of service -->
                <p>
                  <a href target="_blank">Forgot my password</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---------------Modal Form Registro----------------------->
    <div>
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!---------------------NavBar-------------------->
            <NuevoUsuario @inicio="inicioSesion"></NuevoUsuario>
            <!---------------------NavBar-------------------->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NuevoUsuario from "@/components/Forms/NuevoUsuario";
import RegistroCV from "@/views/RegistroCV";
import Inicio from "@/views/Inicio";
import About from "@/views/About";
import NavegadorUsuario from "@/views/NavegadorUsuario";

export default {
  components: {
    NuevoUsuario
  },
  data() {
    return {
      vistaActual: "RegistroUser",
      inicio_sesion: false,
      dialog: false,
      brand: "Barra de Navegacion",
      menus: [
        { titulo: "Registrar CV", page: "/registro_cv" },
        { titulo: "Mi perfil", page: "/navegador_usuario" }
      ],
      links: [
        {
          id: 0,
          text: "Inicio",
          page: "/inicio"
        },

        {
          id: 1,
          text: "Registrarse",
          page: "/RegistroUsuario"
        }
      ]
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    inicioSesion: function(x) {
      console.log("Entró");
      this.inicio_sesion = true;
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 768px) {
  .navbar {
    background-color: #1c2331;
  }
}
</style>