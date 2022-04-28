<template>
  <div class="home-page">
    <p>
      HomePageComponent
    </p>
    <div>
      Search the meaning
      <div class="search-bar">
        <input
          type="text"
          placeholder="Type any word"
          name="search"
          id="searchWord"
        />
      </div>
      <div class="button">
        <button @click="getWordMeaning()">Get meaning</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import './HomePageComponent.scss';
import axios from 'axios';

export default {
  name: 'HomePageComponent',
  created() {
    this.getWordMeaning();
  },
  methods: {
    getWordMeaning() {
      const words = (<HTMLInputElement>document.getElementById('searchWord')).value;
      console.log(words);
      axios({
        method: 'get',
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`,
      }).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
