let valor //undefined: não inicializada
console.log(valor)

valor = null //null: não tem nenhum valor e nenhum endereço que aponte para algum lugar de memoria que tenha um valor
console.log(valor)

const produto = {}
console.log(produto.preco) //posso acessar o preco pq eu defini a váriavel produto, caso contrário não poderia pois daria erro por ser um valor null
console.log(produto)

produto.preco = 3.50;
console.log(produto)