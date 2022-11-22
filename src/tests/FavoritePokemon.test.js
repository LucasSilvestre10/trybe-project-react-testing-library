import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

describe('Teste do componente FavoritePokemon', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    // acessar
    renderWithRouter(<FavoritePokemon />);

    const element = screen.getByText(/no favorite pokémon found/i);

    // interagir

    // testar
    expect(element).toHaveTextContent('No favorite Pokémon found');
  });
});
