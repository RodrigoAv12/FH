<template>
  <toolbar
    class="navbar sticky-top navbar-expand-lg navbar-light grey darken-3"
  >
    <v-toolbar-title href="/" class="navbar-brand" style="color: white"
      >Logo</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <v-btn
            color="grey darken-3"
            elevation="0px"
            class="white--text"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
            >{{ routes.text }}
          </v-btn>
        </ul>
        <ul class="navbar-nav ml-auto">
          <b-button v-b-modal.modal-1>Registro</b-button>

          <b-modal
            hide-backdrop
            style="margin:-10`x"
            id="modal-1"
            hide-footer
            hide-header
            title="Regístrate"
          >
            <!---------------------NavBar-------------------->
            <NuevoUsuario @inicio="inicioSesion"></NuevoUsuario>
            <!---------------------NavBar-------------------->
          </b-modal>
        </ul>
        <ul class="navbar-nav ml-auto">
          <v-btn
            color="grey darken-3"
            elevation="0px"
            class="white--text"
            v-if="this.inicio_sesion === 'true'"
          >
          </v-btn>
        </ul>
      </div>
    </v-toolbar-items>
  </toolbar>
</template>

<script>
import NuevoUsuario from "@/components/Forms/NuevoUsuario";

export default {
  components: {
    NuevoUsuario
  },
  data() {
    return {
      inicio_sesion: "false",
      dialog: false,
      brand: "Barra de Navegacion",
      links: [
        {
          id: 0,
          text: "Home",
          page: "/"
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
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    inicioSesion: function(x) {
      console.log(x);
    }
  }
};
</script>
