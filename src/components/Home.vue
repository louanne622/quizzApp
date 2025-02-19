<script setup>
import { useHomeStore } from '../stores/home'

const homeStore = useHomeStore()
</script>

<template>
  <div class="home-container">
    <div class="welcome-card">
      <h1>Quiz Moto 🏍️</h1>
      <p>Testez vos connaissances sur l'univers de la moto</p>
      <button @click="homeStore.startQuiz" class="start-button">Je suis prêt !</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}

.welcome-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #6c757d;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.start-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.start-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}
</style>
