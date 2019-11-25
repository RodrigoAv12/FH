<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid class="white">
        <div class="container bg-white">
          <v-row justify="space-around">
            <h3>24,000 EMPRESAS</h3>

            <h3>15,600 VACANTES</h3>

            <h3>900,000 PERFILES</h3>
          </v-row>
        </div>

        <v-row justify="space-around">
          <v-col cols="3" md="3" v-for="n in 4" :key="n">
            <div class="title mb-1">Default (cover)</div>

            <div class="subheading pt-4">Too high</div>
            <v-img
              src="@/assets/images/perfilEmpresa/asus.jpg"
              aspect-ratio="2"
            ></v-img>
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              medium
            ></v-rating>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: "",
    ratingB: ""
  })
};
</script>
