"use strict";

/******* Functions & event handlers *******/

function changeColor() {
  // create a const variable that is a jQuery object
  const colorChangeEls = $('.color-change');

  // for each element in array of jQuery objects
  for (const el of colorChangeEls) {
    // .toggleClass adds 'red' to the class (so now has two classes color-change and red)
    $(el).toggleClass('red');
  }
}

function validateNumber(evt) {
  // prevents default settings
  evt.preventDefault();

  // the inputed value is now a jQuery object
  const numberInput = $('input[name="number"]');
  // typcase the string into an int with base 10
  // numerInput.val() gets the values of the form element
  const userNum = parseInt(numberInput.val(), 10);  // typecast to num

  // jQuery object for form feedback
  const formFeedback = $('#formFeedback');
  // if the number is greater than 10
  if (userNum > 10) {
    formFeedback.text('Please enter a smaller number');
    // if number is less than or equal to 10
  } else {
    formFeedback.text('You are good to go!');
  }
}


/******* Attach event handlers *******/

// apply event handler to class color-changer
// when a click happens, call changeColor function
$('.color-changer').on('click', changeColor);
// apply event handler to class number-form
// when a submit happens then call validateNumber
$('.number-form').on('submit', validateNumber);

