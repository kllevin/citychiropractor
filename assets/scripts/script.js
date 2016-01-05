
var toggleMenu = function() {
  var button = document.querySelector('.js-menu-toggle-trigger');
  var menu = document.querySelector('.js-menu-toggle-target');
  var body = document.querySelector('body');

  button.addEventListener("click", function() {
    this.classList.add("is-visible");
    menu.classList.add("is-visible");
    body.classList.add("is-none-scrolling");
  });
}

toggleMenu();
