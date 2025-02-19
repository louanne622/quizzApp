import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from './quiz'

export const useResultStore = defineStore('result', () => {
  const router = useRouter()
  const quizStore = useQuizStore()

  const calculatePercentage = (score, total) => {
    return (score / total) * 100
  }

  const isPassed = computed(() => {
    return calculatePercentage(quizStore.score, quizStore.questions.length) >= 50
  })

  const returnHome = () => {
    quizStore.currentQuestion = 0
    quizStore.score = 0
    quizStore.feedback = ''
    quizStore.isAnswered = false
    router.push('/')
  }

  return {
    calculatePercentage,
    isPassed,
    returnHome
  }
}) 