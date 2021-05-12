import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Navbar from './navbar';
import Footer from './footer';
import homeCreation from './home';
import menuCreation from './menu';
import aboutCreation from './about';
import contactCreation from './contact';
import './styles.css';

const content = document.querySelector('#content');

function Home() {
  content.innerHTML = '';
  Navbar(content);
  homeCreation(content);
  Footer(content);
}

function Menu() {
  content.innerHTML = '';
  Navbar(content);
  menuCreation(content);
  Footer(content);
}

function About() {
  content.innerHTML = '';
  Navbar(content);
  aboutCreation(content);
  Footer(content);
}

function Contact() {
  content.innerHTML = '';
  Navbar(content);
  contactCreation(content);
  Footer(content);
}

Home();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  switch (target) {
    case 'Home':
      Home();
      break;
    case 'Menu':
      Menu();
      break;
    case 'About us':
      About();
      break;
    case 'Contact us':
      Contact();
      break;
    default:
  }
});
