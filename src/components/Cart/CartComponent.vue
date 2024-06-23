<script setup>
import { useCartStore } from '@/stores/cart'
import './cart.css'
const cart = useCartStore()

function handleDeleteItem() {
  console.log('handleDeleteItem')
}
</script>

<template>
  <div :class="cart.isOpen ? 'cart open' : 'cart'">
    <h1 class="cart-total-amount">Total Amount: {{ cart.totalAmount }}</h1>
    <div v-for="item in cart.items" :key="item.id">
      <div @click="handleDeleteItem" class="cart-item">
        <p class="cart-item-name">{{ item.name }}</p>
        <p class="cart-item-quantity">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
