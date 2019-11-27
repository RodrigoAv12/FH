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
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    select: { required }
  },

  data: () =>   ({
    rules: [
        value => !value || value.size < 1000000 || 'Avatar size should be less than 2 MB!',
      ],
  }),
  




};
</script>
