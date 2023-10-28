import '../styles.scss';
import { Component } from './components';
import { Pokemon } from '../model/pokemon_type';

export class Card extends Component {
  pokemon: Pokemon;
  constructor(selector: string, pokemon: Pokemon) {
    super(selector);
    this.pokemon = { ...pokemon };
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return `
    <li class="pokemon_card">
      <h4 class="poke_name">${this.pokemon.name}</h4>
      <p class="poke_url">${this.pokemon.url}</p>
    </li>
      `;
  }
}
