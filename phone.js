$(document).ready(function() { // do this when the document is loaded
 
// //////////////////////// TABS /////////////////////////


 //  Show the Dialer at the beginning 
 
 $(".tab_content").hide();
 $("#add_contact").show(); // show the element with ID "element"
 $("#add_contact_btn").addClass('active');

 // Clicking tabs
 
 $(".tab_btn").click(function(){

  // change color of tab button
  
  $(".tab_btn.active").toggleClass('active');
  $(this).toggleClass('active');



  // whow content
  
  var id = $(this).attr('id');
  var tab_name = id.substring(0,id.indexOf("_btn"));

  $(".tab_content").hide();
  $("#"+tab_name).fadeToggle('fast', null);

 })


//////////////////////// DIALER /////////////////////////


$(".key").click(function(){
  var key = $(this).text()
  var currentText = $("#dialer_input").val();
  $("#dialer_input").val(currentText+key)
})

$("#clear_btn").click(function(event) {
  /* Act on the event */
  $("#dialer_input").val("");
});

















});