export default function Navbar(content) {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navItems = [
    'Home',
    'Menu',
    'About us',
    'Contact us',
  ];
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
