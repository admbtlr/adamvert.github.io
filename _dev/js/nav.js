module.exports = {

  init: function() {
    $nav = $('.main-header');
    $subnav = $('.subnav');
    $body = $('body');
    if ($subnav.length > 0) {
      subNavYCoord = $subnav.offset().top;
    }
    totalNavHeight = $nav.height() + $subnav.height();
    mobileNav();
    shrinkOnScroll();
    highlightSections();
  },

  getNavBarHeight: function() {
    return totalNavHeight;
  }
};

var $body, $nav, $subnav, scrolledNavHeight, totalNavHeight, subNavYCoord;

var mobileNav = function() {
  $('.js-nav-toggle').on('click', function(e) {
    $nav.toggleClass('main-nav-active');
    e.preventDefault();
  });
};

var shrinkOnScroll = function() {
  var $w = $(window),
      isScrolled = false,
      scrollTop;
  $w.on('scroll', function() {
    scrollTop =  $w.scrollTop();
    if (!isScrolled && scrollTop > 0) {
      $body.addClass('scrolled');
      isScrolled = true;
      scrolledNavHeight = totalNavHeight = $nav[0].getBoundingClientRect().height;
    } else if (scrollTop == 0) {
      $('body').removeClass('scrolled');
      isScrolled = false;
    }

    if ($w.width() > 800) {
      if ($subnav && scrollTop > 0) {
        if (!$body.hasClass('fixed-subnav')) {
          $body.addClass('fixed-subnav');
          totalNavHeight = scrolledNavHeight + $subnav.height();
        }
      } else {
        if ($body.hasClass('fixed-subnav')) {
          $body.removeClass('fixed-subnav');
          totalNavHeight = scrolledNavHeight;
        }
      }
    }
  });
}

var highlightSections = function() {
  var $sections = $('.page-content section h1'),
      $sectionLinks = $('.subnav a'),
      sectionPositions = [],
      $w = $(window),
      scrollTop;
  $sections.each(function(i, el) {
    sectionPositions.push($(el).position().top);
  });
  $w.on('scroll', function() {
    scrollTop =  $w.scrollTop();

    // find the current section
    var currentSection;
    for (var i = 0; i < sectionPositions.length; i++) {
      if (sectionPositions[i] < scrollTop + totalNavHeight) {
        currentSection = $sections.get(i);
      } else {
        break;
      }
    };

    $sectionLinks.removeClass('current-section');

    if (currentSection) {
      $('a[href$='+currentSection.id+']').addClass('current-section');
    }

  });
}

