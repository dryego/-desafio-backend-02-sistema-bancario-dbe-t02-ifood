const { contas } = require('../bancodedados');

const exibirContasCadastradas = async (req, res) => {

    try {
        return res.status(200).json(contas);
    } catch (erro) {
        return res.status(500).json({ menssagem: `Erro interno. ${erro.message}` });
    };

};

module.exports = exibirContasCadastradas;