class ValorNaoSuportado extends Error {
    constructor (contentType) {
        super(`Valor não suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportado