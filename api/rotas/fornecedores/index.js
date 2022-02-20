const roteador = require('express').Router()
const TabelaForn = require('./TabelaFornecedor')
const Fornecedores = require('./Fornecedores')


roteador.get('/', async (requisicao, resposta) =>{
    const resultados = await TabelaForn.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resultado) => {
    const dadosRecebidos = requisicao.body
    const forncedor = new Fornecedores(dadosRecebidos)
    await forncedor.criar()
    resultado.send(
        JSON.stringify(forncedor)
    )
})

roteador.get('/:idFornecedores', async (requisicao, resultado) => {
    try {
        const id = requisicao.params.idFornecedores
        const forncedor = new Fornecedores({ id: id })
        await forncedor.carregar()
        resultado.send(
            JSON.stringify(forncedor)
        )
    
    } catch (erro) {
        resultado.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idFornecedores', async (requisicao, resultado) => {
    try {
        const id = requisicao.params.idFornecedores
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, { id:id })
        const forncedor = new Fornecedores(dados)
        await forncedor.atualizar()
        resultado.end()
    
    } catch (erro) {
        resultado.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})



module.exports = roteador