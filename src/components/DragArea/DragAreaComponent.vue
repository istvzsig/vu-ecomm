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
      <h3 class="random-item-type-badge">{{ randomItem.type }}</h3>
      <!-- {{ getRandomItem().img }} -->
      <img :src="randomItem.img" alt="" />
      <h1 class="random-item-name">{{ randomItem.name }}</h1>
      <h3 class="random-item-text">{{ [...randomItem.text].splice(0, 100).join('') }}</h3>
      <h1 class="random-item-price">
        {{ randomItem.price }}
        <span class="random-item-price-currency">{{
          randomItem.price === 'FREE' ? '' : 'USD'
        }}</span>
      </h1>
      <button class="random-item-add-to-cart-button">ADD TO CART</button>
      <!-- {{ randomItem }} -->
    </div>
  </div>
</template>
