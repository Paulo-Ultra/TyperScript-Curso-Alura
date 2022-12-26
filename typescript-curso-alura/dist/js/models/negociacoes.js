export class Negociacoes {
    constructor() {
        this.negociacoes = []; // mesma coisa de: Array<Negociacao> = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
