<template>
  <v-container>
    <v-col cols="12" sm="6" justify-self="center">
      <div>
        <v-col> 
          <v-row justify-self="">
            <label class="col-form-label">
              Empresa influyente
            </label>
            <v-checkbox v-model="si" class="mx-3" label="Si"></v-checkbox>

            <v-checkbox v-model="no" class="mx-1" label="No"></v-checkbox>
          </v-row>
        </v-col>

        <v-col>
          <v-row justify-self="">
            <label class="col-form-label">
              Tenemos Outsourcing
            </label>

            <v-checkbox v-model="si1" class="mx-3" label="Si"></v-checkbox>

            <v-checkbox v-model="no1" class="mx-1" label="No"></v-checkbox>
          </v-row>
        </v-col>
      </div>

      <label class="col-form-label">Pagina de internet</label>
      <v-text-field
        v-model="pagina"
        :rules="paginaRules"
        required
        label
        outlined
        style="margin-bottom:-15px"
        dense="50"
      ></v-text-field>

      <label class="col-form-label">Nombre Legal*</label>
      <v-text-field
        v-model="nombreL"
        :rules="nombreRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Nombre Comercial*</label>
      <v-text-field
        v-model="nombreCom"
        :rules="nombreComRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">RFC*</label>
      <v-text-field
        v-model="RFC"
        :rules="RFCRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Domicilio*</label>
      <v-text-field
        v-model="Domicilio"
        :rules="DomicilioRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Referencia/Entre Calles*</label>
      <v-text-field
        v-model="Referencia"
        :rules="referenciaRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Ciudad*</label>
      <v-text-field
        v-model="Ciudad"
        :rules="ciudadRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Estado*</label>
      <v-text-field
        v-model="Estado"
        :rules="estadoRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Pais*</label>
      <v-text-field
        v-model="Pais"
        :rules="paisRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Codigo Postal*</label>
      <v-text-field
        v-model="CP"
        :rules="cpRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Giro o Actividad*</label>
      <v-text-field
        v-model="Giro"
        :rules="giroRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Numero de Trabajadores*</label>
      <v-text-field
        v-model="Trabajadores"
        :rules="trabajadoresRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>

      <label class="col-form-label">Numero de sucursales*</label>
      <v-text-field
        v-model="Sucursal"
        :rules="sucursalRules"
        label
        outlined
        dense="50"
        style="margin-bottom:-15px"
      ></v-text-field>
    </v-col>
  </v-container>
</template>


<script>
export default {
  
}
</script>