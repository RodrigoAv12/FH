<template>
<div>
        <v-row ></v-row>
            <v-row justify="center">
              <v-card class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
                <h1 style="PayPalSansBig-Light,Helvetica Neue,Arial,sans-serif;">Encuentra el mejor trabajo de acuerdo a tu perfil y experiencia</h1>
              </v-card>
            </v-row>
            <v-row justify="center">
              <v-card class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
                <h3 style="margin-top:-40px; PayPalSansSmall-Regular,Helvetica Neue,Arial,sans-serif;">Te ayudamos a OBNTENER TRABAJO en solo 4 pasos...</h3>
              </v-card>
            </v-row>
<v-container>
          <v-row no-gutters>
            <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
              <v-row justify="center">
                <v-img  src="https://image.flaticon.com/icons/png/512/364/364090.png" max-height="100" max-width="100"></v-img>
                <div style="color:black; font-size:15px; margin-top:30px" >Elige un usuario y contrasena</div>
                <div style="color:black; font-size:15px" >Anade tu CV a nuestra platilla</div>
                
                <div style="color:black; font-size:25px;margin-top:105px" >Registrate</div>
                  
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
              <v-row justify="center">
                <v-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///+urq7o6Oizs7NgYGDi4uLNzc3Gxsa/v7+FhYWTk5Ompqb6+vr39/d1dXUYGBhubm7c3Nw3NzcUFBQjIyOhoaFbW1vX19ctLS2ampqLi4tUVFRmZmZERERKSkp8fHwcHBwNDQ0xMTEnJyemVI6gAAAEyElEQVR4nO2d61biMBRGKRS5lLvCoKIyOO//jLPUNSOm5Dtp05McWN/+axOzoSQn916B2S9XPcuslnvBoIf//JzbIIAqxrCfu/RBlBGGucseSHvDUe6iBwJ/itDwOl5S4TW9CcM+DWloHhrS0D40pKF9aEhD+9CQhvahIQ1lHp/KSTkVH3ubTVpRrjMb3v8bCCrxc2P0rzCD+5yGy+/nF4/gOWlsGjJ/yGf4cp5g4S/Ic4ygMLCpavgQWpC7OMPilMvQzfzN92CkYHHIZTh3knhrm1jDX5kMH90kA9+TsW/pNpPh0E2y8D15rTVNzXDufXQTZYi+QiuGvVF7v4wtfhPD3rDfMmo7CqUwY6gGDWMMD24Sb12qiabhg5vE2x5qohrTLJwkQg9KB1XDnZPEG5dqott7+hmY5lm9kbJ/iPo4eij38c8UB5nWwOn2gKuz0YnFeKmvcwFNw5mbZHHUF6qhZ/jLbSs+2P9OYnWOmqGnyzd/TeP1jZbh1JsO93W6R8mwFnR/kzo4VTJ0x6DOSdzw6xjihbloZKx7VAxXULDYXEw0nLZCbGRVDGsNocOFCDxitE3osagYDoQyzZoVQ+IuuWFtJNil9pqCqjeE+iembPiCkn1l7BAxlvgBHP/RMBR2cRR1w4ZGNVDXWsPwSSzRe8eGqWdm5HrR7SpKVZMEigQ1DF+lAtUCN6l5EYCVqUprIc2zVG6CE4ryZGCQpBPT4AJfCEzvL3UmQzkiQaW4dIvWVlxOOGs5SzqYCN0xrf7h67G6zDr1iBtXfdHQPjSkoX1oSEP70JCG9qEhDe1DQxp6qGLHB8PZD3MYxi1qbsouvWHEJqZWwM1dWUaEuwau6swzb9E1qUf1o6Y7W5F6ZsZdVqpP6tm12vpubeASnSwzM11Tm+lRNzzFzLM0Z4wElVr806RbB8QcfoOKcelhmAZxrSMjbxrah4Y0tA8NaWgfGtLQPjSkoX1oSEMP77PNXRpG0h0UOoZJR70X6JQoJcPII4Ma425uUDcUtq51zz61oX+HrBZoq/9tzMykPq8tcn9IC1IbLlEyFZKfKph22qIoJkBQxzByw2RT8P53nRZ/GLePqRkbeHypWly67JdpmEl73xl509A+NKShfWhIQ/vQkIb2oSEN7UNDGvoY7vppqKTllzqGh3SbgopilGGcJvFSdnxM+E2Ml8JT925jzDu14e3PW6Q3tHdeW9eg68BuYg748oGoioYBByd2C2z0dVr8tL9EPHOhFLUdykEiNjsc0jDypuEVQEMa2oeGNLQPDWloHxrS0D40pKF9aEhD+9CQhvahIQ3tQ0Maejg9T8aIyTS8iKepkNczvJxHx/CIEn4xhwfHnhGysgNdZKliGLbc5CVIcB2UF/i4VAyDChV4bW7YPj+Ql4ZhwDv6iXBM9Sehq4/8X2LO9TRPAYaheflPvM5pCK8P7SyvnG9pSG0aVtGg+/My1jTwftT/BO4o9mfA1qKVYdB7etUtfq+3rcYjxBhHWj9YSXlVcM0QI28a2oeGNLQPDWloHxrS0D40pKF9aEhD+9CQhvahIQ3tQ0M/8KgGQ5StDUe5ix7IqLUhPIzCENgB/vU6fojwJRUM8fWfRhBuaZAmc/frbW4DyJ/lXjD4CytidXE5VoTFAAAAAElFTkSuQmCC" max-height="100" max-width="100"></v-img>
                <div style="color:black; font-size:15px;margin-top:30px" >Ingresa el puesto o zona de trabajo</div>
                <div style="color:black; font-size:15px" >Revisa el listado de vacantes</div>
                <div style="color:black; font-size:15px" >Elige el mas adecuado a tu perfil</div>

                <div style="color:black; font-size:25px;margin-top:80px" >Postulate</div>
                  
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
              <v-row justify="center">
                <v-img src="https://cdn.pixabay.com/photo/2015/11/02/12/31/interview-1018332_960_720.png" max-height="100" max-width="100"></v-img>
                <div style="color:black; font-size:15px; margin-top:60px" >Administra tus postulaciones</div>
                <div style="color:black; font-size:15px" >Consulta al reclutador</div>
                <div style="color:black; font-size:15px" >Recibe alertas de tu candidatura</div>
                <div style="color:black; font-size:15px" >Revisa tu fecha de entrevista</div>

                <div style="color:black; font-size:25px;margin-top:65px">Entrevistate</div>
                  
              </v-row>
        </v-card>
      </v-col>
      <v-col
            cols="12"
            sm="3"
            >
              <v-card
              class="ma-3 pa-6"
              color="#FAFAFA"
              outlined
              tile>
              <v-row justify="center">
                <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTF2vTW5iR5uZo_S9__qYyxZXNylj_4zShTUJ_hoPIdx827cPa&s" max-height="100" max-width="100"></v-img>
                <div style="color:black; font-size:15px;margin-top:25px" >Recibe notificacion si eres finalista</div>
                <div style="color:black; font-size:15px" >Envia tu informacion</div>
                <div style="color:black; font-size:15px" >Recibe la info. de la empresa</div>
                <div style="color:black; font-size:15px" >Haz el curso de induccion</div>

                <div style="color:black; font-size:25px;margin-top:65px" >A trabajar!</div>
                  
              </v-row>
        </v-card>
      </v-col>
          </v-row>
    </v-container>
            <v-divider  style="margin-left:250px;margin-right:250px"></v-divider>
            <v-row style="margin-top:50px"></v-row>
</div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>