'use strict';

var itemInput = document.getElementById('itemInput');
var quantityInput = document.getElementById('quantityInput');
var priceInput = document.getElementById('priceInput');
var form = document.querySelector('form');
var itemList = document.getElementById('itemList');
var subTotal = document.getElementById('subTotal');
var taxTotal = document.getElementById('taxTotal');
var finalTotal = document.getElementById('finalTotal');
var checkOut = document.getElementById('checkOut');
var calculatedSubTotal = null;

form.addEventListener('submit', function(e) {
	e.preventDefault();
	itemList.innerHTML = itemList.innerHTML+' '+quantityInput.value+' '+itemInput.value+' at $'+priceInput.value+' each<br>';
	var addItems = (calculatedSubTotal === null) ? calculatedSubTotal = quantityInput.value*priceInput.value:
		calculatedSubTotal += calculatedSubTotal = quantityInput.value*priceInput.value;
	subTotal.innerHTML = 'Subtotal = $'+addItems;
	quantityInput.value = '';
	itemInput.value = '';
	priceInput.value = '';
})
checkOut.addEventListener('click', function() {
	var tax = calculatedSubTotal * .055;
	var total = tax + calculatedSubTotal;
	taxTotal.innerHTML = 'Tax total = $' + tax.toFixed(2);
	finalTotal.innerHTML = 'Total with tax = $' + total.toFixed(2);
})