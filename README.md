
# Jogo resgate

<div style="display: flex; gap: 20px;">
<img src="./public/assets/images/jquery.png" title="jquery" alt="jquery" height="60px">
<img src="./public/assets/images/node.png" title="node"alt="jquery" height="60px">
<img src="./public/assets/images/webpack.png" title="webpack" alt="jquery" height="60px">
<img src="./public/assets/images/babel.png" title="babel" alt="jquery" height="60px">
</div>

<div style="display: flex; gap: 20px; margin-top: 100px;">
<img src="./public/assets/images/Captura de tela_2022-06-08_19-25-58.png" alt="Jogo resgate" width="40%">
<img src="./public/assets/images/Captura de tela_2022-06-08_21-37-01.png" alt="Jogo resgate" width="40%">
</div>

## Introdução
Esse projeto de um jogo que tem como o objetivo resgatar os priseiro que tentam escapar da prisão, mas 
está sendo caçados pelos inimigos, para isso os aliados enviaram sua arma especial que é um helicóptero super avançado com habilidades jamais vistas, mas para pilotar esse helicóptero é necessário um piloto de confiaça.
Para controlar o helicóptero pode usar os botões:
- w: Ir para cima
- s: Ir para baixo
- d: disparar

Para resgatar os prisioneiros é necessário que o helicóptero esteja sobre o ele. Você deve evitar a 
colisão com os inimigos, pois a colidir com irá perder uma vida que se chegar a zero você perde o jogo.
A cada 1000 pontos surge um inimigo poderoso

## Tecnologias

Esse projeto foi feito com:
- [webpack](https://webpack.js.org/) - O Webpack é um empacotador de módulos gratuito e de código aberto para JavaScript.

- [jquery](https://jquery.com/) -jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.

- [yarn](https://yarnpkg.com/) - yarn é um pacote de gerenciador de dependências para Node.js.

- [node](https://nodejs.org/en/) - Node.js é um software livre, aberto-contratado, baseado na plataforma do Linux, que é uma plataforma de código aberto para o desenvolvimento de aplicações de servidor.

- [babel](https://babeljs.io/) - Babel é um transpiler de JavaScript.

- [webpack-cli](https://webpack.js.org/configuration/) - webpack-cli é um gerenciador de configuração do Webpack.

- [webpack-dev-server](https://webpack.js.org/configuration/) - webpack-dev-server é um servidor de desenvolvimento Webpack.

## instalação

Para instalar as dependências do projeto use o comando:
```sh
yarn
```
ou 
```
npm install
```

Ao executar o jogo no modo de desenvolvimento use o comando:
```sh
yarn start
```

Se quiser executar o jogo no modo de produção use o comando:
```sh
yarn build
```
que irá fazer o build do projeto na pasta dist e você deve exexutar o arquivo dist/index.html


Preferencialmente execute no navegador [firefox](https://www.mozilla.org/pt-BR/firefox/new/)

