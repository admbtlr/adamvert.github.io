var $ = window.$
var homepage = require('./homepage')
var audio = require('./audio')
var attachFastClick = require('fastclick')
var charming = require('charming')

var charmifyHeadings = function () {
  var h1s = document.querySelectorAll('h1')
  var h2s = document.querySelectorAll('h2')
  for (var i = 0; i < h1s.length; i++) {
    charming(h1s[i])
  }
  for (i = 0; i < h2s.length; i++) {
    charming(h2s[i])
  }
}

$(function () {
  attachFastClick(document.body)
  charmifyHeadings()
  homepage.init()
  audio.init()

  // show/hide nav on mobile
  $('.js-show-nav').click(function () {
    $('body').toggleClass('nav-visible')
  })

  $('.swipebox').swipebox()
})

