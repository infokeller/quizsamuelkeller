declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pontuacao: {
        type: NumberConstructor;
        required: true;
    };
}>, {}, {}, {
    pontuacaoPercentual(): number;
    chartOptions(): {
        chart: {
            type: string;
        };
        plotOptions: {
            radialBar: {
                hollow: {
                    size: string;
                };
            };
        };
        labels: string[];
        title: {
            text: string;
            style: {
                color: string;
            };
        };
        colors: string[];
    };
    perfil(): "Iniciante Financeiro" | "Investidor em Potencial" | "Estrategista Financeiro" | "Mestre dos Investimentos";
    descricao(): "" | "Você está no início da sua jornada financeira. É hora de aprender, criar disciplina e estabelecer metas claras de economia e investimento." | "Você já tem uma base sólida, mas ainda pode melhorar. Considere diversificar investimentos e buscar mais conhecimento financeiro." | "Parabéns! Você demonstra conhecimento financeiro avançado. Continue estudando e refinando suas estratégias de investimento." | "Excelente! Você é um verdadeiro especialista em finanças. Seu conhecimento e disciplina são admiráveis.";
}, {
    reiniciarQuiz(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pontuacao: {
        type: NumberConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {
    apexchart: (import("vue").Component & import("vue").ComponentOptionsBase<import("vue3-apexcharts").VueApexChartsComponent, any, any, any, any, any, any, any, string, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>) & (ThisType<any> & import("vue").Plugin);
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=QuizResult.vue.d.ts.map