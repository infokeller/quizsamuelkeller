<template>
  <div class="quiz-result">
    <h1>Seu Perfil Financeiro</h1>
    
    <div class="resultado">
      <h2>{{ perfil }}</h2>
      <p>{{ descricao }}</p>
    </div>
    
    <div class="pontuacao">
      <p>Pontuação: {{ pontuacao }} pontos</p>
    </div>
    
    <div class="grafico">
      <apexchart 
        width="100%" 
        type="radialBar" 
        :options="chartOptions" 
        :series="[pontuacaoPercentual]"
      ></apexchart>
    </div>
    
    <button @click="reiniciarQuiz">
      Refazer Quiz
    </button>
  </div>
</template>

<script>
import ApexChart from 'vue3-apexcharts'

export default {
  components: {
    apexchart: ApexChart
  },
  props: {
    pontuacao: {
      type: Number,
      required: true
    }
  },
  computed: {
    pontuacaoPercentual() {
      return Math.round((this.pontuacao / 150) * 100)
    },
    chartOptions() {
      return {
        chart: {
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Saúde Financeira'],
        title: {
          text: 'Seu Desempenho',
          style: {
            color: '#ffffff'
          }
        },
        colors: ['#ffd700']
      }
    },
    perfil() {
      if (this.pontuacao <= 25) {
        return "Iniciante Financeiro"
      } else if (this.pontuacao <= 50) {
        return "Investidor em Potencial"
      } else if (this.pontuacao <= 75) {
        return "Estrategista Financeiro"
      } else {
        return "Mestre dos Investimentos"
      }
    },
    descricao() {
      switch(this.perfil) {
        case "Iniciante Financeiro":
          return "Você está no início da sua jornada financeira. É hora de aprender, criar disciplina e estabelecer metas claras de economia e investimento."
        case "Investidor em Potencial":
          return "Você já tem uma base sólida, mas ainda pode melhorar. Considere diversificar investimentos e buscar mais conhecimento financeiro."
        case "Estrategista Financeiro":
          return "Parabéns! Você demonstra conhecimento financeiro avançado. Continue estudando e refinando suas estratégias de investimento."
        case "Mestre dos Investimentos":
          return "Excelente! Você é um verdadeiro especialista em finanças. Seu conhecimento e disciplina são admiráveis."
        default:
          return ""
      }
    }
  },
  methods: {
    reiniciarQuiz() {
      this.$emit('reiniciar')
    }
  }
}
</script>

<style scoped>
.quiz-result {
  text-align: center;
  padding: 20px;
  color: white;
}

.resultado {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

h1 {
  color: #ffd700;
  margin-bottom: 20px;
}

h2 {
  color: #ffd700;
  margin-bottom: 15px;
}

.pontuacao {
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
}

.grafico {
  max-width: 300px;
  margin: 20px auto;
}

button {
  background-color: #ffd700;
  color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
}

button:hover {
  transform: scale(1.05);
  background-color: #ffec00;
}
</style>