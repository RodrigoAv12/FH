<template>
  <div id="app">


    <v-card class="ma-3 " outlined tile max-width="800">

      <v-row align="center" justify="center">
        Escoje una de las opciones para tus CV
      </v-row>
      <hr />

      <v-row v-show="plantilla === false">
        <v-col cols="6" sm="6" md="6" v-for="(item, n) in items" :key="n">
          <v-card class="mx-auto" max-width="500" color="purlple">
            <v-img
              class="white--text align-end"
              height="auto"
              width="auto"
              :src="item.fondo"
            >
            </v-img>
            <v-card-actions>
              <v-btn @click="cambiarComp(item.componente),plantilla=true" text>
                {{item.title}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <br />
    </v-card>

    <v-content>
      <v-container fluid v-if="plantilla === true">
        <v-btn light @click="plantilla = false">Regresar</v-btn>
        <keep-alive>
          <component v-bind:is="componenteA"></component>
        </keep-alive>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import CV_Usuario from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario.vue";
import CV_Usuario2 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario2.vue";
import CV_Usuario3 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario3.vue";
import CV_Usuario4 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario4";
import CV_Usuario5 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario5";
import CV_Usuario6 from "@/components/Dashboard_Usuario/PlantillaCV/CV_Usuario6";
import CVS from "@/components/Dashboard_Usuario/PlantillaCV/CVS";

export default {
  components: {
    CV_Usuario,
    CV_Usuario2,
    CV_Usuario3,
    CV_Usuario4,
    CV_Usuario5,
    CV_Usuario6
  },

  data() {
    return {
      plantilla:false,
      drawer: true,
      componenteA: "",
      items: [
        {
          title: "Curriculum 1",
          componente: "CV_Usuario",
          fondo: "https://i.ibb.co/hL5X5Fr/Sin-t-tulo-1.jpg"
        },
        {
          title: "Curriculum 2",
          componente: "CV_Usuario2",
          fondo: "https://i.ibb.co/p3sVg5j/Sin-t-tulo-2.jpg"
        },
        {
          title: "Curriculum 3",
          componente: "CV_Usuario3",
          fondo: "https://i.ibb.co/Qr82tbM/Sin-t-tulo-4.jpg"
        },
        {
          title: "Curriculum 4",
          componente: "CV_Usuario4",
          fondo: "https://i.ibb.co/6BJhnMm/Sin-t-tulo-3.jpg"
        },
        {
          title: "Curriculum 5",
          componente: "CV_Usuario5",
          fondo: "https://i.ibb.co/YkCQgmY/Sin-t-tulo-5.jpg"
        },
        {
          title: "Curriculum 6",
          componente: "CV_Usuario6",
          fondo: "https://i.ibb.co/Z6bB2d9/Sin-t-tulo-6.jpg"
        }
      ]
    };
  },

  methods: {
    cambiarComp(componente) {
      this.componenteA = componente;
      console.log(this.componenteA);
    }
  }
};
</script>

<style scoped>
.mx-auto {
  -webkit-box-shadow: 0px -1px 0px 3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px -1px 0px 3px rgba(0, 0, 0, 1);
  box-shadow: 0px -1px 0px 3px rgba(0, 0, 0, 1);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
