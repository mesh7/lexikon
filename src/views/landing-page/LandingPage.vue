<script setup>
import { onMounted } from "vue";
import SearchBar from "../../components/search-bar/SearchBar.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import Divider from "primevue/divider";

import { useWordStore } from "../../store/word-store/wordstore";

const wordStore = useWordStore();

onMounted(() => {
  wordStore.getWordMeaning("amazing");
});
</script>

<template>
  <section class="flex flex-col">
    <div class="flex items-end justify-between mt-8">
      <h1 class="font-bold text-8xl">Welcome</h1>
      <Button
        class="flex button-size"
        label="Secondary"
        severity="secondary"
        size="large"
        rounded
      >
        <span class="pi pi-volume-down" style="font-size: 1.5rem"></span>
        <p class="">/ˈwɛlkəm/</p>
      </Button>
    </div>
    <Card class="my-8">
      <template #title>
        <p class="font-light">
          {{ "noun" }}
        </p>
      </template>
      <template #content>
        <div class="wrap-anywhere">
          <div>
            <p class="m-0 font-semibold text-3xl">
              {{ "The utterance of such a greeting." }}
            </p>
            <p class="mt-4 text-sm">
              {{ `"We entered the house and found a ready welcome."` }}
            </p>
            <div class="flex mt-4">
              <p class="mt-4 mr-4 text-sm">synonyms</p>
              <p class="mt-4 text-sm">synonyms, synonyms,synonyms,synonyms</p>
            </div>
          </div>
          <Divider />
          <div>
            <p class="m-0 font-semibold text-3xl">
              {{ "The utterance of such a greeting." }}
            </p>
            <p class="mt-4 text-sm">
              {{ `"We entered the house and found a ready welcome."` }}
            </p>
            <div class="flex mt-4">
              <p class="mt-4 mr-4 text-sm">synonyms</p>
              <p class="mt-4 text-sm">synonyms, synonyms,synonyms,synonyms</p>
            </div>
          </div>
          <Divider />
          <div class="card flex">
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <Divider layout="vertical" />
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <Divider layout="vertical" />
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.button-size {
  width: 14rem;
  height: 4rem;
}
</style>
