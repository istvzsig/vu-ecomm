<script setup>
import { dummyData } from '@/data/dummyData'
import { useSliderStore } from '@/stores/slider'
import './slider.css'

const slider = useSliderStore()
const texts = ['Race', 'From', 'Another', 'Space']

slider.startAnimation()
function animate() {
  return setTimeout(() => {
    slider.index = ++slider.value % dummyData.length
    slider.stopAnimation()
    slider.text = texts[slider.index].text
    setTimeout(animate, 4200)
  }, 4200)
}
animate()
</script>

<template>
  <div class="slider">
    <h1 class="slider-item-text">{{ dummyData[slider.index].text }}</h1>
    <img :src="dummyData[slider.index].img" class="slider-background-image" />
  </div>
</template>

<script></script>
