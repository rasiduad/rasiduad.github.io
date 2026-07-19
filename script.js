/**
 * RASID-UAD — Script principal
 * Gère le menu burger responsive et les interactions du site.
 */

(function () {
  'use strict';

  // ===== Menu burger pour mobile =====
  var burgerBtn = document.getElementById('burger-btn');
  var mainNav = document.getElementById('main-nav');

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      burgerBtn.classList.toggle('active', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fermer le menu quand on clique sur un lien (mobile)
    var navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        burgerBtn.classList.remove('active');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !burgerBtn.contains(e.target)) {
        mainNav.classList.remove('open');
        burgerBtn.classList.remove('active');
        burgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
