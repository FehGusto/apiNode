class CampoInvalido extends Error {
    constructor () {
        const mensagem = `'Campo '${campo} 'invalido'`
        super(mensagem)
        this.name = 'CampoInvalido'
        this.idErro = 1
    }
}

module.exports = CampoInvalido