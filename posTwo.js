(function () {

const inventory = [
    {
        category: 'Cookie',
        name:'Chocolate Chip',
        price: 1.00,
        description: 'Classic Milk Chocolate Chip Cookie',  /// all descriptions are placeholders for now
        id: 
        image: 

    },
    {
        category: 'Cookie',
        name:'Peanut Butter',
        price: 1.00,
        description: 'Pure Peanut Butter Heaven',
        id:
        image:
    },
    {
        category: 'Cookie',
        name: 'Double Chocolate',
        price: 1.25,
        description: 'Double the Decadance, Double the Chocolate',
        id:
        image:
    },
    {
        category: 'Cookie',
        name: 'White Chocolate',
        price: 1.75,
        description: 'White Chocolate Wonderfulness',
        id:
        image:     

    },
    {
        category: 'Donuts',
        name: 'Chocolate Glazed',
        price: 1.00,
        description: 'yup',
        id:
        image:
    },
    {
        category: 'Donuts',
        name: 'Powdered Sugar',
        price: 1.00,
        description: 'yum',
        id:
        image:

    },
    {
        category: 'Donuts',
        name: 'Apple Fritter',
        price: 1.50,
        description: 'fritter-tastic',
        id:
        image:
        
    },
    {
        category: 'Donuts',
        name: 'Cinnamon Roll',
        price: 1.75,
        description: 'roll it up',
        id:
        image:

    },
    {
        category: 'Pies',
        name: 'Apple',
        price: 10.00,
        description: "'Merica",
        id: 0


    },
    {
        category: 'Pies',
        name: 'Cherry',
        price: 10.00,
        description: 'very cherry',
        id:
        image:

    },

    {
        category: 'Pies',
        name: 'Key Lime',
        price: 12.00,
        description: 'key to happiness',
        id:
        image:
    },
    {
        category: 'Pies',
        name: 'Pecan',
        price: 12.00,
        description: 'you can pecan',
        id:
        image:

    }
]









function updateTotal () {
    let total = 0;
    cart.forEach((item) => (total =+item.price));
    document.querySelector(".total").innerText = `$${total}`;

        
    }
}
    
   
        
    










})();
