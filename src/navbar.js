import { content } from './index';

function Navbar() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navItems = ['Home', 'Menu', 'About', 'Contact'];
  const navLinks = document.createElement('ul');
  nav.classList.add('navbar');
  navLinks.classList.add('nav-links');

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
  header.appendChild(nav);
  content.appendChild(header);
}

export default Navbar;
