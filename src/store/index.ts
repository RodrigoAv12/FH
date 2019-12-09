import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    CV:{
      Nombre:'',
      Apellido_Paterno:'',
      Apellido_Materno:'',
      Correo:'',
      Tel:'',
      Fecha_Nacimiento:'',
      Curp:'',
      Pais:'',
      Estado:'',
      Municipio:'',
      CP:'',
      Facebook:'',
      Linkedin:'',
      Perfil_Profesional:'',
      Idioma_Principal:'',
      Idioma_1:'',
      Idioma_Nivel_1:'',
      Idioma_2:'',
      Idioma_Nivel_2:'',
      Idioma_3:'',
      Idioma_Nivel_3:'',
      Titulo_Estudios:'',
      Cedula:'',
      Centro_Estudios:'',
      Estudio_Ciudad:'',
      Estudio_Estado:'',
      Estudio_Pais:'',
      Estudio_Fecha:'',
      Exp_Empresa:'',
      Exp_Puesto:'',
      Exp_Salario:'',
      Exp_Fecha_Inicio:'',
      Exp_Fecha_Salida:'',
      Exp_Tel_Contacto:'',
      Exp_Funcion:'',
      Curso_Tipo:'',
      Curso_Titulo:'',
      Curso_Fecha:'',
      Curso_Medio:'',
      Curso_Tipo_2:'',
      Curso_Titulo_2:'',
      Curso_Fecha_2:'',
      Curso_Medio_2:'',
      Curso_Tipo_3:'',
      Curso_Titulo_3:'',
      Curso_Fecha_3:'',
      Curso_Medio_3:'',
      Sector_1:'',
      Sector_2:'',
      Sector_3:'',
      Area_1:'',
      Area_2:'',
      Area_3:'',
      Software_1:'',
      Software_2:'',
      Software_3:'',
      Habilidad_1:'',
      Habilidad_2:'',
      Habilidad_3:'',
    },
  },
  mutations: {
    agregarDatosPersonales(state, datos_personales){
      state.CV.Nombre = datos_personales.nombre
      state.CV.Apellido_Paterno = datos_personales.apellido_paterno
      state.CV.Apellido_Materno = datos_personales.apellido_materno
      state.CV.Curp = datos_personales.curp
      state.CV.Tel = datos_personales.tel
      state.CV.Fecha_Nacimiento = datos_personales.fecha_nacimiento
      console.log(state.CV.Nombre);
      console.log(state.CV.Apellido_Materno);
      console.log(state.CV.Apellido_Paterno);
      console.log(state.CV.Tel);
      console.log(state.CV.Fecha_Nacimiento);
    },
    agregarUbicacion(state, ubicacion){
      state.CV.Estado = ubicacion.estado
      state.CV.Municipio = ubicacion.municipio
      state.CV.CP = ubicacion.cp
      console.log(state.CV.Estado);
      console.log(state.CV.Municipio);
      console.log(state.CV.CP);
    },
    agregarSocial(state, social){
      state.CV.Facebook = social.facebook
      state.CV.Linkedin = social.linkedin
      console.log(state.CV.Facebook);
      console.log(state.CV.Linkedin);
    },
    agregarPerfilProfesional(state, perfil_pro){
      state.CV.Perfil_Profesional = perfil_pro.perfil
      console.log(state.CV.Perfil_Profesional);
      
    },
    agregarIdiomas(state, idiomas){
      state.CV.Idioma_Principal = idiomas.idioma_principal
      state.CV.Idioma_1 = idiomas.idioma_1
      state.CV.Idioma_Nivel_1 = idiomas.idioma_nivel_1
      state.CV.Idioma_2 = idiomas.idioma_2
      state.CV.Idioma_Nivel_2 = idiomas.idioma_nivel_2
      state.CV.Idioma_3 = idiomas.idioma_3
      state.CV.Idioma_Nivel_3 = idiomas.idioma_nivel_3
      console.log(state.CV.Idioma_Principal);
      console.log(state.CV.Idioma_1);
      console.log(state.CV.Idioma_Nivel_1);
      console.log(state.CV.Idioma_2);
      console.log(state.CV.Idioma_Nivel_2);
      console.log(state.CV.Idioma_3);
      console.log(state.CV.Idioma_Nivel_3);
    },
    agregarHistorialLaboral(state, historial){
      state.CV.Exp_Empresa = historial.exp_empresa
      state.CV.Exp_Puesto = historial.exp_puesto
      state.CV.Exp_Salario = historial.exp_salario
      state.CV.Exp_Fecha_Inicio = historial.exp_inicio
      state.CV.Exp_Fecha_Salida = historial.exp_salida
      state.CV.Exp_Tel_Contacto = historial.exp_contacto
      state.CV.Exp_Funcion = historial.exp_funcion
      console.log(state.CV.Exp_Empresa);
      console.log(state.CV.Exp_Puesto);
      console.log(state.CV.Exp_Salario);
      console.log(state.CV.Exp_Fecha_Inicio );
      console.log(state.CV.Exp_Fecha_Salida);
      console.log(state.CV.Exp_Tel_Contacto);
      console.log(state.CV.Exp_Funcion);
    },
    agregarFormacion(state, formacion){
      state.CV.Titulo_Estudios = formacion.titulo_estudios
      state.CV.Centro_Estudios = formacion.centro_estudios
      state.CV.Estudio_Ciudad = formacion.estudio_Ciudad
      state.CV.Cedula= formacion.cedula
      state.CV.Estudio_Estado = formacion.estudio_estado
      state.CV.Estudio_Pais = formacion.estudio_pais
      state.CV.Estudio_Fecha = formacion.estudio_fecha

      console.log(state.CV.Titulo_Estudios);
      console.log(state.CV.Centro_Estudios );
      console.log(state.CV.Cedula);
      console.log(state.CV.Estudio_Ciudad);
      console.log(state.CV.Estudio_Estado);
      console.log(state.CV.Estudio_Pais);
      console.log(state.CV.Estudio_Fecha);
    },
    agregarCursos(state, cursos){
      
      state.CV.Curso_Tipo = cursos.cursos_tipo
      state.CV.Curso_Titulo = cursos.cursos_titulo
      state.CV.Curso_Fecha = cursos.cursos_fecha
      state.CV.Curso_Medio = cursos.cursos_medio
      console.log(state.CV.Curso_Tipo);
      console.log(state.CV.Curso_Titulo);
      console.log(state.CV.Curso_Fecha);
      console.log(state.CV.Curso_Medio );

      state.CV.Curso_Tipo_2 = cursos.cursos_tipo_2 
      state.CV.Curso_Titulo_2  = cursos.cursos_titulo_2 
      state.CV.Curso_Fecha_2  = cursos.cursos_fecha_2 
      state.CV.Curso_Medio_2  = cursos.cursos_medio_2 
      console.log(state.CV.Curso_Tipo_2 );
      console.log(state.CV.Curso_Titulo_2 );
      console.log(state.CV.Curso_Fecha_2 );
      console.log(state.CV.Curso_Medio_2 );

      state.CV.Curso_Tipo_3 = cursos.cursos_tipo_3
      state.CV.Curso_Titulo_3 = cursos.cursos_titulo_3
      state.CV.Curso_Fecha_3 = cursos.cursos_fecha_3
      state.CV.Curso_Medio_3 = cursos.cursos_medio_3
      console.log(state.CV.Curso_Tipo_3);
      console.log(state.CV.Curso_Titulo_3);
      console.log(state.CV.Curso_Fecha_3);
      console.log(state.CV.Curso_Medio_3);
    },  
    agregarCompetencias(state, competencias){
      state.CV.Sector_1 = competencias.sector_1
      state.CV.Sector_2 = competencias.sector_2
      state.CV.Sector_3 = competencias.sector_3
      state.CV.Area_1 = competencias.area_1
      state.CV.Area_2 = competencias.area_2
      state.CV.Area_3 = competencias.area_3
      state.CV.Software_1 = competencias.software_1
      state.CV.Software_2 = competencias.software_2
      state.CV.Software_3 = competencias.software_3
      state.CV.Habilidad_1 = competencias.habilidad_1
      state.CV.Habilidad_2 = competencias.habilidad_2
      state.CV.Habilidad_3 = competencias.habilidad_3
      console.log(state.CV.Sector_1  );
      console.log(state.CV.Sector_2  );
      console.log(state.CV.Sector_3  );
      console.log(state.CV.Area_1 );
      console.log(state.CV.Area_2 );
      console.log(state.CV.Area_3 );
      console.log(state.CV.Software_1 );
      console.log(state.CV.Software_2 );
      console.log(state.CV.Software_3 );
      console.log(state.CV.Habilidad_1 );
      console.log(state.CV.Habilidad_2 );
      console.log(state.CV.Habilidad_3 );
    },
  },

  actions: {
    agregarDatosPersonales(context, datos_personales){
      context.commit('agregarDatosPersonales', datos_personales)
      console.log('DatosPersonales');
    },
    agregarUbicacion(context, ubicacion){
      context.commit('agregarUbicacion', ubicacion)
      console.log('Ubicacion');
    },
    agregarSocial(context, social){
      context.commit('agregarSocial', social)
      console.log('Social');
    },
    agregarPerfilProfesional(context, perfil_pro){
      context.commit('agregarPerfilProfesional', perfil_pro)
      console.log('PP');
    },
    agregarIdiomas(context, idiomas){
      context.commit('agregarIdiomas', idiomas)
      console.log('Idioma');
    },
    agregarHistorialLaboral(context, historial){
      context.commit('agregarHistorialLaboral', historial)
      console.log('Historial');
    },
    agregarFormacion(context, formacion){
      context.commit('agregarFormacion', formacion)
      console.log('Formacion');
    },
    agregarCursos(context, cursos){
      context.commit('agregarCursos', cursos)
      console.log('Cursos');
    },
    agregarCompetencias(context, competencias){
      context.commit('agregarCompetencias', competencias)
      console.log('Competencias');
    },
    
  },
  getters: {
    
    RegistrarCV: state => {
      return state.CV
    }
  },
  modules: {}
});