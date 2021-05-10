import { content } from './index';

function Footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = 'Created by Jaim Delmar';

  content.appendChild(footer);
}

export default Footer;
