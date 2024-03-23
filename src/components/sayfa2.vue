<template>
  
  
  <div id="app">
   
    <Menu />
   
  </div>

<div>
      <radarChart/>  
      </div>
      
      <form class="form">
      <div>
      <chartCanvas/>  
      </div>
      </form>
  
      
  
</template>


<script>
import Menu from './Menu.vue';
import radarChart from './kart.vue';
import chartCanvas from './kart2.vue';
//huseyin
export default {
  name: 'App',
  components: {
    Menu,
    radarChart,
    chartCanvas,
  }
};
</script>

<style>

.form{
background-color: rgba(246, 248, 250, 0.979);
position: absolute;
  top: 6%;
  left: 60%;
}

</style>
