/**
 * Toggles the menu for the main navigation of the site at small viewports.
 */

var toggleMenu = function() {
  var button = $('.js-menu-toggle-trigger');
  var menu = $('.js-menu-toggle-target');
  var body = $('body');
  var stateHook = 'is-visible';

  button.addEventListener("click", function() {
    this.classList.toggle(stateHook);
    menu.classList.toggle(stateHook);
    body.classList.toggle("has-no-scrolling");
  });
}
