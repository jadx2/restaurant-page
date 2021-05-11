import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';
import Pic from './images/bread-kneeding.jpg';

function aboutCreation() {
  const main = document.createElement('main');
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const aboutContent = document.createElement('div');
  const image = document.createElement('img');
  const text = document.createElement('p');
  aboutContent.classList.add('about-us');
  title.classList.add('title');
  main.classList.add('main');
  container.classList.add('container');
  title.textContent = 'About Us';
  image.classList.add('img');
  image.setAttribute('src', Pic);
  text.classList.add('about-desc');
  text.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, explicabo et accusantium asperiores ipsum id consequatur obcaecati. Dolorem deleniti aliquid ratione, obcaecati distinctio dicta qui eaque libero hic odio expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, explicabo et accusantium asperiores ipsum id consequatur obcaecati. Dolorem deleniti aliquid ratione, obcaecati distinctio dicta qui eaque libero hic odio expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, explicabo et accusantium asperiores ipsum id consequatur obcaecati. Dolorem deleniti aliquid ratione, obcaecati distinctio dicta qui eaque libero hic odio expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, explicabo et accusantium asperiores ipsum id consequatur obcaecati.';

  aboutContent.appendChild(image);
  aboutContent.appendChild(text);
  container.appendChild(title);
  container.appendChild(aboutContent);
  main.appendChild(container);
  content.appendChild(main);
}

function About() {
  content.innerHTML = '';
  Navbar();
  aboutCreation();
  Footer();
}

export { About };
