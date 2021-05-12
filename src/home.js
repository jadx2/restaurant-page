export default function homeCreation(content) {
  const main = document.createElement('main');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const button = document.createElement('button');
  title.classList.add('home-title');
  main.classList.add('main');
  container.classList.add('home-container');
  title.textContent = 'Le Boulangerie';
  text.classList.add('presentation');
  text.textContent = 'Experience the original french taste!';
  button.classList.add('button');
  button.textContent = 'Menu';

  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(button);
  main.appendChild(container);
  content.appendChild(main);
}
