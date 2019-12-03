<!-- Vue Component -->
<template>
  <v-container class="white">
    <v-row class="pa-2" align="center" justify="center">
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="facebook"
          prepend-icon="fab fa-facebook"
          label="Facebook"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="linkedin"
          prepend-icon="fab fa-linkedin"
          label="linkedin"
          required
        ></v-text-field>
      </v-col>
      
    </v-row>
    <v-row class="pa-2" justify="center">
      <v-col class="d-flex pa-4" cols="12" sm="6" md="12">
        <p style="font-family: 'Jomolhari', serif;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis tempora alias aliquid quae beatae accusamus,
          sequi culpa labore ullam praesentium rem. Laborum sit esse
          eveniet aperiam illum. Sapiente, pariatur vel?
        </p>
      </v-col>
    </v-row>
    <v-btn dark @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      
      <v-btn
        dark
        @click="agregarSocial(), siguiente(true)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
  </v-container>
</template>

<script>
export default {

  data(){
    return{
      facebook:'',
      linkedin:''
    }
  },
  methods:{
    agregarSocial() {
      var redes = {
        facebook: this.facebook,
        linkedin: this.linkedin,
        
      };
      this.$store.dispatch("agregarSocial", redes);
    },
    siguiente(x){
      this.$emit('siguiente',x)
    }
  }
};
</script>