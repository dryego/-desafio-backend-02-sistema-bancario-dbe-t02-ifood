# Desafio Módulo 2 - Back-end

construção de uma RESTful API que permita:

-   Criar conta bancária
-   Listar contas bancárias
-   Atualizar os dados do usuário da conta bancária
-   Excluir uma conta bancária
-   Depósitar em uma conta bancária
-   Sacar de uma conta bancária
-   Transferir valores entre contas bancárias
-   Consultar saldo da conta bancária
-   Emitir extrato bancário

## Persistências dos dados

Os dados serão persistidos em memória, no objeto existente dentro do arquivo `bancodedados.js`. **Todas as transações e contas bancárias deverão ser inseridas dentro deste objeto, seguindo a estrutura que já existe.**

### Estrutura do objeto no arquivo `bancodedados.js`

```javascript
{
    banco: {
        nome: "Cubos Bank",
        numero: "123",
        agencia: "0001",
        senha: "Cubos123Bank",
    },
    contas: [
        // array de contas bancárias
    ],
    saques: [
        // array de saques
    ],
    depositos: [
        // array de depósitos
    ],
    transferencias: [
        // array de transferências
    ],
}
```
## Endpoints

### Listar contas bancárias

![mostra contas](https://user-images.githubusercontent.com/12173011/222998346-c3de553c-47be-4dec-a193-6292a2784ab7.png)

### Criar conta bancária

#### `POST` `/contas`

Esse endpoint  cria uma conta bancária, onde será gerado um número único para identificação da conta (número da conta).

#### Exemplo de Resposta


![criar conta](https://user-images.githubusercontent.com/12173011/222998581-e90fd31d-1514-42ee-b846-b87839f3f1dd.png)

### Atualizar usuário da conta bancária

#### `PUT` `/contas/:numeroConta/usuario`

Esse endpoint atualiza apenas os dados do usuário de uma conta bancária.

#### Exemplo de Resposta

![atualizar conta](https://user-images.githubusercontent.com/12173011/222999026-1e73be12-dcaf-4c0d-94b2-9cbb2d5883f1.png)


### Excluir Conta

#### `DELETE` `/contas/:numeroConta`

Esse endpoint exclui uma conta bancária existente.


#### Exemplo de Resposta

![excluir conta](https://user-images.githubusercontent.com/12173011/222999167-97797c96-2d4d-404e-9454-93bc8d23a3dc.png)


### Depositar

#### `POST` `/transacoes/depositar`

Esse endpoint soma o valor do depósito ao saldo de uma conta válida e registrar essa transação.

#### Exemplo de Requisição

![depositar](https://user-images.githubusercontent.com/12173011/222999302-cea8f32e-5b2e-46fe-9cfd-788889d67a83.png)

#### Exemplo de Resposta

![nume conta deposito](https://user-images.githubusercontent.com/12173011/222999681-6a4466b6-abd8-478d-948e-59c7c8734180.png)

### Sacar

#### `POST` `/transacoes/sacar`

Esse endpoint deve realizar o saque de um valor em uma determinada conta bancária e registrar essa transação.


#### Exemplo de Requisição


![sacar](https://user-images.githubusercontent.com/12173011/222999788-2f001a68-6e36-4b25-8484-f34728f36c7a.png)

#### Exemplo de Resposta

Sacar valor zerado.

![sacar zero](https://user-images.githubusercontent.com/12173011/222999948-565d7fba-0ce4-40ee-b321-dea46c40c292.png)

### Tranferir

#### `POST` `/transacoes/transferir`

Esse endpoint deve permitir a transferência de recursos (dinheiro) de uma conta bancária para outra e registrar essa transação.


#### Exemplo de Requisição

![tranferencia](https://user-images.githubusercontent.com/12173011/223000616-399c9f68-1b7c-42e2-9b72-4340a5114fe3.png)


#### Exemplo de Resposta

saldo insuficiente

![transferir saodo insuficiente](https://user-images.githubusercontent.com/12173011/223000333-17901a54-0f17-4f4f-92e8-369c61abc1ef.png)

### Saldo

#### `GET` `/contas/saldo?numero_conta=123&senha=123`

Esse endpoint deve retornar o saldo de uma conta bancária.



#### Exemplo de Resposta

![saodo conta](https://user-images.githubusercontent.com/12173011/223000700-d6be25d5-57cc-4d1a-8912-3ec5862eb7b8.png)

### Extrato

#### `GET` `/contas/extrato?numero_conta=123&senha=123`

Esse endpoint deve listar as transações realizadas de uma conta específica.


#### Exemplo de Resposta

![extrato](https://user-images.githubusercontent.com/12173011/223000764-5b03810c-c876-4473-bf37-a03324b21780.png)


