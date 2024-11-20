<template>
  <div class="home">
    <!-- Primeira Sessão: Topo da Página -->
    <section class="topo">
      <div class="barra-superior">
        <span class="prosperidade-judaica">🔯 Prosperidade Judaica</span>
        <div id="relógio">00:00:00</div>
        <span class="produto-nome">Samuel Keller</span>
        <span class="avaliacao">
          Excelente ★★★★★ | 436 avaliações no <strong>Trustpilot</strong>
        </span>
      </div>
    </section>

<!-- Barra de Progresso -->
<div v-if="etapa > 1" class="barra-progresso-container">
  <button class="voltar-btn" @click="etapa > 1 ? etapa-- : null">
    ← Voltar
  </button>
  <div class="barra-progresso">
    <div class="progresso" :style="{ width: progressoPercentual + '%' }"></div>
    <div class="indicador-etapa" :style="{ left: `calc(${progressoPercentual}% - 15px)` }"></div>
  </div>
  <p class="etapa-info">Etapa {{ etapa }} de 18</p>
</div>

    <!-- Etapas do Quiz -->
    <template v-if="etapa === 1">
      <section class="headline">
        <h1>Porque muitos dão certo e você não?</h1>
      </section>
      <section class="sub-headline">
        <p>Porque Eles Aplicam Sabedoria Judaica para Multiplicar Suas Oportunidades de Riqueza!✨</p>
        <p class="destaque" >Complete o quiz e descubra seu potencial!</p>
      </section>

      <!-- Primeira Parte do Quiz: Selecionar Gênero -->
      <section class="form-genero">
        <div class="opcao" @click="proximaEtapa(2)">
          <img src="/homem.png" alt="Homem" />
          <button class="genero-btn">Masculino</button>
        </div>
        <div class="opcao" @click="proximaEtapa(2)">
          <img src="/mulher.png" alt="Mulher" />
          <button class="genero-btn">Feminino</button>
        </div>
      </section>
    </template>

    <template v-if="etapa === 2">
      <section class="headline">
        <h1></h1>
      </section>
      <section class="sub-headline">
        <p></p>
      </section>

      <!-- Segunda Parte do Quiz: Captura de Nome -->
      <section class="form-nome">
  <h2>Qual é seu nome completo?</h2>
  <p>Seu nome pode revelar segredos valiosos sobre sua prosperidade.</p>
  <input type="text" placeholder="Seu Nome Completo" v-model="nomeCompleto" />
  <p class="importante">Use seu nome completo de batismo.</p>
  <button class="continuar-btn" @click="validarNome">Continuar</button>
</section>
    </template>
    
    <template v-if="etapa === 3">
      

      <section class="form-idade">
  <h2>Qual é a sua data de nascimento?</h2>
  <p>Sua idade nos revela dicas poderosas.</p>
  <div class="selecao-data">
    <select v-model="dia">
      <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
    </select>
    <select v-model="mes">
      <option v-for="(m, index) in meses" :key="index" :value="index + 1">{{ m }}</option>
    </select>
    <select v-model="ano">
      <option v-for="a in 100" :key="a" :value="2023 - a">{{ 2023 - a }}</option>
    </select>
  </div>
  <p class="resultado-idade">Idade: {{ calcularIdade() }} anos</p>
  <button class="continuar-btn" @click="proximaEtapaIdade">Continuar</button>
</section>
    </template>

    <template v-if="etapa === 4">
      <section class="form-comunidade">
  <h2>+13 mil pessoas</h2>
  <p>já descobriram seu potencial de prosperidade</p>
  <img src="/comunidade.png" alt="Comunidade" />
  <button class="continuar-btn" @click="proximaEtapa(5)">Continuar</button>
