import ApexChart from 'vue3-apexcharts';
export default (await import('vue')).defineComponent({
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
            return Math.round((this.pontuacao / 150) * 100);
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
            };
        },
        perfil() {
            if (this.pontuacao <= 25) {
                return "Iniciante Financeiro";
            }
            else if (this.pontuacao <= 50) {
                return "Investidor em Potencial";
            }
            else if (this.pontuacao <= 75) {
                return "Estrategista Financeiro";
            }
            else {
                return "Mestre dos Investimentos";
            }
        },
        descricao() {
            switch (this.perfil) {
                case "Iniciante Financeiro":
                    return "Você está no início da sua jornada financeira. É hora de aprender, criar disciplina e estabelecer metas claras de economia e investimento.";
                case "Investidor em Potencial":
                    return "Você já tem uma base sólida, mas ainda pode melhorar. Considere diversificar investimentos e buscar mais conhecimento financeiro.";
                case "Estrategista Financeiro":
                    return "Parabéns! Você demonstra conhecimento financeiro avançado. Continue estudando e refinando suas estratégias de investimento.";
                case "Mestre dos Investimentos":
                    return "Excelente! Você é um verdadeiro especialista em finanças. Seu conhecimento e disciplina são admiráveis.";
                default:
                    return "";
            }
        }
    },
    methods: {
        reiniciarQuiz() {
            this.$emit('reiniciar');
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            apexchart: ApexChart
        },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("quiz-result") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("resultado") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.perfil);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.descricao);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pontuacao") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.pontuacao);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grafico") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ width: ("100%"), type: ("radialBar"), options: ((__VLS_ctx.chartOptions)), series: (([__VLS_ctx.pontuacaoPercentual])), }));
    const __VLS_2 = __VLS_1({ width: ("100%"), type: ("radialBar"), options: ((__VLS_ctx.chartOptions)), series: (([__VLS_ctx.pontuacaoPercentual])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.reiniciarQuiz) }, });
    __VLS_styleScopedClasses['quiz-result'];
    __VLS_styleScopedClasses['resultado'];
    __VLS_styleScopedClasses['pontuacao'];
    __VLS_styleScopedClasses['grafico'];
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
//# sourceMappingURL=QuizResult.vue.js.map