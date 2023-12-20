# Testes com React Testing Library

## Descrição
Este repositório contém testes automatizados escritos utilizando Jest e a biblioteca React Testing Library para uma aplicação React da Pokédex. A aplicação já está criada e configurada, e o objetivo é garantir a corretude dos requisitos especificados. Os testes abrangem os seguintes componentes e funcionalidades:

## Requisitos

### 1. Teste o componente `<App.js />`:
- Verifique se o topo da aplicação contém um conjunto fixo de links de navegação.
- Teste o redirecionamento para a página inicial, About, Pokémon Favoritados e Not Found ao clicar nos links correspondentes.
- Certifique-se de lidar com URLs desconhecidas corretamente.

### 2. Teste o componente `<About.js />`:
- Confira se a página contém as informações sobre a Pokédex.
- Teste a presença de um heading h2 com o texto "About Pokédex".
- Verifique a existência de dois parágrafos com informações sobre a Pokédex.
- Teste a exibição da imagem da Pokédex.

### 3. Teste o componente `<FavoritePokemon.js />`:
- Verifique se é exibida a mensagem "No favorite pokemon found" quando não houver Pokémon favoritos.
- Teste a exibição correta de todos os cards de Pokémon favoritados.

### 4. Teste o componente `<NotFound.js />`:
- Teste a presença de um heading h2 com o texto "Page requested not found".
- Confirme se a página mostra a imagem de erro apropriada.

### 5. Teste o componente `<Pokedex.js />`:
- Verifique se a página contém um heading h2 com o texto "Encountered Pokémon".
- Teste a exibição do próximo Pokémon ao clicar no botão "Próximo Pokémon".
- Certifique-se de que apenas um Pokémon é mostrado por vez.
- Teste a presença dos botões de filtro e o botão para resetar o filtro.

### 6. Teste o componente `<Pokemon.js />`:
- Teste a renderização do card com as informações do Pokémon.
- Confirme a presença de um link de navegação para exibir detalhes do Pokémon.
- Verifique o redirecionamento para a página de detalhes ao clicar no link.
- Teste se a URL muda corretamente para /pokemon/<id>.
- Confirme a presença do ícone de estrela nos Pokémon favoritados.

### 7. Teste o componente `<PokemonDetails.js />`:
- Teste a exibição correta das informações detalhadas do Pokémon selecionado.
- Verifique a presença de uma seção com mapas contendo as localizações do Pokémon.
- Teste a capacidade de favoritar um Pokémon através da página de detalhes.

## Habilidades Técnicas

- **Linguagens:**
  - JavaScript, JSX.

- **Tecnologias:**
  - React, React Testing Library, Jest.

- **Outras Habilidades:**
  - Testes automatizados, simulação de eventos, manipulação assíncrona, refatoração de estrutura de componentes, testes de inputs.
