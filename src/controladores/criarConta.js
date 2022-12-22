let { contas, numeroConta } = require("../bancodedados");

const criarConta = async (req, res) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    try {
        if (!nome) {
            return await res.status(400).json({ menssagem: 'Nome não informado.' });
        };
        if (!cpf) {
            return await res.status(400).json({ menssagem: 'CPF não informado.' });
        };

        if (!data_nascimento) {
            return await res.status(400).json({ menssagem: 'Data de nascimento não informado.' });
        };
        if (!telefone) {
            return await res.status(400).json({ menssagem: 'Telefone não informado.' });
        };
        if (!email) {
            return await res.status(400).json({ menssagem: 'E-mail não informado.' });
        };

        if (!senha) {
            return await res.status(400).json({ menssagem: 'Senha não informado.' });
        };

        const saldoInicial = 0;

        const novaConta = {
            numero: numeroConta++,
            saldo: saldoInicial,
            usuario: {
                nome: nome,
                cpf: cpf,
                data_nascimento: data_nascimento,
                telefone: telefone,
                email: email,
                senha: senha
            }
        };

        const validarCpfeEmail = contas.find((busca) => {
            return busca.usuario.cpf === cpf || busca.usuario.email === email
        });

        if (validarCpfeEmail) {
            return res.status(400).json({ menssagem: 'CPF ou EMAIL já cadastrado.' });
        };

        contas.push(novaConta);

        return res.status(201).json();
    } catch (erro) {
        return res.status(500).json({ menssagem: 'Erro interno.' });
    };
};

module.exports = criarConta 