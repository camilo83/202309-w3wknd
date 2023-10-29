import { Component } from './components';
import { List } from './list';

export class Pages extends Component {
  actualPage: number;
  list: List;
  constructor(selector: string, list: List) {
    super(selector);
    this.actualPage = 1;
    this.list = list;
    this.template = this.createTemplate();
    this.render();
  }

  handlePreviousPage() {
    if (this.actualPage > 1) {
      this.actualPage -= 1;
      this.list.updatePage(this.actualPage);
    }
  }

  handleNextPage() {
    if (this.actualPage < 300) {
      this.actualPage += 1;
      this.list.updatePage(this.actualPage);
    }
  }

  render() {
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
  }

  createTemplate() {
    return `
    <section class="page_arrows">
       <button class="previousPage">ATRAS</button>
       <button class="nextPage">ADELANTE</button>
    </section>
      `;
  }
}
