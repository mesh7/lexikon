<script setup>
import { ref, onMounted } from "vue";
import SearchBar from "../../components/search-bar/SearchBar.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import Divider from "primevue/divider";
import ToggleSwitch from "primevue/toggleswitch";

import { useWordStore } from "../../store/word-store/wordstore";

const wordStore = useWordStore();

const someBoolean = ref(false);
const checked = ref(false);

const dummy = () => {
  someBoolean.value = !someBoolean.value;
  document.documentElement.classList.toggle("dark");
};

// const sound = new Audio(wordStore.searchResponse.phonetics[2].audio);

const playSound = () => {
  var sound = new Audio(wordStore.searchResponse.phonetics[2].audio);
  sound.play();
  // var a = new Audio(wordStore.searchResponse.phonetics[2].audio);
  // a.play();
};

onMounted(() => {
  wordStore.getWordMeaning("Something");
});
</script>

<template>
  <section class="flex flex-col">
    {{ checked }}
    {{ someBoolean }}
    <div class="flex justify-between">
      <div class="font-bold">Lexikon</div>
      <ToggleSwitch v-model="checked" @click="dummy" />
    </div>
    <SearchBar></SearchBar>
    <div class="flex items-end justify-between mt-8">
      <h1 class="font-bold text-8xl">{{ wordStore.searchWord }}</h1>
      <Button
        class="flex button-size"
        label="Secondary"
        severity="secondary"
        size="large"
        rounded
        @click="playSound()"
      >
        <span class="pi pi-volume-down" style="font-size: 1.5rem"></span>
        <p class="">{{ wordStore.searchResponse.phonetic }}</p>
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
          <div
            v-for="meaning in wordStore.searchResponse.meanings"
            :key="meaning"
          >
            <p class="m-0 font-semibold text-3xl">
              {{ meaning.partOfSpeech }}
            </p>
            <p class="mt-4 text-xl">
              {{ meaning.definitions[0].definition }}
            </p>
            <div class="flex mt-4">
              <p class="mr-4 text-md font-semibold">Synonyms</p>
              <p class="text-sm">
                {{ meaning.definitions[0].definition.synonyms }}
              </p>
            </div>
            <Divider />
          </div>
          <div class="card flex">
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Divider layout="vertical" />
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Divider layout="vertical" />
            <div>
              <p class="m-0 font-semibold text-lg">
                {{ "The utterance of such a greeting." }}
              </p>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
