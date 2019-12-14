<template>

  <section class="full-width formated-section">
    <h1 class="text-center" style="font-family:'Montserrat', sans-serif;">
      Empresas mejor valoradas!
    </h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
        
          <img
            src="https://i.ibb.co/Pctz82v/dd127127306ca52c740b75fca6c4f4e6.png"
            alt="Sucursal"
            class="img"
          /><p></p>
          <div>
            <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra"
            ></v-rating>

          </div>
          
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div class="col-12">
            <v-row>
          <img
            src="https://i.ibb.co/nfg352K/58ac4d880aaa10546adf2711.png"
            alt="Sucursal"
            class="img1"
          />
          <p></p>
          <div>
            <v-rating
              v-model="rating2"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra2"
            ></v-rating>
          </div>
            </v-row>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/7jwjbWp/58428cc1a6515b1e0ad75ab1.png"
            alt="Sucursal"
            class="img2"
          />
          <p></p>
          <div>
            <v-rating
              v-model="rating3"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra3"
            ></v-rating>

          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/pbw2FCX/1200px-Apple-logo-black-svg.png"
            alt="Sucursal"
            class="img3"
          />
                    <p></p>
            <v-rating
              v-model="rating4"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra4"
            ></v-rating>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/0yyRXMK/logo-coca-cola-actual.png"
            alt="Sucursal"
            class="img4"
          />
                    <p></p>
          <div>
            <v-rating
              v-model="rating5"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra5"
            ></v-rating>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/GcXD5nX/Ford-Motor-Company-Logo.png"
            alt="Sucursal"
            class="img5"
          />
          <p></p>
          <div>
            <v-rating
              v-model="rating6"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra6"
            ></v-rating>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/k9bBs9Q/Samsung-logo.png"
            alt="Sucursal"
            class="img6"
          />
          <p></p>
          <div>
            <v-rating
              v-model="rating7"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra7"
            ></v-rating>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <img
            src="https://i.ibb.co/9h209yD/1200px-BMW-svg.png"
            alt="Sucursal"
            class="img7"
          />
                    <p></p>
          <div>
            <v-rating
              v-model="rating8"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              class="ra8"
            ></v-rating>
          </div>
        </div>

        <br />
      </div>
    </div>
    <v-divider style="margin-left:220px;margin-right:220px"></v-divider
    ><br /><br />
  </section>
</template>

<script>
export default {
  data: () => ({
    rating: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
    rating6: 0,
    rating7: 0,
    rating8: 0
  })
};
</script>
<style scoped>
.container{
  align-items: center;
}
#te{
  margin-left: 130px;
}
#te2{
  margin-left: 110px;
  margin-top: 15px;
}
#te3{
  margin-left: 60px;
  margin-top: 15px;
  
}
#te4{
  margin-left: -115px;
  margin-top: 165px;
  
}
#te5{
  margin-left: 135px;
    margin-top: 20px;
}
#te6{
  margin-left: 135px;
  margin-top: 15px;
}
#te7{
  margin-left: 70px;
  margin-top: 15px;
}
#te8{
  margin-left: -100px;
  margin-top: 117px;
}
.img {
  width: 200px;
  height: 150px;
  margin-left: 97px;
}
.img1 {
  width: 150px;
  height: 150px;
  margin-left: 94px;
}
.img2 {
  width: 150px;
  height: 150px;
  margin-left: 60px;
}
.img3 {
  width: 150px;
  height: 170px;
  margin-left: 27px;
  margin-top: -20px;
}
.img4 {
  width: 200px;
  height: 100px;
  margin-left: 100px;
}
.img5 {
  width: 200px;
  height: 100px;
  margin-left: 70px;
}
.img6 {
  width: 200px;
  height: 100px;
  margin-left: 40px;
  
}
.img7 {
  width: 120px;
  height: 120px;
  margin-left: 45px;
  margin-top: -20px;
}
.ra {
  margin-left: 90px;
}
.ra2 {
  margin-left: 60px;
}
.ra3 {
  margin-left: 30px;
}
.ra5 {
  margin-left: 90px;
}
.ra6 {
  margin-left: 60px;
}
.ra7 {
  margin-left: 30px;
}
@media only screen and (max-width: 768px) {

  .tex {
    margin-left: 125px;
  }
  .img {
  width: 200px;
  height: 150px;
  margin-left: 150px;
  }
  .ra{
      margin-left: 140px;
  }
  .img1 {
  width: 150px;
  height: auto;
  margin-left: 170px;
  }
  .ra2{
      margin-left: 135px;
  }
  .img2{
      width: 150px;
  height: auto;
  margin-left: 170px;
  }
  .ra3{
    margin-left: 135px;
  }
.img3{
  width: 150px;
  height: auto;
  margin-left: 170px;
}
.ra4{
  margin-left: 135px;
}
.img4{
    width: auto;
  height: 80px;
  margin-left: 130px;
}
.ra5{
  margin-left: 135px;
}
.img5{
      width: auto;
  height: 80px;
  margin-left: 130px;
}
.ra6{
  margin-left: 135px;
}
.img6{
      width: auto;
  height: 80px;
  margin-left: 170px;
}
.ra7{
  margin-left: 135px;
}
.img7{
  width: 150px;
  height: auto;
  margin-left: 170px;
}
.ra8{
  margin-left: 135px;
}
}
@media only screen and (max-width: 1264px) {
    .img2{
      width: 150px;
  height: auto;
  margin-left: 125px;
  }
  .ra3{
    margin-left: 95px;

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
