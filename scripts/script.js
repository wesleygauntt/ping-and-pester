window.onload = function() {

  $('form').submit(function(e){
    e.preventDefault();

    var img = $('<img>');
    img.attr('src', $("#url").val());
    img.appendTo('#trackingdiv');
  });
 
};