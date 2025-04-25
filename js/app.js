
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const createBtn = document.getElementById('createBtn');
const container = document.getElementById('productContainer');

const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const colorInput = document.getElementById('color');
const urlInput = document.getElementById('url');
const categoryInput = document.getElementById('category');


addBtn.onclick = () => {
  modal.classList.remove('hidden');
};
createBtn.onclick = () => {
  const product = {
    id: Date.now(),
    name: nameInput.value,
    price: priceInput.value,
    color: colorInput.value,
    url: urlInput.value,
    category: categoryInput.value
  };

  let products = localStorage.getItem('products');
  if (products) {
    products = JSON.parse(products);
  } else {
    products = [];
  }

  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

    
  
  modal.classList.add('hidden');
  nameInput.value = '';
  priceInput.value = '';
  colorInput.value = '';
  urlInput.value = '';
  categoryInput.value = '';
};


window.onload = () => {
  let products = localStorage.getItem('products');
  if (products) {
    products = JSON.parse(products);
    products.forEach(showProduct);
  }
};


function showProduct(p) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.url}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: $${p.price}</p>
    <p>Color: ${p.color}</p>
    <p>Category: ${p.category}</p>
  `;
  container.appendChild(card);
}
