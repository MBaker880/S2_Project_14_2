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
      // Contains the addButtons data collection from the HTML
      var addButtons = document.getElementsByClassName("addButton");

      // Loop through the addButtons collection when the button is clicked
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

function addItem(e) {
      // Target the next element sibling
      var foodItem = e.target.nextElementSibling;
      // Getting the id of foodItem
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      // Getting the id cart of the aside element
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstElementChild.textContent++;
                  break;
            } 
      }

      // If the duplicate order is false loop
      if (duplicateOrder === false) {
            // Create the span element
            var orderCount = document.createElement("span");
            // Setting the text content of the orderCount variable to 1
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}








/*------------------------------------------------------------------------------------------------------------*/