const desconto = 0.1;

let produto = {
    nome: 'Mousepad',
    codigo: '123456',
    valor: 100 };

function calcularCompra (produto, numParcelas) {
//desconto, à vista...
    if(numParcelas == 0) {
        let valorAvista = produto.valor * (1 - desconto);
        console.log(valorAvista);
    }
    //parcelamento, sem juros...
    else if (numParcelas >= 1, numParcelas <= 10) {
        let valorParceladoSemJuros = produto.valor / numParcelas;
        console.log(valorParceladoSemJuros);
    }
    //com juros...
    else if (numParcelas >= 11, numParcelas <= 12) { 
        const juros = 0.02;
        let valorTotalComJuros = produto.valor * (1 + juros);
        let valorTotalParcelado = valorTotalComJuros / numParcelas;
        console.log(valorTotalParcelado);
    }
    //caso selecione um número maior que 12x...
    else if (numParcelas > 12) { 
        console.log('O número de parcelas não é permitido!');
    }
}
//usando os exemplos que o senhor, prof.Rangel, deixou na atividade...
calcularCompra(produto, 0); // compra à vista, exibe o valor com desconto.
calcularCompra(produto, 1);
calcularCompra(produto, 2);
calcularCompra(produto, 3);
calcularCompra(produto, 4);
calcularCompra(produto, 5); // compra parcelada em 5x, exibe o valor de cada parcela. 
calcularCompra(produto, 6);
calcularCompra(produto, 7);
calcularCompra(produto, 8);
calcularCompra(produto, 9);
calcularCompra(produto, 10);
calcularCompra(produto, 11); // compra parcelada em 11x, exibe o valor de cada parcela com juros.
calcularCompra(produto, 12);
calcularCompra(produto, 13); //caso ultrapasse de 12x, ele exibe uma mensagem.