module.exports = {
  init: function() {
    $textList = $('.architecture-text-list');
    height = window.innerHeight;
    listYPosition = $textList.offset().top;
    $w = $(window);
    $w.on('scroll', fadeInText);
  }
};

var $w,
    $textList,
    height,
    listYPosition,
    yPosition;

var fadeInText = function() {
  yPosition = $w.scrollTop();
  if (yPosition > listYPosition - height / 2) {
    $textList.addClass('in-viewport');
    $w.off('scroll', fadeInText);
  }
};