import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [] // mesma coisa de: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);            
    }

    public lista(): readonly Negociacao[] {//mesma coisa de: ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}