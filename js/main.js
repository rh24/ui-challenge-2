'use strict';

console.log('js is linked');

$(document).ready(function () {

  $('.unchecked').on('click', function () {
    $(this).toggleClass('checked');
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
  });

  $('.unchecked-radio').on('click', function () {
    console.log($(this));
    $(this).toggleClass('checked-radio');
    $(this).siblings().removeClass('checked-radio').addClass('unchecked-radio');
  });
});