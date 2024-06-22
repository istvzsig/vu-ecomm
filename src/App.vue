<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/Navbar/NavbarComponent.vue'
import './reset.css'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComponent />
    </div>
  </header>

  <RouterView />
</template>
