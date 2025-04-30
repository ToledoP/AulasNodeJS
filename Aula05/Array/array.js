
const notas = [10, 8, 5, 9];

notas.sort((a, b) => a - b);
console.log(notas);

console.table(notas);

notas.push(11);
notas.push(true);
notas.push("ABC");

// Usado somente para remover
notas.pop();
notas.pop()
console.log(notas)

//notas.splice remove e tambem adiciona novos valores para o array, basta utilizar 0 para adicionar e 1 para remover
notas.splice(1, 0, 12);
console.log(notas);
notas.sort(((a, b) => a - b));
console.log(notas);

// for (i in notas) {
//     console.log(notas[i] ** 2);
// }

notas.forEach(nota => {
    console.log(nota ** 2);
});