<template>
  <div id="app">
    <v-container>
      <v-navigation-drawer v-model="drawer" absolute permanent left
           expand-on-hover
        >
        <v-list dense>
          <v-list-item>
            <v-list-content>
              <v-list-item-avatar>
                <v-img src="https://picsum.photos/id/1024/1920/1280"></v-img>
              </v-list-item-avatar>
              Jhon leider
            </v-list-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="cambiarComponente(item.componente)"
            v-for="(item, n) in items"
            :key="n"
          >
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>

            <v-list-content>
              {{ item.title }}
            </v-list-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <v-content>
      <v-container fluid>
        <keep-alive>
          <component v-bind:is="componenteActual"></component>
        </keep-alive>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Solicitud from "@/components/Dashboard_Usuario/Solicitud.vue";
import Vistos from "@/components/Dashboard_Usuario/Vistos.vue";
import En_Proceso from "@/components/Dashboard_Usuario/En_Proceso.vue";
import Peticiones_CV from "@/components/Dashboard_Usuario/Peticiones_CV.vue";
import Citas from "@/components/Dashboard_Usuario/Citas.vue";
import Contratos from "@/components/Dashboard_Usuario/Contratos.vue";
import CV_Usuario from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario.vue";
import CV_Usuario2 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario2.vue";
import CV_Usuario3 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario3.vue";
import CV_Usuario4 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario4";
import CV_Usuario5 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario5";
import CV_Usuario6 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario6";
import CVS from "@/components/Dashboard_Usuario/PlantillaCV/CVS";

export default {
  components: {
    Solicitud,
    Vistos,
    En_Proceso,
    Peticiones_CV,
    Citas,
    Contratos,
    CV_Usuario,
    CV_Usuario2,
    CV_Usuario3,
    CV_Usuario4,
    CV_Usuario5,
    CV_Usuario6,
    CVS
  },

  data() {
    return {
      drawer: true,
      componenteActual: "Solicitud",
      items: [
        {
          title: "Solicitud",
          icon: "mdi-file-document",
          componente: "Solicitud"
        },
        { title: "Vistos", icon: "mdi-eye", componente: "Vistos" },
        { title: "En proceso", icon: "mdi-settings", componente: "En_Proceso" },
        {
          title: "Peticiones CV",
          icon: "mdi-email-plus-outline",
          componente: "Peticiones_CV"
        },
        { title: "Citas", icon: "mdi-calendar-outline", componente: "Citas" },
        { title: "Contratos", icon: "mdi-briefcase", componente: "Contratos" },
       
        {
          title: "CVS ",
          icon: "mdi-file-document",
          componente: "CVS"
        }
      ]
    };
  },
  methods: {
    cambiarComponente(componente) {
      this.componenteActual = componente;
      console.log(this.componenteActual);
    }
  }
};
</script>
