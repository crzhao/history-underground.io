/*** Data of different products ***
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})/

/*** Animation of the arrow ***/
// var infiniteLoop = anime({
//   targets: '#infiniteLoop .el',
//   translateX: 250,
//   loop: true
// });
//

$(document).ready(function() {
  $( ".pic" ).addClass('animated fadeInUp');
});


/*** Flip of creatures ***/
$(document).ready(function() {
  $( ".image" )
  .mouseover(function() {
    $(this).addClass('animated flip');
  })
  .mouseout(function() {
      $(this).removeClass("animated");
  });

  // $('.image').hover(
  //   function() {
  //     $(this).addClass('animated flip');
  //   },
  //   function() { // mouse goes out
  //     $(this).removeClass("animated");
  //   }
  // )
})
