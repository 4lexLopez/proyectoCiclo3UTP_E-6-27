<template>
<div class="contenedorprincipal">
  <div class="container">
    
    <div class="contenedor">
      <h1 class="text-center" id="ir">INTEGRANTES</h1>

      <form
        @submit.prevent="ModificarIntegrante(editarIntegrante)"
        v-if="editar"
      >
        <h3 class="text-center">Editar equipo</h3>

        <input
          type="text" required
          placeholder="Nombre"
          v-model="editarIntegrante.nombre"
        />
        <input
          type="text" required
          placeholder="Apellido"
          v-model="editarIntegrante.apellido"
        />
        <input
          type="text" required
          placeholder="Cargo"
          v-model="editarIntegrante.cargo"
        />
        <input
          type="text" required
          placeholder="Pon la Url de tú imagen"
          v-model="editarIntegrante.imagen"
        />
        <button class="btn btn-primary" id="liveAlertBtn " type="submit">
          Editar
        </button>
        <button class=" my-2" type="submit" @click="editar = false">
          Cancelar
        </button>
      </form>
      <form
        @submit.prevent="agregarIntegrante(), scrollInto('agregado')"
        v-if="!editar"
      >
        <h3>Agregar un nuevo integrante</h3>

        <input
          type="text"
          required
          placeholder="Nombre"
          v-model="equipo.nombre"
        />
        <input
          type="text"
          required
          placeholder="Apellido"
          v-model="equipo.apellido"
        />
        <input
          type="text"
          required
          placeholder="Cargo"
          v-model="equipo.cargo"
        />
        <input
          type="text"
          required
          placeholder="Url de tú imagen"
          v-model="equipo.imagen"
        />
        <button class="btn-success my-2" type="submit">Agregar</button>
      </form>

      <div class="container">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="btt" scope="col">Editar</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Cargo</th>
                <th scope="col">Url imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in integrantes" :key="index" class="">
                <div class="btt">
                  <td>
                    <button
                      class="btn-danger"
                      @click="eliminarIntegrante(item._id)"
                    >
                      Eliminar
                    </button>
                    <button
                      class="btn-warning"
                      @click="activarEdicion(item._id), scrollInto('ir')"
                    >
                      Editar
                    </button>
                  </td>
                </div>
                <td scope="row">{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.cargo }}</td>
                <td class="text-center tamaño">{{ item.imagen }}</td>
              </tr>
            </tbody>
          </table>
          <div id="agregado"></div>
          <button type="button" class="btn btn-danger" @click="cerrar">Cerrar sección</button>
          <!-- <button @click="scrollInto('ir')">Ir Elemento1</button> -->
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {

  name:'AdminEquipo',
   beforeCreate() {
    var auntenticacion = window.localStorage.getItem('auntenticacion');
    console.log("esta auntenticado "+auntenticacion);
    if(auntenticacion!=='ok'){
      this.$router.push("/login").catch(()=>{});
    }

    
    },

  data() {
    return {
      login:1,
      integrantes: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      equipo: { nombre: "", apellido: "", cargo: "", imagen: "" },
      editar: false,
      editarIntegrante: {},
    };
  },

  created() {
    this.listarintegrantes();
  },

  methods: {

   cerrar() {
      swal({
        title: "Estás seguro?",
       
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((sesion) => {
        if (sesion) {
            window.localStorage.removeItem("auntenticacion");
      this.$router.push("/login");
          swal("Cierre Exitoso", {
            icon: "success",
            
          });
        } else {
          swal("Acción Cancelada!");
        }
      });
    
    },
    listarintegrantes() {
      this.axios
        .get("/equipo")
        .then((res) => {
          console.log(res.data);
          this.integrantes = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    scrollInto(elementId) {
      const section = document.querySelector(`#${elementId}`);
      section.scrollIntoView({
        behavior: "smooth",
      });
    },

    agregarIntegrante() {
      this.axios
        .post("/equipo-nuevo", this.equipo)
        .then((res) => {
          this.integrantes.push(res.data);
          this.equipo.nombre = "";
          this.equipo.apellido = "";
          this.equipo.cargo = "";
          this.equipo.imagen = "";
        })
        .catch((e) => {
          console.log(e.response);
        });
      swal("Integrante Agregado!", "Oprime el boton!", "success");
    },

    eliminarIntegrante(id) {
      swal({
        title: "¿Estás seguro??",
        text:
          "Una vez eliminado, ¡no podrás recuperarlo",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.axios
          .delete(`/equipo/${id}`)
          .then((res) => {
            const index = this.integrantes.findIndex(
              (item) => item._id === res.data._id
            );
            this.integrantes.splice(index, 1);
          })
          .catch((e) => {
            console.log(e.response);
          });
          
          swal("", {
            icon: "success",
          });
        } else {
          swal("Operación cancelada");
        }

        
      });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/equipo/${id}`)
        .then((res) => {
          this.editarIntegrante = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    ModificarIntegrante(item) {
      this.axios
        .put(`/equipo/${item._id}`, item)
        .then((res) => {
          const index = this.integrantes.findIndex(
            (n) => n._id === res.data._id
          );
          this.integrantes[index].nombre = res.data.nombre;
          this.integrantes[index].apellido = res.data.apellido;
          this.integrantes[index].cargo = res.data.cargo;
          this.integrantes[index].imagen = res.data.imagen;
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });

      swal("Integrante Modificado!", "Oprime el botón", "success");
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped>
table {
  color: #11c8ce;
}
td {
  color: #000000 !important;
}
.contenedor {
  border: 10px solid rgba(225, 219, 219, 0.734);
  padding: 20px;
  border-radius: 4%;
  background: rgb(196, 192, 192);
  color: #000000;
}

@media (max-width: 500px) {
.contenedor {
  outline: 10px solid rgb(196, 192, 192);;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: rgb(196, 192, 192);
  color: #000000;
}
button {
  margin: auto;
  width: 90%;
  padding: 10px 20px;
  background: #477886;
  border: none;
  color: #000000;
  margin-bottom: 2px;
  font-weight: bolder;
}
}

button {
  margin: auto;
  width: 100%;
  padding: 10px 20px;
  background: #477886;
  border: none;
  color: #000000;
  margin-bottom: 2px;
  font-weight: bolder;
}
.btt {
  position: sticky;
  left: 0;
  z-index: 10000;
  background: rgb(196, 192, 192);
}
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px !important;
  color: #000000;
  background: rgb(255, 0, 0) !important;
}
th {
  color: #000000;
  background: rgb(228, 224, 224) !important;
}
form {
  margin-left: 12px;
  color: #000000;
  display: flex;
  flex-direction: column;
}

input {
  border: none;
  background: transparent;
  border-bottom: 3px solid rgb(144, 148, 148);
  outline: none;
  margin-bottom: 10px;

  color: rgb(0, 0, 0);
}
::placeholder {
  color: rgb(0, 0, 0);
}
input:focus {
  border: none;
  background: transparent;
  border-bottom: 3px solid rgb(119, 192, 125) !important;
  outline: none !important;
}
form {
  border: none;
}

input:hover {
  border: none;
  background: transparent;
  border-bottom: 3px solid rgb(211, 203, 209);
  outline: none;
}
input:active {
  border: none;
  background: transparent;
  border-bottom: 3px solid rgb(168, 11, 129);
  outline: none;
}
</style>
