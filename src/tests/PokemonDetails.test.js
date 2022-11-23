import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste do componente PokemonDetails', () => {
  describe('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    test('A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const heading = screen.getByRole('heading', {
        name: /pikachu details/i,

      });
      expect(heading).toHaveTextContent('Pikachu Details');
    });
    test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const heading = screen.getByRole('heading', {
        name: /summary/i,
        level: 2,
      });
      expect(heading).toHaveTextContent('Summary');
    });
    test('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const element = screen.getByText(
        /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
      );
      expect(element).toHaveTextContent(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
    });
  });
  describe('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    test('Na seção de detalhes deverá existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido;', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const heading = screen.getByRole('heading', {
        name: /game locations of pikachu/i,
        level: 2,
      });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Game Locations of Pikachu');
    });
    test('Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const img = screen.getAllByRole('img', {
        name: /Pikachu location/i,
      });
      expect(img[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    });
    test('Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;', () => {
      // Acessar
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // testar
      const location = screen.getByText(/kanto viridian forest/i);
      expect(location).toHaveTextContent('Kanto Viridian Forest');
      const img = screen.getAllByRole('img', {
        name: /Pikachu location/i,
      });
      expect(img[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    });
  });
  describe('Teste se o usuário pode favoritar um Pokémon através da página de detalhes:', () => {
    test('A página deve exibir um checkbox que permite favoritar o Pokémon;', () => {
      renderWithRouter(<App />);
      // interagir
      const buttonDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(buttonDetails);
      // Testar
      const buttonFavoritePokemon = screen.getByRole('checkbox', {
        name: /pokémon favoritado\?/i,
      });
      expect(buttonFavoritePokemon).toBeInTheDocument();
    });
  });
});
