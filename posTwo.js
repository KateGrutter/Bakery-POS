(function () {

const inventory = [
    {
        category: 'Cookie',
        name:'Chocolate Chip',
        price: 1.00,
        description: 'Classic Milk Chocolate Chip Cookie',  
        image:  /// all descriptions are placeholders for now
    },
    {
        category: 'Cookie',
        name:'Peanut Butter',
        price: 1.00,
        description: 'Pure Peanut Butter Heaven',
        

    },
    {
        category: 'Cookie',
        name: 'Double Chocolate',
        price: 1.25,
        description: 'Double the Decadance, Double the Chocolate'
        
    },
    {
        category: 'Cookie',
        name: 'White Chocolate',
        price: 1.75,
        description: 'White Chocolate Wonderfulness'

    },
    {
        category: 'Donuts',
        name: 'Chocolate Glazed',
        price: 1.00,
        description: 'yup',
    },
    {
        category: 'Donuts',
        name: 'Powdered Sugar',
        price: 1.00,
        description: 'yum',

    },
    {
        category: 'Donuts',
        name: 'Apple Fritter',
        price: 1.50,
        description: 'fritter-tastic',
        
    },
    {
        category: 'Donuts',
        name: 'Cinnamon Roll',
        price: 1.75,
        description: 'roll it up',

    },
    {
        category: 'Pies',
        name: 'Apple',
        price: 10.00,
        description: "'Merica",

    },
    {
        category: 'Pies',
        name: 'Cherry',
        price: 10.00,
        description: 'very cherry',

    },

    {
        category: 'Pies',
        name: 'Key Lime',
        price: 12.00,
        description: 'key to happiness',
    },
    {
        category: 'Pies',
        name: 'Pecan',
        price: 12.00,
        description: 'you can pecan',

    }
]


})();

const addToCart = (event) => {
    const grabInventory = inventory.find(food => food.id === event.target.id);
    cart.push(item);
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart-item');
    const image = document.createElement('img');
    image.src = grabInventory.image;
    image.classList.add('item-image');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = grabInventory.title;
    const priceSpan = document.createElement('span');
    priceSpan.innerText = `${grabInventory.price}`;
    const removeButton = document.createElement('button');
    removeButton.innerText('Remove')

    itemDiv.append(image);
    itemDiv.append(titleSpan);
    itemDiv.append(priceSpan);
    itemDiv.append(removeButton);

    document.querySelectorAll('#cart-item').append(itemDiv);
    updateTotal()
}
const buttons = document.querySelectorAll('.add-to-cart-button');

for (let button of buttons){
    button.addEventListener('click', addToCart)
}