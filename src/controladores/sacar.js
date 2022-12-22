const { saques, contas } = require('../bancodedados');
const dataHora = require('../configuracoes/dataHora');

const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'Numero da conta não informado.' });
    };

    if (!valor) {
        return res.status(400).json({ mensagem: 'Valor não informado.' });
    };

    if (!valor) {
        return res.status(400).json({ mensagem: 'Valor não informado.' });
    };

    const contaValida = contas.find((busca) => { return busca.numero === Number(numero_conta) });

    if (!contaValida) {
        return res.status(400).json({ mensagem: 'Conta não encontrada.' });
    };

    if (contaValida.saldo <= valor) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente.' });
    }

    if (senha === contaValida.usuario.senha) {

        contaValida.saldo = contaValida.saldo - valor

        saques.push({
            data: dataHora(),
            numero_conta,
            valor
        });
    }
    return res.status(200).json();
};

module.exports = sacar;