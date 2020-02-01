$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
    $("#nav").toggleClass('active');
  })
}) $(function () {
  $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
    $(".menu").toggleClass('active');
  })
});