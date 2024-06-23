import { defineStore } from 'pinia';

export const useSliderStore = defineStore('slider', {
  state: function () {
    return { value: 0, nextIndex: 0, lenght: 3, animating: false, text: null }
  },
  actions: {
    startAnimation() {
      this.animating = true;
    },
    stopAnimation() {
      this.animating = false;
    },
  },
})