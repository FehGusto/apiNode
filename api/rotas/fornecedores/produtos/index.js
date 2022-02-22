const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('./TabelaProduto')

roteador.get('/', async (requisao, resposta) => {
    const produtos = await Tabela.listar(requisao.params.idFornecedor)
    resposta.send(
        JSON.stringify(produtos)
    )
})

module.exports = roteador