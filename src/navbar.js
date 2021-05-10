import { content } from './index';

function Navbar() {
  const nav = document.createElement('nav');
  const navItems = ['Home', 'Menu', 'About', 'Contact'];
  const navLinks = document.createElement('ul');

  navItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.setAttribute('href', '#');
    a.textContent = `${item}`;
    li.appendChild(a);
    navLinks.appendChild(li);
  });
  nav.appendChild(navLinks);
  content.appendChild(nav);
}

export default Navbar;
