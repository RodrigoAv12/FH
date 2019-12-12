<template>
  <div id="app">
    <v-col class="d-flex pa-2" cols="12" sm="12" md="12">
      <v-row justify="space-around">
        <div id="cv" class="instaFade">
          <div class="mainDetails">
            <div id="headshot" class="quickFade"></div>

            <div id="name">
              <h1 class="quickFade delayTwo"></h1>
              <h2 class="quickFade delayThree">
                {{ this.$store.getters.RegistrarCV.Nombre }}
              </h2>
              <h3 class="quickFade delayThree">
                {{ this.$store.getters.RegistrarCV.Apellido_Paterno }}
              </h3>
              <h3 class="quickFade delayThree">
                {{ this.$store.getters.RegistrarCV.Apellido_Materno }}
              </h3>
            </div>

            <div id="contactDetails" class="quickFade delayFour">
              <ul>
                <li>
                  Correo
                  <a>{{ this.$store.getters.RegistrarCV.Correo }}</a>
                </li>
                <li>{{ this.$store.getters.RegistrarCV.Tel }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Fecha_Nacimiento }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Curp }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Pais }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Estado }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Municipio }}</li>
                <li>{{ this.$store.getters.RegistrarCV.CP }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Facebook }}</li>
                <li>{{ this.$store.getters.RegistrarCV.Linkedin }}</li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>

          <div id="mainArea" class="quickFade delayFive">
            <section>
              <article>
                <div class="sectionTitle">
                  <h1>Personal Profile</h1>
                </div>

                <div class="sectionContent">
                  <p>
                    {{ this.$store.getters.RegistrarCV.Pefil_Profesional }}
                  </p>
                </div>
              </article>
              <div class="clear"></div>
            </section>

            <section>
              <div class="sectionTitle">
                <h1>Idioma</h1>
              </div>

              <div class="sectionContent">
                <article>
                  <h2>Job Title at Company</h2>
                  <p class="subDetails">April 2011 - Present</p>

                  <ul>
                    <li>
                      Correo
                      <a>{{
                        this.$store.getters.RegistrarCV.Idioma_Principal
                      }}</a>
                    </li>
                    <li>{{ this.$store.getters.RegistrarCV.Idioma_1 }}</li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Idioma_Nivel_1 }}
                    </li>
                    <li>{{ this.$store.getters.RegistrarCV.Idioma_2 }}</li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Idioma_Nivel_2 }}
                    </li>
                    <li>{{ this.$store.getters.RegistrarCV.Idioma_3 }}</li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Idioma_Nivel_3 }}
                    </li>
                  </ul>
                </article>

                <article>
                  <h2>Titulo de estudios</h2>
                  <p class="subDetails">Janruary 2007 - March 2011</p>
                  <ul>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Titulo_Estudios }}
                    </li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Centro_Estudios }}
                    </li>

                    <li>
                      {{ this.$store.getters.RegistrarCV.Estudio_Municipio }}
                    </li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Estudio_Estado }}
                    </li>
                    <li>{{ this.$store.getters.RegistrarCV.Estudio_Pais }}</li>
                    <li>{{ this.$store.getters.RegistrarCV.Estudio_Fecha }}</li>
                  </ul>
                </article>

                <article>
                  <h2>Empresa</h2>
                  <p class="subDetails">October 2004 - December 2006</p>
                  <ul>
                    <li>{{ this.$store.getters.RegistrarCV.Exp_Empresa }}</li>
                    <li>{{ this.$store.getters.RegistrarCV.Exp_Puesto }}</li>

                    <li>{{ this.$store.getters.RegistrarCV.Exp_Salario }}</li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Exp_Fecha_Inicio }}
                    </li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Exp_Fecha_Salida }}
                    </li>
                    <li>
                      {{ this.$store.getters.RegistrarCV.Exp_Tel_Contacto }}
                    </li>
                    <li>{{ this.$store.getters.RegistrarCV.Exp_Funcion }}</li>
                  </ul>
                </article>
              </div>
              <div class="clear"></div>
            </section>

            <section>
              <div class="sectionTitle">
                <h1>Cursos</h1>
              </div>

              <div class="sectionContent">
                <ul>
                  <li>{{ this.$store.getters.RegistrarCV.Curso_Tipo }}</li>
                  <li>{{ this.$store.getters.RegistrarCV.Curso_Titulo }}</li>

                  <li>{{ this.$store.getters.RegistrarCV.Curso_Fecha }}</li>
                  <li>{{ this.$store.getters.RegistrarCV.Curso_Medio }}</li>
                  <li>{{ this.$store.getters.RegistrarCV.Sector_1 }}</li>
                  <li>{{ this.$store.getters.RegistrarCV.Sector_2 }}</li>
                  <li>{{ this.$store.getters.RegistrarCV.Sector_3 }}</li>
                </ul>
              </div>
              <div class="clear"></div>
            </section>

            <section>
              <div class="sectionTitle">
                <h1>Education</h1>
              </div>

              <div class="sectionContent">
                <article>
                  <h2>AREAS</h2>
                  <p class="subDetails">Qualification</p>
                  <ul>
                    <li>{{ this.$store.getters.RegistrarCV.Area_1 }}</li>
                    <li>{{ this.$store.getters.RegistrarCV.Area_2 }}</li>
                    <li>{{ this.$store.getters.RegistrarCV.Area_3 }}</li>
                  </ul>
                </article>
              </div>
              <div class="clear"></div>
            </section>
          </div>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

