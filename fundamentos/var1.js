// É visivel fora do escopo

{{{{ var sera = 'Será??' }}}}
console.log(sera)

// Só é visivel dentro da function

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)