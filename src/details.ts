import { Header } from './components/header';
import { Info } from './components/info';

function main() {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  // eslint-disable-next-line no-unused-vars
  const components = [new Header('#app'), new Info('#app')];
}

main();
