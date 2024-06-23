<script setup>
import { ref } from 'vue'
import { storeData } from '@/data/storeData'
import { useCartStore } from '@/stores/cart'
import './drag-area.css'

const randomItem = ref(null)
const cart = useCartStore()

function getRandomItem() {
  randomItem.value = storeData[(Math.random() * storeData.length) | 0]
}

function toggleIsDragged() {
  // isDragged.value = !isDragged.value
}

function handleOndrag(event) {
  // isDragged.value = !isDragged.value
  // console.log(isDragged.value)
}

function handleDragStart(event) {
  // toggleIsDragged()
  event.target.draggable = true
  // event.target.style.backgroundColor = 'red'
  console.log(event.target)
  // console.log(isDragged.value)
}

function handleAddItemToCart(event) {
  event.stopPropagation()
  cart.addItem(randomItem.value)
}

function handleOnClick(event) {}

getRandomItem()
</script>
<template>
  <div class="drag-area">
    <div class="drag-area-sides">
      <div class="drag-area-sides-side"></div>
      <div class="drag-area-sides-side"></div>
    </div>

    <div @dragstart="handleDragStart" class="drag-area-item-card">
      <h3 class="random-item-type-badge">{{ randomItem.type }}</h3>
      <img :src="randomItem.img" alt="" />
      <h1 class="random-item-name">{{ randomItem.name }}</h1>
      <h3 class="random-item-text">{{ randomItem.text }}</h3>
      <h1 class="random-item-price">
        ${{ randomItem.price }}
        <span class="random-item-price-currency">{{
          randomItem.price === 'FREE' ? '' : 'USD'
        }}</span>
      </h1>
      <button @click="handleAddItemToCart" class="random-item-add-to-cart-button">
        ADD TO CART
      </button>
    </div>
  </div>
</template>
