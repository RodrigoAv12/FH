<template>
  <v-container fluid>
    <v-row justify="center" class="pb-5">
      <v-col md="8">
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="nombre" label="Nombre"></v-text-field>
          <v-text-field
            v-model="apellido_paterno"
            label="Apellido Paterno"
          ></v-text-field>
          <v-text-field
            v-model="apellido_materno"
            label="Apellido Materno"
          ></v-text-field>
          <v-row justify="center">
            <v-col md="6" cols="12">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="fecha_nacimiento"
                    label="Fecha de nacimiento"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="fecha_nacimiento"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col md="6" cols="12">
              <v-text-field
                v-model="tel"
                label="Número Teléfono"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="curp" label="Curp"></v-text-field>
        </v-form>
      </v-col>
      <v-col md="4" cols="12" style="height:300px" class="pt-10">
        <v-row>
          <v-col md="12">
            <v-row align="center" justify="center">
              <v-img
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                max-height="300"
              ></v-img>
            </v-row>
          </v-col>
          <v-col justify-self="center" style="margin-top:-20px">
            <v-row justify="center" class="pt-3">
              <v-btn light @click.native="openFileDialog"
                >Agregar Imagen de Perfil</v-btn
              >
              <input
                accept="image/x-png, image/gif, image/jpeg"
                type="file"
                id="file-upload"
                style="display:none"
                @change="onFileChange"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-btn
        dark
        @click="agregarDatosPersonales(), siguiente(true)"
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
      menu2: false,
      formData: new FormData(),
      rules: [
        value =>
          !value ||
          value.size < 5000000 ||
          "Avatar size should be less than 5 MB!"
      ],

      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      correo: "",
      tel: "",
      fecha_nacimiento: "",
      curp: ""
    };
  },

  methods: {
    agregarDatosPersonales() {
      var datos_personales = {
        nombre: this.nombre,
        apellido_paterno: this.apellido_paterno,
        apellido_materno: this.apellido_materno,
        correo: this.correo,
        curp: this.curp,
        tel: this.tel,
        fecha_nacimiento: this.fecha_nacimiento
      };
      this.$store.dispatch("agregarDatosPersonales", datos_personales);
    },
    siguiente(x) {
      this.$emit("siguiente", x);
    },
    openFileDialog() {
      document.getElementById("file-upload").click();
    },
    onFileChange(e) {
      // var self = this;
      // var files = e.target.files || e.dataTransfer.files;
      // if(files.length > 0){
      //     for(var i = 0; i< files.length; i++){
      //         self.formData.append("file", files[i], files[i].name);
      //     }
      // }
    },
    uploadFile() {
      // var self = this;
      // axios.post('URL', self.formData).then(function (response) {
      //     console.log(response);
      // }).catch(function (error) {
      //     console.log(error);
      // });
    }
  }
};
</script>
<style scoped>
.example {
  background: white;
  border-bottom: 0.8px solid rgba(20, 18, 18, 0.733);
  padding: 5px;
}
</style>
