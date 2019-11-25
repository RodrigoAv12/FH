<!-- Vue Component -->
<template>
  <v-container class="white">
    <v-row class="pa-2" align="center" justify="center">
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="nombre"
          :error-messages="nameErrors"
          label="Instagram"
          required
          prepend-icon="fab fa-instagram"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="nombre"
          :error-messages="nameErrors"
          prepend-icon="fab fa-facebook"
          label="Facebook"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="nombre"
          :error-messages="nameErrors"
          prepend-icon="fab fa-twitter"
          label="Twitter"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex pa-2" cols="12" sm="6" lg="6">
        <v-text-field
          v-model="nombre"
          :error-messages="nameErrors"
          label="Google+"
          prepend-icon="fab fa-google-plus-g"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
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
  </v-container>
</template>

<script>
export default {};
</script>