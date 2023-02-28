const removeCartItemButtons = document.getElementsByClassName('remove-button');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem)
};

const quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i]
    input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()

}

function removeCartItem(event) {
    const buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal()
}
 
const addToCartButtons = document.getElementsByClassName('add-to-cart-button');

for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    const imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

    addItemToCart(title, price, imgSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imgSrc) {
    const cartRow = document.createElement('div');
    const cartItems = document.getElementsByClassName('cart-items')[0]
    const cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (const i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title) {
        return
        }
    }
    
    const cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imgSrc}" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min="1">
        <button class="remove-button" type="button">REMOVE</button>
    </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changeQuantity)
}





function updateCartTotal() {
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItems.getElementsByClassName('cart-row');
    const total = 0
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const cartPrice = cartRow.getElementsByClassName('cart-price')[0];
        const cartQuantity = cartRow.getElementsByClassName('cart-quantity-input')[0]
        const price = parseFloat(cartPrice.innerText.replace('$', ''));
        const quantity = cartQuantity.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total')[0].innerText = '$' + total
}
