const { contas } = require('../bancodedados');
const buscarConta = require('../configuracoes/buscarConta');
const { deposito, saque, transferenciaEnviada, transferenciasRecebida } = require('../configuracoes/mostraTranzasoes');

const extrato = async (req, res) => {
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

            const mostraExtrato = {
                saques: saque(numero_conta),
                depositos: deposito(numero_conta),
                transferenciasEnviadas: transferenciaEnviada(numero_conta),
                transferenciasRecebidas: transferenciasRecebida(numero_conta)
            }

            return res.status(200).json(mostraExtrato);

        };
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro interno.' });
    };

};

module.exports = extrato;