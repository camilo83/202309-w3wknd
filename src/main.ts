import { Header } from './components/header';
import { List } from './components/list';

function main() {
  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  // eslint-disable-next-line no-unused-vars
  const components = [new Header('#app'), new List('#app')];
}

main();
