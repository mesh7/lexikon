<script setup>
import { onMounted } from "vue";
import SearchBar from "../../components/search-bar/SearchBar.vue";
import Card from "primevue/card";
import Button from "primevue/button";

import { useWordStore } from "../../store/word-store/wordstore";

const wordStore = useWordStore();

onMounted(() => {
  wordStore.getWordMeaning("Wonderful");
});
</script>

<template>
  <section>
    <h1
      class="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl"
    >
      Welcome
    </h1>
    <SearchBar></SearchBar>
    <Button label="Info" severity="info" variant="text" raised></Button>
    <Card class="m-8">
      <template #title><h2 class="font-bold">Welcome</h2></template>
      <template #content>
        <p class="m-0">
          {{ wordStore.searchWord }}
        </p>
      </template>
    </Card>
  </section>
</template>

<style scoped></style>
