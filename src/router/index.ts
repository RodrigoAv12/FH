import Vue from "vue";
import VueRouter from "vue-router";
// import Index from "@/views/Inicio.vue";


Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "index",
  //   component: Index
  // },
  {
    path: "/inicio",
    name: "inicio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inicio.vue")
  },
  {
    path: "/registro_cv",
    name: "registro_cv",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegistroCV.vue")
  },
  {
    path: "/navegador_usuario",
    name: "navegador_usuario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NavegadorUsuario.vue")
  },
  
];


const router = new VueRouter({
  routes
});

export default router;
