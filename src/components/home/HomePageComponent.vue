<template>
  <div class="home-page">
  <p>
  HomePageComponent
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './HomePageComponent.scss';

@Component
export default class HomePageComponent extends Vue {
}
</script>

<style scoped lang="scss">
</style>
