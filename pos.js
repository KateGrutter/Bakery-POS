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
}





function updateCartTotal() {
    const cartItems = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItems.getElementsByClassName('cart-row');

    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const cartPrice = cartRow.getElementsByClassName('cart-price')[0];
    }   const cartQuantity = cartRow.getElementsByClassName()
}
