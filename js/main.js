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
    var href=$(this).attr("href");
    var top=$(href).offset().top;
    $(this).blur();
    $("body,html").animate({scrollTop:top},500);
    return false;
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
