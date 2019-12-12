<template>
  <v-container>
    

    <div id="app">
  <v-app id="inspire">
    <v-col class="d-flex pa-2" cols="12" sm="12"  md="12" >
    <v-row  justify="space-around">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    </v-row>
    </v-col>
  </v-app>
</div>
 
  </v-container>
</template>


<script>
export default {

  data () {
    return {
      headers: [
          {
          text: 'Salario',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Puesto', value: 'calories' },
        { text: 'Empresas', value: 'fat' },
        { text: 'Status', value: 'carbs' },
    
  
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
     
  
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
        
   
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
   
      
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
     
          
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
    
          
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
       
         
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
  
    
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
  
       
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
     
     
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
  
        
        },
      ],
    }
  }
  
}
</script>