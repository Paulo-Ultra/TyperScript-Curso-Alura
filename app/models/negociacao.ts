export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
     }

   get volume(): number {
       return this.quantidade * this.valor;
   }
    // Outra forma de declacar atributos e métodos privados
    //    constructor(
    //     private _data: Date, 
    //     private _quantidade: number, 
    //     private _valor: number
    //     ) {}

    // get data(): Date {
    //     return this._data;
    // }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    // get volume(): number {
    //     return this._quantidade * this._valor;
    // }

    public static criaDe(dateString: string, quantidadeString: string, valorString:string): Negociacao{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}