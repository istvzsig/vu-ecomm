<script setup>
import { dummyData } from '@/data/dummyData'
import { useSliderStore } from '@/stores/slider'
import './slider-component.css'
const sliderStore = useSliderStore()
sliderStore.startAnimate()

const sliderTexts = ['Race', 'From', 'Another', 'Space']

function sliderAnimation() {
  return setTimeout(() => {
    sliderStore.nextIndex = ++sliderStore.value % dummyData.length
    sliderStore.stopAnimate()
    sliderStore.text = sliderTexts[sliderStore.nextIndex].text
    setTimeout(sliderAnimation, 4200)
  }, 4200)
}
sliderAnimation()
</script>

<template>
  <div class="slider">
    <h1 class="slider-item-text">{{ dummyData[sliderStore.nextIndex].text }}</h1>
    <img :src="dummyData[sliderStore.nextIndex].img" class="slider-background-image" />
  </div>
</template>

<script></script>
