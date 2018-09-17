'use strict';

console.log('js is linked');

$(document).ready(function () {

  $('.unchecked').on('click', function () {
    $(this).toggleClass('checked');
  });

});