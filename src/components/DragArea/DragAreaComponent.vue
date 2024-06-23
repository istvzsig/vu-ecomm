<script setup>
import { ref } from 'vue'
import { storeData } from '@/data/storeData'
import './drag-area.css'

const isDragged = ref(false)

function getRandomItem() {
  return storeData[(Math.random() * storeData.length) | 0]
}

function toggleIsDragged() {
  isDragged.value = !isDragged.value
}

function handleOndrag(event) {
  // isDragged.value = !isDragged.value
  // console.log(isDragged.value)
}

function handleDragStart(event) {
  // toggleIsDragged()
  console.log(isDragged.value)
}

const randomItem = getRandomItem()
</script>
<template>
  <div class="drag-area">
    <div class="drag-area-sides">
      <div class="drag-area-sides-side"></div>
      <div class="drag-area-sides-side"></div>
    </div>
    <div @click="handleOnClick" @dragstart="handleDragStart" class="drag-area-item-card">
      <!-- {{ getRandomItem().img }} -->
      <img :src="randomItem.img" alt="" />
      <h1>{{ randomItem.name }}</h1>
      <h4>{{ [...randomItem.text].splice(0, 100).join('') }}</h4>
      <h1>
        {{ randomItem.price }}
        <span>USD</span>
      </h1>
      {{ randomItem }}
    </div>
  </div>
</template>