</section>
    </template>

    <template v-if="etapa === 5">
      <section class="form-estresse">
  <h2>Qual é sua principal meta financeira?</h2>
  <div class="opcoes-estresse">
    <button class="opcao-estresse" @click="proximaEtapa(6)">Estabilidade</button>
    <button class="opcao-estresse" @click="proximaEtapa(6)">Segurança</button>
    <button class="opcao-estresse" @click="proximaEtapa(6)">Crescimento</button>
    <button class="opcao-estresse" @click="proximaEtapa(6)">Liberdade</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 6">
      <section class="form-reflexao">
  <h2>Como você descreve suas decisões financeiras?</h2>
  <div class="opcoes-reflexao">
    <button class="opcao-reflexao" @click="proximaEtapa(7)">Cautelosa</button>
    <button class="opcao-reflexao" @click="proximaEtapa(7)">Ousada</button>
    <button class="opcao-reflexao" @click="proximaEtapa(7)">Emocional</button>
    <button class="opcao-reflexao" @click="proximaEtapa(7)">Prática e realista</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 7">
      <section class="form-desafio">
  <h2>Qual desses valores judaicos mais ressoa com você?</h2>
  <div class="opcoes-desafio">
    <button class="opcao-desafio" @click="proximaEtapa(8)">Sabedoria e aprendizado contínuo</button>
    <button class="opcao-desafio" @click="proximaEtapa(8)">Comunidade e cooperação</button>
    <button class="opcao-desafio" @click="proximaEtapa(8)">Integridade e ética no trabalho</button>
    <button class="opcao-desafio" @click="proximaEtapa(8)">Generosidade e partilha</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 8">
      <section class="form-pensamentos">
  <h2>Quando você enfrenta um desafio financeiro, você tende a...</h2>
  <div class="opcoes-pensamentos">
    <button class="opcao-pensamento" @click="proximaEtapa(9)">Planejar meticulosamente</button>
    <button class="opcao-pensamento" @click="proximaEtapa(9)">Agir rapidamente</button>
    <button class="opcao-pensamento" @click="proximaEtapa(9)">Consultar seus instintos</button>
    <button class="opcao-pensamento" @click="proximaEtapa(9)">Buscar equilíbrio</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 9">
      <section class="form-etapa9">
  <h2>Como você lida com as incertezas financeiras?</h2>
  <div class="opcoes-etapa9">
    <button class="opcao-etapa9" @click="proximaEtapa(10)">Planejamento cuidadoso</button>
    <button class="opcao-etapa9" @click="proximaEtapa(10)">Agindo com coragem</button>
    <button class="opcao-etapa9" @click="proximaEtapa(10)">Confiando na intuição</button>
    <button class="opcao-etapa9" @click="proximaEtapa(10)">Ajustando suas expectativas</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 10">
      <section class="form-etapa10">
  <h2>Qual é sua relação com a comunidade?</h2>
  <div class="opcoes-etapa10">
    <button class="opcao-etapa10" @click="proximaEtapa(11)">Participativo e engajado</button>
    <button class="opcao-etapa10" @click="proximaEtapa(11)">Observador e independente</button>
    <button class="opcao-etapa10" @click="proximaEtapa(11)">Líder e influente</button>
    <button class="opcao-etapa10" @click="proximaEtapa(11)">Apoio e suporte</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 11">
      <section class="form-etapa11">
  <h2>Com que frequência você revisa suas metas financeiras?</h2>
  <div class="opcoes-etapa11">
    <button class="opcao-etapa11" @click="proximaEtapa(12)">Regularmente</button>
    <button class="opcao-etapa11" @click="proximaEtapa(12)">Ocasionalmente</button>
    <button class="opcao-etapa11" @click="proximaEtapa(12)">Quase nunca</button>
    <button class="opcao-etapa11" @click="proximaEtapa(12)">Sempre que necessário</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 12">
      <section class="form-etapa12">
  <h2>Como você se sente em relação ao risco financeiro?</h2>
  <div class="opcoes-etapa12">
    <button class="opcao-etapa12" @click="proximaEtapa(13)">Evito riscos</button>
    <button class="opcao-etapa12" @click="proximaEtapa(13)">Arrisco quando necessário</button>
    <button class="opcao-etapa12" @click="proximaEtapa(13)">Confio na minha sorte</button>
    <button class="opcao-etapa12" @click="proximaEtapa(13)">Risco calculado</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 13">
      <section class="form-etapa13">
  <h2>Como você se sente em relação à colaboração com outros em projetos financeiros?</h2>
  <div class="opcoes-etapa13">
    <button class="opcao-etapa13" @click="proximaEtapa(14)">Valorizo totalmente e busco sempre parcerias.</button>
    <button class="opcao-etapa13" @click="proximaEtapa(14)">Prefiro trabalhar sozinho, mas estou aberto a colaborações.</button>
    <button class="opcao-etapa13" @click="proximaEtapa(14)">Sou cauteloso e escolho a dedo com quem colaborar.</button>
    <button class="opcao-etapa13" @click="proximaEtapa(14)">Evito parcerias sempre que possível.</button>
  </div>
