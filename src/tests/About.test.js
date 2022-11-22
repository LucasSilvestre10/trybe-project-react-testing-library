import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Teste do componente About', () => {
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    // acessar
    const { container } = renderWithRouter(<About />);

    const pList = container.querySelectorAll('p');

    // interagir

    // testar
    expect(pList.length).toBe(2);
  });
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    // acessar
    renderWithRouter(<About />);
    const headingElement = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    // interagir

    // testar
    expect(headingElement).toHaveTextContent('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  });
  test('Teste se a página contém as informações corretas sobre a Pokédex;', () => {
    // acessar
    renderWithRouter(<About />);
    const headingElement = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    // interagir

    // testar
    expect(headingElement).toHaveTextContent('One can filter Pokémon by type, and see more details for each one of them');
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    // acessar
    renderWithRouter(<About />);
    const headingElement = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    // interagir

    // testar
    expect(headingElement).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    // acessar
    renderWithRouter(<About />);
    const imgElement = screen.getByRole('img', {
      name: /pokédex/i,
    });
    // interagir
    console.log(imgElement);

    // testar
    const exp = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgElement.src).toBe(exp);
  });
});
