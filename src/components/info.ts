import { Pokemon } from '../model/pokemon_type';
import { Component } from './components';
import '../styles.scss';

export class Info extends Component {
  constructor(selector: string) {
    super(selector);
    this.render();
  }

  async render() {
    this.template = await this.createTemplate();
    super.render();
  }

  async createTemplate() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pokemonId = urlParams.get('pokemonId');

      const newApi = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
      const response = await fetch(newApi);

      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }

      const dataPoke: Pokemon = await response.json();
      console.log('Información del Pokémon:', dataPoke);

      return `
        <main>
          <h1>Información del Pokémon:</h1>
          <h2>Nombre: ${dataPoke.name}</p>
          <img src="${dataPoke.sprites.front_default}" alt ="imagen ${
        dataPoke.name
      }" >
          <p>TIPOS:
            <ul>
          ${dataPoke.types
            .map(
              (types: { type: { name: any } }) => `<li>${types.type.name}</li>`
            )
            .join('')}
            </ul>
          </p>
          <p>Habilidades:
            <ul>
          ${dataPoke.abilities
            .map(
              (ability: { ability: { name: any } }) =>
                `<li>${ability.ability.name}</li>`
            )
            .join('')}
            </ul>
          </p>


        </main>
      `;
    } catch (error) {
      console.error('Error:', error);

      return `
        <main>
          <h1>Error al obtener información del Pokémon</h1>
        </main>
      `;
    }
  }
}
