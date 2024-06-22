<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/Navbar/NavbarComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComponent />
    </div>
  </header>

  <RouterView />
</template>
