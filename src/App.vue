<template>
  <div id="app" class="app">
  <h1> Hello World!</h1>
    <HomePageComponent />
  </div>
</template>

<script lang="ts">
import HomePageComponent from './components/home/HomePageComponent.vue';
import './App.scss';

export default {
  name: 'App',
  // data() {
  //   return {
  //     mode: 'dark',
  //   };
  // },
  components: {
    HomePageComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
</style>
