<template>
  <v-app>
    <div>
      <Carusel></Carusel>
      <br />
      <v-divider style="margin-left:250px;margin-right:250px"></v-divider>
      <Pasos></Pasos>
      <EstrellasEmpresa></EstrellasEmpresa>
      <CaruselEmpresas></CaruselEmpresas>
      <Principal></Principal>
      <Reclutaempresa></Reclutaempresa>
      <br />
      <br />
      <br />
      <br />
     
    </div>
  </v-app>
</template>

<script>
import Principal from "@/components/Main_Secciones/Principal.vue";
import EstrellasEmpresa from "@/components/Main_Secciones/EstrellasEmpresas.vue";
import Reclutaempresa from "@/components/Main_Secciones/Reclutaempresa.vue";
import Carusel from "@/components/Main_Secciones/Carusel.vue";
import Pasos from "@/components/Main_Secciones/Pasos.vue";
import CaruselEmpresas from "@/components/Main_Secciones/CaruselEmpresas.vue";

export default {
  name: "inicio",
  components: {
    CaruselEmpresas,
    Pasos,
    Carusel,
    Principal,
    EstrellasEmpresa,
    Reclutaempresa
  }
};
</script>

