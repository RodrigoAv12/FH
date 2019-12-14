<template>
<div >
    <v-parallax
      height="300"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" 
    >
      <v-container>
        <h3 style="font-family: 'Montserrat', sans-serif;">Busca Empleo Ahora</h3>
        <v-row justify="center">
          <v-col cols="12" sm="5" md="5">
            <v-row justify="center">
              <v-col
                cols="12"
                md="12"
                justify-self="start"
                style="margin-bottom:-35px"
              >
                <p style="font-family: 'Montserrat', sans-serif;">¿Qué?</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Titulo, Palabra Clave o Empresa"
                  solo
                ></v-text-field
                ><p style="font-family: 'Montserrat', sans-serif;">Gerente, Mercadotecnia, Compras, Ingeniero</p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="5" md="5">
            <v-row justify="center">
              <v-col
                cols="12"
                md="12"
                justify-self="start"
                style="margin-bottom:-35px"
              >
                <p style="font-family: 'Montserrat', sans-serif;">¿Dónde?</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Titulo, Palabra Clave o Empresa"
                  solo
                ></v-text-field
                ><p style="font-family: 'Montserrat', sans-serif;">DF, Estado de México, Nuevo León, Jalisco</p>
              </v-col>
            </v-row>
          </v-col>

          <v-col md="2" cols="12">
            <v-row justify="center">
              <v-col>
                <v-btn depressed large rounded color="secondary" style="margin-top:30px; font-family: 'Montserrat', sans-serif;"
                  >Buscar Empleo</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
</div>
</template>