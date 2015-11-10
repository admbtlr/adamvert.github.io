module.exports = {
  init: function($) {
    var verses = document.querySelectorAll('.verse');
    var aikCounter = 0;
    window.setInterval(function() {
      for (var i = 0; i < verses.length; i++) {
        verses.item(i).classList.remove('verse__visible');
      };
      verses.item(++aikCounter % verses.length).classList.add('verse__visible');
    }, 7000);
  }
}
