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
  {
    path: "/perfil_empresa",
    name: "perfil_empresa",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PerfilesEmpresaV.vue")
  },
  {
    path: "/registra_datos",
    name: "registra_datos",
    // route level codesplitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegistraDatos.vue")
  },
  {
    path: "/vista_datos",
    name: "vista_datos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VistaDatos.vue")
  },
  {
    path: "/contactos",
    name: "contactos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactosV.vue")
  },
  
];


const router = new VueRouter({
  routes
});

export default router;
