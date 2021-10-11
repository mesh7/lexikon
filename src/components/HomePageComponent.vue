<template>
  <div>
    <div class="homePage">Lexicon</div>
    <div class="footer">
      <div class="footer__item" @click="redirect('contact')">
        <u>Contact</u>
      </div>
      <div class="footer__item" @click="redirect('support')">
        <u>Support</u>
      </div>
    </div>
  </div>
</template>

<script>
import './HomePageComponent.scss';

export default {
  name: 'HomePageComponent',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
