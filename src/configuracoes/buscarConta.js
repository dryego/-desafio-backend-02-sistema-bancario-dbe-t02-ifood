const { contas } = require('../bancodedados');

const buscarConta = (numero_conta) => {
    const contaValida = contas.find((busca) => { return busca.numero === Number(numero_conta) });

    return contaValida;
};
module.exports = buscarConta;