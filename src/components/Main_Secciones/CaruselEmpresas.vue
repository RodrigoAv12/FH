<template>
<div>
<div>
<v-container grid-list-xl >
              <v-layout justify-center="true">
                <v-card  elevation="0" color="#FAFAFA">
                  <v-row justify="center">
                    <v-card-title style="color:black;font-size:43px; font-family:'Montserrat', sans-serif;">
                      Ultimas Empresas Registradas
                    </v-card-title>
                  </v-row>
                </v-card>
              </v-layout>
</v-container>
    <v-carousel cycle="true" interval="5000" hide-delimiter-background show-arrows-on-hover>  
      <v-carousel-item v-for="item in empresas" :key="item" >
        <v-container  grid-list-xl >
          <v-layout justify-space-around="true" row wrap jus>
            <v-flex  xs4 sm4 md3>
              <v-card  elevation="0" color="#FAFAFA">
                <v-row justify="center">
                <v-card-title style="color:black; font-family:'Montserrat', sans-serif;">
                  {{item.titulo}}
                </v-card-title>
                <v-img   :src="item.imagen"></v-img>
                  <v-rating :value="item.valoracion" x-small="true" class="hidden-sm-and-up" ></v-rating>
                  <v-rating :value="item.valoracion" class="hidden-sm-and-down" ></v-rating>
                </v-row>
              </v-card>
            </v-flex>
            <v-flex  xs4 sm4 md3>
              <v-card  elevation="0" color="#FAFAFA">
                <v-row justify="center">
                <v-card-title style="color:black; font-family:'Montserrat', sans-serif;">
                  {{item.titulo2}}
                </v-card-title>
                <v-img   :src="item.imagen2"></v-img>
                  <v-rating :value="item.valoracion2" x-small="true" class="hidden-sm-and-up" ></v-rating>
                  <v-rating :value="item.valoracion2" class="hidden-sm-and-down" ></v-rating>
                </v-row>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
</div>
</div>
</template>

<script>
  export default {
    data () {
      return {
          empresas:[
              {
              titulo:"StarBucks",
              imagen:"https://www.stickpng.com/assets/images/58428cc1a6515b1e0ad75ab1.png",
              valoracion:4,
              titulo2:"HugoBoss",
              imagen2:"http://assets.stickpng.com/thumbs/58598f9f4f6ae202fedf28c3.png",
              valoracion2:3,
              },
              {
              titulo:"Apple",
              imagen:"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c516.png",
              valoracion:5,
              titulo2:"Swaroski",
              imagen2:"http://assets.stickpng.com/thumbs/5a1c3ca0f65d84088faf142e.png",
              valoracion2:3
              },
              {
              titulo:"Motorola",
              imagen:"http://assets.stickpng.com/thumbs/5848103dcef1014c0b5e494e.png",
              valoracion:4,
              titulo2:"Samsung",
              imagen2:"http://assets.stickpng.com/thumbs/58482500cef1014c0b5e49cf.png",
              valoracion2:3,
              },
              {
              titulo:"Huawei",
              imagen:"https://www.stickpng.com/assets/images/58ac4d880aaa10546adf2711.png",
              valoracion:5,
              titulo2:"BMW",
              imagen2:"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c46e.png",
              valoracion2:5
              },
            ],
      }
    },
  }
</script>