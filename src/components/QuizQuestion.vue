<template>
  <div class="quiz-question">
    <div v-if="perguntaAtual">
      <h2>Pergunta {{ indicePergunta + 1 }} de {{ perguntas.length }}</h2>
      <h3>{{ perguntaAtual.texto }}</h3>
      
      <div class="opcoes">
        <button 
          v-for="opcao in perguntaAtual.opcoes" 
          :key="opcao.id"
          @click="selecionarResposta(opcao)"
          class="opcao-btn"
        >
          {{ opcao.texto }}
        </button>
      </div>
    </div>
    <div v-else>
      Carregando pergunta...
    </div>
  </div>
</template>

<script>
export default {
  // IMPORTANTE: Usar function() para definir data
  data() {
    return {
      indicePergunta: 0,
      perguntas: [
        {
          texto: "Qual sua renda mensal?",
          opcoes: [
            { id: 1, texto: "Menos de R$ 2.000", pontos: 5 },
            { id: 2, texto: "R$ 2.000 - R$ 5.000", pontos: 10 },
            { id: 3, texto: "R$ 5.000 - R$ 10.000", pontos: 20 },
            { id: 4, texto: "Acima de R$ 10.000", pontos: 30 }
          ]
        },
        {
          texto: "Você tem alguma reserva de emergência?",
          opcoes: [
            { id: 1, texto: "Não tenho", pontos: 5 },
            { id: 2, texto: "Menos de 3 meses de gastos", pontos: 10 },
            { id: 3, texto: "3 a 6 meses de gastos", pontos: 20 },
            { id: 4, texto: "Mais de 6 meses de gastos", pontos: 30 }
          ]
        },
        {
          texto: "Como você lida com seus investimentos?",
          opcoes: [
            { id: 1, texto: "Não invisto", pontos: 5 },
            { id: 2, texto: "Poupança", pontos: 10 },
            { id: 3, texto: "Renda Fixa", pontos: 20 },
            { id: 4, texto: "Diversificado (Ações, FII, etc)", pontos: 30 }
          ]
        },
        {
          texto: "Qual seu nível de educação financeira?",
          opcoes: [
            { id: 1, texto: "Nunca estudei", pontos: 5 },
            { id: 2, texto: "Leio alguns artigos", pontos: 10 },
            { id: 3, texto: "Faço cursos ocasionalmente", pontos: 20 },
            { id: 4, texto: "Estudo constantemente", pontos: 30 }
          ]
        },
        {
          texto: "Como você controla seus gastos?",
          opcoes: [
            { id: 1, texto: "Não controlo", pontos: 5 },
            { id: 2, texto: "Anoto em caderno", pontos: 10 },
            { id: 3, texto: "Uso aplicativo de controle", pontos: 20 },
            { id: 4, texto: "Planilha detalhada", pontos: 30 }
          ]
        }
      ]
    }
  },
  computed: {
    perguntaAtual() {
      return this.perguntas[this.indicePergunta]
    }
  },
  methods: {
    selecionarResposta(opcao) {
      this.$emit('resposta-selecionada', opcao.pontos)
      
      if (this.indicePergunta < this.perguntas.length - 1) {
        this.indicePergunta++
      } else {
        this.$emit('quiz-finalizado')
      }
    }
  }
}
</script>

<style scoped>
.quiz-question {
  text-align: center;
  padding: 20px;
}

.opcoes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.opcao-btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.opcao-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

h2 {
  color: white;
  margin-bottom: 15px;
}

h3 {
  color: #ffd700;
  margin-bottom: 20px;
}
</style>