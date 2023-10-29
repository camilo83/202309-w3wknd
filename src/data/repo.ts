import { Pokemon } from '../model/pokemon_type';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export const getPokes = async (): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
  return response.json();
};
