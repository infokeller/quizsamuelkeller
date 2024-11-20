export default (await import('vue')).defineComponent({
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
            }
            else {
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
            }
            else {
                alert('Por favor, selecione uma data válida');
            }
        },
        determinarSigno() {
            const dataNascimento = new Date(this.ano, this.mes - 1, this.dia);
            let signo = '';
            // Determinação do signo baseado na data de nascimento
            if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 2, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 3, 19))) {
                signo = 'Aries';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 3, 20) && dataNascimento <= new Date(dataNascimento.getFullYear(), 4, 20))) {
                signo = 'Touro';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 4, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 5, 20))) {
                signo = 'Gemeos';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 5, 21) && dataNascimento <= new Date(dataNascimento.getFullYear(), 6, 22))) {
                signo = 'Cancer';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 6, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 7, 22))) {
                signo = 'Leao';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 7, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 8, 22))) {
                signo = 'Virgem';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 8, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 9, 22))) {
                signo = 'Libra';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 9, 23) && dataNascimento <= new Date(dataNascimento.getFullYear(), 10, 21))) {
                signo = 'Escorpiao';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 10, 22) && dataNascimento <= new Date(dataNascimento.getFullYear(), 11, 21))) {
                signo = 'Sagitario';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 11, 22) && dataNascimento <= new Date(dataNascimento.getFullYear(), 0, 19))) {
                signo = 'Capricornio';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 0, 20) && dataNascimento <= new Date(dataNascimento.getFullYear(), 1, 18))) {
                signo = 'Aquario';
            }
            else if ((dataNascimento >= new Date(dataNascimento.getFullYear(), 1, 19) && dataNascimento <= new Date(dataNascimento.getFullYear(), 2, 20))) {
                signo = 'Peixes';
            }
            this.signoAtual = signo;
            if (this.respostasZodiaco[signo]) {
                this.tituloSigno = this.respostasZodiaco[signo].titulo;
                this.respostaSelecionada = this.respostasZodiaco[signo].resposta;
                this.dicaSelecionada = this.respostasZodiaco[signo].dica;
            }
            else {
                this.tituloSigno = '';
                this.respostaSelecionada = '';
                this.dicaSelecionada = '';
            }
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['opcao'];
    __VLS_styleScopedClasses['opcao'];
    __VLS_styleScopedClasses['continuar-btn'];
    __VLS_styleScopedClasses['opcao-estresse'];
    __VLS_styleScopedClasses['opcao-reflexao'];
    __VLS_styleScopedClasses['logos'];
    __VLS_styleScopedClasses['logos'];
    __VLS_styleScopedClasses['logos'];
    __VLS_styleScopedClasses['comunidade'];
    __VLS_styleScopedClasses['comunidade'];
    __VLS_styleScopedClasses['comunidade'];
    __VLS_styleScopedClasses['opcao-desafio'];
    __VLS_styleScopedClasses['opcao-mentalidade'];
    __VLS_styleScopedClasses['opcao-importancia'];
    __VLS_styleScopedClasses['opcao-comparacao'];
    __VLS_styleScopedClasses['opcao-prosperidade'];
    __VLS_styleScopedClasses['opcao-dificuldades'];
    __VLS_styleScopedClasses['opcao-direito'];
    __VLS_styleScopedClasses['opcao-transformacao'];
    __VLS_styleScopedClasses['voltar-btn'];
    __VLS_styleScopedClasses['barra-progresso'];
    __VLS_styleScopedClasses['conteudo-final'];
    __VLS_styleScopedClasses['beneficios'];
    __VLS_styleScopedClasses['descobrir-btn'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("topo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("barra-superior") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("prosperidade-judaica") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("relógio"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("produto-nome") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("avaliacao") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    if (__VLS_ctx.etapa > 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("barra-progresso-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa > 1)))
                        return;
                    __VLS_ctx.etapa > 1 ? __VLS_ctx.etapa-- : null;
                } }, ...{ class: ("voltar-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("barra-progresso") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("progresso") }, ...{ style: (({ width: __VLS_ctx.progressoPercentual + '%' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("indicador-etapa") }, ...{ style: (({ left: `calc(${__VLS_ctx.progressoPercentual}% - 15px)` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("etapa-info") }, });
        (__VLS_ctx.etapa);
    }
    if (__VLS_ctx.etapa === 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("headline") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sub-headline") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("destaque") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-genero") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 1)))
                        return;
                    __VLS_ctx.proximaEtapa(2);
                } }, ...{ class: ("opcao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/homem.png"), alt: ("Homem"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("genero-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 1)))
                        return;
                    __VLS_ctx.proximaEtapa(2);
                } }, ...{ class: ("opcao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/mulher.png"), alt: ("Mulher"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("genero-btn") }, });
    }
    if (__VLS_ctx.etapa === 2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("headline") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sub-headline") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-nome") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Seu Nome Completo"), value: ((__VLS_ctx.nomeCompleto)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("importante") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.validarNome) }, ...{ class: ("continuar-btn") }, });
    }
    if (__VLS_ctx.etapa === 3) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-idade") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("selecao-data") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.dia)), });
        for (const [d] of __VLS_getVForSourceType((31))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((d)), value: ((d)), });
            (d);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.mes)), });
        for (const [m, index] of __VLS_getVForSourceType((__VLS_ctx.meses))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((index)), value: ((index + 1)), });
            (m);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.ano)), });
        for (const [a] of __VLS_getVForSourceType((100))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((a)), value: ((2023 - a)), });
            (2023 - a);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("resultado-idade") }, });
        (__VLS_ctx.calcularIdade());
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.proximaEtapaIdade) }, ...{ class: ("continuar-btn") }, });
    }
    if (__VLS_ctx.etapa === 4) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-comunidade") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/comunidade.png"), alt: ("Comunidade"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 4)))
                        return;
                    __VLS_ctx.proximaEtapa(5);
                } }, ...{ class: ("continuar-btn") }, });
    }
    if (__VLS_ctx.etapa === 5) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-estresse") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-estresse") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 5)))
                        return;
                    __VLS_ctx.proximaEtapa(6);
                } }, ...{ class: ("opcao-estresse") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 5)))
                        return;
                    __VLS_ctx.proximaEtapa(6);
                } }, ...{ class: ("opcao-estresse") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 5)))
                        return;
                    __VLS_ctx.proximaEtapa(6);
                } }, ...{ class: ("opcao-estresse") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 5)))
                        return;
                    __VLS_ctx.proximaEtapa(6);
                } }, ...{ class: ("opcao-estresse") }, });
    }
    if (__VLS_ctx.etapa === 6) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-reflexao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-reflexao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 6)))
                        return;
                    __VLS_ctx.proximaEtapa(7);
                } }, ...{ class: ("opcao-reflexao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 6)))
                        return;
                    __VLS_ctx.proximaEtapa(7);
                } }, ...{ class: ("opcao-reflexao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 6)))
                        return;
                    __VLS_ctx.proximaEtapa(7);
                } }, ...{ class: ("opcao-reflexao") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 6)))
                        return;
                    __VLS_ctx.proximaEtapa(7);
                } }, ...{ class: ("opcao-reflexao") }, });
    }
    if (__VLS_ctx.etapa === 7) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-desafio") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-desafio") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 7)))
                        return;
                    __VLS_ctx.proximaEtapa(8);
                } }, ...{ class: ("opcao-desafio") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 7)))
                        return;
                    __VLS_ctx.proximaEtapa(8);
                } }, ...{ class: ("opcao-desafio") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 7)))
                        return;
                    __VLS_ctx.proximaEtapa(8);
                } }, ...{ class: ("opcao-desafio") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 7)))
                        return;
                    __VLS_ctx.proximaEtapa(8);
                } }, ...{ class: ("opcao-desafio") }, });
    }
    if (__VLS_ctx.etapa === 8) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-pensamentos") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-pensamentos") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 8)))
                        return;
                    __VLS_ctx.proximaEtapa(9);
                } }, ...{ class: ("opcao-pensamento") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 8)))
                        return;
                    __VLS_ctx.proximaEtapa(9);
                } }, ...{ class: ("opcao-pensamento") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 8)))
                        return;
                    __VLS_ctx.proximaEtapa(9);
                } }, ...{ class: ("opcao-pensamento") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 8)))
                        return;
                    __VLS_ctx.proximaEtapa(9);
                } }, ...{ class: ("opcao-pensamento") }, });
    }
    if (__VLS_ctx.etapa === 9) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 9)))
                        return;
                    __VLS_ctx.proximaEtapa(10);
                } }, ...{ class: ("opcao-etapa9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 9)))
                        return;
                    __VLS_ctx.proximaEtapa(10);
                } }, ...{ class: ("opcao-etapa9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 9)))
                        return;
                    __VLS_ctx.proximaEtapa(10);
                } }, ...{ class: ("opcao-etapa9") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 9)))
                        return;
                    __VLS_ctx.proximaEtapa(10);
                } }, ...{ class: ("opcao-etapa9") }, });
    }
    if (__VLS_ctx.etapa === 10) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 10)))
                        return;
                    __VLS_ctx.proximaEtapa(11);
                } }, ...{ class: ("opcao-etapa10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 10)))
                        return;
                    __VLS_ctx.proximaEtapa(11);
                } }, ...{ class: ("opcao-etapa10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 10)))
                        return;
                    __VLS_ctx.proximaEtapa(11);
                } }, ...{ class: ("opcao-etapa10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 10)))
                        return;
                    __VLS_ctx.proximaEtapa(11);
                } }, ...{ class: ("opcao-etapa10") }, });
    }
    if (__VLS_ctx.etapa === 11) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa11") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa11") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 11)))
                        return;
                    __VLS_ctx.proximaEtapa(12);
                } }, ...{ class: ("opcao-etapa11") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 11)))
                        return;
                    __VLS_ctx.proximaEtapa(12);
                } }, ...{ class: ("opcao-etapa11") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 11)))
                        return;
                    __VLS_ctx.proximaEtapa(12);
                } }, ...{ class: ("opcao-etapa11") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 11)))
                        return;
                    __VLS_ctx.proximaEtapa(12);
                } }, ...{ class: ("opcao-etapa11") }, });
    }
    if (__VLS_ctx.etapa === 12) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 12)))
                        return;
                    __VLS_ctx.proximaEtapa(13);
                } }, ...{ class: ("opcao-etapa12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 12)))
                        return;
                    __VLS_ctx.proximaEtapa(13);
                } }, ...{ class: ("opcao-etapa12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 12)))
                        return;
                    __VLS_ctx.proximaEtapa(13);
                } }, ...{ class: ("opcao-etapa12") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 12)))
                        return;
                    __VLS_ctx.proximaEtapa(13);
                } }, ...{ class: ("opcao-etapa12") }, });
    }
    if (__VLS_ctx.etapa === 13) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa13") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa13") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 13)))
                        return;
                    __VLS_ctx.proximaEtapa(14);
                } }, ...{ class: ("opcao-etapa13") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 13)))
                        return;
                    __VLS_ctx.proximaEtapa(14);
                } }, ...{ class: ("opcao-etapa13") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 13)))
                        return;
                    __VLS_ctx.proximaEtapa(14);
                } }, ...{ class: ("opcao-etapa13") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 13)))
                        return;
                    __VLS_ctx.proximaEtapa(14);
                } }, ...{ class: ("opcao-etapa13") }, });
    }
    if (__VLS_ctx.etapa === 14) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa14") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes-etapa14") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 14)))
                        return;
                    __VLS_ctx.proximaEtapa(15);
                } }, ...{ class: ("opcao-etapa14") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 14)))
                        return;
                    __VLS_ctx.proximaEtapa(15);
                } }, ...{ class: ("opcao-etapa14") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 14)))
                        return;
                    __VLS_ctx.proximaEtapa(15);
                } }, ...{ class: ("opcao-etapa14") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 14)))
                        return;
                    __VLS_ctx.proximaEtapa(15);
                } }, ...{ class: ("opcao-etapa14") }, });
    }
    if (__VLS_ctx.etapa === 15) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form-etapa15") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/comprovado.png"), alt: ("Comprovado"), ...{ class: ("imagem-numerologia") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("referencia") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/logo-stanford.png"), alt: ("Stanford"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 15)))
                        return;
                    __VLS_ctx.proximaEtapa(16);
                } }, ...{ class: ("continuar-jornada") }, });
    }
    if (__VLS_ctx.etapa === 16) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("resultado-signo caixa") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/resultado.png"), alt: ("Resultado"), ...{ class: ("imagem-numerologia") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.tituloSigno);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.respostaSelecionada);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("referencia") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/ouro.png"), alt: ("Conselho Judaico"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 16)))
                        return;
                    __VLS_ctx.proximaEtapa(17);
                } }, ...{ class: ("continuar-jornada") }, });
    }
    if (__VLS_ctx.etapa === 17) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("dica-signo caixa") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/resultado.png"), alt: ("Dica"), ...{ class: ("imagem-numerologia") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.dicaSelecionada);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 17)))
                        return;
                    __VLS_ctx.proximaEtapa(18);
                } }, ...{ class: ("continuar-jornada") }, });
    }
    if (__VLS_ctx.etapa === 18) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("final-page caixa") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.etapa === 18)))
                        return;
                    __VLS_ctx.etapa = 17;
                } }, ...{ class: ("voltar-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("conteudo-final") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("passo") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("barra-progresso") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("oferta") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("preco") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("beneficios") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("descobrir-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagamento-seguro") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("seguranca") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("icone") }, src: ("/norton.png"), alt: ("Norton"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("icone") }, src: ("/mcafee.png"), alt: ("McAfee"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("anuncios") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logos") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/r7.png"), alt: ("R7"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/tvglobo.png"), alt: ("TV Globo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/g1.png"), alt: ("G1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/tiktok.png"), alt: ("TikTok"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("avisos") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("aviso-texto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("aviso-texto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("copyright") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("copyright-texto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("copyright-texto") }, });
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['topo'];
    __VLS_styleScopedClasses['barra-superior'];
    __VLS_styleScopedClasses['prosperidade-judaica'];
    __VLS_styleScopedClasses['produto-nome'];
    __VLS_styleScopedClasses['avaliacao'];
    __VLS_styleScopedClasses['barra-progresso-container'];
    __VLS_styleScopedClasses['voltar-btn'];
    __VLS_styleScopedClasses['barra-progresso'];
    __VLS_styleScopedClasses['progresso'];
    __VLS_styleScopedClasses['indicador-etapa'];
    __VLS_styleScopedClasses['etapa-info'];
    __VLS_styleScopedClasses['headline'];
    __VLS_styleScopedClasses['sub-headline'];
    __VLS_styleScopedClasses['destaque'];
    __VLS_styleScopedClasses['form-genero'];
    __VLS_styleScopedClasses['opcao'];
    __VLS_styleScopedClasses['genero-btn'];
    __VLS_styleScopedClasses['opcao'];
    __VLS_styleScopedClasses['genero-btn'];
    __VLS_styleScopedClasses['headline'];
    __VLS_styleScopedClasses['sub-headline'];
    __VLS_styleScopedClasses['form-nome'];
    __VLS_styleScopedClasses['importante'];
    __VLS_styleScopedClasses['continuar-btn'];
    __VLS_styleScopedClasses['form-idade'];
    __VLS_styleScopedClasses['selecao-data'];
    __VLS_styleScopedClasses['resultado-idade'];
    __VLS_styleScopedClasses['continuar-btn'];
    __VLS_styleScopedClasses['form-comunidade'];
    __VLS_styleScopedClasses['continuar-btn'];
    __VLS_styleScopedClasses['form-estresse'];
    __VLS_styleScopedClasses['opcoes-estresse'];
    __VLS_styleScopedClasses['opcao-estresse'];
    __VLS_styleScopedClasses['opcao-estresse'];
    __VLS_styleScopedClasses['opcao-estresse'];
    __VLS_styleScopedClasses['opcao-estresse'];
    __VLS_styleScopedClasses['form-reflexao'];
    __VLS_styleScopedClasses['opcoes-reflexao'];
    __VLS_styleScopedClasses['opcao-reflexao'];
    __VLS_styleScopedClasses['opcao-reflexao'];
    __VLS_styleScopedClasses['opcao-reflexao'];
    __VLS_styleScopedClasses['opcao-reflexao'];
    __VLS_styleScopedClasses['form-desafio'];
    __VLS_styleScopedClasses['opcoes-desafio'];
    __VLS_styleScopedClasses['opcao-desafio'];
    __VLS_styleScopedClasses['opcao-desafio'];
    __VLS_styleScopedClasses['opcao-desafio'];
    __VLS_styleScopedClasses['opcao-desafio'];
    __VLS_styleScopedClasses['form-pensamentos'];
    __VLS_styleScopedClasses['opcoes-pensamentos'];
    __VLS_styleScopedClasses['opcao-pensamento'];
    __VLS_styleScopedClasses['opcao-pensamento'];
    __VLS_styleScopedClasses['opcao-pensamento'];
    __VLS_styleScopedClasses['opcao-pensamento'];
    __VLS_styleScopedClasses['form-etapa9'];
    __VLS_styleScopedClasses['opcoes-etapa9'];
    __VLS_styleScopedClasses['opcao-etapa9'];
    __VLS_styleScopedClasses['opcao-etapa9'];
    __VLS_styleScopedClasses['opcao-etapa9'];
    __VLS_styleScopedClasses['opcao-etapa9'];
    __VLS_styleScopedClasses['form-etapa10'];
    __VLS_styleScopedClasses['opcoes-etapa10'];
    __VLS_styleScopedClasses['opcao-etapa10'];
    __VLS_styleScopedClasses['opcao-etapa10'];
    __VLS_styleScopedClasses['opcao-etapa10'];
    __VLS_styleScopedClasses['opcao-etapa10'];
    __VLS_styleScopedClasses['form-etapa11'];
    __VLS_styleScopedClasses['opcoes-etapa11'];
    __VLS_styleScopedClasses['opcao-etapa11'];
    __VLS_styleScopedClasses['opcao-etapa11'];
    __VLS_styleScopedClasses['opcao-etapa11'];
    __VLS_styleScopedClasses['opcao-etapa11'];
    __VLS_styleScopedClasses['form-etapa12'];
    __VLS_styleScopedClasses['opcoes-etapa12'];
    __VLS_styleScopedClasses['opcao-etapa12'];
    __VLS_styleScopedClasses['opcao-etapa12'];
    __VLS_styleScopedClasses['opcao-etapa12'];
    __VLS_styleScopedClasses['opcao-etapa12'];
    __VLS_styleScopedClasses['form-etapa13'];
    __VLS_styleScopedClasses['opcoes-etapa13'];
    __VLS_styleScopedClasses['opcao-etapa13'];
    __VLS_styleScopedClasses['opcao-etapa13'];
    __VLS_styleScopedClasses['opcao-etapa13'];
    __VLS_styleScopedClasses['opcao-etapa13'];
    __VLS_styleScopedClasses['form-etapa14'];
    __VLS_styleScopedClasses['opcoes-etapa14'];
    __VLS_styleScopedClasses['opcao-etapa14'];
    __VLS_styleScopedClasses['opcao-etapa14'];
    __VLS_styleScopedClasses['opcao-etapa14'];
    __VLS_styleScopedClasses['opcao-etapa14'];
    __VLS_styleScopedClasses['form-etapa15'];
    __VLS_styleScopedClasses['imagem-numerologia'];
    __VLS_styleScopedClasses['referencia'];
    __VLS_styleScopedClasses['continuar-jornada'];
    __VLS_styleScopedClasses['resultado-signo'];
    __VLS_styleScopedClasses['caixa'];
    __VLS_styleScopedClasses['imagem-numerologia'];
    __VLS_styleScopedClasses['referencia'];
    __VLS_styleScopedClasses['continuar-jornada'];
    __VLS_styleScopedClasses['dica-signo'];
    __VLS_styleScopedClasses['caixa'];
    __VLS_styleScopedClasses['imagem-numerologia'];
    __VLS_styleScopedClasses['continuar-jornada'];
    __VLS_styleScopedClasses['final-page'];
    __VLS_styleScopedClasses['caixa'];
    __VLS_styleScopedClasses['voltar-btn'];
    __VLS_styleScopedClasses['conteudo-final'];
    __VLS_styleScopedClasses['passo'];
    __VLS_styleScopedClasses['barra-progresso'];
    __VLS_styleScopedClasses['oferta'];
    __VLS_styleScopedClasses['preco'];
    __VLS_styleScopedClasses['beneficios'];
    __VLS_styleScopedClasses['descobrir-btn'];
    __VLS_styleScopedClasses['pagamento-seguro'];
    __VLS_styleScopedClasses['seguranca'];
    __VLS_styleScopedClasses['icone'];
    __VLS_styleScopedClasses['icone'];
    __VLS_styleScopedClasses['anuncios'];
    __VLS_styleScopedClasses['logos'];
    __VLS_styleScopedClasses['avisos'];
    __VLS_styleScopedClasses['aviso-texto'];
    __VLS_styleScopedClasses['aviso-texto'];
    __VLS_styleScopedClasses['copyright'];
    __VLS_styleScopedClasses['copyright-texto'];
    __VLS_styleScopedClasses['copyright-texto'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=HomePage.vue.js.map