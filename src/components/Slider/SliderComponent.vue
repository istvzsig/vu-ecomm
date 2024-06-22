<script setup>
import { dummyData } from '@/assets/data/dummyData'
import './slider-component.css'
</script>

<template>
  <div class="slider">
    <div class="slider-item" :key="item.id" v-for="item in dummyData">
      {{ item.id }}
    </div>
  </div>
</template>
