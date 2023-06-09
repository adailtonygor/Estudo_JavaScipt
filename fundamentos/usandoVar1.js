//criando uma variavel dentro do bloco. Fora dela vai ficar visivel

{
    {
        var sera ='Será??'
        console.log(sera)
    }
}

console.log(sera)

// aqui não fica visivel fazendo a variavel dentro da função. Você consegue usar apenas dentro da função. Fora você não consegue!.
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)