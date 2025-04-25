const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const createBtn = document.getElementById('createBtn');
const container = document.getElementById('productContainer');
const overlayEl = document.querySelector(".overlay")


const nameInp = document.getElementById('name');
const priceInp = document.getElementById('price');
const colorInp = document.getElementById('color');
const urlInp = document.getElementById('url');
const categoryInput = document.getElementById('category');

const products = JSON.parse(localStorage.getItem('products')) || [];  

addBtn.onclick = () => {
  modal.classList.remove('hidden');
  closeAllPopap()
  
};


createBtn.onclick = () => {
  const product = {
    id: Date.now(),
    name: nameInp.value,
    price: priceInp.value,
    color: colorInp.value,
    url: urlInp.value,
    category: categoryInput.value
  };

  addToDOM(product);
  saveToStorage(product);
  modal.classList.add('hidden');
  clearInputs();
};

window.onload = () => {
  createCard(DATA)

  products.forEach(p => addToDOM(p));
};

function addToDOM(product) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
        <img src=${"https://castore.uz/upload/iblock/45a/rjsr0s3mlruad1cbk149v4gnsa1cp0h7/smartfon-samsung-galaxy-s22-ultra-sm-g908b-ds-128gb-red.jpg"} alt="" width="100">
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <p>Color: ${product.color}</p>
    <p>Category: ${product.category}</p>
  `;
  container.appendChild(card);
}

function saveToStorage(product) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}

function clearInputs() {
  nameInp.value = '';
  priceInp.value = '';
  colorInp.value = '';
  urlInp.value = '';
  categoryInput.value = '';
}
    
function showOverlay() {
  overlayEl.classList.add("show")
}

function hideOverlay() {
  overlayEl.classList.remove("show")

}
function closeAllPopap() {
  addToDOM()

}