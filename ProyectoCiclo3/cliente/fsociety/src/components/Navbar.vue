<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <li class="nav-item li__logo">
          <img
            class="w-25 ul"
            src="https://i.ibb.co/ZVxtM0b/header-logo.png"
            alt=""
          />
        </li>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">


            <li class="nav-item">
              <router-link to="/" class="nav-link colorr"
                >Productos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/editarproducto" class="nav-link colorr"
                >Editar Productos
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link to="/about" class="nav-link colorr"
                >Sobre Nosotros
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link to="/adminEquipo" class="nav-link colorr"
                >Editar Equipo
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link to="/Contactanos" class="nav-link colorr"
                >Contactanos
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.ul {
  list-style: none;
}
.colorr {
  color: rgb(255, 255, 255) !important;
}


.li__logo{
  width: 30% !important;
}
li{
  margin-left: 50px;
}
@media (max-width: 1269px) {
.li__logo{
  width: 30% !important;
}
li{
  margin-left: 0;
 
}
}

.colorr:hover{
  background: rgba(0, 0, 0, 0.549);
  border-radius: 10px;
  transition: all 2s;
}
.colorr:focus{
  background: rgba(0, 0, 0, 0.549);
  border-radius: 10px;
  
}

</style>
