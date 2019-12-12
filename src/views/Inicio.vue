<template>
<v-app>
<div>
    <NavBar></NavBar>
    <Carusel></Carusel><br>
    <Pasos></Pasos>
    <EstrellasEmpresa></EstrellasEmpresa><br>
    <CaruselEmpresas></CaruselEmpresas>
    <Reclutaempresa></Reclutaempresa><br><hr>
    <Footer></Footer>
</div>
</v-app>
</template>

<script>
// @ is an alias to /src
import EstrellasEmpresa from "@/components/Main_Secciones/EstrellasEmpresas.vue";
import Reclutaempresa from "@/components/Main_Secciones/Reclutaempresa.vue";
import Carusel from "@/components/Main_Secciones/Carusel.vue";
import Footer from "@/components/Main_Secciones/Footer.vue";
import NavBar from "@/components/Main_Secciones/NavBar.vue";
import Pasos from "@/components/Main_Secciones/Pasos.vue";
import CaruselEmpresas from "@/components/Main_Secciones/CaruselEmpresas.vue";
export default {
  name: "Principa",
  components: {
    CaruselEmpresas,
    Pasos,
    NavBar,
    Footer,
    Carusel,
    EstrellasEmpresa,
    Reclutaempresa
  }
};
</script>
