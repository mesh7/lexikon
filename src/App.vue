<template>
  <div id="app" class="app">
  <h1> Hello World!</h1>
    <!-- <HeaderComponent/> -->
    <HomePageComponent/>
  </div>
</template>

<script lang="ts">
// import HeaderComponent from './components/header/HeaderComponent.vue';
import HomePageComponent from './components/home/HomePageComponent.vue';
import './App.scss';

export default {
  name: 'App',
  data() {
    return {
      mode: 'dark',
    };
  },
  components: {
    // HeaderComponent,
    HomePageComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
</style>
