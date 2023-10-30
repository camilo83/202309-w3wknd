/* Import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Pokemon } from '../model/pokemon_type';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    const pokemon: Pokemon[] = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };
    document.body.innerHTML = '<ul></ul>';
    const card = new Card('ul', pokemon);
    test('Then it should be instance of Card', () => {
      expect(card).toBeInstanceOf(Card);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByText(pokemon.name.toUpperCase());
      expect(element).toBeInTheDocument();
    });
  });
});
 */
