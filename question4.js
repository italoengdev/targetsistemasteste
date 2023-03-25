const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

const valorTotal = Object.values(faturamentoPorEstado).reduce(
  (acc, cur) => acc + cur,
  0
)

const representacaoPorEstado = {}
for (const estado in faturamentoPorEstado) {
  representacaoPorEstado[estado] =
    (faturamentoPorEstado[estado] / valorTotal) * 100
}

const representacaoFormatada = {}

for (let estado in representacaoPorEstado) {
  representacaoPorEstado[estado] =
    representacaoPorEstado[estado].toFixed(1) + '%'
}

console.log(representacaoFormatada)
