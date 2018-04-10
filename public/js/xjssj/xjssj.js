$(function(){
            if($.browser.msie && $.browser.version < 10){
                $('body').addClass('ltie10');
            }
            $.fn.fullpage({
                verticalCentered: false,
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
                navigation: true,
                navigationTooltips: ['', '', '', '', '', '', ''],
            	loopBottom: true
            });   
    		$("#minibtn").click(function () {
    		   $(".mininav").slideToggle(200);
    		   return false;
    		});       
        });

$(function() {
  var ie6 = window.ActiveXObject&&!window.XMLHttpRequest;
  var Slider = function(){
    function slideTo(idx) {
    }
    var timer;
    function startAutoPlay() {
      stop();
      // timer = setTimeout(Slider.slideNext, 5000);
    }
    function stop() {
      timer && clearTimeout(timer);
    }
    return {
      slideTo: slideTo,
      slidePrev: function() {
        if (current == 0) return;
        slideTo(current - 1);
      },
      slideNext: function() {
        slideTo(current + 1);
      },
      startAutoPlay: startAutoPlay,
      stop: stop
    }
  }();
  if (!ie6) {
    Slider.startAutoPlay();
  }
  $('.section5').on('mousemove', function(e) {
    var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight - 0.5;
    $('.section5 .layer1').css('left', -18 - 40 * offsetX).css('top', 25 - 40 * offsetY);
  });
})