<template>
  <v-container>
    <v-row>
      <v-col md="12">
        
        <v-btn   text small color="primary"
          ><v-img
          height="100px"
          width="100px"
            src="https://picsum.photos/id/11/500/300"
            lazy-src="https://picsum.photos/id/11/10/6"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="500"
            max-height="300"
          ></v-img
        ></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="black"
        class="white--text"
        @click="RegistrarCV()"
        style="margin-right:10px"
        >Aceptar</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from "jspdf";
export default {
  data() {
    return {
      campos: [],
    };
  },
  created(){}
    
  ,
  methods: {
    RegistrarCV() {
      this.axios
        .post("/registroCV", this.$store.getters.RegistrarCV)
        .then(result => {
          this.campos.push(result.data);
        })
        .catch(err => {
          console.log(err.response);
        });
     
    }
  }
};
</script>
