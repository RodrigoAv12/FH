<template>
<v-card style="background-color: #424242;">
  <v-container>
<v-row no-gutters>
      <v-col
            cols="12"
            sm="2"
            >
              <v-card
              class="ma-3 pa-6"
              color="#424242"
              outlined
              tile
              >
              <v-row justify="center">
                <div style="color:white; font-size:25px; font-family:'Montserrat', sans-serif;" >Personas</div>
                  </v-row>
                <v-row justify="center">
                <v-col cols="5"
            sm="12">
                <div v-for="item in personas" :key="item"  style="color:white; font-size:15px; font-family:'Montserrat', sans-serif;" >{{item.titulo}}</div>
                </v-col>
                </v-row>     
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="#424242"
              outlined
              tile
              >
              <v-row justify="center">
                <div style="color:white; font-size:25px; font-family:'Montserrat', sans-serif;" >Empresas</div>
                  </v-row>
                <v-row justify="center">
                <v-col cols="4"
            sm="8">
                <div v-for="item in empresas" :key="item"  style="color:white; font-size:15px; font-family:'Montserrat', sans-serif;" >{{item.titulo}}</div>
                </v-col>
                </v-row>     
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="2"
            >
              <v-card
              class="ma-3 pa-6"
              color="#424242"
              outlined
              tile
              >
              <v-row justify="center">
                <div style="color:white; font-size:25px; font-family:'Montserrat', sans-serif;" >Servicios</div>
                  </v-row>
                <v-row justify="center">
                <v-col cols="6"
            sm="12">
                <div v-for="item in servicios" :key="item"  style="color:white; font-size:15px; font-family:'Montserrat', sans-serif;" >{{item.titulo}}</div>
                </v-col>
                </v-row>     
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="2"
            >
              <v-card
              class="ma-3 pa-6"
              color="#424242"
              outlined
              tile
              >
              <v-row justify="center">
                <div style="color:white; font-size:25px; font-family:'Montserrat', sans-serif;" >Ayuda</div>
                  </v-row>
                <v-row justify="center">
                <v-col cols="4"
            sm="9">
                <div v-for="item in ayuda" :key="item"  style="color:white; font-size:15px; font-family:'Montserrat', sans-serif;" >{{item.titulo}}</div>
                </v-col>
                </v-row>     
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="2"
            >
              <v-card
              class="ma-3 pa-6"
              color="#424242"
              outlined
              tile
              >
              <v-row justify="center">
                <div style="color:white; font-size:25px; font-family:'Montserrat', sans-serif;" >Social</div>
                  </v-row>
                <v-row justify="center">
                <v-col cols="4"
            sm="9">
                <div v-for="item in redes" :key="item"  style="color:white; font-size:15px; font-family:'Montserrat', sans-serif;" >{{item.titulo}}</div>
                </v-col>
                </v-row>     
        </v-card>
      </v-col>
          </v-row>
          
    </v-container>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
          personas: [
          {
          titulo: "Registrar mi CV",
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