$(document).ready(function () {
  $(".menu-btn").on("click", function (e) {
    e.preventDefault();
    $(".nav-menu").toggleClass("show");
    $(".banner-inner").toggleClass("show");
  });
});
