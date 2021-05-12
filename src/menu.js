export default function menuCreation(content) {
  const menuContent1 = [
    {
      name: 'Sourdough Bread',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Country Bread',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Whole Wheat Bread',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Seeds Bread',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
  ];
  const menuContent2 = [
    {
      name: 'Brioche',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Croissant',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Rye Bread',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
    {
      name: 'Baguette',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam doloribus',
      price: '$10',
    },
  ];
  const main = document.createElement('main');
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const menu = document.createElement('div');
  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  menu.classList.add('menu');
  col1.classList.add('side-one');
  col2.classList.add('side-two');
  title.classList.add('title');
  main.classList.add('main');
  container.classList.add('container');
  title.textContent = 'Menu';

  menuContent1.forEach((item) => {
    const menuItem = document.createElement('div');
    const itemTitle = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPrice = document.createElement('p');
    menuItem.classList.add('menuItem');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = `${item.name}`;
    itemDesc.classList.add('item-description');
    itemDesc.textContent = `${item.description}`;
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = `${item.price}`;

    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDesc);
    menuItem.appendChild(itemPrice);
    col1.appendChild(menuItem);
  });

  menuContent2.forEach((item) => {
    const menuItem = document.createElement('div');
    const itemTitle = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPrice = document.createElement('p');
    menuItem.classList.add('menuItem');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = `${item.name}`;
    itemDesc.classList.add('item-description');
    itemDesc.textContent = `${item.description}`;
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = `${item.price}`;

    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDesc);
    menuItem.appendChild(itemPrice);
    col2.appendChild(menuItem);
  });

  menu.appendChild(col1);
  menu.appendChild(col2);
  container.appendChild(title);
  container.appendChild(menu);
  main.appendChild(container);
  content.appendChild(main);
}
