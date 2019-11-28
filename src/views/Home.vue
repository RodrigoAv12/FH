<template>
  <div class="home">
    <v-app>
      <!----------Nav Bar---------->
      <div id="top">
        <v-toolbar dark>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text>CV</v-btn>
            <v-btn text @click="componenteActual = 'NuevoUsuario'"
              >Registro</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>
      </div>
      <!----------Nav Bar---------->
      <v-container>
        <keep-alive>
          <component v-bind:is="componenteActual"></component>
        </keep-alive>
        <router-view></router-view>
      </v-container>
      <!----------Footer---------->
      <v-footer height="150px" absolute app padless dark>
        <Footer></Footer>
      </v-footer>
      <!----------Footer---------->
    </v-app>
  </div>
</template>

<script>
import Footer from "@/components/utils/Footer.vue";
import NuevoUsuario from "@/components/Forms/NuevoUsuario";

export default {
  name: "home",
  components: {
    // Navbar,
    Footer,
    NuevoUsuario
  },
  data() {
    return {
      componenteActual: "NuevoUsuario"
    };
  }
};
</script>
