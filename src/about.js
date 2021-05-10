import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';

function aboutCreation() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = 'About';

  main.appendChild(title);
  content.appendChild(main);
}

function About() {
  content.innerHTML = '';
  Navbar();
  aboutCreation();
  Footer();
}

export { About };
