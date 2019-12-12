<template>
  <div id="app">
    <v-app id="inspire">
      <!--   <v-container fluid>
      <h3 align="center"
            justify="center">Mi Empresa</h3>
        <v-col
          cols="12"
          class="text-right"
        >
          <v-badge
            :bottom="bottom"
            :color="color"
            :left="left"
            :overlap="overlap"
            class="align-self-center"
          >
            <template v-slot:badge>
              <span>!</span>
            </template>
            <v-icon
              large
              color="grey"
            >
             mdi-bell
            </v-icon>
          </v-badge>
        </v-col>
   
    </v-container> -->

      <div class="container">
        <div class="row">
          <div class="col-8">
            <v-container class="col-md-10 grey lighten-5 ">
              <v-row>
                <template v-for="(empre, n) in arreglo">
                  <v-col :key="n">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                      height="240"
                      width="170"
                      style="margin-bottom:40px"
                    >
                      <v-card max-width="200" outlined="" tile>
                        <v-img
                          height="220"
                          outlined
                          src="https://picsum.photos/id/1024/1920/1280"
                        >
                          <v-row align-lg="left">
                            <v-col align-self="left" class="pa-0" cols="12">
                              <v-avatar
                                style="z-index:+1"
                                class="profile"
                                size="164"
                                tile
                              >
                              </v-avatar>
                            </v-col>
                            <v-col class="py-0">
                              <v-list-item color="rgba(0, 0, 0, 0)" dark>
                                <v-list-item-content>
                                  <v-list-item-title class="titulo">{{
                                    empre.titulo
                                  }}</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                          </v-row>
                        </v-img>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-responsive
                    v-if="n === 2"
                    :key="`width-${n}`"
                    width="100%"
                  ></v-responsive>
                </template>
              </v-row>
            </v-container>
          </div>

          <div class="col-md-4">
            <!-- <h2 align="center"  justify="center">INDICADORES</h2> -->
            <v-container class="col-md-12 grey lighten-5 ">
              <v-row>
                <template v-for="n in 8">
                  <v-col :key="n">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                      height="200"
                      width="140"
                      style="margin-bottom:40px"
                    >
                      <v-card max-width="400" outlined tile>
                        <v-img
                          height="180"
                          outlined
                          src="https://picsum.photos/id/1024/1920/1280"
                        >
                     

                          <v-row align-lg="left">
                            <v-col align-self="left" class="pa-0" cols="12">
                              <v-avatar
                                style="z-index:+1"
                                class="profile"
                                size="164"
                                tile
                              >
                              </v-avatar>
                            </v-col>
                            <v-col class="py-0">
                              <v-list-item color="rgba(0, 0, 0, 0)" dark>
                                <v-list-item-content>
                                  <v-list-item-title class="tablas">{{
                                    n.tablas
                                  }}</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                          </v-row>
                        </v-img>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-responsive
                    v-if="n === 2"
                    :key="`width-${n}`"
                    width="100%"
                  ></v-responsive>
                </template>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    bottom: false,
    color: "primary",
    colors: [
      "primary",
      "accent",
      "warning lighten-2",
      "teal",
      "error lighten-2"
    ],
    left: false,
    overlap: true,
    arreglo: [
      {
        titulo: "Mi Perfil",
        imagen: "@/assets/images/perfilEmpresa/silla.png"
      },

      { titulo: "Mi Empresa" },

      { titulo: "Mis puestos" },

      { titulo: "Mis Perfiles" },

      { titulo: "Mis Vacantes" },

      { titulo: "Mis postulantes" },

      { titulo: "Mis Evaluaciones" },

      { titulo: "Mis Indicadores" },

      { titulo: "Mi Bolsa de Trabajo" },

      { titulo: "Mis Avisos" },

      { titulo: "Mis Expedientes" },

      { titulo: "Mis Cumpleañeros" }
    ]
  })
};
</script>
