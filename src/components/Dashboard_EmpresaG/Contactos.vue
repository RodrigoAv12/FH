<template>
  <v-app>
    <hr />
    <v-container fluid="" :search="search">
      <v-row align="baseline">
        <v-row justify="start" align="baseline">
          Filtros
          <v-col cols="6" sm="5" md="5">
            <v-text-field
              label="Nombre, Apellido, Empresa, Estudios"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" sm="3" md="3">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar contacto"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-simple-table fixed-header height="500px" :search="search">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Valoración</th>
              <th class="text-left">Enviar mi CV</th>
              <th class="text-left">Compartir</th>
              <th class="text-left">Recomendar</th>
              <th class="text-left">Eliminar</th>
              <th class="text-left">Reportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-row>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-col cols="6" sm="3" md="3">
                    <label for="">Nombre</label><br />
                    <label for="">Carrera</label><br />
                    <label for="">Puesto</label>
                  </v-col>
                </v-row>
              </td>
              <td></td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath2 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath3 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath4 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath5 }}</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-row>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-col cols="6" sm="3" md="3">
                    <label for="">Nombre</label><br />
                    <label for="">Carrera</label><br />
                    <label for="">Puesto</label>
                  </v-col>
                </v-row>
              </td>
              <td></td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath2 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath3 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath4 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath5 }}</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr>
              <td>
                <v-row>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-col cols="6" sm="3" md="3">
                    <label for="">Nombre</label><br />
                    <label for="">Carrera</label><br />
                    <label for="">Puesto</label>
                  </v-col>
                </v-row>
              </td>
              <td></td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath2 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2"
                  ><v-icon>{{ svgPath3 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath4 }}</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="ma-2" text icon color="red lighten-2"
                  ><v-icon>{{ svgPath5 }}</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      
    </v-container>
  </v-app>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import "font-awesome/css/font-awesome.min.css"; // Ensure you are using css-loader
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import { mdiMagnify } from "@mdi/js";
import { mdiSend } from "@mdi/js";
import { mdiShareVariant } from "@mdi/js";
import { mdiThumbUpOutline } from "@mdi/js";
import { mdiMinusCircleOutline } from "@mdi/js";
import { mdiAlert } from "@mdi/js";
Vue.use(Vuetify);

export default {
  data() {
    return {
      search: '',
      svgPath: mdiSend,
      svgPath2: mdiShareVariant,
      svgPath3: mdiThumbUpOutline,
      svgPath4: mdiMinusCircleOutline,
      svgPath5: mdiAlert
    };
  }
};
</script>
