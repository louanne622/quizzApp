<script setup>
import Result from '../components/Result.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const score = Number(route.params.score)
const totalQuestions = Number(route.params.total)
</script>

<template>
  <Result :score="score" :totalQuestions="totalQuestions" />
</template>
