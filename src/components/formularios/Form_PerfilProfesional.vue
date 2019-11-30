<template>
  <v-container fluid>
    <v-col md="12">
      <v-textarea
      v-model="perfil"
        :rules="rules"
        name="input-7-1"
        filled
        label="Descripción"
        auto-grow
        counter="250"
        maxlength="250"
        outlined
        height="200"
      ></v-textarea>
    </v-col>
    <v-col md="12">
      <p style="font-family: 'Jomolhari', serif;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis tempora alias aliquid quae beatae accusamus,
        sequi culpa labore ullam praesentium rem. Laborum sit esse
        eveniet aperiam illum. Sapiente, pariatur vel?
      </p>
    </v-col>
    <v-col md="12">
      <v-btn
        color="red"
        class="white--text"
        @click="RegistrarCV()"
        style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        color="primary"
        @click="agregarPerfilProfesional()"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: [v => v.length <= 250 || "Sólo se permite 250 caracteres"],
      perfil:''
    };
  },
  methods:{
    agregarPerfilProfesional() {
      var pp = {
        perfil : this.perfil
      };

      this.$store.dispatch("agregarPerfilProfesional",pp);
      
    },

  }
};
</script>