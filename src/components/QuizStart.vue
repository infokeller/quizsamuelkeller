<template>
  <div class="quiz-start">
    <h1>Descubra seu Perfil de Prosperidade</h1>
    <button @click="iniciarQuiz">
      Começar Quiz
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    iniciarQuiz() {
      this.$emit('iniciar')
    }
  }
}
</script>

<style scoped>
.quiz-start {
  text-align: center;
  padding: 20px;
}

button {
  background-color: gold;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>