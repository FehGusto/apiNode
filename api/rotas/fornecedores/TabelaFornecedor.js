const Modelo = require('./ModeloTabelaFornecedores')

module.exports = {
    listar () {
        return Modelo.findAll()
    },
    inserir (fornecedor) {
        return Modelo.create(fornecedor)
    },
    async pegarId (id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })
        if (!encontrado) {
            throw new Error('Forcedor vazio')
        }
        return encontrado
    },
    atualizar (id, dadosAtu) {
        return Modelo.update(
            dadosAtu,
            {
                where: {
                    id: id
                }
    
            }
        )
    },
    remover (id) {
        return Modelo.destroy({
            where: {
                id: id
            }
        })
    }
}