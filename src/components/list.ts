import { getPokes } from '../data/repo';
/* A import { Card } from './card'; */
import { Component } from './components';
import '../styles.scss';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.render();
  }

  async render() {
    this.template = this.createTemplate();
    super.render();
    console.log('funcion', getPokes);
    console.log('funcion', getPokes());
    getPokes()
      .then((result) => {
        console.log('promesa resuelta', result);
        console.log(
          'una parte de la promesa respuesta - array pokemons',
          result.results
        ); // Aquí puedes trabajar con los datos resueltos
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  createTemplate() {
    return `
     <section class="pokes">
        <h3 class="page/number">Página 1/10</h3>
        <ul class="poke-list"></ul>
      </section>
    `;
  }
}
