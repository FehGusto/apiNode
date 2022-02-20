class NaoEncontrado extends Error {
    constructor () {
        super('Fornecedor Vazio')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado