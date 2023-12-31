import { getPokes } from '../data/repo';
import { Component } from './components';
import '../styles.scss';
import { Card } from './card';

export class List extends Component {
  actualPage: number;
  constructor(selector: string) {
    super(selector);
    this.actualPage = 1;
    this.render();
  }

  handlePreviousPage() {
    if (this.actualPage === 1) {
      this.actualPage = 1;
    } else {
      this.actualPage -= 1;
    }

    this.clear();
    this.render();
  }

  handleNextPage() {
    if (this.actualPage === 65) {
      this.actualPage = 65;
    } else {
      this.actualPage += 1;
    }

    this.clear();
    this.render();
  }

  async render() {
    this.template = this.createTemplate();
    super.render();
    const previousPage = this.element.querySelector('.previousPage');
    if (previousPage) {
      previousPage.addEventListener(
        'click',
        this.handlePreviousPage.bind(this)
      );
    }

    const nextPage = this.element.querySelector('.nextPage');
    if (nextPage) {
      nextPage.addEventListener('click', this.handleNextPage.bind(this));
    }

    getPokes()
      .then((result) => {
        const data = result.results;

        console.log(this.actualPage);
        for (
          let i = (this.actualPage - 1) * 20;
          i < this.actualPage * 20;
          i++
        ) {
          console.log(this.actualPage);
          new Card('ul.poke-list', data[i]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  createTemplate() {
    return `
     <section class="poke_list">
        <p class="pagenumber">Página ${this.actualPage}/65</p>
        <img role = "button" class = "previousPage" src="./src/public/previous-arrow.png" alt="Previous" height="60" width="60">
        <img role = "button" class = "nextPage" src="./src/public/next-arrow.png" alt="Next" height="60" width="60">
        <ul class="poke-list"></ul>
      </section>
    `;
  }
}
