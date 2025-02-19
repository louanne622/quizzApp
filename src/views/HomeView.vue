<script setup>
import Home from '../components/Home.vue'
</script>

<template>
  <div class="view-container">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Home v-if="$route.path === '/'" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-color: #f8f9fa;
  overflow-x: hidden; /* Empêche le défilement horizontal pendant les transitions */
}

.view-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Animations de transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* Pour éviter les problèmes de layout pendant les transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
