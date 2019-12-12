<template>
    <section class="full-width formated-section">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<h4 style="font-family:'Montserrat', sans-serif;">Personas</h4>
					<a href="#"><span>Registrar mi CV</span></a><br>
          <a href="#"><span>Postularme</span></a><br>
          <a href="#"><span>Entrevista de Trabajo</span></a><br>
          <a href="#"><span>Perfil del Candidato</span></a><br>
          <a href="#"><span>Mis Favoritas</span></a><br>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<h4 style="font-family:'Montserrat', sans-serif;">Empresas</h4>
					<a href="#"><span>Registrar</span></a><br>
          <a href="#"><span>Empresa</span></a><br>
          <a href="#"><span>Publicar</span></a><br>
          <a href="#"><span>Vacante</span></a><br>
          <a href="#"><span>Bolsa de Trabajo</span></a><br>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<h4 style="font-family:'Montserrat', sans-serif;">Servicios</h4>
					<a href="#"><span>Bolsa de Trabajo</span></a><br>
          <a href="#"><span>Atraccion de Talento</span></a><br>
          <a href="#"><span>Outsourcing</span></a><br>
          <a href="#"><span>Perfiles de Personalidad</span></a><br>
          <a href="#"><span>Gestion Empresarial</span></a><br>
          <a href="#"><span>Gestion de Talento Humano</span></a><br>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <v-row align="center" justify="space-around">
          <button> <v-icon>fab fa-facebook</v-icon></button>
          <button><v-icon>fab fa-twitter-square</v-icon></button>
          <button><v-icon>fab fa-youtube</v-icon></button>
          </v-row><br>
					<h4 style="font-family:'Montserrat', sans-serif;">Ayuda</h4>
					<a href="#"><span>Aviso de Privacidad</span></a><br>
          <a href="#"><span>Contacto</span></a><br>
          <a href="#"><span>Ayuda</span></a><br>
				</div>
			</div><hr>
		</div>
	</section>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram',
      ],
    }),
  }
</script>

<style scoped>
span{
  font-family: 'Montserrat', sans-serif;
  color: dimgray;
}
.idd{
  color: black;
}
</style>