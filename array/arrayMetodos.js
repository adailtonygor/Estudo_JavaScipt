const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop remove o ultimo array
console.log(pilotos)

pilotos.push('Verstappen')  // push adiciona um array na ultima posição
console.log(pilotos)

pilotos.shift() // shift remove o primeiro array
console.log(pilotos)

pilotos.unshift('Hamilton') // unshift adiciona no começo do array 
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar 

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array // ele selecina todos após a segundo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // slice pega um pedaço do array 
console.log(algunsPilotos2)

