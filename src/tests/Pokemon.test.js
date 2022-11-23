import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
// import { Pokemon } from '../pages';
import App from '../App';

describe('Teste do componente Pokemon', () => {
  describe('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    test('O nome correto do Pokémon deve ser mostrado na tela', () => {
      renderWithRouter(<App />);
      // acessar
      const pokemonName = screen.getByTestId('pokemon-name');

      // interagir

      // testar
      expect(pokemonName).toBeInTheDocument();
    });
    test('O tipo correto do Pokémon deve ser mostrado na tela', () => {
      renderWithRouter(<App />);
      // acessar
      const pokemonType = screen.getByTestId('pokemon-type');

      // interagir

      // testar
      expect(pokemonType).toBeInTheDocument();
      expect(pokemonType).toHaveTextContent('Electric');
    });
    test('O peso médio do Pokémon deve ser exibido com um texto no formato Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do Pokémon e sua unidade de medida', () => {
      renderWithRouter(<App />);
      // acessar
      const pokemonWeight = screen.getByTestId('pokemon-weight');

      // interagir

      // testar
      expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    });
    test('A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do Pokémon', () => {
      renderWithRouter(<App />);
      // acessar
      const pokemonImg = screen.getByRole('img', {
        name: /pikachu sprite/i,
      });

      // interagir

      // testar
      expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
      expect(pokemonImg.alt).toBe('Pikachu sprite');
    });
  });
  describe('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido', () => {
    test('Testa a rota do link ao clicar em "More Details" esta correta', () => {
      // Acessar
      const { history } = renderWithRouter(<App />);

      // Interagir
      const buttonMoreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonMoreDetails);
      // console.log(history);
      expect(history.location.pathname).toBe('/pokemon/25');
    });
    test('Testa a rota do link ao clicar em "More Details" encontra o elemento Summary', () => {
      // acessar
      renderWithRouter(<App />);

      // Interagir

      const buttonMoreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonMoreDetails);
      // testar
      const headingElement = screen.getByRole('heading', {
        name: /summary/i,
      });

      // console.log(history);
      expect(headingElement).toHaveTextContent('Summary');
    });
  });
  describe('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    test('O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg', () => {
      // acessar
      renderWithRouter(<App />);

      // Interagir

      const buttonMoreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonMoreDetails);
      const buttonFavoritePokemon = screen.getByRole('checkbox', {
        name: /pokémon favoritado\?/i,
      });
      userEvent.click(buttonFavoritePokemon);

      // Testa
      const renderImgFavorite = screen.getByRole('img', {
        name: /pikachu is marked as favorite/i,
      });
      expect(renderImgFavorite).toBeInTheDocument();
      expect(renderImgFavorite).toHaveAttribute('src', '/star-icon.svg');
    });
    test('O ícone deve ser uma imagem com o atributo alt contendo o texto Pikachu is marked as favorite', () => {
      // acessar
      renderWithRouter(<App />);

      // Interagir

      const buttonMoreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonMoreDetails);

      // Testa
      const imgFavorite = screen.getByRole('img', {
        name: /pikachu is marked as favorite/i,
      });
      expect(imgFavorite).toBeInTheDocument();

      expect(imgFavorite).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    });
  });
});
