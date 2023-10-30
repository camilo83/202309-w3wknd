import { Component } from './components';
import '../styles.scss';

export class Footer extends Component {
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
    <footer>
      <address>camiloisazag@hotmail.com</address>
      <img src="./src/public/header.png" alt="Pokémon Pixel Logo">
    </footer>
    `;
  }
}
