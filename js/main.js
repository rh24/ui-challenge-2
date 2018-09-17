'use strict';

console.log('js is linked');

$(document).ready(function () {

  $('.unchecked').on('click', function () {
    $(this).toggleClass('checked');
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
  });
});