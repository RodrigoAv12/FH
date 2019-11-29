<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" style="margin-top:3%">
        <v-row align="center" justify="center">
          <v-img
            src="https://picsum.photos/id/1005/5760/3840"
            lazy-src="https://picsum.photos/id/1005/5760/3840"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="400"
            max-height="300"
          ></v-img>
        </v-row>
        <v-row>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Imagen de perfil"
          ></v-file-input>
        </v-row>

        <h2 class="text-center overline">Imagen de Perfil</h2>
      </div>
    </div>
    <v-row>
      <v-btn
        color="red"
        class="white--text"
        @click="backStep(paso.id_paso)"
        style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        color="primary"
        @click="nextStep(paso.id_paso)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    return: {
      next
    },
    rules: [
      value =>
        !value || value.size < 500000 || "Avatar size should be less than 5 MB!"
    ]
  }),
  methods: {
    siguiente: function() {
      bus.$emit("siguiente", next);
    },
    regresar() {
      bus.$emit("regresar", next);
    }
  }
};
</script>
