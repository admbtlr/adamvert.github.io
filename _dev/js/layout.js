module.exports = {
  // centering text within a full-width background requires a wrapper div
  // but we want to keep this out of the markdown
  // so we add it here
  insertWrappersIntoSections: function($sections) {
    $sections.each(function() {
      var $this = $(this),
          $children;
      $children = $this.children().remove();
      $('<div></div>').appendTo($this).addClass('wrapper').append($children);
    });
  },

  // build a list of links to each section within the page
  insertSubNav: function($sections) {
    var $firstSection,
        $subnav,
        $subnavSection,
        sectionLink;

    $subnav = $('<ul></ul>').addClass('subnav');
    $sections.each(function(index) {
      var $heading = $(this).find('h1').first();

      // don't add a link to the first section,
      // but store it, since we'll insert the subnav immediately after it
      if (index == 0) {
        $firstSection = $(this);
        return;
      }

      // don't add sections without headings
      if ($heading.length === 0) {
        return;
      }

      // don't add the cta section
      if ($heading.parents('.cta-section').length) {
        return;
      }

      // jekyll automatically gives each h1 an id based on its text content
      sectionLink = '#'+$heading.attr('id');

      $subnavSection = $('<li></li>').
        addClass('subnav__section').
        append($('<a></a>').
          addClass('subnav__link').
          attr('href', sectionLink).
          text($heading.text())
        );
      $subnav.append($subnavSection);
    });
    $subnav.insertBefore($firstSection);
  },

  // since inserting a wrapper div changes the layout immediately after load,
  // we hide it until the wrapper has been added
  revealPage: function() {
    $('body').addClass('ready');
  },

  // take the bottom margin off paragraphs that only contain an image
  removeMarginOnImageParagraphs: function() {
    var $imageParas = $('p').filter(function(i, el) {
      return $(el).find('img').length > 0 && $(el).text().length === 0;
    });
    $imageParas.css('margin-bottom', '0');
  }

};
