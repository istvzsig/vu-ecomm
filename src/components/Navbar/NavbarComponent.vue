<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import './navbar-component.css'

let isOpaque = ref(false)

function animate() {
  window.addEventListener('scroll', () => {
    isOpaque.value = window.scrollY > 200
  })
  console.log(isOpaque.value)
}
animate()
</script>
<template>
  <nav class="top-navigation-bar">
    <RouterLink to="/">
      <img class="top-navigation-bar--logo" src="../../assets/img/logo-white.png" alt="logo" />
    </RouterLink>
    <ul>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/wishlist">Wishlist</RouterLink>
      <li class="navbar-cart-button">
        <div className="navbar-cart-button--total-amount">11</div>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
        >
          <path
            d="M2.87644 7.73909C3.00737 6.74395 3.85563 6 4.85934 6H17.1407C18.1444 6 18.9926 6.74395 19.1236 7.73909L20.7025 19.7391C20.8601 20.937 19.9278 22 18.7196 22H3.2804C2.0722 22 1.13987 20.937 1.29749 19.7391L2.87644 7.73909Z"
            stroke="white"
          ></path>
          <path
            d="M7 11V4.71901C7 2.66506 8.79086 1 11 1C13.2091 1 15 2.66506 15 4.71901V11"
            stroke="white"
          ></path>
          <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 8 10)" fill="white"></circle>
          <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 16 10)" fill="white"></circle>
        </svg>
      </li>
    </ul>
  </nav>
</template>
