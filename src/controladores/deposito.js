let { depositos, contas } = require('../bancodedados');
const dataHora = require('../configuracoes/dataHora');

const depositar = async (req, res) => {
    const { numero_conta, valor } = req.body;
    try {
        if (!numero_conta) {
            return res.status(400).json({ mensagem: 'Numero da conta nao informado.' });
        };

        if (!valor) {
            return res.status(400).json({ mensagem: 'Valor não informado.' });
        };

        if (valor <= 0) {
            return res.status(400).json({ mensagem: 'Valor de deposito invalido.' });
        };

        const contaValida = contas.find((busca) => { return busca.numero === Number(numero_conta) });

        if (!contaValida) {
            return res.status(400).json({ mensagem: 'Conta não encontrada.' });
        };

        contaValida.saldo = contaValida.saldo + valor;

        const deposito = {
            data: dataHora(),
            numero_conta,
            valor
        }

        depositos.push(deposito);

        return res.status(200).json();
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro insterno.' });
    }
};

module.exports = depositar;