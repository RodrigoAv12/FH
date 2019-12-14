<template>
      <section class="full-width formated-section">
		<h1 class="text-center font-oswald" style="font-family:'Montserrat', sans-serif;">Encuentra el mejor trabajo de acuerdo a tu perfil y experiencia!</h1><br>
    <h3 class="text-center font-oswald" style="font-family:'Montserrat', sans-serif;">Te ayudamos a OBTENER TRABAJO en solo 4 pasos...</h3><br>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
					<img src="https://i.ibb.co/4JmvGgP/regis.png" alt="Sucursal" class="img-responsive"><br>
					<h3 class="text-center" style="font-family:'Montserrat', sans-serif;">Registrate!</h3>
					<span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Elige un usuario y contraseña.
					</span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Añade tu CV a nuestra plantilla.
          </span>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
					<img src="https://i.ibb.co/FbzjjbJ/postulate.png" alt="Sucursal" class="img-responsive2">
					<h3 class="text-center" style="font-family:'Montserrat', sans-serif;">Postulate!</h3>
					<span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Ingresa el puesto o zona de trabajo.
					</span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Revisa el listado de vacantes.
          </span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						 - Elige el mas adecuado a tu perfil.
          </span>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
					<img src="https://i.ibb.co/0cwWB4M/entrevis.png" alt="Sucursal" class="img-responsive3">
					<h3 class="text-center" style="font-family:'Montserrat', sans-serif;">Entrevistate!</h3>
					<span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Administra tus postulaciones.
					</span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Recibe alertas de tu candidatura.
          </span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Revisa tu fecha de entrevista.
          </span>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
					<img src="https://i.ibb.co/s91fmzd/traba.png" alt="Sucursal" class="img-responsive4">
					<h3 class="text-center" style="font-family:'Montserrat', sans-serif;">A Trabajar!</h3>
					<span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Recibe notificaciones si eres finalista.
					</span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Envia tu informacion.
          </span><br>
          <span class="tex" style="font-family:'Montserrat', sans-serif;">
						- Recibe la informacion de la empresa.
          </span><br>

          
				</div>
        <v-row justify="center">
              <v-btn x-large rounded color="secondary" style="margin-right:15px; font-family: 'Montserrat', sans-serif;">Encontrar Trabajo</v-btn>
              </v-row><br>
			</div>
		</div><br>
	</section>
    
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>
<style>

.img-responsive{
  width: 150px;
  height: auto;
  margin-left: 65px;
  
}
.img-responsive2{
  width: 150px;
  height: auto;
  margin-left: 55px;
  
}
.img-responsive3{
  width: 150px;
  height: auto;
  margin-left: 55px;
  
}
.img-responsive4{
  width: 150px;
  height: auto;
  margin-left: 70px;
  
}
@media only screen and (max-width: 768px) {
	.tex{
	margin-left: 125px;
}
.img-responsive{
  width: 150px;
  height: auto;
  margin-left: 200px;
  
}
.img-responsive2{
  width: 150px;
  height: auto;
  margin-left: 185px;
  
}
.img-responsive3{
  width: 150px;
  height: auto;
  margin-left: 185px;
  
}
.img-responsive4{
  width: 150px;
  height: auto;
  margin-left: 200px;
  
}}
</style>