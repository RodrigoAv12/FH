<template>
  <v-toolbar color="black">
    <v-toolbar-title class="white--text">Barra de Navegacion</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        color="black"
        class="white--text"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        >{{ routes.text }}</v-btn
      >
      <router-link>
        <v-btn
        color="black"
        class="white--text"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        >{{ routes.text }}</v-btn
      >
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>
<style>
.spacing {
  margin-right: 10px;
}
</style>
<script>
export default {
  name: "Navigation",
  data() {
    return {
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
        },
        {
          id: 3,
          text: "Empresa",
          page: "/VistaDatos"
        },
        {
          id: 4,
          text: "Registrate",
          page: "/RegistraDatos"
        },
        {
          id: 5,
          text: "Perfiles",
          page: "/PerfilesEmpresaV"
        },
        {
          id: 6,
          text: "Empresas",
          page: "/FormulariosEmpresaV"
        }
      ]
    };
  }
};
</script>
