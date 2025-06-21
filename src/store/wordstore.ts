import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

export const useWordStore = defineStore('wordstore', () => {
  const searchWord = ref('');

  const getWordMeaning = async (word: string) => {
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
   try {
    const response = await axios.get(url);
    return response
   } 
   catch(error) {
    return error
   }
  };

  return {
    searchWord,
    getWordMeaning,
  }
})