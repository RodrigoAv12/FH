<template>
  <v-row justify="center">
    <v-card height="200px" width="100%">
      <v-card flat tile width="100%" class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Factor Humano</strong>
        </v-card-text>
      </v-card>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],

    padless: true
  })
};
</script>
