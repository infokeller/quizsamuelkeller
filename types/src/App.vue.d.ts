declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    HomePage: import("vue").DefineComponent<{}, {}, {
        etapa: number;
        totalEtapas: number;
        genero: null;
        nomeCompleto: string;
        dia: null;
        mes: null;
        ano: null;
        meses: string[];
        respostasZodiaco: {
            Aries: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Touro: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Gemeos: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Cancer: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Leao: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Virgem: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Libra: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Escorpiao: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Sagitario: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Capricornio: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Aquario: {
                titulo: string;
                resposta: string;
                dica: string;
            };
            Peixes: {
                titulo: string;
                resposta: string;
                dica: string;
            };
        };
        respostaSelecionada: string;
        dicaSelecionada: string;
        tituloSigno: string;
        signoAtual: string;
    }, {
        progressoPercentual(): number;
    }, {
        proximaEtapa(novaEtapa: any): void;
        validarNome(): void;
        calcularIdade(): number | "";
        proximaEtapaIdade(): void;
        determinarSigno(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=App.vue.d.ts.map