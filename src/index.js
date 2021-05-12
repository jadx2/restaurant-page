import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { Home } from './home';
import { Menu } from './menu';
import { About } from './about';
import { Contact } from './contact';
import './styles.css';

export const content = document.querySelector('#content');

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
      return;
  }
});
