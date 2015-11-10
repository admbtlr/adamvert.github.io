module.exports = {

  init: function() {
    $w = $(window);
    $managementList = $('.management ul');

    $w.on('scroll', animateManagers);
  }

};

var $w, $managementList;

var animateManagers = function() {
  if ($w.scrollTop() > $managementList.position().top - $w.height() / 2) {
    $managementList.addClass('in-viewport');
    $w.off('scroll', animateManagers);
  }
}
