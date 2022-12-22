const { contas } = require('../bancodedados');

const exibirContasCadastradas = (req, res) => {

    return res.status(200).json(contas);

};


module.exports = exibirContasCadastradas;