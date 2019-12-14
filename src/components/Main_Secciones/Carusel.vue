<template>
  <header>

			<form>
        <h1>Buscar Empleo</h1>
        <h6 style="font-family:'Montserrat', sans-serif;">¿Qué?</h6><br>
        <v-text-field
            label="Titulo, Palabra Clave o Empresa"
            outlined
            style="font-family:'Montserrat', sans-serif;"
          ></v-text-field>
        <h6 style="font-family:'Montserrat', sans-serif;">Gerente, Mercadotecnia, Compras, Ingeniero</h6><br>
        <h6 style="font-family:'Montserrat', sans-serif;">¿Donde?</h6><br>
        <v-text-field
            label="Titulo, Palabra Clave o Empresa"
            outlined
            style="font-family:'Montserrat', sans-serif;"
          ></v-text-field>
        <h6 style="font-family:'Montserrat', sans-serif;">DF, Estado de México, Nuevo León, Jalisco</h6>
        <v-btn depressed large rounded block color="secondary" style="margin-top:30px; font-family: 'Montserrat', sans-serif;"
                  >Buscar Empleo</v-btn
                >
			</form>
		</div>
	</section>
        
</template>

<style scoped>
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
      margin-right: 600px;
      height: 550px;
			width: 500px;
		}
.banner{
	position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	background-color: #F5F5F5;
	background-size: cover;
	background-position: center;
	transition: all .1s ease-out;
	background-image: url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80');
	animation: banner 28s infinite linear;
}
.banner-content{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	color: #FFF;
	background-color: rgba(0, 22, 40, .6);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.banner-content h1{
	margin: 0;
	padding: 0;
	padding-bottom: 30px;
	font-size: 40px;
	text-align: center;
}
.banner-content a{
	text-decoration: none;
	color: #FFF;
	padding: 9px 20px;
	border: 1px solid #FFF;
	text-transform: uppercase;
	transition: all .3s ease-in-out;
}
.banner-content a:hover{
	background-color: #fff;
	color: #333;
}
@media only screen and (max-width: 400px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: auto;
			width: auto;
}}
@media only screen and (max-width: 768px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: auto;
			width: auto;
}}
@media only screen and (max-width: 900px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: auto;
			width: auto;
}}
@media only screen and (max-width: 1264px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: auto;
			width: auto;
}}

    <div class="absolute">
      <Principal/>
    </div>