</section>
    </template>

    <template v-if="etapa === 14">
      <section class="form-etapa14">
  <h2>Com que frequência você revisita e redefine seus objetivos de vida?</h2>
  <div class="opcoes-etapa14">
    <button class="opcao-etapa14" @click="proximaEtapa(15)">Constantemente, estou sempre ajustando minhas metas.</button>
    <button class="opcao-etapa14" @click="proximaEtapa(15)">Anualmente, faço uma revisão geral.</button>
    <button class="opcao-etapa14" @click="proximaEtapa(15)">Somente quando há uma mudança significativa em minha vida.</button>
    <button class="opcao-etapa14" @click="proximaEtapa(15)">Raramente, prefiro manter minhas metas estáveis.</button>
  </div>
</section>
    </template>

        <template v-if="etapa === 15">
      <section class="form-etapa15">
        <img src="/comprovado.png" alt="Comprovado" class="imagem-numerologia">
        <h2>Comprovado: A sabedoria judaica é reconhecida pela ciência por sua eficácia em atrair prosperidade!!!</h2>
        <p>
          Pesquisas afirmam que quem compreende seu propósito por meio da sabedoria judaica alcança prosperidade financeira e realização pessoal. A ciência afirma que o povo judeu é o mais próspero do mundo.
        </p>
        <div class="referencia">
          <img src="/logo-stanford.png" alt="Stanford">
          <p>De acordo com estudos da Universidade de Zurique Novas Fronteiras, 2023, Journal of Advanced Personal.</p>
        </div>
        <button class="continuar-jornada" @click="proximaEtapa(16)">Descobrir meu Potencial ➜</button>
      </section>

</template>

     <!-- Etapa 16 -->
<template v-if="etapa === 16">
  <section class="resultado-signo caixa">
    <img src="/resultado.png" alt="Resultado" class="imagem-numerologia" />
    <h2>{{ tituloSigno }}</h2>
    <p>{{ respostaSelecionada }}</p>
    <div class="referencia">
      <img src="/ouro.png" alt="Conselho Judaico" />
      <p>Receba um conselho judaico poderoso com base no seu perfil e desperte seu potencial máximo!</p>
    </div>
    <button class="continuar-jornada" @click="proximaEtapa(17)">Receber Dica de Ouro ➜</button>
  </section>
</template>

<!-- Etapa 17 -->
<template v-if="etapa === 17">
  <section class="dica-signo caixa">
    <img src="/resultado.png" alt="Dica" class="imagem-numerologia" />
    <h2>Dica para Maximizar seu Potencial</h2>
    <p>{{ dicaSelecionada }}</p>
    <button class="continuar-jornada" @click="proximaEtapa(18)">Finalizar Jornada ➜</button>
  </section>
</template>

<!-- Etapa 18 -->
<template v-if="etapa === 18">
  <section class="final-page caixa">
    <button class="voltar-btn" @click="etapa = 17">← Voltar</button>
    <div class="conteudo-final">
      <p class="passo">Passo 16/16</p>
      <div class="barra-progresso"></div>
      <h1>O Código Secreto da Prosperidade Judaica!</h1>
      <div class="oferta">
        <p><strong>Oferta Especial Black Friday! 🎉</strong></p>
        <p>Acesso completo ao seu Potencial de Prosperidade por apenas:</p>
        <p class="preco">12x R$9,74 <br> ou R$97 à vista</p>
      </div>
      <ul class="beneficios">
        <li>Descubra seu propósito de vida e missão através da sabedoria judaica</li>
        <li>Entenda seus talentos naturais e como potencializá-los</li>
        <li>Acesso a meditação guiada dos judeus</li>
      </ul>
      <button class="descobrir-btn">Quero Atingir meu Potencial Máximo →</button>
      <div class="pagamento-seguro">
        <p>🛡️ Pagamento 100% Seguro</p>
        <p>7 dias de garantia incondicional. Se você não ficar satisfeito(a), devolvemos 100% do seu dinheiro.</p>
      </div>
    </div>
  </section>
