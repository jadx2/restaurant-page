import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';

function homeCretion() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = 'Home';

  main.appendChild(title);
  content.appendChild(main);
}

function Home() {
  content.innerHTML = '';
  Navbar();
  homeCretion();
  Footer();
}

export { Home };
