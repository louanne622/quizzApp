import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useHomeStore = defineStore('home', () => {
  const router = useRouter()

  const startQuiz = () => {
    router.push('/quiz')
  }

  return {
    startQuiz
  }
}) 