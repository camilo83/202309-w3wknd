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

  showPokeInfo() {}

  render() {
    super.render();
    const pokeDetail = this.element.querySelector('.pokemon_card');
    if (pokeDetail) {
      pokeDetail.addEventListener('click', this.showPokeInfo.bind(this));
    }
  }

  createTemplate() {
    const id = this.pokemon.url.split('/').filter(Boolean).pop();

    return `
    <li class="pokemon_card">
      <p>${id}</p>
      <a href="details.html?pokemonId=${id}">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" height="120" width="120">
        <h4 class="poke_name">${this.pokemon.name.toUpperCase()}</h4>
      </a>
  </li>
      `;
  }
}
