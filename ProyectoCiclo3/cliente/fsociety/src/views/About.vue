<template>
  <div>
    <div class="container 100vh">
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
        .catch((e) => {

        });
    },

    
    
  },
  components: { FooTer },
};

import FooTer from "../components/FooTer.vue";
</script>
<style scoped>


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

  background: rgba(255, 230, 0, 0.83);
}

.img img {
  width: 100%;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 94px 15px 132px 3px;
  -moz-border-radius: 94px 15px 132px 3px;
  -webkit-border-radius: 94px 15px 132px 3px;
  border: 1px solid #c03e3e;
}
</style>
