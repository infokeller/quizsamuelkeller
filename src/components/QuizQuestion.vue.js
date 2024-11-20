export default (await import('vue')).defineComponent({
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
        };
    },
    computed: {
        perguntaAtual() {
            return this.perguntas[this.indicePergunta];
        }
    },
    methods: {
        selecionarResposta(opcao) {
            this.$emit('resposta-selecionada', opcao.pontos);
            if (this.indicePergunta < this.perguntas.length - 1) {
                this.indicePergunta++;
            }
            else {
                this.$emit('quiz-finalizado');
            }
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['opcao-btn'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("quiz-question") }, });
    if (__VLS_ctx.perguntaAtual) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.indicePergunta + 1);
        (__VLS_ctx.perguntas.length);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.perguntaAtual.texto);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("opcoes") }, });
        for (const [opcao] of __VLS_getVForSourceType((__VLS_ctx.perguntaAtual.opcoes))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.perguntaAtual)))
                            return;
                        __VLS_ctx.selecionarResposta(opcao);
                    } }, key: ((opcao.id)), ...{ class: ("opcao-btn") }, });
            (opcao.texto);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    __VLS_styleScopedClasses['quiz-question'];
    __VLS_styleScopedClasses['opcoes'];
    __VLS_styleScopedClasses['opcao-btn'];
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
//# sourceMappingURL=QuizQuestion.vue.js.map