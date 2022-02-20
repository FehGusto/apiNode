const roteador = require('express').Router()
const TabelaForn = require('./TabelaFornecedor')


roteador.use('/', async (requisicao, resposta) =>{
    const resultados = await TabelaForn.listar()
    resposta.send(
        JSON.stringify()
    )
})

module.exports = roteador