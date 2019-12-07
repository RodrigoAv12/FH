<template>
  <v-container class="white">
    <v-row align="center">
      <v-col>
        <form>
          <v-container>
            <v-row align="center">
              <v-col class="d-flex" cols="6" md="8">
                <v-text-field v-model="cp" label="Código Postal"></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="6" md="4">
                <v-btn @click="buscarUbicacion(cp)">Validar</v-btn>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="d-flex" cols="6" md="6">
                <h5>{{estado}}</h5>
              </v-col>
              <v-col class="d-flex" cols="6" md="6">
                <h5>{{municipio}}</h5>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-col>
    </v-row>
    <v-row>
      <v-btn dark @click="siguiente(false)" style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        dark
        @click="agregarUbicacion(), siguiente(true)"
        style="margin-right:10px"
        >Siguiente</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      estado: "",
      municipio: "",
      cp: ""
    };
  },

  methods: {
    agregarUbicacion() {
      var ubicacion = {
        estado: this.estado,
        municipio: this.municipio,
        cp: this.cp
      };
      this.$store.dispatch("agregarUbicacion", ubicacion);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    },
    buscarUbicacion(cp) {
      this.axios
        .post("/CP", {
          params: {
            cp: this.cp
          }
        })
        .then(result => {
          console.log("Si quedó tech boss alv");
          this.estado=result.data.d_estado
          this.municipio=result.data.D_mnpio

        })
        .catch(err => {
          console.log(err.response);
          console.log("Mal");
        });
    }
  }
};
</script>
