const roteador = require('express').Router()
const TabelaForn = require('./TabelaFornecedor')
const Fornecedores = require('./Fornecedores')

roteador.get('/', async (requisicao, resposta) =>{
    const resultados = await TabelaForn.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resultado, proximo) => {
    try {
        const dadosRecebidos = requisicao.body
        const forncedor = new Fornecedores(dadosRecebidos)
        await forncedor.criar()
        resultado.status(201)
        resultado.send(
            JSON.stringify(forncedor)
        )
    } catch (erro) {
        proximo(erro)
    }
})

roteador.get('/:idFornecedores', async (requisicao, resultado, proximo) => {
    try {
        const id = requisicao.params.idFornecedores
        const forncedor = new Fornecedores({ id: id })
        await forncedor.carregar()
        resultado.status(200)
        resultado.send(
            JSON.stringify(forncedor)
        )
    
    } catch (erro) {
        proximo(erro)
    }
})

roteador.put('/:idFornecedores', async (requisicao, resultado, proximo) => {
    try {
        const id = requisicao.params.idFornecedores
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id:id })
        const forncedor = new Fornecedores(dados)
        await forncedor.atualizar()
        resultado.status(204)
        resultado.end()
    } catch (erro) {
        proximo(erro)
    }
})

roteador.delete('/:idFornecedores', async (requisicao, resultado) => {
    try {
        const id = requisicao.params.idFornecedores
        const forncedor = new Fornecedores({ id: id })
        await forncedor.carregar()
        await forncedor.remover()
        resultado.status(204)
        resultado.end()
    
    } catch (erro) {
        resultado.status(404)
        resultado.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})



module.exports = roteador