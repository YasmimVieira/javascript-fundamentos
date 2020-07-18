console.log(Math.ceil(6.1))

const Obj1 = {}
Obj1.nome = 'Bola'
console.log(Obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj = new Obj('Yasmim')
const obj2 = new Obj('Mesa')
console.log(obj.nome)
console.log(obj2.nome)
obj2.exec()