</template>

    <!-- Políticas de Privacidade e Segurança -->
    <section class="seguranca">
      <p>
        🔒 Suas informações estão seguras conosco: 
        <img class="icone" src="/norton.png" alt="Norton" />
        <img class="icone" src="/mcafee.png" alt="McAfee" />
      </p>
    </section>

    <!-- Sessão de Anúncios -->
    <section class="anuncios">
      <p>Como anunciado em:</p>
      <div class="logos">
        <img src="/r7.png" alt="R7" />
        <img src="/tvglobo.png" alt="TV Globo" />
        <img src="/g1.png" alt="G1" />
        <img src="/tiktok.png" alt="TikTok" />
      </div>
    </section>
  </div>

  <!-- Textos de Aviso -->
<div class="avisos">
  <p class="aviso-texto">
    Aviso Legal: As informações fornecidas são para fins de autoconhecimento e reflexão. Resultados individuais podem variar e não são garantidos. As referências a experiências passadas ou potenciais não constituem recomendações ou garantias de resultados específicos.
  </p>
  <p class="aviso-texto">
    Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
  </p>
</div>

<!-- Textos de Copyright e CNPJ -->
<div class="copyright">
  <p class="copyright-texto">
    ©️ Copyright 2024 | Samuel Keller ® | Todos os direitos reservados
  </p>
  <p class="copyright-texto">
    CNPJ: 49.810.921/0001-09 | Samuel Keller Schmid
  </p>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      etapa: 1,
      totalEtapas: 18,
      genero: null,
      nomeCompleto: '',
      dia: null,
      mes: null,
      ano: null,
      meses: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      respostasZodiaco: {
        Aries: {
          titulo: "O Pioneiro da Prosperidade",
          resposta: "Sua coragem e determinação são as chaves para abrir novas portas de abundância. Segundo os segredos judaicos, a iniciativa é um presente divino. Use a energia regeneradora do Shabbat para recarregar suas forças e planejar suas próximas conquistas. Lembre-se, o universo recompensa os bravos que ousam trilhar novos caminhos.",
          dica: "Pratique a 'Hitbodedut', uma forma de meditação pessoal, para clarear sua mente e definir seus objetivos mais ousados."
        },
        Touro: {
          titulo: "O Construtor da Abundância",
          resposta: "Sua persistência e senso de segurança são suas maiores fortalezas. Os ensinamentos judaicos valorizam a Tzedakah, a prática da caridade, como um meio poderoso de atrair prosperidade. Ao compartilhar suas bênçãos com os outros, você fortalece o fluxo de abundância em sua vida. Confie no poder da generosidade para construir uma base sólida de riqueza.",
          dica: "Estabeleça um compromisso regular de doação, mesmo que pequeno, para criar um ciclo contínuo de abundância."
        },
        Gemeos: {
          titulo: "O Comunicador da Riqueza",
          resposta: "Sua adaptabilidade e talento para a comunicação são ferramentas valiosas no caminho da prosperidade. A sabedoria judaica ensina que o diálogo e o aprendizado contínuo expandem horizontes. Mergulhe nos textos antigos e compartilhe suas descobertas, pois o conhecimento é uma moeda inestimável que se multiplica quando dividida.",
          dica: "Participe de grupos de estudo ou discussões semanais para fomentar o intercâmbio de ideias e ampliar suas perspectivas."
        },
        Cancer: {
          titulo: "O Guardião da Prosperidade Familiar",
          resposta: "Seu instinto protetor e atenção à segurança emocional são fundamentais para a prosperidade. Ensinamentos judaicos destacam a importância das tradições familiares como um pilar de estabilidade. Cultive a harmonia em seu lar e veja como isso se reflete em abundância material e espiritual. Sua força reside na união e no amor.",
          dica: "Organize Shabbat em família, promovendo um ambiente de paz e reflexão que fortalece os laços e atrai prosperidade."
        },
        Leao: {
          titulo: "O Líder da Abundância",
          resposta: "Sua confiança e carisma inspiram todos ao seu redor. Segundo os segredos judaicos, a verdadeira liderança é servil e altruísta. Use sua influência para guiar outros em direção ao crescimento e à prosperidade. A generosidade de seu espírito abre caminho para uma vida repleta de abundância e felicidade.",
          dica: "Envolva-se em causas sociais, liderando iniciativas que beneficiam a comunidade e reforçam sua posição como um líder generoso."
        },
        Virgem: {
          titulo: "O Analista da Riqueza",
          resposta: "Sua atenção aos detalhes e habilidade analítica são inigualáveis. A sabedoria judaica valoriza a introspecção e a avaliação contínua como caminhos para o sucesso. Faça revisões regulares de suas finanças e práticas de vida, ajustando o curso conforme necessário. A precisão é a chave para desbloquear a riqueza verdadeira.",
          dica: "Estabeleça um ritual diário de estudo e reflexão, usando um diário para registrar insights e ajustar estratégias."
        },
        Libra: {
          titulo: "O Harmonizador da Prosperidade",
          resposta: "Seu desejo de equilíbrio e justiça é uma força poderosa no caminho para a prosperidade. Medite sobre o conceito judaico de justiça para encontrar paz e harmonia em suas finanças. Ao alinhar suas ações com seus valores, você cria um fluxo constante de abundância e bem-estar em sua vida.",
          dica: "Pratique a meditação da 'Tikun Olam', focando em ações que promovam o equilíbrio e a justiça no mundo."
        },
        Escorpiao: {
          titulo: "O Transformador da Riqueza",
          resposta: "Sua intensidade e paixão têm o poder de transformar desafios em oportunidades. Os segredos judaicos ensinam que a introspecção é a chave para a renovação. Dedique-se à reflexão interna e permita que sua visão ardente ilumine o caminho para uma prosperidade duradoura e transformadora.",
          dica: "Use o 'Mussar', uma prática de desenvolvimento pessoal, para aprofundar seu autoconhecimento e transformar sua vida."
        },
        Sagitario: {
          titulo: "O Explorador da Abundância",
          resposta: "Sua busca incessante por conhecimento e aventura é a força motriz para sua prosperidade. A sabedoria judaica encoraja a exploração de novos horizontes e o estudo contínuo. Viaje, aprenda e expanda suas fronteiras para atrair a abundância que deseja. O mundo é seu campo de descobertas.",
          dica: "Incorpore o estudo de filosofia judaica em suas explorações para enriquecer sua visão de mundo e prosperar."
        },
        Capricornio: {
          titulo: "O Estrategista da Riqueza",
          resposta: "Sua determinação e disciplina são seus maiores ativos no caminho da prosperidade. Os ensinamentos judaicos valorizam a perseverança e o planejamento de longo prazo. Estabeleça metas financeiras claras e trabalhe diligentemente para alcançá-las. O seu sucesso é construído pedra por pedra, com paciência e estratégia.",
          dica: "Realize o 'Cheshbon Hanefesh', uma prática de balanço pessoal, para avaliar regularmente suas metas e progresso."
        },
        Aquario: {
          titulo: "O Visionário da Prosperidade",
          resposta: "Sua visão inovadora e espírito humanitário são essenciais para criar um impacto positivo no mundo. Os segredos judaicos destacam a importância de promover mudanças através de iniciativas altruístas. Engaje-se em projetos que tragam inovação e impacto social, e veja como o retorno é multiplicado em formas que você nunca imaginou.",
          dica: "Participe de atividades de 'Tikun Olam', contribuindo para o bem-estar global e promovendo a inovação."
        },
        Peixes: {
          titulo: "O Sonhador da Abundância",
          resposta: "Sua empatia e intuição são presentes valiosos no caminho para a prosperidade. A sabedoria judaica sugere que a intuição é um guia poderoso para a abundância. Pratique a visualização criativa, conecte-se com seus sonhos mais profundos e permita que eles se manifestem em realidade. O universo conspira a favor dos que têm fé em seus sonhos.",
          dica: "Use a 'Kavanah', a intenção focada durante a oração e a meditação, para alinhar seus desejos e manifestar seus sonhos."
        }
      },
      respostaSelecionada: '',
      dicaSelecionada: '',
      tituloSigno: '',
      signoAtual: ''
    };
  },
  computed: {
    progressoPercentual() {
      return (this.etapa / this.totalEtapas) * 100;
    }
  },
  methods: {
    proximaEtapa(novaEtapa) {
      if (novaEtapa <= this.totalEtapas) {
        this.etapa = novaEtapa;
      }
    },
    validarNome() {
      const nomeLimpo = this.nomeCompleto.trim();
      if (nomeLimpo.split(' ').length >= 2) {
        this.etapa = 3;
      } else {
        alert('Por favor, insira seu nome completo');
      }
    },
    calcularIdade() {
      if (this.dia && this.mes && this.ano) {
        const hoje = new Date();
        const nascimento = new Date(this.ano, this.mes - 1, this.dia);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const m = hoje.getMonth() - nascimento.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }
        return idade;
      }
      return '';
    },
    proximaEtapaIdade() {
      const idade = this.calcularIdade();
      if (idade !== '') {
        this.determinarSigno(); // Chama a função para definir o signo e as informações
        this.proximaEtapa(4); // Avançar para a próxima etapa após a idade
      } else {
        alert('Por favor, selecione uma data válida');
      }
    },
    determinarSigno() {
      const dataNascimento = new Date(this.ano, this.mes - 1, this.dia);
      let signo = '';

      // Determinação do signo baseado na data de nascimento
      if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 2, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 3, 19))) {
        signo = 'Aries';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 3, 20) && dataNascimento <= new Date(dataNascimento.getFullYear(), 4, 20))) {
        signo = 'Touro';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 4, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 5, 20))) {
        signo = 'Gemeos';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 5, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 6, 22))) {
        signo = 'Cancer';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 6, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 7, 22))) {
        signo = 'Leao';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 7, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 8, 22))) {
        signo = 'Virgem';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 8, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 9, 22))) {
        signo = 'Libra';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 9, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 10, 21))) {
        signo = 'Escorpiao';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 10, 22) && dataNascimento <= new Date(dataNascimento.getFullYear(), 11, 21))) {
        signo = 'Sagitario';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 11, 22) && dataNascimento <= new Date(dataNascimento.getFullYear(), 0, 19))) {
        signo = 'Capricornio';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 0, 20) && dataNascimento <= new Date(dataNascimento.getFullYear(), 1, 18))) {
        signo = 'Aquario';
      } else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 1, 19) && dataNascimento <= new Date(dataNascimento.getFullYear(), 2, 20))) {
        signo = 'Peixes';
      }

      this.signoAtual = signo;
      if (this.respostasZodiaco[signo]) {
        this.tituloSigno = this.respostasZodiaco[signo].titulo;
        this.respostaSelecionada = this.respostasZodiaco[signo].resposta;
        this.dicaSelecionada = this.respostasZodiaco[signo].dica;
      } else {
        this.tituloSigno = '';
        this.respostaSelecionada = '';
        this.dicaSelecionada = '';
      }
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f0;
  padding: 20px;
  color: #333;
}

