<script setup>
import SearchBar from "./components/search-bar/SearchBar.vue";
import Button from "primevue/button";
</script>

<template>
  <div>
    <span class="font-bold">Hello</span>
  </div>
  <SearchBar />
  <Button label="Info" severity="info" variant="text" raised></Button>
</template>

<style scoped></style>
