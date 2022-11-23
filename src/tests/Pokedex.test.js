import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste do componente Pokedex', () => {
  describe('Teste se a página contém um heading...', () => {
    test('h2 com o texto Encountered Pokémon', () => {
      // acessar
      renderWithRouter(<App />);

      const headingElement = screen.getByRole('heading', {
        name: /encountered pokémon/i,
        level: 2,
      });

      // interagir

      // testar
      expect(headingElement).toHaveTextContent('Encountered Pokémon');
    });
  });

  describe('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    test('O botão deve conter o texto Próximo Pokémon', () => {
      // acessar
      renderWithRouter(<App />);

      const buttonNext = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      // testar
      expect(buttonNext).toHaveTextContent('Próximo Pokémon');
    });
    test('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;', () => {
      // acessar
      renderWithRouter(<App />);

      const fistPokemon = screen.getByText(/pikachu/i);
      expect(fistPokemon).toHaveTextContent('Pikachu');
      const buttonNext = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(buttonNext);
      const nextPokemon = screen.getByText(/charmander/i);
      expect(nextPokemon).toHaveTextContent('Charmander');
      // testar
    });
  });
  describe('Teste se a Pokédex tem os botões de filtro:', () => {
    test('Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição', () => {
      renderWithRouter(<App />);
      const buttonList = screen.getAllByTestId('pokemon-type-button');
      // console.log(buttonList[0]);
      const { length } = buttonList;
      expect(length).toBe(7);
      expect(buttonList[0]).toHaveTextContent('Electric');
      expect(buttonList[1]).toHaveTextContent('Fire');
      expect(buttonList[2]).toHaveTextContent('Bug');
      expect(buttonList[3]).toHaveTextContent('Poison');
      expect(buttonList[4]).toHaveTextContent('Psychic');
      expect(buttonList[5]).toHaveTextContent('Normal');
      expect(buttonList[6]).toHaveTextContent('Dragon');
    });
    test('O botão All precisa estar sempre visível.', () => {
      // Acessar
      renderWithRouter(<App />);
      const buttonAll = screen.getByRole('button', {
        name: /all/i,
      });

      //  Testar
      expect(buttonAll).toBeInTheDocument();
      userEvent.click(buttonAll);
    });
  });
});
