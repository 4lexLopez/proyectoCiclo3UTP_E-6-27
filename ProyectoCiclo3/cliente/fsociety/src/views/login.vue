<template c>
<div class="contenedorprincipal">
<div class="contenedor">
  <div class="container fondo ">
    <form @submit.prevent="buscarUsuario()">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input required type="text" v-model="from.nombre"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input required
          type="password"
         
          v-model="from.pass"
        />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    var auntenticacion = window.localStorage.getItem("auntenticacion");
    if (auntenticacion === "ok") {
      this.$router.push("/");
    }
      
    
   
  },

  data() {
    return {
      from: {
        nombre: "",
        pass: "",
      },
      user: [],
    };
  },

  methods: {
    buscarUsuario() {
      this.axios.get("user").then((res) => {
        this.user = res.data;

        this.user.forEach((value, index) => {
          if (
            this.from.nombre === value.nombre &&
            this.from.pass === value.pass
          ) {
            swal("inicio de sesión correcto", "Oprime el botón", "success");
            window.localStorage.setItem("auntenticacion", "ok");

            this.$router.push("/adminEquipo");
          } else {
            swal(
              "Nombre o contraseña incorrectos",
              "Vuelve a intentarlo!",
              "error"
            );
          }
        });
      });
    },
  },
};
</script>

<style scoped>

.contenedor{
 background: rgb(201,134,165);
background: -moz-linear-gradient(80deg, rgba(201,134,165,1) 0%, rgba(26,34,80,1) 18%, rgba(70,26,80,1) 73%);
background: -webkit-linear-gradient(80deg, rgba(201,134,165,1) 0%, rgba(26,34,80,1) 18%, rgba(70,26,80,1) 73%);
background: linear-gradient(80deg, rgba(201,134,165,1) 0%, rgba(26,34,80,1) 18%, rgba(70,26,80,1) 73%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c986a5",endColorstr="#461a50",GradientType=1);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
.fondo{
  min-width: 170px;
  max-width: 290px;
  margin: auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
   color:rgb(0, 0, 0);
   border: 10px ;
   border-radius: 10px;
   background:rgb(16, 156, 236) ;
   border-radius: 10px solid rgb(136, 136, 136);
}

button{
  width: 100%;
  color: rgb(0, 0, 0);
 
}
input{
   background: transparent;
  border:0;
  outline: none;
  border-bottom: 2px solid rgb(0, 0, 0);
 
}

input:focus{
   background: transparent;
  border:0;
  outline: none;
   border-bottom: 2px solid rgb(0, 0, 0);


}

input:hover{
   background: transparent;
  border:0;
  outline: none;
  border:0;
  border-bottom: 2px solid rgb(2, 39, 247);
 background:rgba(1, 14, 22, 0.063) ;
 
}

</style>
