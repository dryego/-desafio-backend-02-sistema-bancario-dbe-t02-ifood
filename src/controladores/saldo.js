const { contas } = require('../bancodedados');
const buscarConta = require('../configuracoes/buscarConta');

const saldo = async (req, res) => {
    const { numero_conta, senha } = req.query;
    try {
        if (!numero_conta) {
            return res.status(400).json({ mensagem: 'Numero da conta não informada.' });
        };

        if (!senha) {
            return res.status(400).json({ mensagem: 'Senha não informada.' });
        };

        const contaValida = buscarConta(numero_conta);

        if (!contaValida) {
            return res.status(400).json({ mensagem: 'Conta nao encontrada.' });
        };

        if (senha === contaValida.usuario.senha) {
            return res.status(200).json({ saldo: contaValida.saldo });
        };

        return res.status(200).json();
    } catch (erro) {
        return res.status(500).json({ menssagem: `Erro interno. ${erro.message}` });
    }
};

module.exports = saldo;