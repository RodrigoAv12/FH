<template>
  <div class="container bg-primary">
    <!---Barra de navegación 
      <Footer> </Footer>
      ---------->
    <Navigation></Navigation>
    <!---Termina barra de navegación---------->
  </div>
</template>

<script>
//import Navigation from './components/NavBar'
//import NavigationFooter from './components/Footer'

export default {
  name: "app",
  components: {
    Navigation: Navigation
    //Footer
    //RegistroUsuario
  }
};
</script>
