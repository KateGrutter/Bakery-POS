(function () {


const cashButton = document.getElementById('cash');
const cardButton = document.getElementById('card');
const purchaseButton = document.getElementById('subBut');

cashButton.addEventListener('click', () => {
    const cashForm = document.getElementById('ifCash');
    const cardForm = document.getElementById('ifCard');
    cashForm.style.display = 'block';
    cardForm.style.display = 'none'
});

cardButton.addEventListener('click', () => {
    const cardForm = document.getElementById('ifCard');
    const cashForm = document.getElementById('ifCash')
    cardForm.style.display = 'block';
    cashForm.style.display = 'none'

});
purchaseButton.addEventListener('click', () => {
    const receiptForm = document.getElementById('rec');

    receiptForm.style.display = 'block';


})


} ())