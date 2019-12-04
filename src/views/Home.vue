<template>
  <div class="home">
    <v-app>
      <!----------Nav Bar---------->
      <div id="top">
        <v-toolbar dark>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="componenteActual = 'CV'">CV</v-btn>
            <v-btn text @click="componenteActual = 'NuevoUsuario'">Registro</v-btn>
            <v-btn text @click="componenteActual = 'LogIn'">LogIn</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <router-link></router-link>
      </div>
      <!----------Nav Bar---------->
      <v-container>
        <keep-alive>
          <component v-bind:is="componenteActual"></component>
        </keep-alive>
        <router-view></router-view>
      </v-container>
      <!----------Footer---------->
      
      <!----------Footer---------->
    </v-app>
  </div>
</template>

<script>
import Footer from "@/components/utils/Footer.vue";
import NuevoUsuario from "@/components/Forms/NuevoUsuario";
import CV from "./RegistroCV";
import LogIn from "@/components/Forms/LogIn";


export default {
  name: "home",
  components: {
    CV,
    //Footer,
    NuevoUsuario,
    LogIn
  },
  data() {
    return {
      componenteActual: "NuevoUsuario"
    };
  }
};
</script>
