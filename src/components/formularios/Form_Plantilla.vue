<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" justify-self="center" md="4" v-for="(item, n) in items" :key="n">
        <v-row justify="center">
          <v-card max-width="200px" max-height="400px" color="purlple">
            <v-img class="white--text align-end" height="auto" width="auto" :src="item.fondo"></v-img>
            <v-card-actions>
              <v-btn
                @click="cambiarComp(item.componente)"
                text
                v-on:click="show = !show"
              >{{ item.title }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" style="padding-right:65px; padding-left:65px">
      <v-col md="6" cols="6" justify-self="center">
        <v-btn dark @click="siguiente(false)" style="margin-right:10px">Regresar</v-btn>
      </v-col>
      <v-col md="6" cols="6">
        <v-row justify="end">
          <v-btn
            color="black"
            class="white--text"
            @click="RegistrarCV()"
            style="margin-right:10px"
          >Aceptar</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from "jspdf";
export default {
  data() {
    return {
      campos: [],
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
  created() {},
  methods: {
    RegistrarCV() {
      this.axios
        .post("/registroCV", this.$store.getters.RegistrarCV)
        .then(result => {
          console.log("Si llegó");
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    }
  }
};
</script>
