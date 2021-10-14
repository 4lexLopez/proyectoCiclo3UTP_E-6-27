<template>
  <div class="contenedor">
    <div class="container contenedorprincipal">
      <section>
        <h2 class="text-center">Equipo Fsociety</h2>

        <p class="center_text">
          Somos un grupo de programadores apasionados por la tecnología, que
          busca emprender y crear cosas nuevas, queremos seguir aprendido para
          tener un mejor futuro y vamos a crear una mejor Colombia con más
          desarrollo tecnológico.
        </p>

        <div class="img row center m-0 -p-0">
          <div
            v-for="(item, index) in equipo"
            :key="index"
            class="color"
            style="width: 13rem;"
          >
            <img class=" w-75 mt-5" v-bind:src="item.imagen" alt="" />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.nombre }}</h5>
              <h5 class="card-title text-center">{{ item.apellido }}</h5>
              <p class="card-text text-center">{{ item.cargo }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipo: [],
    };
  },

  created() {
    this.listarEuipo();
  },

  methods: {
    listarEuipo() {
      this.axios
        .get("/equipo")
        .then((res) => {
          this.equipo = res.data;
        })
        .catch((e) => {});
    },
  },
  components: { FooTer },
};

import FooTer from "../components/FooTer.vue";
</script>
<style scoped>
.contenedor {
  background: rgb(134, 158, 201);
  background: -moz-linear-gradient(
    144deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 80, 73, 1) 0%,
    rgba(0, 0, 0, 1) 61%
  );
  background: -webkit-linear-gradient(
    144deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 80, 73, 1) 0%,
    rgba(0, 0, 0, 1) 61%
  );
  background: linear-gradient(
    144deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 80, 73, 1) 0%,
    rgba(0, 0, 0, 1) 61%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#869ec9",endColorstr="#000000",GradientType=1);
}
p,
h2 {
  color: #ffff;
}
.center_text {
  text-align: justify;
}
.center {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.color {
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 94px 15px 132px 3px;
  -moz-border-radius: 94px 15px 132px 3px;
  -webkit-border-radius: 94px 15px 102px 3px;
  background: rgb(134, 158, 201);
  background: -moz-linear-gradient(
    80deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 34, 80, 1) 22%,
    rgba(26, 80, 73, 1) 61%
  );
  background: -webkit-linear-gradient(
    80deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 34, 80, 1) 22%,
    rgba(26, 80, 73, 1) 61%
  );
  background: linear-gradient(
    80deg,
    rgba(134, 158, 201, 1) 0%,
    rgba(26, 34, 80, 1) 22%,
    rgba(26, 80, 73, 1) 61%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#869ec9",endColorstr="#1a5049",GradientType=1);
  color: #ffff;
}

.img img {
  width: 100%;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 94px 15px 132px 3px;
  -moz-border-radius: 94px 15px 132px 3px;
  -webkit-border-radius: 94px 15px 132px 3px;
}
</style>
