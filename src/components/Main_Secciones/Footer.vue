<template>
  <v-row justify="center" >
    <v-card height="200px" width="100%">
        <v-card color="grey darken-3" width="100%" class="text-center">
          <v-card-text >
            <v-row justify="center">
            <h3 style="color:white" >Personas</h3>
            <h3 style="margin-left:180px;color:white">Empresas</h3>
            <h3 style="margin-left:180px;color:white">Servicios</h3>
            <h3 style="margin-left:180px;color:white">Ayuda</h3>
            <h3 style="margin-left:180px;color:white">Redes Sociales</h3>
            </v-row>
            <v-row>
              <v-divider style="margin-top:-5px;margin-left:80px;margin-right:1310px;"></v-divider>
              <v-divider style="margin-top:-17px;margin-left:360px;margin-right:990px"></v-divider>
              <v-divider style="margin-top:-17px;margin-left:660px;margin-right:690px"></v-divider>
              <v-divider style="margin-top:-17px;margin-left:980px;margin-right:450px"></v-divider>
              <v-divider style="margin-top:-17px;margin-left:1230px;margin-right:70px"></v-divider>
            </v-row>
            <v-row >
              <v-col style="margin-left:30px" md="2">
                <a style="color:white;" v-for="item in personas" :key="item" :href="item.link">
              <h6 >{{ item.titulo }} </h6>
                </a>
              </v-col>
              <v-col style="margin-left:45px" md="2">
                <a style="color:white" v-for="item in empresas" :key="item" :href="item.link">
              <h6 >{{ item.titulo }} </h6>
                </a>
              </v-col>
              <v-col style="margin-left:40px" md="2">
                <a style="color:white" v-for="item in servicios" :key="item" :href="item.link">
              <h6 >{{ item.titulo }} </h6>
                </a>
              </v-col>
              <v-col style="margin-left:20px" md="2">
                <a style="color:white" v-for="item in ayuda" :key="item" :href="item.link">
              <h6 >{{ item.titulo }} </h6>
                </a>
              </v-col>
              <v-col style="margin-left:60px" md="2">
                <a style="color:white" v-for="item in redes" :key="item" :href="item.link">
                  <h6 >{{ item.titulo }} </h6>
                </a>
              </v-col>
            </v-row>
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
    data () {
      return {
        n:0,
        personas: [
          {
          titulo: "Registrar CV",
          link:""
          },
          {
          titulo: "Postularme",
          link:""
          },
          {
          titulo: "Entrevista de Trabajo",
          link:""
          },
          {
          titulo: "Perfil del Candidato",
          link:""
          },
          {
          titulo: "Desarrollo Profesional",
          link:""
          },
          {
          titulo: "Mis Favoritas",
          link:""
          },
        ],
        empresas: [
          {
          titulo: "Registrar Empresa",
          link:""
          },
          {
          titulo: "Publicar Vacante",
          link:""
          },
          {
          titulo: "Bolsa de Trabajo",
          link:""
          },
        ],
        servicios: [
          {
          titulo: "Bolsa de Trabajo",
          link:""
          },
          {
          titulo: "Atraccion de Talento",
          link:""
          },
          {
          titulo: "Outsourcing",
          link:""
          },
          {
          titulo: "Perfiles de Personalidad",
          link:""
          },
          {
          titulo: "Gestion Empresarial",
          link:""
          },
          {
          titulo: "Gestion de Talento Humano",
          link:""
          },
        ],
         ayuda: [
          {
          titulo: "Aviso de privacidad",
          link:""
          },
          {
          titulo: "Contacto",
          link:""
          },
          {
          titulo: "Ayuda",
          link:""
          },
        ],
        redes: [
          {
          titulo: "Twitter",
          link:""
          },
          {
          titulo: "Facebook",
          link:""
          },
          {
          titulo: "Linkedln",
          link:""
          },
          {
          titulo: "Youtube",
          link:""
          },
        ],
      }
    },
  }
</script>
