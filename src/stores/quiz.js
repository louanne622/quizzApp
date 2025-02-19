import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useQuizStore = defineStore('quiz', () => {
  const router = useRouter()
  
  // État
  const currentQuestion = ref(0)
  const score = ref(0)
  const feedback = ref('')
  const isAnswered = ref(false)

  const questions = [
    {
      question: "Quelle est la cylindrée minimale d'une moto pour rouler sur autoroute en France ?",
      options: ["50cc", "125cc", "600cc", "750cc"],
      correctAnswer: 1
    },
    {
      question: "Quel équipement n'est pas obligatoire à moto ?",
      options: ["Casque", "Gants", "Blouson", "Gilet réfléchissant"],
      correctAnswer: 2
    },
    {
      question: "Quelle marque de moto est japonaise ?",
      options: ["BMW", "Ducati", "Honda", "KTM"],
      correctAnswer: 2
    },
    {
      question: "Que signifie ABS sur une moto ?",
      options: ["Anti Burn System", "Anti Blocking System", "Advanced Brake System", "Automatic Brake System"],
      correctAnswer: 1
    },
    {
      question: "Quelle est la position correcte des doigts sur le levier de frein avant ?",
      options: ["1 doigt", "2 doigts", "3 doigts", "4 doigts"],
      correctAnswer: 1
    },
    {
      question: "Quelle marque est connue pour ses motos sportives rouges ?",
      options: ["Yamaha", "Kawasaki", "Ducati", "Triumph"],
      correctAnswer: 2
    },
    {
      question: "Quel est le nom du championnat mondial de course moto ?",
      options: ["MotoGP", "Superbike", "MotoRace", "GrandPrix"],
      correctAnswer: 0
    },
    {
      question: "Quelle est la fonction principale de l'embrayage ?",
      options: ["Freiner", "Accélérer", "Déconnecter le moteur de la roue", "Changer de direction"],
      correctAnswer: 2
    },
    {
      question: "Quelle est la meilleure position pour regarder dans un virage ?",
      options: ["Devant la roue avant", "À la sortie du virage", "Sur le compteur", "Sur le côté"],
      correctAnswer: 1
    },
    {
      question: "Quel est le nom du légendaire pilote italien surnommé 'The Doctor' ?",
      options: ["Marc Marquez", "Valentino Rossi", "Jorge Lorenzo", "Andrea Dovizioso"],
      correctAnswer: 1
    }
  ]

  // Getters
  const currentProgress = computed(() => {
    return ((currentQuestion.value + 1) / questions.length) * 100
  })

  const isQuizFinished = computed(() => {
    return currentQuestion.value >= questions.length
  })

  // Actions
  const resetQuiz = () => {
    currentQuestion.value = 0
    score.value = 0
    feedback.value = ''
    isAnswered.value = false
  }

  const nextQuestion = () => {
    if (currentQuestion.value < questions.length - 1) {
      currentQuestion.value++
      feedback.value = ''
      isAnswered.value = false
    } else {
      router.push(`/result/${score.value}/${questions.length}`)
    }
  }

  const checkAnswer = (selectedIndex) => {
    if (isAnswered.value) return

    isAnswered.value = true
    const isCorrect = selectedIndex === questions[currentQuestion.value].correctAnswer
    
    if (isCorrect) {
      score.value++
      feedback.value = "Correct ! 👍"
    } else {
      feedback.value = `Incorrect ! La bonne réponse était : ${questions[currentQuestion.value].options[questions[currentQuestion.value].correctAnswer]}`
    }

    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }

  return {
    // État
    currentQuestion,
    score,
    feedback,
    isAnswered,
    questions,
    
    // Getters
    currentProgress,
    isQuizFinished,
    
    // Actions
    checkAnswer,
    resetQuiz,
    nextQuestion
  }
}) 