<template>
  <div>

    <toolbar class="navbar sticky-top navbar-expand-lg navbar-light grey darken-3">
      <v-toolbar-title href="/" class="navbar-brand" style="color: white">Logo</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>

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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <v-btn
              style="margin-right:20px"
              color="grey darken-3"
              elevation="0px"
              class="white--text"
              v-for="routes in links"
              v-bind:key="routes.id"
              :to="`${routes.page}`"
            >{{ routes.text }}</v-btn>
          </ul>
          <ul class="navbar-nav ml-auto">
            <v-menu dark offset-y open-delay="10" return-value="RegresaUnValor">
              <template v-slot:activator="{ on }">
                <v-btn
                  style="margin-left:-25px"
                  color="grey darken-3"
                  elevation="0px"
                  class="white--text"
                  v-on="on"
                >Mi Cuenta</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(menu_usuario) in menus"
                  v-bind:key="menu_usuario.id"
                  :to="`${menu_usuario.page}`"
                >
                  <v-list-item-title>{{menu_usuario.titulo}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </ul>
          <ul class="navbar-nav ml-auto">
            <b-button v-b-modal.my-modal>Registro</b-button>

            <b-modal
              
              style="margin:-10`x"
              id="my-modal"
              hide-footer
             
              title="Regístrate"
            >
              <!---------------------NavBar-------------------->
              <NuevoUsuario @inicio="inicioSesion"></NuevoUsuario>
              <!---------------------NavBar-------------------->
            </b-modal>
          </ul>
        </div>
      </v-toolbar-items>
    </toolbar>
    

  </div>
</template>

<script>
import NuevoUsuario from "@/components/Forms/NuevoUsuario";
import RegistroCV from "@/views/RegistroCV"
import Inicio from "@/views/Inicio"
import About from "@/views/About"


export default {
  components: {
    NuevoUsuario,
  },
  data() {
    return {
      vistaActual: "RegistroUser",
      inicio_sesion: "false",
      dialog: false,
      brand: "Barra de Navegacion",
      menus: [
        { titulo: "Registrar CV", page: "/registro_cv" },
        { titulo: "Mi perfil" }
      ],
      links: [
        {
          id: 0,
          text: "Inicio",
          page: "/inicio"
        },
        {
          id: 1,
          text: "About",
          page: "/about"
        },
        {
          id: 2,
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
      $bvModal.hide('my-modal')
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    inicioSesion: function(x) {
      console.log(x);
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.05);
}

</style>
