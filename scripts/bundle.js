(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

form.addEventListener('submit', function (e) {
	e.preventDefault();
	itemList.innerHTML = itemList.innerHTML + ' ' + quantityInput.value + ' ' + itemInput.value + ' at $' + priceInput.value + ' each<br>';
	var addItems = calculatedSubTotal === null ? calculatedSubTotal = quantityInput.value * priceInput.value : calculatedSubTotal += calculatedSubTotal = quantityInput.value * priceInput.value;
	subTotal.innerHTML = 'Subtotal = $' + addItems;
	quantityInput.value = '';
	itemInput.value = '';
	priceInput.value = '';
});
checkOut.addEventListener('click', function () {
	var tax = calculatedSubTotal * .055;
	var total = tax + calculatedSubTotal;
	taxTotal.innerHTML = 'Tax total = $' + tax.toFixed(2);
	finalTotal.innerHTML = 'Total with tax = $' + total.toFixed(2);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map