html,
body {
  background: #181818;
  font-family: "Lato", helvetica, arial, sans-serif;
  font-size: 16px;
  color: #222;
}

.clear {
  clear: both;
}

p {
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 20px;
  color: #444;
}

#cv {
  width: 90%;
  max-width: 800px;
  background: #f3f3f3;
  margin: 30px auto;
}

.mainDetails {
  padding: 25px 35px;
  border-bottom: 2px solid #cf8a05;
  background: #ededed;
}

#name h1 {
  font-size: 2.5em;
  font-weight: 700;
  font-family: "Rokkitt", Helvetica, Arial, sans-serif;
  margin-bottom: -6px;
}

#name h2 {
  font-size: 2em;
  margin-left: 2px;
  font-family: "Rokkitt", Helvetica, Arial, sans-serif;
}

#mainArea {
  padding: 0 40px;
}

#headshot {
  width: 12.5%;
  float: left;
  margin-right: 30px;
}

#headshot img {
  width: 100%;
  height: auto;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

#name {
  float: left;
}

#contactDetails {
  float: right;
}

#contactDetails ul {
  list-style-type: none;
  font-size: 0.9em;
  margin-top: 2px;
}

#contactDetails ul li {
  margin-bottom: 3px;
  color: #444;
}

#contactDetails ul li a,
a[href^="tel"] {
  color: #444;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

#contactDetails ul li a:hover {
  color: #cf8a05;
}

section {
  border-top: 1px solid #dedede;
  padding: 20px 0 0;
}

section:first-child {
  border-top: 0;
}

section:last-child {
  padding: 20px 0 10px;
}

.sectionTitle {
  float: left;
  width: 25%;
}

.sectionContent {
  float: right;
  width: 72.5%;
}

.sectionTitle h1 {
  font-family: "Rokkitt", Helvetica, Arial, sans-serif;
  font-style: italic;
  font-size: 1.5em;
  color: #cf8a05;
}

.sectionContent h2 {
  font-family: "Rokkitt", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  margin-bottom: -2px;
}

.subDetails {
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 3px;
}

.keySkills {
  list-style-type: none;
  -moz-column-count: 3;
  -webkit-column-count: 3;
  column-count: 3;
  margin-bottom: 20px;
  font-size: 1em;
  color: #444;
}

.keySkills ul li {
  margin-bottom: 3px;
}

@media all and (min-width: 602px) and (max-width: 800px) {
  #headshot {
    display: none;
  }

  .keySkills {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media all and (max-width: 601px) {
  #cv {
    width: 95%;
    margin: 10px auto;
    min-width: 280px;
  }

  #headshot {
    display: none;
  }

  #name,
  #contactDetails {
    float: none;
    width: 100%;
    text-align: center;
  }

  .sectionTitle,
  .sectionContent {
    float: none;
    width: 100%;
  }

  .sectionTitle {
    margin-left: -2px;
    font-size: 1.25em;
  }

  .keySkills {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media all and (max-width: 480px) {
  .mainDetails {
    padding: 15px 15px;
  }

  section {
    padding: 15px 0 0;
  }

  #mainArea {
    padding: 0 25px;
  }

  .keySkills {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }

  #name h1 {
    line-height: 0.8em;
    margin-bottom: 4px;
  }
}

@media print {
  #cv {
    width: 100%;
  }
}

@-webkit-keyframes reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.instaFade {
  -webkit-animation-name: reset, fade-in;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease-in;

  -moz-animation-name: reset, fade-in;
  -moz-animation-duration: 1.5s;
  -moz-animation-timing-function: ease-in;

  animation-name: reset, fade-in;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}

.quickFade {
  -webkit-animation-name: reset, fade-in;
  -webkit-animation-duration: 2.5s;
  -webkit-animation-timing-function: ease-in;

  -moz-animation-name: reset, fade-in;
  -moz-animation-duration: 2.5s;
  -moz-animation-timing-function: ease-in;

  animation-name: reset, fade-in;
  animation-duration: 2.5s;
  animation-timing-function: ease-in;
}

.delayOne {
  -webkit-animation-delay: 0, 0.5s;
  -moz-animation-delay: 0, 0.5s;
  animation-delay: 0, 0.5s;
}

.delayTwo {
  -webkit-animation-delay: 0, 1s;
  -moz-animation-delay: 0, 1s;
  animation-delay: 0, 1s;
}

.delayThree {
  -webkit-animation-delay: 0, 1.5s;
  -moz-animation-delay: 0, 1.5s;
  animation-delay: 0, 1.5s;
}

.delayFour {
  -webkit-animation-delay: 0, 2s;
  -moz-animation-delay: 0, 2s;
  animation-delay: 0, 2s;
}

.delayFive {
  -webkit-animation-delay: 0, 2.5s;
  -moz-animation-delay: 0, 2.5s;
  animation-delay: 0, 2.5s;
}
</style>
