<template>
        
        <section class="banner">
		<div class="banner-content">

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
@media only screen and (max-width: 768px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: 550px;
			width: 500px;
}}
@media only screen and (max-width: 900px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: 550px;
			width: 500px;
}}
@media only screen and (max-width: 1264px) {
form{
			background-color: white;
			border-radius: 3px;
			color: #000;
			font-size: 0.8em;
			padding: 20px;
			margin: 0 auto;
      		height: 550px;
			width: 500px;
}}

@keyframes banner{
	0%{
		background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	}
	25%{
		background-image: url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	}


	26%{
		background-image: url('https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80');
	}
	50%{
		background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	}


	51%{
		background-image: url('https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	}
	75%{
		background-image: url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80');
	}
	

	76%{
		background-image: url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
	}
	100%{
		background-image: url('https://images.unsplash.com/photo-1530971013997-e06bb52a2372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=986&q=80');
	}

}
</style>
