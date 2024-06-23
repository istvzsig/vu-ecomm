<script setup>
import { dummyData } from '@/data/dummyData'
import { useSliderStore } from '@/stores/slider'
import './slider.css'
const slider = useSliderStore()
slider.startAnimation()

const texts = ['Race', 'From', 'Another', 'Space']

function animate() {
  return setTimeout(() => {
    slider.nextIndex = ++slider.value % dummyData.length
    slider.stopAnimation()
    slider.text = texts[slider.nextIndex].text
    setTimeout(animate, 4200)
  }, 4200)
}
animate()
</script>

<template>
  <div class="slider">
    <h1 class="slider-item-text">{{ dummyData[slider.nextIndex].text }}</h1>
    <img :src="dummyData[slider.nextIndex].img" class="slider-background-image" />
  </div>
</template>

<script></script>
