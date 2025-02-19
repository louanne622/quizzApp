<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quiz'

const props = defineProps({
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})

const router = useRouter()
const quizStore = useQuizStore()

const percentage = (props.score / props.totalQuestions) * 100
const isPassed = percentage >= 60

const returnHome = () => {
  quizStore.resetQuiz()
  router.push('/')
}
</script>

<template>
  <div class="result-container">
    <div class="result-card">
      <h2 class="result-title" :class="{ 'success': isPassed, 'failure': !isPassed }">
        <template v-if="percentage >= 80">
          🏆 Excellent ! 🏆
        </template>
        <template v-else-if="percentage >= 60">
          🎉 Bien joué ! 🎉
        </template>
        <template v-else-if="percentage >= 40">
          🎯 Pas mal ! 🎯
        </template>
        <template v-else>
          📚 À revoir ! 📚
        </template>
      </h2>
      
      <div class="score-display">
        <div class="score-info">
          <span class="percentage" :class="{
            'excellent': percentage >= 80,
            'good': percentage >= 60 && percentage < 80,
            'average': percentage >= 40 && percentage < 60,
            'poor': percentage < 40
          }">{{ Math.round(percentage) }}%</span>
          <span class="score-text">{{ score }}/{{ totalQuestions }} bonnes réponses</span>
        </div>
      </div>

      <p class="message">
        <template v-if="percentage >= 80">
          Bravo ! Tu es un véritable expert de la moto ! 🏍️
        </template>
        <template v-else-if="percentage >= 60">
          Tu as de bonnes connaissances en moto ! Continue comme ça !
        </template>
        <template v-else-if="percentage >= 40">
          Tu es sur la bonne voie ! Encore un peu d'entraînement !
        </template>
        <template v-else>
          N'hésite pas à réviser les bases et retente ta chance !
        </template>
      </p>

      <button @click="returnHome" class="return-button">
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
}

.result-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.result-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.result-title.success {
  color: #2ecc71;
}

.result-title.failure {
  color: #e74c3c;
}

.score-display {
  margin: 2.5rem 0;
}

.score-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.percentage {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}

.percentage.excellent { color: #2ecc71; }
.percentage.good { color: #3498db; }
.percentage.average { color: #f1c40f; }
.percentage.poor { color: #e74c3c; }

.score-text {
  font-size: 1.2rem;
  color: #6c757d;
}

.message {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 2rem 0;
  line-height: 1.5;
}

.return-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.return-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}
</style>
