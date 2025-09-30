const cartButton = document.getElementById('cart');
const closeButton = document.querySelector('.close-cart');
const clearButton = document.querySelector('.clear-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartDOM = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];
let cartTotalPrice = 0;

// Mostrar el carrito
cartButton.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
});

// Cerrar el carrito
closeButton.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});

// Vaciar el carrito
clearButton.addEventListener('click', () => {
    cart = [];
    cartTotalPrice = 0;
    updateCart();
});

// Agregar producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        addToCart(productName, productPrice);
    });
});

// Función para agregar al carrito
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    cartTotalPrice += price;
    updateCart();
}

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = `$${cartTotalPrice.toFixed(2)}`;
    document.getElementById('cart-count').textContent = cart.length;
}
