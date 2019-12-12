<template>
  <v-container>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" absolute permanent>
          <template v-slot:prepend>
            <v-list-item two-line link>
              <v-list-item-avatar>
                <v-img src="https://picsum.photos/id/1024/1920/1280"></v-img>
              </v-list-item-avatar>

              <v-list-item-content style="font-family: 'Rubik', sans-serif">
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Ing Sistemas</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              @click="this.n = 1"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-content  
               v-if="this.n === 1"
        >
          <v-container>

           
            <component v-bind:is="Solicitud"  >
     
   
           
               <h3>
              HOLA</h3>
            </component>
          </v-container>
        </v-content>
      </v-app>

    </div>
  </v-container>
</template>

<script>
import Solicitud from "@/components/Dashboard_Empresa/Solicitud.vue";

export default {
  components: {
    Solicitud
  },

  data() {
    return {
      drawer: null,
      component: 'Solicitud',
      n:0,
      items: [
        {
          title: "Solicitudes",
          icon: "mdi-file-multiple",
              
        },
        
        { title: "Vistos", icon: "mdi-eye" },
        { title: "En Proceso", icon: "mdi-settings" },
        { title: "Peticiones CV", icon: "mdi-email-plus-outline" },
        { title: "Citas", icon: "mdi-calendar-outline" },
        { title: "Contratos", icon: "mdi-briefcase" }
      ]
    };
  }
};
</script>
