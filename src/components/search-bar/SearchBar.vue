<script setup>
import { storeToRefs } from "pinia";
import Button from "primevue/button";
// import InputText from "primevue/inputtext";
import { useWordStore } from "../../store/word-store/wordstore";

const wordStore = useWordStore();

const { searchWord } = storeToRefs(wordStore);

const getWordMeaning = () => {
  searchWord.value = document.getElementById("search-word").value;
  wordStore.getWordMeaning();
};
</script>

<template>
  <section class="">
    <div class="input-container flex justify-center">
      <input type="text" placeholder=" " id="search-word" required />
      <label for="name">Search Word</label>
      <Button
        label="Secondary"
        severity="secondary"
        size="large"
        class="search-button ml-8"
        rounded
        @click="getWordMeaning"
      >
        <span class="pi pi-search" style="font-size: 2.5rem"></span>
      </Button>
    </div>
  </section>
</template>

<style scoped>
.input-container {
  position: relative;
  width: 30rem;
  margin-top: 3rem;
}

input {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  outline: none;
  font-size: 40px;
  font-weight: bold;
}

label {
  position: absolute;
  top: 1.25rem;
  left: 0;
  color: #999;
  font-size: 2.5rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  top: -20px;
  font-size: 12px;
  color: #909090;
}

.search-button {
  width: 6rem;
}
</style>
