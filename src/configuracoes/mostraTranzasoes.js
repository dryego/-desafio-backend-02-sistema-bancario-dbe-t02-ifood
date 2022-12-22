const { saques, depositos, transferencias } = require('../bancodedados');
// const { enviadas } = transferencias.enviadas;
// const { recebidas } = transferencias.recebidas;

const saque = (numero_conta) => {
    const buscarSaqueConta = saques.filter((buscar) => { return buscar.numero_conta === numero_conta; });
    return buscarSaqueConta;
};

const deposito = (numero_conta) => {
    const buscarDepositoConta = depositos.filter((buscar) => { return buscar.numero_conta === numero_conta });
    return buscarDepositoConta;
};

const transferenciaEnviada = (numero_conta) => {
    const buscarTransferenciaEnviadaConta = transferencias.filter((buscar) => { return buscar.numero_conta_origem === numero_conta });
    return buscarTransferenciaEnviadaConta;
};

const transferenciasRecebida = (numero_conta) => {
    const buscarTransferenciaRecebidaConta = transferencias.filter((buscar) => { return buscar.numero_conta_destino === numero_conta });
    return buscarTransferenciaRecebidaConta;
};

module.exports = {
    saque,
    deposito,
    transferenciaEnviada,
    transferenciasRecebida
};