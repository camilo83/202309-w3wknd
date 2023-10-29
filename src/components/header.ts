import { Component } from './components';
import '../styles.scss';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <header>
      <h1>Pokemon DataBase</h1>
      <img src="./src/public/header.png" alt="Pokémon Pixel Logo">
    </header>
    `;
  }
}
