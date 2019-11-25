<template>
    <v-container class="white">
      <v-row align="center">
        <v-col>
          <form>
            <v-container>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="paises" label="País"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="estados" label="Estado"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="cps" label="Ciudad"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="cps" label="Código Postal"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="cps" label="Colonia"></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="cps" label="Calle"></v-select>
                </v-col>
              </v-row>
            </v-container>
            <!-------------Fecha de Nacimiento----------->
          </form>
        </v-col>
        <v-col align="center" justify="center">
          <v-img
            src="https://picsum.photos/id/1005/5760/3840"
            lazy-src="https://picsum.photos/id/1005/5760/3840"
            class="black"
            max-width="500"
            max-height="300"
          ></v-img>
          <h2 class="text-center overline">Imagen de Perfil</h2>
        </v-col>
      </v-row>
    </v-container>
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
  data: () => ({
    nombre: "",
    apellidos: "",
    estados: ["Querétaro", "Puebla", "Nuevo León", "Guerrero"]
  }),
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>
