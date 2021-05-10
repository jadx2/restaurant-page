import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';

function contactCreation() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = 'Contact';

  main.appendChild(title);
  content.appendChild(main);
}

function Contact() {
  content.innerHTML = '';
  Navbar();
  contactCreation();
  Footer();
}

export { Contact };
