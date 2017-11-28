/*** Data of different products ***
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})/


/*** Flip of creatures ***/
$(document).ready(function() {
  $( ".image" )
  .mouseover(function() {
    $(this).addClass('animated flip');
  })
  .mouseout(function() {
      $(this).removeClass("animated");
  });

  $("#arrowUp").click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
  })

  $("#arrowDown").click(function(){
    $('html, body').animate({scrollTop: $("#section1").offset().top}, 500);
  })

  // $('.image').hover(
  //   function() {
  //     $(this).addClass('animated flip');
  //   },
  //   function() { // mouse goes out
  //     $(this).removeClass("animated");
  //   }
  // )
})
