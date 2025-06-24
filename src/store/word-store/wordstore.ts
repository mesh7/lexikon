import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

import { License, Phonetics, SearchedWord } from '../types/wordsType'

export const useWordStore = defineStore('wordstore', () => {
  const searchWord = ref('wonderful');

  const searcedResponse = ref({});

  const getWordMeaning = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await axios.get(url);
      searcedResponse.value = response.data[0];
      return response;
    } 
    catch(error) {
      return error;
    }
  };

  return {
    searchWord,
    searcedResponse,
    getWordMeaning,
  }
})