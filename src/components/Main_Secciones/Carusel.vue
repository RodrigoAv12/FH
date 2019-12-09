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
            boton: "Registrarme",
            page: "/RegistroUsuario",
            alineacionbtn:"margin-top:250px; margin-left:30px",
          },
          {
            src: 'https://i.ibb.co/Cz13PyQ/h.jpg',
            boton: "Servicios Empresariales",
            alineacionbtn:"margin-top:250px; margin-left:50px",
          },
          {
            src: 'https://i.ibb.co/vsx4wTg/sh.jpg',
            boton: "Promociones",
            alineacionbtn:"margin-top:250px; margin-left:30px",
          },
          {
            src: 'https://i.ibb.co/6n5bGsB/marten-bjork-unsplash.jpg',
            boton: "Nosotros",
            alineacionbtn:"margin-top:250px; margin-left:30px",
          },
        ],
      }
    },
  }
</script>
