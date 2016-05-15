$(document).ready(function() {
  $('#content').append('<img src="http://www.governancecouncils.com/images/logo/restaurant.png">');
  $('#content').append('<div class="nav"></div>');
  $('.nav').append('<div class="navbutton" id="Home">Home</div>');
  $('.nav').append('<div class="navbutton" id="Menu">Menu</div>');
  $('.nav').append('<div class="navbutton" id="Contact">Contact</div>');
  $('#content').append('<h1>Generic Restaurant</h1>');
  $('#content').append('<p>This place is just what you think it is. A Generic Restaurant in all it\'s glory. Why turn away? You know you want it.</p>')
  $('#Home').hover(function(){$(this).addClass("hover");}, function() {$(this).removeClass( "hover" );}).click(function() {
    $('h1').replaceWith('<h1>Generic Restaurant</h1>');
    $('p').replaceWith('<p>This place is just what you think it is. A Generic Restaurant in all it\'s glory. Why turn away? You know you want it.</p>');
  });
  $('#Menu').hover(function(){$(this).addClass("hover");}, function() {$(this).removeClass( "hover" );}).click(function() {
    $('h1').replaceWith('<h1>Our Menu</h1>');
    $('p').replaceWith('<p>Burgers and Fries. What else could you possibly want?</p>');
  });
  $('#Contact').hover(function(){$(this).addClass("hover");}, function() {$(this).removeClass( "hover" );}).click(function() {
    $('h1').replaceWith('<h1>How to Contact Us.</h1>');
    $('p').replaceWith('<p>Emails? Phone calls? We dont do that. We categorize ourselves as a real person\'s person. Come down to the restaurant and talk to us.</p>');
  });
});
