<p align="center">
  <img src="https://img.shields.io/github/languages/count/saulobraine/uber-ui-expo?color=%23118ee5&labelColor=%23454545&style=flat" alt="Github Count Languages" />
  <img src="https://img.shields.io/github/repo-size/saulobraine/uber-ui-expo?olor=%23118ee5&labelColor=%23494949&style=flat" alt="Repository size" />
  <a href="https://github.com/saulobraine/uber-ui-expo/commits/master" title="GitHub last commit">
    <img src="https://img.shields.io/github/last-commit/saulobraine/uber-ui-expo?color=%23118ee5&labelColor=%23454545&style=flat" alt="GitHub last commit" /> 
  </a>
  <a href="https://www.linkedin.com/in/saulobraine/" title="By Saulo Braine">
    <img src="https://img.shields.io/badge/Made%20by-Saulo%20Braine-important?color=%23118ee5&labelColor=%23454545&style=flat" alt="By Saulo Braine" /> 
  </a>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen?color=%23118ee5&labelColor=%23454545&style=flat" alt="License" />
  <img src="https://img.shields.io/badge/Project%20Lang-Portuguese%20🇧🇷-informational?color=%23118ee5&labelColor=%23454545&style=flat" alt="Project language" /> 
  <a href="https://github.com/saulobraine/uber-ui-expo/blob/master/READMEen.md" title="Switch readme language">
    <img src="https://img.shields.io/badge/English%20ReadMe-Yes-important?color=%23118ee5&labelColor=%23454545&style=flat" alt="Switch readme language" /> 
  </a>
 </p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/18134442/90704427-d4072100-e266-11ea-991c-dcbead79d14d.jpg" alt="Banner Uber" />
</p>

<p align="center">
  <a href="https://www.typescriptlang.org/" title="TypeScript">
    <img src="https://img.shields.io/badge/TYPESCRIPT-%23118ee5?logo=typescript&logoColor=FFFFFF&labelColor=%23118ee5&style=for-the-badge" alt="TypeScript" />
  </a>
  <a href="https://reactnative.dev/" title="ReactNative">
    <img src="https://img.shields.io/badge/ReactNative-%23118ee5?logo=react&logoColor=FFFFFF&labelColor=%23118ee5&style=for-the-badge" alt="ReactNative" />
  </a>
  <a href="https://expo.io/" title="Expo">
    <img src="https://img.shields.io/badge/Expo-%23118ee5?logo=expo&logoColor=FFFFFF&labelColor=%23118ee5&style=for-the-badge" alt="ReactNative" />
  </a>
</p>

---

## **Sobre o projeto**

Código refatorado para Expo usando TypeScript. No vídeo o Diego utiliza a CLI do ReactNative e ReactJS comum.
É uma UI clone da tela inicial do Uber, utilizando a API do Google Maps, para locais, mapas e rotas.

**EXTRA**: Adaptação do valor dinâmico da corrida, a regra é a distância em KM * 2,25.

Tutorial disponível no <a href="https://www.youtube.com/watch?v=bg-U0xZwcRk">Youtube</a>

---

## **Funcionalidades**

- [x] Mapa com a posição do usuário;
- [x] Pesquisa mostrando os lugares conforme o usuário digita;
- [x] Rota com popup e valor dinâmico.

---

### Preview
<p align="center">
  <img src="https://user-images.githubusercontent.com/18134442/91225676-63468580-e6fa-11ea-9c26-918bb4e80018.gif" alt="Preview-Web">
</p>

#### 🎲 Executando o app

```bash

# Clone o repositório
$ git clone https://github.com/saulobraine/uber-ui-expo.git

# Acesse a pasta do projeto no prompt de comando
$ cd uber-ui-expo

# Instale as dependências
$ yarn

# Configure uma api válida do GoogleMaps, usando o arquivo .envExample, renomeando-o para .env juntamente com a api. A API deverá ter acesso a: Direcions API, Maps JavaScript API e Places API.

# Execute o script "dev"
$ yarn start

# O EXPO iniciará na porta: 19002 - acesse http://localhost:19002, caso não abra automaticamente

# Baixe e abra o cliente do Expo em seu celular via loja de apps

# Aponte para o QRCODE e aguarde a instalação.
```

---

## Agradecimentos

Agradeço a @rocketseat ♥

---

## Licença
Este projeto esta sobe a licença <a href="https://github.com/saulobraine/uber-ui-expo/blob/master/LICENSE" alt="License">MIT</a>