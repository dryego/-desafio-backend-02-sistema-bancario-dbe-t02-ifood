let { contas } = require('../bancodedados');

const excluirConta = async (req, res) => {
    const { numeroConta } = req.params;

    try {
        const contaValida = contas.find((busca) => { return busca.numero === Number(numeroConta) });
        console.log(contaValida);

        if (!contaValida) {
            return res.status(404).json({ menssagem: 'Conta NÃO encontrada.' })
        };

        if (contaValida.saldo !== 0) {
            return res.status(404).json({ menssagem: 'A conta só pode ser removida se o saldo for zero!' });
        };

        contas = contas.splice(contas.indexOf(contaValida.numero), 1);

        return res.status(200).json();
    } catch (erro) {
        return res.status(500).json({ menssagem: 'Erro Interno.' + erro.menssagem });
    }
};

module.exports = excluirConta;
