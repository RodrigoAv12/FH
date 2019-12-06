<template>
  <div id="app" >
    <!-- <Home></Home> -->
    <v-app>
      
      <Navbar></Navbar>
      <router-view/>
      <Footer></Footer>
    </v-app>
    
  </div>
</template>

<script>
import Navbar from "@/components/Main_Secciones/NavBar"
import Footer from "@/components/Main_Secciones/Footer"

export default {
  name: "app",
  data() {
    
  },
  components: {
    // Home,
    Navbar,
    Footer
  },
};
</script>