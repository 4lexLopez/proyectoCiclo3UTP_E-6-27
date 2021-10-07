<template>

<div id="app">

  <navbar></navbar>

  <router-view></router-view>


    <keep-alive>
     <cabe-zera></cabe-zera>
 
      </keep-alive>
     

</div>

</template>

<script>
import CabeZera from './components/CabeZera.vue'
import Navbar from './components/Navbar.vue'



export default {
  components: { Navbar,CabeZera},

}
</script
    CabeZera>


<style>


</style>