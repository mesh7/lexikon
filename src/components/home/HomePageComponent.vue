<template>
  <div class="home-component">
    <div class="content">
      <img class="logo" alt="morseo-logo" src="./logo.svg" />
      <div class="main-title">
        <p class="main-title__one">
          minimal dictionary
        </p>
      </div>
      <input type="text" placeholder="Search..">

      <button class="get-started-button" @click="getStarted()">
        <div class="get-started-button__text">Get Started</div>
      </button>
    </div>

    <!-- <input class="input" />
    <div id="output"></div> -->
    <span class="dot_four"> </span>
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
  methods: {
    created() {},

    getStarted() {
      const output = document.getElementById('output');
      const pressed = {};

      // for knowing which key is pressed
      window.onkeydown = function (event) {
        if (pressed[event.which]) return;
        pressed[event.which] = event.timeStamp;
      };

      // for knowing how long the key is pressed
      window.onkeyup = function (event) {
        if (!pressed[event.which]) return;
        const duration = (event.timeStamp - pressed[event.which]) / 1000;
        output.innerHTML
          += `<p>Key ${
            event.which
          } was pressed for ${
            duration
          } seconds</p>`;
        pressed[event.which] = 0;
      };
    },

    // rediting the footer links
    redirect(navigateTo) {
      if (navigateTo === 'contact') {
        window.location.href = 'https://twitter.com/shubhammesh7';
      } else if (navigateTo === 'support') {
        window.location.href = 'https://github.com/mesh7';
      }
    },
    validation() {},
    audio() {
      const spaceKeyAudio = new Audio('');
      spaceKeyAudio.play();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
</style>
