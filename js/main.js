var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<h3></h3>');

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay
$('body').append($overlay);

//capture click event
$('#products a').click(function(){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  $image.attr("src", imageLocation);
  $overlay.show();
  var $captionText = $(this).children("img").attr("alt");
  $caption.text($captionText);
});

$overlay.click(function(){
  $overlay.hide();
});

$(function() {
    $('#logo').css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -$('#logo').outerWidth()/2,
        'margin-top' : -$('#logo').outerHeight()/2 + 10
    });
});