<template>
   <nav >
      <div class="header">
         <div class="header__logo">Lexicon Logo</div>
         <div class="inner-width">
            <div class="">General</div>
            <div class="">Urban</div>
         </div>
      </div>
   </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './HeaderComponent.scss';

@Component
export default class HeaderComponent extends Vue {
}
</script>

<style scoped lang="scss">
</style>
