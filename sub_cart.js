"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Mackenzie Baker
   Date:   4.5.2019

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
/*------------------------------------------------------------------------------------------------------------*/
window.addEventListener("load", setCart);

function setCart() {
      // Contains the addButtons data collection from the HTML.
      var addButtons = document.getElementsByClassName("addButtons");

      // Loop through the addButtons collection when the button is clicked.
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}

function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDiscription = document.cloneNode(foodID);
      var cartBox = document.getElementById("cart");
}








/*------------------------------------------------------------------------------------------------------------*/