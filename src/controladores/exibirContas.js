const { contas } = require('../bancodedados');

const exibirContasCadastradas = async (req, res) => {

    try {
        return res.status(200).json(contas);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno.' })
    };

};

module.exports = exibirContasCadastradas;