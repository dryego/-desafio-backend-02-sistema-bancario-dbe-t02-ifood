const { contas, depositos } = require('../bancodedados');
const { deposito, saque, transferenciaEnviada, transferenciasRecebida } = require('../configuracoes/mostraTranzasoes');

const extrato = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'Numero da conta não informada.' });
    };

    if (!senha) {
        return res.status(400).json({ mensagem: 'Senha não informada.' });
    };

    const contaValida = contas.find((buscar) => { return buscar.numero === Number(numero_conta) });

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

};

module.exports = extrato;