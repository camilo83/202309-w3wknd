import { Component } from './components';

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
      <h1>Pokemon World</h1>
    </header>
    `;
  }
}
