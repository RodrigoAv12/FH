<template>
  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators" style="padding-bottom: 50px ">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div
          class="carousel-item active"
          style="background-image: url('https://picsum.photos/id/201/5184/3456')"
        >
          <div class="carousel-caption d-none d-block" style="margin-bottom: 100px">
            <h2 class="display-4 text-color-black">Quality is more than making a good product</h2>
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div
          class="carousel-item"
          style="background-image: url('https://picsum.photos/id/885/4000/2667')"
        >
          <div class="carousel-caption d-none d-block" style="margin-bottom: 100px">
            <h2 class="display-4">Certification Courses</h2>
            <p class="lead">This is a description.</p>
            <button type="submit" class="btn btn-dark" style="margin-top: 10px">
              <h4>Get Started</h4>
            </button>
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" style="padding-bottom: 50px"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://i.ibb.co/8DpVGxP/marten-bjork-6d-W3xy-Qvc-YE-unsplash.jpg",
          boton: "Registrarme",
          page: "/RegistroUsuario",
          alineacionbtn: "margin-top:250px; margin-left:30px"
        },
        {
          src: "https://i.ibb.co/Cz13PyQ/h.jpg",
          boton: "Servicios Empresariales",
          alineacionbtn: "margin-top:250px; margin-left:50px"
        },
        {
          src: "https://i.ibb.co/vsx4wTg/sh.jpg",
          boton: "Promociones",
          alineacionbtn: "margin-top:250px; margin-left:30px"
        },
        {
          src: "https://i.ibb.co/6n5bGsB/marten-bjork-unsplash.jpg",
          boton: "Nosotros",
          alineacionbtn: "margin-top:250px; margin-left:30px"
        }
      ]
    };
  }
};
</script>
<style  scoped>
.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>