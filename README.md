# ☕ Café Raiz

Aplicativo de vendas de uma cafeteria fictícia, feito em React Native (Expo Snack) para uma atividade da faculdade.

Escolhi uma cafeteria porque café é uma coisa de que gosto bastante, e o tema combina com uma identidade visual simples, em tons de marrom e creme.

**[Ler o relatório completo do projeto (PDF)](Relatorio.pdf)**

## Sobre a atividade

O desafio era criar um aplicativo de vendas com:

- no mínimo cinco telas;
- uso de `Image`, `Text`, `View` e navegação ou links entre telas;
- segmento livre, com criatividade e identidade visual a critério do aluno.

## Telas

| Home | Cafés | Doces |
|:---:|:---:|:---:|
| <img src="img/home.png" width="200"> | <img src="img/cafes.png" width="200"> | <img src="img/doces.png" width="200"> |

| Sobre | Contatos |
|:---:|:---:|
| <img src="img/sobre.png" width="200"> | <img src="img/contatos.png" width="200"> |

- **Home:** foto, nome, slogan, botão "Ver cardápio" e horário de funcionamento.
- **Cafés:** Expresso, Cappuccino, Latte e Mocha, com foto, descrição e preço.
- **Doces:** Cookie, Croissant, Brownie e Bolo de cenoura, no mesmo modelo de cartão.
- **Sobre:** foto do ambiente, história e horário.
- **Contatos:** botões para WhatsApp, Instagram e mapa.

## Cores

| Cor | Código | Uso |
|---|---|---|
| Creme | `#F5EFE6` | Fundo das telas |
| Branco | `#FFFFFF` | Cartões |
| Marrom café | `#4B2E1E` | Títulos e barra do menu |
| Caramelo | `#9A5528` | Botões e preços |
| Caramelo claro | `#C47A3F` | Aba selecionada |
| Cinza amarronzado | `#6F625A` | Textos de apoio |

## Tecnologias

- React Native com Expo (SDK 54)
- React Navigation (`@react-navigation/native` e `bottom-tabs`)
- `@expo/vector-icons` para os ícones do menu

## Estrutura

```
App.js            menu de abas (navegação)
css/
  estilo.js       estilos usados por todas as telas
img/              fotos do app
telas/
  Home.js
  cafe.js
  doce.js
  Sobre.js
  Contatos.js
docs/             relatório em PDF
prints/           imagens das telas usadas neste README
```

## Como rodar

1. Abra o projeto no [Expo Snack](https://snack.expo.dev) ou baixe a pasta do repositório.
2. Confira se as fotos estão na pasta `img` com os mesmos nomes usados no código.
3. Teste pela aba Web do Snack ou pelo app Expo Go no celular.

Os links de WhatsApp, Instagram e mapa são genéricos e podem ser trocados pelos da cafeteria.

## O que aprendi

- separar o app em arquivos, com uma tela por arquivo;
- guardar os estilos em um só lugar e reaproveitar nas telas;
- usar `flexDirection: 'row'` para colocar foto e texto lado a lado;
- usar `ScrollView` em telas com bastante conteúdo;
- abrir links externos com `Linking`;
- trocar as cores do menu de abas para combinar com o app;
- ler mensagens de erro e achar onde está o problema.

Mais detalhes, incluindo as dificuldades que tive, estão no [relatório](docs/Relatorio_Cafe_Raiz.pdf).

## Autor

Henrique Amorim, estudante de Análise e Desenvolvimento de Sistemas (3º semestre) no UniPiaget.
