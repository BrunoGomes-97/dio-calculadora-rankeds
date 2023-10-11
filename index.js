//--------------------------------
//Calculadora de partidas Rankeadas
//--------------------------------

//--------------------------------
//Variáveis
//--------------------------------
let nomeHeroi = "putzgrilla"
let vitorias = 150
let derrotas = 10
let rankHeroi = calcularRankeds(vitorias, derrotas)[0]

//--------------------------------
//Função
//--------------------------------
function calcularRankeds(vit, der) {
   let saldoDeVitorias = vit - der 
   let ranking
    if (saldoDeVitorias > 0 && saldoDeVitorias <= 10) {
        ranking = "Ferro"
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        ranking = "Bronze"
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        ranking = "Prata"
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        ranking = "Ouro"
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        ranking = "Diamante"
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        ranking = "Lendário"
    } else if (saldoDeVitorias >= 101) {
        ranking = "Imortal"
    } else {
        ranking = "Indefinido"
    }
    return [ranking, saldoDeVitorias]
}

//--------------------------------
//Saída
//--------------------------------
console.log(`O Herói **${nomeHeroi}** tem um saldo de ${calcularRankeds(vitorias, derrotas)[1]} vitórias e está no Ranking **${rankHeroi}**`)