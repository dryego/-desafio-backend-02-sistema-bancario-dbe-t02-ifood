const express = require('express');
const exibirContasCadastradas = require('./controladores/exibirContas');
const validarSenha = require('./intermediarios');
const criarConta = require('./controladores/criarConta');
const { atualizarDados } = require('./controladores/atualizarDadosCadastrais');
const excluirConta = require('./controladores/excluirConta');
const depositar = require('./controladores/deposito');
const sacar = require('./controladores/sacar');
const transferi = require('./controladores/tranferi');
const saldo = require('./controladores/saldo');
const extrato = require('./controladores/extrato');


const rotas = express.Router();

rotas.get('/contas', validarSenha, exibirContasCadastradas);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarDados);
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
rotas.post('/transacoes/transferir', transferi);
rotas.get('/contas/saldo', saldo);
rotas.get('/contas/extrato', extrato);


module.exports = rotas;
