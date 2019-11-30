<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="6">
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="nombre" label="Nombre"> </v-text-field>
          <v-text-field
            v-model="apellido_paterno"
            label="Apellido Paterno"
          ></v-text-field>
          <v-text-field
            v-model="apellido_materno"
            label="Apellido Materno"
          ></v-text-field>
          <v-text-field
            v-model="correo"
            label="Correo Electrónico"
          ></v-text-field>
          <v-text-field
            v-model="telefono"
            label="Número Teléfono"
          ></v-text-field>
          <v-text-field
            v-model="curp"
            label="Curp"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col md="6" cols="12" class="black"> </v-col>
    </v-row>
    <v-row>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, 
      reprehenderit corrupti quis voluptatibus id itaque accusamus quos 
      nihil recusandae accusantium cum impedit, ratione consectetur expedita!
      Reprehenderit sit animi vero quasi.
    </v-row>
    <v-row>
      <v-btn
        color="red"
        class="white--text"
        @click="RegistrarCV()"
        style="margin-right:10px"
        >Regresar</v-btn
      >
      <v-btn
        color="primary"
        @click="agregarDatosPersonales()"
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
      nombre:'',
      apellido_paterno: '',
      apellido_materno: '',
      correo:'',
      tel:'',
    };
  },

  methods: {
    agregarDatosPersonales() {
      var datos_personales = {
        nombre: this.nombre,
        apellido_paterno: this.apellido_paterno,
        apellido_materno: this.apellido_materno,
        correo: this.correo,
        tel:this.tel
      };
      this.$store.dispatch("agregarDatosPersonales",datos_personales);
    },
    
    
  },
  
};
</script>
