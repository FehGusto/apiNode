const TabelaFornecedor = require('./TabelaFornecedor')

class Fornecedores {
    constructor ({ id, empresa, email, categoria, dataCriacao,
        dataAtualizacao, versao }) {
            this.id = id
            this.empresa = empresa
            this.email = email
            this.categoria = categoria
            this.dataCriacao = dataCriacao
            this.dataAtualizacao = dataAtualizacao
            this.versao = versao
        }

        async criar () {
          const resultado = await TabelaFornecedor.inserir({
              empresa: this.empresa,
              email: this.email,
              categoria: this.categoria
          })

          this.id = resultado.id
          this.dataCriacao = resultado.dataCriacao
          this.dataAtualizacao = resultado.dataAtualizacao
          this.versao = resultado.versao
        }

        async carregar () {
            const fornEncont = await TabelaFornecedor.pegarId(this.id)
            this.empresa = fornEncont.empresa
            this.email = fornEncont.email
            this.categoria = fornEncont.categoria
            this.dataCriacao = fornEncont.dataCriacao
            this.dataAtualizacao = fornEncont.dataAtualizacao
            this.versao = fornEncont.versao

        }

        async atualizar () {
            await TabelaFornecedor.pegarId(this.id)
            const campos = ['empresa', 'email', 'categoria']
            const dadosAtu = {}

            //verifica dados inseridos
            campos.forEach((campo) => {
                const valor = this[campo]
                if (typeof valor === 'string' && valor.length > 0) {
                    dadosAtu[campo] = valor
                }
            })

            if (Object.keys(dadosAtu).length === 0) {
                throw new Error('Vazio')
            }

            await TabelaFornecedor.atualizar(this.id, dadosAtu)
        }
}

module.exports = Fornecedores