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
  }
  .img4{
    width: auto;
  height: 80px;
  margin-left: 95px;
}
.ra5{
  margin-left: 95px;
}
.img6{
    width: auto;
  height: 80px;
  margin-left: 130px;
}
.ra7{
  margin-left: 95px;
}
.img3{
  width: 150px;
  height: auto;
  margin-left: 95px;
}
.ra4{
  margin-left: 60px;
}
.img7{
  width: 125px;
  height: 125px;
  margin-left: 105px;
}
.ra8{
  margin-left: 55px;
}
}
</style>
