declare const _default: import("vue").DefineComponent<{}, {}, {
    indicePergunta: number;
    perguntas: {
        texto: string;
        opcoes: {
            id: number;
            texto: string;
            pontos: number;
        }[];
    }[];
}, {
    perguntaAtual(): {
        texto: string;
        opcoes: {
            id: number;
            texto: string;
            pontos: number;
        }[];
    };
}, {
    selecionarResposta(opcao: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=QuizQuestion.vue.d.ts.map