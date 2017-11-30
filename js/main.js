/*** Pulse of creatures ***/
$(document).ready(function() {
  $(".image")
    .mouseover(function() {
      $(this).addClass('animated infinite pulse');
    })
    .mouseout(function() {
      $(this).removeClass("animated");
    });

  /*** Flip of creatures ***/
  $(".picture")
    .mouseover(function() {
      $(this).addClass('animated flip');
    })
    .mouseout(function() {
      $(this).removeClass("animated");
    });

  /*** Scrolling effect of the bottom arrow ***/
  $("#arrowUp").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  })

  /*** Scrolling effect of the top arrow ***/
  $("#arrowDown").click(function() {
    $('html, body').animate({
      scrollTop: $("#section1").offset().top
    }, 500);
  })

  /*** Scrolling effect of the sidebar***/
  $("#nav1").click(function() {
    $('html, body').animate({
      scrollTop: $("#section1").offset().top
    }, 500);
  })

  $("#nav2").click(function() {
    $('html, body').animate({
      scrollTop: $("#section2").offset().top
    }, 500);
  })

  $("#nav3").click(function() {
    $('html, body').animate({
      scrollTop: $("#section3").offset().top
    }, 500);
  })

  $("#nav4").click(function() {
    $('html, body').animate({
      scrollTop: $("#section4").offset().top
    }, 500);
  })

  $("#nav5").click(function() {
    $('html, body').animate({
      scrollTop: $("#section5").offset().top
    }, 500);
  })

  $("#nav6").click(function() {
    $('html, body').animate({
      scrollTop: $("#section6").offset().top
    }, 500);
  })

  $("#nav7").click(function() {
    $('html, body').animate({
      scrollTop: $("#section7").offset().top
    }, 500);
  })

  $("#nav8").click(function() {
    $('html, body').animate({
      scrollTop: $("#section8").offset().top
    }, 500);
  })

  $("#nav9").click(function() {
    $('html, body').animate({
      scrollTop: $("#section9").offset().top
    }, 500);
  })

  $("#nav10").click(function() {
    $('html, body').animate({
      scrollTop: $("#section10").offset().top
    }, 500);
  })

  $("#nav11").click(function() {
    $('html, body').animate({
      scrollTop: $("#section11").offset().top
    }, 500);
  })

  $("#nav12").click(function() {
    $('html, body').animate({
      scrollTop: $("#section12").offset().top
    }, 500);
  })

  $("#nav13").click(function() {
    $('html, body').animate({
      scrollTop: $("#section13").offset().top
    }, 500);
  })

})
