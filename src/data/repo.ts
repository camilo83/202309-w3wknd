/* Import { Pokemon } from '../model/pokemon_type';

const pokes: Pokemon[] = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    const pokes = response.results;
    if (response.results) {
      console.log(pokes);
    } else {
      console.error('No se encontraron resultados de Pokémon en la respuesta.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

export { pokes };
 */

import { Pokemon } from '../model/pokemon_type';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export const getPokes = async (): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
  return response.json();
};
