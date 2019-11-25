<template>
  <div class="home">
    <v-app>
      <v-app-bar app width="100%" dark >
        <Navbar> </Navbar>
      </v-app-bar>
      <v-content>
        <v-container fluid>          
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer height="150px" absolute app  padless dark>
        <Footer></Footer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from "@/components/utils/Footer.vue";
import Navbar from "@/components/utils//NavBar.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Footer
  }
};
</script>