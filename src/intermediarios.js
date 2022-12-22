const bancoDeDados = require('./bancodedados');

const validarSenha = async (req, res, next) => {
    const { senha_banco } = req.query;
    const { senha } = bancoDeDados.banco;

    try {
        if (!senha_banco) {
            return res.status(401).json({ menssagem: 'Usuario não AUTENTICADO.' });
        };

        if (senha_banco !== senha) {
            return res.status(200).json({ menssagem: 'Senha informada INVALIDA.' });
        };

    } catch (erro) {
        return res.status(500).json(erro);
    };

    next();

};

module.exports = validarSenha;