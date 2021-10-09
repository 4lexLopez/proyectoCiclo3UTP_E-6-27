<template>
  <div class="container">
    <div class="contenedor">
      <h1 class="text-center" id="ir">Productos</h1>

      <form
        @submit.prevent="ModificarProductos(editarProducto)"
        v-if="editar"
      >
        <h3 class="text-center">Editar Productos</h3>

        <input
          type="text"
          placeholder="Nombre del producto"
          v-model="editarProducto.nombre"
        />
        <input
          type="text"
          required
          placeholder="precio del producto"
          v-model="editarProducto.precio"
        />
        <input
          type="text"
          placeholder="Url de la imagen del producto"
          v-model="editarProducto.imagen"
        />
       
        <button class="btn btn-primary" id="liveAlertBtn " type="submit">
          Editar
        </button>
        <button class=" my-2" type="submit" @click="editar = false">
          Cancelar
        </button>
      </form>
      <form
        @submit.prevent="agregarproducto(), scrollInto('agregado')"
        v-if="!editar"
      >
        <h3>Agregar un nuevo Producto</h3>

        <input
          type="text"
          required
          placeholder="Nombre del Producto"
          v-model="producto.nombre"
        />
        <input
          type="text"
          required
          placeholder="Precio del Producto"
          v-model="producto.precio"
        />
        <input
          type="text"
          required
          placeholder="Url de la imagen del producto"
          v-model="producto.imagen"
        />
        <button class="btn-success my-2" type="submit">Agregar</button>
      </form>

      <div class="container">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="btt" scope="col">Editar</th>
                <th scope="col">Nombre del Producto </th>
                <th scope="col">Precio</th>
                <th scope="col">Url imagen del producto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in productos" :key="index" class="">
                <div class="btt">
                  <td>
                    <button
                      class="btn-danger"
                      @click="elimarproducto(item._id)"
                    >
                      Eliminar
                    </button>
                    <button
                      class="btn-warning"
                      @click="activarEdiciondelproducto(item._id), scrollInto('ir')"
                    >
                      Editar
                    </button>
                  </td>
                </div>
                <td scope="row">{{ item.nombre }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.imagen }}</td>
              </tr>
            </tbody>
          </table >
          
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      producto: { nombre: "", precio: "", imagen: "" },
      editar: false,
      editarProducto: {},
    };
  },

  created() {
    this.listarproductos();
  },

  methods: {
    listarproductos() {
      this.axios
        .get("/producto")
        .then((res) => {
          console.log(res.data);
          this.productos = res.data;
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

    agregarproducto() {
      this.axios
        .post("/producto-nuevo", this.producto)
        .then((res) => {
          this.productos.push(res.data);
          this.producto.nombre = "";
          this.producto.precio = "";
          this.producto.imagen = "";
        })
        .catch((e) => {
          console.log(e.response);
        });
      swal("Producto Agregado!", "Oprime el boton!", "success");
    },

    elimarproducto(id) {
      swal({
        title: "¿Estás seguro??",
        text:
          "Una vez eliminado, ¡no podrás recuperarlo",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.axios
          .delete(`/producto/${id}`)
          .then((res) => {
            const index = this.productos.findIndex(
              (item) => item._id === res.data._id
            );
            this.productos.splice(index, 1);
          })
          .catch((e) => {
            console.log(e.response);
          });
          
          swal("", {
            icon: "success",
          });
        } else {
          swal("Operacón Cancelada!");
        }

        
      });
    },

    activarEdiciondelproducto(id) {
      this.editar = true;
      this.axios
        .get(`/producto/${id}`)
        .then((res) => {
          this.editarProducto = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    ModificarProductos(item) {
      this.axios
        .put(`/producto/${item._id}`, item)
        .then((res) => {
          const index = this.productos.findIndex(
            (n) => n._id === res.data._id
          );
          this.productos[index].nombre = res.data.nombre;
          this.productos[index].precio = res.data.precio;
          this.productos[index].imagen = res.data.imagen;
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });

      swal("Producto Modificado!", "Oprime el botón", "success");
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
  color: #ffffff;
}
@media (max-width: 500px) {
.contenedor {
  outline: 10px solid rgb(196, 192, 192);;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: rgb(196, 192, 192);
  color: #ffffff;
}
button {
  margin: auto;
  width: 90%;
  padding: 10px 20px;
  background: #477886;
  border: none;
  color: #ffffff;
  margin-bottom: 2px;
}
}
button {
  margin: auto;
  width: 100%;
  padding: 10px 20px;
  background: #477886;
  border: none;
  color: #ffffff;
  margin-bottom: 2px;
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
  color: #ffffff;
  background: rgb(255, 0, 0) !important;
}
th {
  color: #000000;
  background: rgb(228, 224, 224) !important;
}
form {
  margin-left: 12px;
  color: #ffffff;
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
  color: rgb(255, 255, 255);
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
