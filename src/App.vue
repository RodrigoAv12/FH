<template>
  <div id="app" >
    <!-- <Home></Home> -->
    <v-app>
      
      <Navbar></Navbar>
      <router-view/>

    </v-app>
    
  </div>
</template>

<script>
import Navbar from "@/components/Main_Secciones/NavBar"


export default {
  name: "app",
  data() {
    
  },
  components: {
    // Home,
    Navbar,

  },
};
</script>