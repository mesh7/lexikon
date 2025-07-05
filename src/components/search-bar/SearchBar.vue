<script setup>
import InputText from "primevue/inputtext";
</script>

<template>
  <div class="input-container">
    <input type="text" placeholder=" " id="name" required />
    <label for="name">Search Word</label>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  width: 24rem;
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
  color: #0078d7;
}
</style>

<!DOCTYPE html>
