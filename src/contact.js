import Navbar from './navbar';
import Footer from './footer';
import { content } from './index';
import Pic from './images/map.jpg';

function contactCreation() {
  const media = [
    {
      icon: '<i class="fab fa-twitter-square"></i>',
      url: 'https://twitter.com/thecatcodes',
    },
    {
      icon: '<i class="fab fa-github-square"></i>',
      url: 'https://github.com/jadx2',
    },
    {
      icon: '<i class="fab fa-linkedin"></i>',
      url: 'https://www.linkedin.com/in/jaimdelmar/',
    },
  ];
  const main = document.createElement('main');
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const contactContent = document.createElement('div');
  const contactImage = document.createElement('img');
  const contactInfo = document.createElement('div');
  const contactAddr = document.createElement('p');
  const contactPhone = document.createElement('p');
  const contactWeb = document.createElement('a');
  const contactMedia = document.createElement('ul');
  contactContent.classList.add('contact-us');
  contactImage.classList.add('img');
  contactImage.setAttribute('src', Pic);
  contactInfo.classList.add('contact-info');
  contactAddr.classList.add('contact-item');
  contactAddr.innerHTML =
    '<i class="fas fa-map-marker-alt"></i> Ave. Dasso 191, San Isidro, Lima, Peru';
  contactPhone.classList.add('contact-item');
  contactPhone.innerHTML =
    '<i class="fas fa-phone"></i> +51 475-2333';
  contactWeb.classList.add('contact-item');
  contactWeb.href = 'https://jaimdelmar.netlify.app/';
  contactWeb.rel = 'nofollow';
  contactWeb.setAttribute('target', '_blank');
  contactWeb.innerHTML =
    '<i class="fas fa-globe"></i> Website';
  contactMedia.classList.add('contact-media');
  title.classList.add('title');
  main.classList.add('main');
  container.classList.add('container');
  title.textContent = 'Contact Us';

  media.forEach((mediaItem) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('media-link');
    link.href = mediaItem.url;
    link.rel = 'nofollow';
    link.setAttribute('target', '_blank');
    link.innerHTML = mediaItem.icon;
    li.appendChild(link);
    contactMedia.appendChild(li);
  });

  contactContent.appendChild(contactImage);
  contactInfo.appendChild(contactAddr);
  contactInfo.appendChild(contactPhone);
  contactInfo.appendChild(contactWeb);
  contactInfo.appendChild(contactMedia);
  contactContent.appendChild(contactInfo);

  container.appendChild(title);
  container.appendChild(contactContent);
  main.appendChild(container);
  content.appendChild(main);
}

function Contact() {
  content.innerHTML = '';
  Navbar();
  contactCreation();
  Footer();
}

export { Contact };
