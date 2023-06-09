// par nome/valor

const saudacao = 'Opa' // contesxto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Felicidade',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)