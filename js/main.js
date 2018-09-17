'use strict';

console.log('js is linked');

$(document).ready(function () {

  $('checkbox').on('click', function () {
    $(this).toggleClass('checked');
  });
});