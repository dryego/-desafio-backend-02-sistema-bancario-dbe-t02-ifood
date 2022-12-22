const { contas } = require('../bancodedados');
const buscarConta = require('../configuracoes/buscarConta');

const atualizarDados = async (req, res) => {

    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    try {
        if (!nome) {
            return res.status(400).json({ menssagem: 'Nome não informado.' });
        };
        if (!cpf) {
            return res.status(400).json({ menssagem: 'CPF não informado.' });
        };

        if (!data_nascimento) {
            return res.status(400).json({ menssagem: 'Data de nascimento não informado.' });
        };
        if (!telefone) {
            return res.status(400).json({ menssagem: 'Telefone não informado.' });
        };
        if (!email) {
            return res.status(400).json({ menssagem: 'E-mail não informado.' });
        };

        if (!senha) {
            return res.status(400).json({ menssagem: 'Senha não informado.' });
        };

        const contaValida = buscarConta(numeroConta);

        if (!contaValida) {
            return res.status(404).json({ menssagem: 'Conta NÃO encontrada.' })
        };
        const validarCpfeEmail = contas.find((busca) => {
            return busca.usuario.cpf === cpf || busca.usuario.email === email
        });
        if (validarCpfeEmail) {
            return res.status(400).json({ menssagem: 'CPF ou EMAIL já cadastrado.' });
        };

        contaValida.usuario.nome = nome;
        contaValida.usuario.cpf = cpf;
        contaValida.usuario.data_nascimento = data_nascimento;
        contaValida.usuario.telefone = telefone;
        contaValida.usuario.email = email;
        contaValida.usuario.senha = senha;

        return res.status(200).json();
    } catch (erro) {
        return res.status(500).json({ menssagem: `Erro interno. ${erro.message}` });
    };
};

module.exports = { atualizarDados };