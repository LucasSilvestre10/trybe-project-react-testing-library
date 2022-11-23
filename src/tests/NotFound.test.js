import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste do componente NotFound', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    // acessar
    renderWithRouter(<NotFound />);

    const headingElement = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });

    // interagir

    // testar
    expect(headingElement).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    // acessar
    renderWithRouter(<NotFound />);

    const elementImg = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    // interagir

    // testar
    expect(elementImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
