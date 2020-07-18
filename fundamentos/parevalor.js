const saudacao = 'Opa' //contexto lexico 1 = contexto aonde a sua variavel foi definida

function exec() { //contexto lexico 2
    const saudacao = 'Falaa'
    return saudacao
}


// objeto são grupos aninhados de pares/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Av sapopemba',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)