function tratarErroELancar(erro) {
    throw new Error('Ocorreu um erro')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Yasmim' }
imprimirNomeGritado(obj)