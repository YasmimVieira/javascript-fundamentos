// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// sem o segundo número ele retorna um valor undefined, retornando um resultado not number NaN
imprimirSoma(2)

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3))
