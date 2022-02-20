const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')


app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resultado, proximo) => {
   
    if (erro instanceof NaoEncontrado) {
        resultado.status(404)
    }
    
    if (erro instanceof CampoInvalido) {
        resultado.status(400)
    }

    if (erro instanceof ValorNaoSuportado) {
        resultado.status(406)
    }
    resultado.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => console.log('Está ok'))