const faturamentoDiario = require('./dados.json')
console.log(faturamentoDiario)

const valores = faturamentoDiario.map(item => item.valor)
const soma = valores.reduce((total, valor) => total + valor)
const media = soma / valores.length

const diasAcimaDaMedia = faturamentoDiario.filter(
  item => item.valor > media
).length

const menorFaturamento = Math.min(...valores)
const maiorFaturamento = Math.max(...valores)

console.log(`Menor faturamento diário: R$${menorFaturamento.toFixed(2)}`)
console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`)
console.log(
  `${diasAcimaDaMedia} dias tiveram faturamento acima da média mensal de R$${media.toFixed(
    2
  )}`
)
