$(".js-nav-trigger").click(function() {
  $(this).toggleClass("is-open");
  $(".js-nav-target").toggleClass("is-visible");
});