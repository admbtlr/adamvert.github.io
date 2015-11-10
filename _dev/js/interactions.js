var mail = require('./mail.js'),
    nav = require('./nav.js');

module.exports = {

  scrollToLink: function() {
    $('a[href^="#"]').on('click', function(event) {
      href = $(this).attr('href');
      if (href.length > 1) {
        var $target = $($(this).attr('href'));
        event.preventDefault();
        scrollToElement($target);
      }
    });
  },

  contactOverlay: function() {
    $('.js-contact-form').on('click', function(e) {
      showOverlay();
      e.preventDefault();
    });

    $('.js-overlay-close').on('click', function(e) {
      hideOverlay();
      e.preventDefault();
    });

    $('.js-footer-contact').on('click', function(e) {
      showOverlay();
      e.preventDefault();
    });
  },

  definitionLists: function() {
    $('dt').off('click');
    $('dt').on('click', function(e) {
      $this = $(this);
      if ($this.hasClass('active')) {
        $this.removeClass('active');
      } else {
        $this.siblings().filter('dt').removeClass('active');
        $this.addClass('active');
      }
      window.setTimeout(function() {
        scrollToElement($this);
      }, 400);
      e.preventDefault();
    });
  },

  contactForm: function() {
    $('.js-contact-send').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (message = mail.validateContactForm()) {
        mail.send(message.name, message.email, message.text);
      }
    });
  }
};

var scrollPosition = 0;

var showOverlay = function() {
  scrollPosition = $(window).scrollTop();
  $(window).scrollTop(0);
  $('html').toggleClass('overlay-visible');
}

var hideOverlay = function() {
  $('html').toggleClass('overlay-visible');
  $(window).scrollTop(scrollPosition);
  scrollPosition = 0;
}

var scrollToElement = function($el) {
  $('html, body').animate({
    // add 5px padding
    scrollTop: $el.offset().top - nav.getNavBarHeight()
  }, 300);
};