.topo {
  background-color: #2c2c2c;
  color: white;
  padding: 10px 0;
  width: 100%;
}

.barra-superior {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.prosperidade-judaica {
  background-color: #d4af37; /* Dourado */
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.contador, .produto-nome, .avaliacao {
  margin: 0 10px;
}

.barra-progresso-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.voltar-btn {
  background: none;
  border: none;
  color: #1e3a5f; /* Azul profundo */
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px;
}

.barra-progresso {
  flex-grow: 1;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 0 15px;
  overflow: hidden;
}

.progresso {
  height: 100%;
  background-color: #daa520; /* Dourado */
  transition: width 0.3s ease;
}

.etapa-info {
  font-size: 14px;
  color: #333;
}

.headline h1 {
  font-size: 36px;
  margin: 30px 0 20px;
  color: #4a4a4a;
  text-align: center;
  font-weight: bold;
  font-family: 'Garamond', serif;
}

.sub-headline p {
  font-size: 20px;
  margin: 10px 0 15px;
  color: #555;
  text-align: center;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
}

.destaque {
  font-size: 20px;
  font-weight: bold;
  color: #b8860b;
  text-align: center;
  background-color: #e0e0d1;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.form-genero {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.form-nome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
}

.opcao {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 180px;
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;
}

.opcao img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
}

.genero-btn, .continuar-btn, .opcao-estresse, .opcao-reflexao {
  background-color: #d4af37; /* Dourado */
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

.opcao:hover, .continuar-btn:hover, .opcao-estresse:hover, .opcao-reflexao:hover {
  background-color: #b8860b;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.importante {
  font-size: 12px;
  color: #777;
  text-align: center;
  margin-bottom: 10px;
}

.seguranca {
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
}

.icone {
  height: 16px;
  margin: 0 5px;
  vertical-align: middle;
}

.anuncios {
  margin-top: 20px;
  text-align: center;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.logos img {
  height: 40px;
}

.logos img[src*="tiktok"], .logos img[src*="tvglobo"] {
  height: 31px;
}

.selecao-data {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.resultado-idade {
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}

.comunidade {
  text-align: center;
  margin-top: 20px;
}

.comunidade h2 {
  font-size: 24px;
  color: #4a4a4a;
}

.comunidade p {
  font-size: 18px;
  color: #555;
}

.comunidade img {
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
}

.opcoes-estresse, .opcoes-reflexao {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

/* Estilos para as seções de opções */
.opcoes-desafio, 
.opcoes-mentalidade, 
.opcoes-importancia, 
.opcoes-comparacao, 
.opcoes-prosperidade, 
.opcoes-dificuldades, 
.opcoes-direito, 
.opcoes-transformacao {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

/* Estilos para os botões de opção */
.opcao-desafio, 
.opcao-mentalidade, 
.opcao-importancia, 
.opcao-comparacao, 
.opcao-prosperidade, 
.opcao-dificuldades, 
.opcao-direito, 
.opcao-transformacao {
  background-color: #d4af37; /* Dourado */
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

/* Efeito de hover para os botões */
.opcao-desafio:hover, 
.opcao-mentalidade:hover, 
.opcao-importancia:hover, 
.opcao-comparacao:hover, 
.opcao-prosperidade:hover, 
.opcao-dificuldades:hover, 
.opcao-direito:hover, 
.opcao-transformacao:hover {
  background-color: #b8860b;
}

.final-page {
  background-color: #ffffff; /* Fundo branco para clareza */
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.voltar-btn {
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
  text-decoration: underline;
}

.conteudo-final .passo {
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 5px;
}

.barra-progresso {
  height: 4px;
  background-color: #daa520; /* Dourado escuro */
  margin-bottom: 20px;
}

.conteudo-final h1 {
  font-size: 24px;
  color: #333; /* Preto grafite */
  margin-bottom: 20px;
  font-family: 'Garamond', serif;
}

.oferta {
  background-color: #f0f0f0; /* Fundo suave */
  border-left: 4px solid #daa520; /* Dourado escuro */
  padding: 10px;
  margin-bottom: 20px;
}

.preco {
  font-size: 24px;
  font-weight: bold;
  color: #daa520; /* Dourado escuro */
}

.beneficios {
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin-bottom: 20px;
}

.beneficios li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333; /* Preto grafite */
  font-family: 'Arial', sans-serif;
}

.descobrir-btn {
  background-color: #228b22; /* Verde */
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.descobrir-btn:hover {
  background-color: #196619; /* Verde escuro */
}

.pagamento-seguro {
  font-size: 14px;
  color: #777;
}

</style>