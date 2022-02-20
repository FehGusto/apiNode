const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedores')

ModeloTabela
    .sync()
    .then(() => console.log('Criada com sucesso'))
    .catch(console.log())