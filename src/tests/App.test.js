import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
  test('O primeiro link deve possuir o texto "Home" e ao ser clicado leva para a rota certa', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    const buttonHome = screen.getByRole('link', {
      name: /home/i,
    });
    expect(buttonHome).toBeInTheDocument();
    // Aferir
    expect(history.location.pathname).toBe('/');
  });
  test('O segundo link deve possuir o texto "About" e ao ser clicado leva para a rota certa', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);

    const buttonAbout = screen.getByRole('link', {
      name: /about/i,
    });
    expect(buttonAbout).toBeInTheDocument();
    // Agir
    userEvent.click(buttonAbout);
    // Aferir
    expect(history.location.pathname).toBe('/about');
  });
  test('O terceiro link deve possuir o texto "Favorite Pokémon" e ao ser clicado leva para a rota certa', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);

    const buttonFavoritePokemon = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    expect(buttonFavoritePokemon).toBeInTheDocument();
    // Agir
    userEvent.click(buttonFavoritePokemon);
    // Aferir
    expect(history.location.pathname).toBe('/favorites');
  });
  test('este se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    // Acessar
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/umapaginaerrada');
    });

    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFound).toBeInTheDocument();
    // Agir

    // Aferir
  });
});
