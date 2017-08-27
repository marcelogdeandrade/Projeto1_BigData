# Projeto 1 Big Data - Business Layer

## Como rodar o servidor:


Tenha instalado Node e npm

Rode `$ npm install`

Crie um arquivo `credentials.js` e preencha com suas informações de credenciais do DB da seguinte maneira:

```
export const user = '[seu_usuario]'
export const password = '[sua_senha]'
```

Exemplo:


```
export const user = 'root'
export const password = '12345'
```


Rode `$ npm run babel` para iniciar o servidor


## Documentação de alguns pacotes usados;

[Joi](https://github.com/hapijs/joi): Schemas de validação 
[Mocha](https://github.com/mochajs/mocha): Auxilio para testes
[Chai](https://github.com/chaijs/chai): Integrado com mocha para auxilio de testes
[Express](https://github.com/expressjs/express): Framework para o Node

