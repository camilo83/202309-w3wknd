import { getPokes } from '../data/repo';
import { Component } from './components';
import '../styles.scss';
import { Card } from './card';

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
        const data = result.results;
        console.log(data);
        for (let i = 0; i < 20; i++) {
          new Card('ul.poke-list', data[i]);
        }
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
