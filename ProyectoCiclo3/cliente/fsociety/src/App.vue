<template>

<div id="app">

  <navbar></navbar>

  <router-view></router-view>


    <keep-alive>
    <foo-ter></foo-ter>
 
      </keep-alive>
     

</div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import FooTer from './components/FooTer.vue'



export default {
  components: { Navbar, FooTer},

}
</script>
   


<style>


.contenedorprincipal {

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 min-height: calc(100vh - 240px);

  
}

</style>