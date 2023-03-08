(function () {
const inventory = [
    {
        category: 'Cookie',
        name:'Chocolate Chip',
        price: 1.00,
        description: 'The Classic',  /// all descriptions are placeholders for now
        id: 'choc-chip',
        image: src= "assets/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg",
        quantity: 0,
    },
    {
        category: 'Cookie',
        name:'Peanut Butter',
        price: 1.00,
        description: 'Peanut Butter Paradise',
        id: 'pb',
        image: src="assets/priscilla-du-preez--Y-qg-ncD34-unsplash.jpg",
        quantity: 0,
    },
    {
        category: 'Cookie',
        name: 'Double Chocolate',
        price: 1.25,
        description: 'Double the Decadance',
        id: 'dbl-choc',
        image:src="assets/julissa-capdevilla-HHee8b4ZAlU-unsplash.jpg",
        quantity: 0,
    },
    {
        category: 'Cookie',
        name: 'White Chocolate',
        price: 1.75,
        description: 'with Macedamia Nut',
        id: 'w-choc',
        image:src="assets/morgane-perraud-XhrW0XlRy8c-unsplash.jpg",
        quantity: 0,

    },
    {
        category: 'Donuts',
        name: 'Chocolate Glazed',
        price: 1.00,
        description: 'Glazed to Perfection',
        id: 'choc-glazed',
        image:src='https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
        quantity: 0,
    },
    {
        category: 'Donuts',
        name: 'Powdered Sugar',
        price: 1.00,
        description: 'Yes Please!',
        id: 'pow-sug',
        image: src="assets/no-revisions-vUSfCfuq-2Y-unsplash.jpg",
        quantity: 0,

    },
    {
        category: 'Donuts',
        name: 'Apple Fritter',
        price: 1.50,
        description: 'Fritter-tastic!',
        id: 'fritter',
        image:src="assets/katherine-sousa-k2UM3jOgmGI-unsplash.jpg",
        quantity: 0,
        
    },
    {
        category: 'Donuts',
        name: 'Cinnamon Roll',
        price: 1.75,
        description: 'Roll it up',
        id: 'roll',
        image: src="assets/andy-hay-1uaIZcCJ-H0-unsplash.jpg",
        quantity: 0,
    },
    {
        category: 'Pies',
        name: 'Apple',
        price: 10.00,
        description: "'Merica",
        id: 'apple',
        image: src="assets/kavya-p-k-zQ4jrYelvLs-unsplash.jpg",
        quantity: 0,

    },
    {
        category: 'Pies',
        name: 'Cherry',
        price: 10.00,
        description: 'Very cherry',
        id: 'cherry',
        image: src="assets/marie-g-geri6ml5e2I-unsplash.jpg",
        quantity: 0,

    },

    {
        category: 'Pies',
        name: 'Key Lime',
        price: 12.00,
        description: 'Key to happiness',
        id: 'key',
        image: src="assets/kaouther-djouada-j8ufR4H4PaE-unsplash.jpg",
        quantity: 0,
    },
    {
        category: 'Pies',
        name: 'Pecan',
        price: 12.00,
        description: 'Yes you can pecan!',
        id: 'pecan',
        image: src="assets/keighla-exum-wnn9GuvXIZ4-unsplash.jpg",
        quantity: 0,

    },
]
const cart = [];

const addToCart = (event) => {
    const grabInventory = inventory.find(food => food.id === event.target.id);
    const existingCartItem = cart.find(food => food.id === event.target.id);
    if (existingCartItem === undefined) {
        grabInventory.quantity++;
    cart.push(grabInventory);
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart-item');
    cartDiv.setAttribute('data-id', grabInventory.id);
    const image = document.createElement('img');
    image.src = grabInventory.image;
    image.classList.add('item-image');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = `${grabInventory.name} x${grabInventory.quantity}`;
    const priceSpan = document.createElement('span');
    priceSpan.innerText = `$${(grabInventory.price).toFixed(2)}`;
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';

    cartDiv.append(image);
    cartDiv.append(titleSpan);
    cartDiv.append(priceSpan);
    cartDiv.append(removeButton);

    const cartItem = document.querySelector('.cart-items');
    cartItem.append(cartDiv);

    removeButton.addEventListener('click', (event) => {
        grabInventory.quantity = 0;
        const cartThing = event.target.parentNode;
        cartThing.remove();
        const indexRemove = cart.findIndex(item => item.id === cartThing.getAttribute('data-id'));
        cart.splice(indexRemove, 1);
        updateTotal()
    })

} else {
    existingCartItem.quantity++;
    const existingHTML = document.querySelector(`[data-id=${existingCartItem.id}] span`);
    console.log(existingHTML);
    existingHTML.innerText = `${existingCartItem.name} x${existingCartItem.quantity}`
    //console.log(existingHTML)
}



updateTotal()
}

function updateTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    document.querySelector('.cart-total-price').innerText = `Total: $${total.toFixed(2)}`;

}




const buttons = document.querySelectorAll('.add-to-cart-button');

for (let button of buttons){
    button.addEventListener('click', addToCart)
};



//to open checkout
const checkoutPopUp = document.querySelector('.checkout-popup');
  const checkOutButton = document.querySelector('.open-checkout');
  const cartSection = document.getElementById('cart-section');
  checkOutButton.addEventListener('click', event => {
    
    cartSection.style.display = 'none'
    checkoutPopUp.style.display = 'block';
    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    document.querySelector('.subtotal-total-price').innerText = `$${total.toFixed(2)}`;
    
    let subTotal = total * .06
    document.querySelector('.sales-tax-price').innerText = `$${subTotal.toFixed(2)}`;

    
    let subTotalPlusTax = subTotal
    document.querySelector('.final-total-price').innerText = `$${(subTotalPlusTax + total).toFixed(2)}`;
    
  });

  //BAKERYCHECKOUTJS

const cashButton = document.getElementById('cash');
const cardButton = document.getElementById('card');
const purchaseButton = document.getElementById('subBut');

cashButton.addEventListener('click', () => {
    const cashForm = document.getElementById('ifCash');
    const cardForm = document.getElementById('ifCard');
    cashForm.style.display = 'block';
    cardForm.style.display = 'none'
});

const makeChangeButton = document.getElementById('make-change');
makeChangeButton.addEventListener('click', event => {
const cashPaid = document.getElementById('cash-paid').value;
let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    document.querySelector('.subtotal-total-price').innerText = `$${total.toFixed(2)}`;
let subTotal = total * .06
    document.querySelector('.sales-tax-price').innerText = `$${subTotal.toFixed(2)}`;
let subTotalPlusTax = subTotal
    document.querySelector('.final-total-price').innerText = `$${(subTotalPlusTax + total).toFixed(2)}`;
    document.getElementById('make-change-return').innerText = `$${((cashPaid) - (subTotalPlusTax + total)).toFixed(2)}`;


})

cardButton.addEventListener('click', () => {
    const cardForm = document.getElementById('ifCard');
    const cashForm = document.getElementById('ifCash')
    cardForm.style.display = 'block';
    cashForm.style.display = 'none'

});
purchaseButton.addEventListener('click', () => {
    const receiptForm = document.getElementById('rec');
    // const cartSection = document.getElementById('cart-section');


    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));
    document.querySelector('.subPar').innerText = `Subtotal: $${total.toFixed(2)}`;
    
    let subTotal = total * .06
    document.querySelector('.taxPar').innerText = `Sales Tax: $${subTotal.toFixed(2)}`;

    
    let subTotalPlusTax = subTotal
    document.querySelector('.totPar').innerText = `Total: $${(subTotalPlusTax + total).toFixed(2)}`;

    receiptForm.style.display = 'block';
    checkoutPopUp.style.display = 'none';
    cartSection.style.display = 'none';



})







})();
