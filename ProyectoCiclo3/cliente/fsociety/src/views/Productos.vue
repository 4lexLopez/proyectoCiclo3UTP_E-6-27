<template>
<div class="contenedorprincipal">
  <h1 class="center">
      Listas de Productos
  </h1>
<div class="conteiner__card">
 <div class="img row center">
          <div
            v-for="(item, index) in producto"
            :key="index"
            class="color"
            style="width: 25rem;"
          >
            <div class="card-body">
            <img class=" w-75 img-fluid img" v-bind:src="item.imagen" alt="" />
          
              <h5 class="card-title text-center">{{ item.nombre }}</h5>
              
              <h5 class="card-title text-center textColor">{{ item.precio }}</h5>
           
                
           <button class="btn btn-primary button__center" @click="DetallesProducto()"> obtener</button>
        
            </div>
          </div>
          
        </div>

</div>
</div>
</template>

<script>
export default {
    name:'productos',
  data() {
    return {
      producto: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },

  created() {
    this.listarProducto();
  },

  methods: {
    listarProducto() {
      this.axios
        .get("/producto")
        .then((res) => {
  
          this.producto = res.data;
        })
        .catch((e) => {
       
        });
    },
    DetallesProducto(){
       swal ( "Oops" ,  "Próximamente!" ,  "error" )
    },
    
  },
  components: { FooTer },
};

import FooTer from "../components/FooTer.vue";
</script>



<style scoped>
.textColor{
    color: rgb(21, 245, 21);
}

.center{

    display: flex;

    justify-content: center;
    align-items: center;

}
.button__center,button{
width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

}
img{ 
  width: 200px; /* You can set the dimensions to whatever you want */
    height: 200px;
    object-fit: cover;

}
.img{
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  object-fit:contain ;

}



</style>
