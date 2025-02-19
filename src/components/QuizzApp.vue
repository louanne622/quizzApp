<script setup>
import { useQuizStore } from '../stores/quiz'

const quizStore = useQuizStore()
</script>

<template>
  <div class="page-container">
    <div class="quiz-container">
      <div class="question-section">
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress" :style="{ width: `${quizStore.currentProgress}%` }"></div>
          </div>
          <span class="progress-text">{{ Math.round(quizStore.currentProgress) }}%</span>
        </div>
        
        <div class="question-content">
          <h2 class="question-counter">Question {{ quizStore.currentQuestion + 1 }}/{{ quizStore.questions.length }}</h2>
          <h3 class="question-text">{{ quizStore.questions[quizStore.currentQuestion].question }}</h3>
          
          <div class="options">
            <button 
              v-for="(option, index) in quizStore.questions[quizStore.currentQuestion].options" 
              :key="index"
              @click="quizStore.checkAnswer(index)"
              :class="['option-button', { 'disabled': quizStore.isAnswered }]"
              :disabled="quizStore.isAnswered"
            >
              {{ option }}
            </button>
          </div>
        </div>
        
        <div 
          v-if="quizStore.feedback"
          :class="['feedback', { 'correct': quizStore.feedback.includes('Correct'), 'incorrect': quizStore.feedback.includes('Incorrect') }]"
        >
          {{ quizStore.feedback }}
        </div>
        
        <div class="score">Score : {{ quizStore.score }}/{{ quizStore.currentQuestion }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
}

.quiz-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
}

.progress-container {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-bar {
  flex-grow: 1;
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.progress-text {
  color: #6c757d;
  font-weight: 500;
  min-width: 4rem;
}

.question-counter {
  color: #6c757d;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.question-text {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.options {
  display: grid;
  gap: 1rem;
}

.option-button {
  background-color: white;
  border: 2px solid #3498db;
  color: #3498db;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.option-button:hover:not(.disabled) {
  background-color: #3498db;
  color: white;
}

.option-button.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.feedback {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
}

.feedback.correct {
  background-color: #d4edda;
  color: #155724;
}

.feedback.incorrect {
  background-color: #f8d7da;
  color: #721c24;
}

.score {
  margin-top: 1.5rem;
  text-align: center;
  color: #6c757d;
  font-weight: 500;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden; /* Empêche le défilement */
}
</style> 