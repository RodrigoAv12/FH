<template>
<div>
  <v-carousel cycle="true" light="true" hide-delimiter-background="true" >
    <v-carousel-item v-for="item in empresas"
            :key="item" >
      <v-sheet
        color="white"
        height="100%"
        tile
      >
      <v-row justify="center">
      <div style="color:black" class="display-3">Empresas mejor valoradas</div>
      </v-row>
        <v-container>
          <v-row no-gutters>
            <v-col
            cols="12"
            sm="3"
            
            >
              <v-card
              class="ma-3 pa-6"
              color="white"
              outlined
              tile>
              
              <v-row style="margin-top:70px" justify="center">
                
                  <div style="color:black" class="display-3">{{item.titulo}}</div>
                  <v-img :src="item.imagen" max-width="100" max-height="100" min-height="100" min-width="100"></v-img>
                  <v-rating :value="item.valoracion"></v-rating>
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3">
              <v-card
              class="ma-3 pa-6"
              color="white"
              outlined
              tile>
              <v-row style="margin-top:70px" justify="center">
                  <div style="color:black" class="display-3">{{item.titulo2}}</div>
                  <v-img :src="item.imagen2" max-width="150" max-height="100" min-height="100" min-width="150"></v-img>
                  <v-rating :value="item.valoracion2"></v-rating>
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            
            >
              <v-card
              class="ma-3 pa-6"
              color="white"
              outlined
              tile>
              <v-row style="margin-top:70px" justify="center">
                  <div style="color:black" class="display-3">{{item.titulo3}}</div>
                  <v-img :src="item.imagen3" max-width="100" max-height="100" min-height="100" min-width="100"></v-img>
                  <v-rating :value="item.valoracion3"></v-rating>
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="white"
              outlined
              tile>
              <v-row style="margin-top:70px" justify="center">
                  <div style="color:black" class="display-3">{{item.titulo4}}</div>
                  <v-img :src="item.imagen4" max-width="100" max-height="100" min-height="100" min-width="100"></v-img>
                  <v-rating :value="item.valoracion4"></v-rating>
              </v-row>
        </v-card>
      </v-col>
      
    </v-row>
    

    
    </v-container>

  
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
            <v-row style="margin-top:20px"></v-row>
              <v-divider  style="margin-left:250px;margin-right:250px"></v-divider><br>
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
              titulo2:"Best Buy",
              imagen2:"https://www.merca20.com/wp-content/uploads/2015/07/bestbuy.png",
              valoracion2:3,
              titulo3:"Apple",
              imagen3:"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c516.png",
              valoracion3:5,
              titulo4:"Lenovo",
              imagen4:"https://www.muycomputerpro.com/universo-lenovo/wp-content/uploads/2019/02/lenovo-logo-ok.png",
              valoracion4:3
              },
              {
              titulo:"Motorola",
              imagen:"http://assets.stickpng.com/thumbs/5848103dcef1014c0b5e494e.png",
              valoracion:4,
              titulo2:"Samsung",
              imagen2:"http://assets.stickpng.com/thumbs/58482500cef1014c0b5e49cf.png",
              valoracion2:3,
              titulo3:"Huawei",
              imagen3:"https://www.stickpng.com/assets/images/58ac4d880aaa10546adf2711.png",
              valoracion3:5,
              titulo4:"BMW",
              imagen4:"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c46e.png",
              valoracion4:5
              },
            ]
      }
    },
  }
</script>