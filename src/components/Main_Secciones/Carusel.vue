<template>
        
        <v-carousel
        
        height="690"
        cycle
        delimiter-icon="mdi-blue mdi-circle">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition">
                <v-container>
                    <v-row justify="center"
                    align= "center" >
                        <h1 :style="item.alineaciontitulo">{{ item.titulo }}</h1>
                    </v-row>
                    <v-row justify="center"
                    align= "center">
                        <v-col md="7">
                            <h3 class="text-center" :style="item.alineacionsubtitulo">{{ item.subtitulo }}</h3>
                        </v-col>
                    </v-row>
                    <v-row
                    class="fill-height" 
                    justify="center"
                    align= "center">
                        <v-btn x-large rounded color="grey darken-3" :style="item.alineacionbtn" :to="`${item.page}`">{{ item.boton }}</v-btn>
                    </v-row>
                </v-container>
            </v-carousel-item>
        </v-carousel>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.ibb.co/8DpVGxP/marten-bjork-6d-W3xy-Qvc-YE-unsplash.jpg',
            titulo: "Registrate Ahora! ",
            subtitulo: "Este es un subtitulo",
            boton: "Registrarme",
            page: "/RegistroUsuario",
            alineacionbtn:"margin-top:5px; margin-left:30px",
            alineaciontitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-top: 170px; margin-left:45px",
            alineacionsubtitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-left:50px",
          },
          {
            src: 'https://i.ibb.co/Cz13PyQ/h.jpg',
            titulo: "Trabajar debe ser una experiencia GRATA",
            subtitulo: "En Factor Humano México tenemos excelentes planes y programas de Desarrollo Empresarial",
            boton: "Servicios Empresariales",
            alineacionbtn:"margin-top:5px; margin-left:50px",
            alineaciontitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-top: 170px; margin-left:45px;",
            alineacionsubtitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-left:50px",
          },
          {
            src: 'https://i.ibb.co/vsx4wTg/sh.jpg',
            titulo: "Promociones especiales",
            subtitulo: "Checa las promociones pensadas para ti",
            boton: "Promociones",
            alineacionbtn:"margin-top:5px; margin-left:30px",
            alineaciontitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-top: 170px; margin-left:45px",
            alineacionsubtitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-left:50px",
          },
          {
            src: 'https://i.ibb.co/6n5bGsB/marten-bjork-unsplash.jpg',
            titulo: "Sobre nosotros",
            subtitulo:"Conoce a nuestro equipo",
            boton: "Nosotros",
            alineacionbtn:"margin-top:5px; margin-left:30px",
            alineaciontitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-top: 170px; margin-left:45px",
            alineacionsubtitulo:"font-family: 'Montserrat', sans-serif; color:black; margin-left:50px",
          },
        ],
      }
    },
  }
</script>
