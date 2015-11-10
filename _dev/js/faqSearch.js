var interactions = require('./interactions.js');

module.exports = {
  init: function($searchBox) {
    $searchBox = addFAQSearchBox();
    addFAQSearchResults($searchBox);
    addFAQSearchInteraction($searchBox);
  }
};

var $faqs = $('dt');

function addFAQSearchBox() {
  $searchBox = $('<input></input>').
    attr('type', 'text').
    attr('placeholder', 'What are you looking for?').
    addClass('faq__search-box js-faq-search');
  $('.page-content h1').after($searchBox);
  return $searchBox;
}

function addFAQSearchResults($searchBox) {
  $results = $('<div></div>').
    attr('class', 'faq__search-results js-search-results').
    append($('<h2>Search results</h2>'));
  $searchBox.after($results);
  $results.hide();
}

function addFAQSearchInteraction($searchBox) {
  $searchBox.on('keyup', respondToFAQSearchKeyPress);
}

function respondToFAQSearchKeyPress(e) {
  var term = getTerm();
  if (term.length > 1) {
    showFAQs(findMatchingFAQs(term));
  } else {
    showFAQs();
  }
}

function getTerm() {
  return $('.js-faq-search').val();
}

function findMatchingFAQs(term) {
  var matches = new Array(),
      pattern = new RegExp('\\b'+term, 'i');
  $faqs.each(function() {
    $faq = $(this);

    // test the question OR the answer
    if ($faq.text().match(pattern) || $faq.next('dd').text().match(pattern)) {
      matches.push($faq.next().addBack());
    }
  });
  return matches || false;
}

function showFAQs(faqs) {
  if (faqs === false) {
    removeFAQSearchResults();
    $('.js-search-results').append($('<p>No results</p>'));
    showFAQSearchResults();
  } else if (faqs === undefined)  {
    $('.js-search-results').find().remove();
    hideFAQSearchResults();
  } else {
    if (faqs.length) {
      // transform array into jq object
      var $faqs = $(faqs).map(function() { return this.toArray(); }),
          $faqList = $('<dl></dl>');

      removeFAQSearchResults();
      $highlighted = highlightSearchTerm(getTerm(), $faqs.clone());
      $highlighted.appendTo($faqList);
      $faqList.addClass('js-faq-list expandable').appendTo($('.js-search-results'));
      interactions.definitionLists();
      showFAQSearchResults();
    } else {
      removeFAQSearchResults();
      $('<p>No results</p>').addClass('js-search-message').
        appendTo($('.js-search-results'));
      showFAQSearchResults();
    }
  }
}

function highlightSearchTerm(term, $faqs) {
  var $dt, dd, splitted;
  for (var i = $faqs.length - 1; i >= 0; i--) {
    splitted = $faqs[i].innerHTML.split(term);
    $faqs[i].innerHTML = splitted.join('<span class="highlight">'+term+'</span>');
  };
  return $faqs;
}

function showFAQSearchResults() {
  $('.wrapper > h2').hide();
  $('.wrapper > dl').hide();
  $('.js-search-results').show();
}

function hideFAQSearchResults() {
  $('.wrapper > h2').show();
  $('.wrapper > dl').show();
  $('.js-search-results').hide();
}

function removeFAQSearchResults() {
  $('.js-search-results').find('.js-faq-list').remove();
  $('.js-search-results').find('.js-search-message').remove();
}
