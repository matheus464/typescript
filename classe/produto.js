"use strict";
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    valorComDesconto() {
        var precoFinal;
        precoFinal = this.preco * this.desconto;
        return precoFinal;
    }
    resumo() {
        return `${this.nome} custa ${this.preco} e tem desconto de ${this.desconto * 100}% off`;
    }
}
const produto1 = new Produto('Iphone 13 pro max', 4550, 0.35);
console.log(produto1.resumo());
const produto2 = new Produto('Mac Book Pro', 4550, 0.25);
console.log(produto2);
console.log(produto2.valorComDesconto());
//# sourceMappingURL=produto.js.map