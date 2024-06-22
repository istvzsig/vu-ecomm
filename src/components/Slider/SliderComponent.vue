<script setup>
import { dummyData } from '@/data/dummyData'
import './slider-component.css'
</script>

<template>
  <div class="slider">
    <div class="slider-item" :key="item.id" v-for="item in dummyData">
      <h1 class="slider-item-text">{{ item.text }}</h1>
      <img :src="item.img" alt="" class="slider-item-background-image" />
    </div>
  </div>
</template>
