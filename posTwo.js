const inventory = [
    {
        category: 'Cookie',
        name:'Chocolate Chip',
        price: 1.00,
        description: 'Classic Milk Chocolate Chip Cookie',  /// all descriptions are placeholders for now
        id: 'choc-chip',
        
    },
    {
        category: 'Cookie',
        name:'Peanut Butter',
        price: 1.00,
        description: 'Pure Peanut Butter Heaven',
        id: 'pb',
    },
    {
        category: 'Cookie',
        name: 'Double Chocolate',
        price: 1.25,
        description: 'Double the Decadance, Double the Chocolate',
        id: 'dbl-choc'
    },
    {
        category: 'Cookie',
        name: 'White Chocolate',
        price: 1.75,
        description: 'White Chocolate Wonderfulness',
        id: 'w-choc'

    },
    {
        category: 'Donuts',
        name: 'Chocolate Glazed',
        price: 1.00,
        description: 'yup',
        id: 'choc-glazed'
    },
    {
        category: 'Donuts',
        name: 'Powdered Sugar',
        price: 1.00,
        description: 'yum',
        id: 'pow-sug'

    },
    {
        category: 'Donuts',
        name: 'Apple Fritter',
        price: 1.50,
        description: 'fritter-tastic',
        id: 'fritter'
        
    },
    {
        category: 'Donuts',
        name: 'Cinnamon Roll',
        price: 1.75,
        description: 'roll it up',
        id: 'roll'
    },
    {
        category: 'Pies',
        name: 'Apple',
        price: 10.00,
        description: "'Merica",
        id: 'apple'

    },
    {
        category: 'Pies',
        name: 'Cherry',
        price: 10.00,
        description: 'very cherry',
        id: 'cherry'

    },

    {
        category: 'Pies',
        name: 'Key Lime',
        price: 12.00,
        description: 'key to happiness',
        id: 'key'
    },
    {
        category: 'Pies',
        name: 'Pecan',
        price: 12.00,
        description: 'you can pecan',
        id: 'pecan'

    }
]
const cart = [];

const addToCart = (event) => {
    const grabInventory = inventory.find(food => food.id === event.target.id);
    cart.push(grabInventory);
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart-item');
    const image = document.createElement('img');
    image.src = grabInventory.image;
    image.classList.add('item-image');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = grabInventory.name;
    const priceSpan = document.createElement('span');
    priceSpan.innerText = `${grabInventory.price}`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    cartDiv.append(image);
    cartDiv.append(titleSpan);
    cartDiv.append(priceSpan);
    cartDiv.append(removeButton);

    const cartItem = document.querySelector('.cart-items');
    console.log(cartItem)
    cartItem.append(cartDiv);
    updateTotal()
}
const buttons = document.querySelectorAll('.add-to-cart-button');

for (let button of buttons){
    button.addEventListener('click', addToCart)
};

function updateTotal() {
    let total = 0;
    cart.forEach((item) => (total += item.price));
    document.querySelector('.cart-total-price').innerText = `Total: $${total}`;

}