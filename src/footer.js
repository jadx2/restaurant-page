export default function Footer(content) {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = 'Created by Jaim Delmar';

  content.appendChild(footer);
}
