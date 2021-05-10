import { Home } from './home';
import { Menu } from './menu';
import { About } from './about';
import { Contact } from './contact';
import './styles.css';

export const content = document.querySelector('#content');

Home();

document.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target.textContent;

  switch (target) {
    case 'Home':
      Home();
      break;
    case 'Menu':
      Menu();
      break;
    case 'About':
      About();
      break;
    case 'Contact':
      Contact();
      break;
    default:
      Home();
  }
});
