<p align="center">
    <img src="logo.svg" />
</p>
<h1></h1>

Aplicação desenvolvida durante a Semana OmniStack 11 realizada em conjunto com a [RocketSeat](https://github.com/Rocketseat).

## Motivação

Existe uma certa dificuldade em diminuir burocracias e de aumentar a visibilidade ao público no dia-a-dia de trabalho de ONGs e grupos afins. Também existem muitas pessoas dispostas a ajudar em causas nobres, mas que (infelizmente) não possuem a acessibilidade nem a simplicidade de socorrer a quem mais precisa.

Portanto, *seja o próximo **herói**!* 😄 Encontre de maneira simples e fácil ONGs, grupos e quaisquer organizações que estejam precisando de ajuda em alguma tarefa, causa ou auxílio financeiro. Se você é uma organização, poderá incluir sua solicitação e colocar em evidência a importância da sua causa aos heróis à disposição!

## Tecnologias utilizadas

- NodeJS
- ReactJS
- React Native

## Descrição

A aplicação consiste de um backend feito em NodeJS, que serve de base para a aplicação Web feita em React, responsável por cadastrar organizações e mostrar um painel para cada tipo de ocorrência específica daquela organização. O aplicativo mobile mostra uma visualização para os seus usuários listando cada caso e tornando simples o processo de se comunicar com o grupo responsável, por meio uma tela de detalhes do incidente.

## Pré-requisitos
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Expo App](https://expo.io/) (Disponível para Android e iOS)

## Como executar

Dentro da pasta `backend`, execute os comandos para inicializar o servidor
```
npm install
npm start
```
A pasta `frontend` contém os arquivos com a página Web que fornece o cadastro de organizações. Execute os mesmos comandos citados anteriormente.
Para ver o aplicativo mobile em ação você precisa instalar o app do Expo de acordo com sua plataforma. Dentro da pasta `mobile` execute os mesmos comandos, e uma página com um QR code será gerada no seu navegador. Escaneie-o usando seu dispositivo com o app do Expo para que o aplicativo seja gerado. 

Caso tenha algum problema, visite o [guia](https://github.com/Rocketseat/expo-common-issues) com a resolução de problemas comuns. Para detalhes adicionais visite a [documentação do Expo](https://docs.expo.io/versions/latest/).
