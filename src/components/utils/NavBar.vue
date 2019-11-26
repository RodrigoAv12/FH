<template>
  <div style="width:100%" >
    <nav class="navbar navbar-expand-lg navbar-light grey darken-3">
      <a class="navbar-brand" style="color: white">{{ brand }}</a>
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
            >{{ routes.text }}</v-btn
          >
        </ul>
      </div>
      <router-link></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        },
        {
          id: 3,
          text: "Capacidades",
          page: "/Vista-Capacidades"
        },
        {

          id: 5,
          text:"ServiciosEmpresa",
          page:"/Servicios_EmpresaV"
        },
        {
          id: 6,
          text:"Contactos",
          page:"/ContactosV"
        },
        {
          id: 7,
          text:"Perfiles",
          page:"/PerfilesEmpresaV"
        },

        {
          id: 8,
          text:"Empresa",
          page: "/VistaDatos"
        },
        {
          id: 9,
          text:"Datos de la empresa",
          page:"/RegistraDatos"
        },
        {
          id: 10,
          text: "Solicitudes",
          page: "/SolicitudView"
        },
        {
          id: 11,
          text: "Califica",
          page: "/CalificaView"
        }
    
      ]
    };
  }
};
</script>
