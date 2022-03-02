// 動態特效 Parallax Mouse Move | GSAP
import TweenMax from 'gsap'
import TweenLite from 'gsap'
import jquery from 'jquery'
import $ from 'jquery'

;(function ($) {
  $('#containerIntro').mousemove(function (e) {
    parallaxIt(e, '.home-intro-title', 30)
    parallaxIt(e, '.home-main-pic', -50)
    parallaxIt(e, '.home-dialog', 20)
    parallaxIt(e, '.home-info-txt', 50)
  })

  function parallaxIt(e, target, movement) {
    var $this = $('#containerIntro')
    var relX = e.pageX - $this.offset().left
    var relY = e.pageY - $this.offset().top

    TweenMax.to(target, 1, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
    })
  }
})(jquery)