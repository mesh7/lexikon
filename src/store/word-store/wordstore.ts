import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

import { License, Phonetics, SearchedWord } from '../types/wordsType'

export const useWordStore = defineStore('wordstore', () => {
  const searchWord = ref('');

  const searchResponse = ref({});

  const displayRespone= ref();

  const capitalizeFirstLetter = (word) => {
    if (typeof word !== 'string') {
      console.log('dummy');
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const getWordMeaning = async () => {
    // searchWord.value = word ;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.value}`;
    try {
      const response = await axios.get(url);
      searchResponse.value = response.data[0];
      console.log('response', searchResponse.value);
      return;
    } 
    catch(error) {
      return error;
    }
  };

  return {
    searchWord,
    searchResponse,
    capitalizeFirstLetter,
    getWordMeaning,
  }
})