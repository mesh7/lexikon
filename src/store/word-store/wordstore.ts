import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

import { License, Phonetics, SearchedWord } from '../types/wordsType'

export const useWordStore = defineStore('wordstore', () => {
  const searchWord = ref('');

  const searchResponse = ref({});

  const getWordMeaning = async (word: string) => {
    searchWord.value = word;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(url);
      searchResponse.value = response.data[0];
      console.log('response', response);
      return;
    } 
    catch(error) {
      return error;
    }
  };

  return {
    searchWord,
    searchResponse,
    getWordMeaning,
  }
})