import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';

function menuCreation() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = 'Menu';

  main.appendChild(title);
  content.appendChild(main);
}

function Menu() {
  content.innerHTML = '';
  Navbar();
  menuCreation();
  Footer();
}

export { Menu };
