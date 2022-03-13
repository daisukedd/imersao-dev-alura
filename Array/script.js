var champions = ["Jinx", "Yasuo", "Jax", "Nunu"]
//var champions = ["Oriana", "Akali"]
var addChampion = champions.push("Shaco") //Adiciona item ao Array
// console.log(champions.length)
// console.log(champions[0])

// champions.forEach(function (item, indice, array) {
//     console.log(item, indice)
// })

// for (indice = 0; indice < champions.length; indice++) {
//     console.log(`Lore de ${champions[indice]}`)
// }

var champion = {
    championName : 'Jinx',
    kda: [8, 4, 12]
}

console.log(champion.championName.length)


document.write("<p>" + champion.championName +"</p>")
document.write("<p>" + `KDA ${champion.kda}` + "</p>")