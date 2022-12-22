const { transferencias, contas } = require('../bancodedados');
const dataHora = require('../configuracoes/dataHora');

const transferi = async (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha, } = req.body;
    try {
        if (!numero_conta_origem) {
            return res.status(400).json({ mensagem: 'Numero conta de origem não informado.' })
        };

        if (!numero_conta_destino) {
            return res.status(400).json({ mensagem: 'Numero conta de destino não informado.' })
        };

        if (!valor) {
            return res.status(400).json({ mensagem: 'Valor não informado.' })
        };

        if (!senha) {
            return res.status(400).json({ mensagem: 'Senha não informado.' })
        };

        const contaValidaOrigem = contas.find((busca) => { return busca.numero === Number(numero_conta_origem) });

        if (!contaValidaOrigem) {
            return res.status(400).json({ mensagem: 'Conta não encontrada.' });
        };

        const contaValidaDestino = contas.find((busca) => { return busca.numero === Number(numero_conta_destino) });

        if (!contaValidaDestino) {
            return res.status(400).json({ mensagem: 'Conta não encontrada.' });
        };

        if (contaValidaOrigem.saldo <= valor) {
            return res.status(400).json({ mensagem: 'Saldo insuficiente para realizar a transferencia.' });
        };

        if (senha === contaValidaOrigem.usuario.senha) {

            contaValidaOrigem.saldo = contaValidaOrigem.saldo - valor;
            contaValidaDestino.saldo = contaValidaDestino.saldo + valor;

            transferencias.push({
                data: dataHora(),
                numero_conta_origem,
                numero_conta_destino,
                valor
            });

        };

        console.log(transferencias);

        return res.status(200).json();
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro interno.' });
    }
};

module.exports = transferi;


